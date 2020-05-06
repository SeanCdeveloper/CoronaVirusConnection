const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const PORT = process.env.PORT || 3001;
const router = require('./router');
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
// const routes = require("./routes");
const dbConnection = require('./db');
// const passport = require("passport");
// const mongoose = require("mongoose");
require('dotenv').config();
const cookieParser = require('cookie-parser');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users/users');

io.on('connection', (socket) => {
  // console.log('We have a new connection.');

  socket.on('join', ({ name, room }, callback) => {
    // console.log(name,room);
    const { error, user } = addUser({ id: socket.id, name, room });
    if (error) return callback(error);

    socket.join(user.room);

    /* Welcome Message for the User.   */
    socket.emit('message', { user: 'admin', text: `${user.name}, Welcome to Room ${user.room}` });

    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined.` })

    

    callback();
  });

  
  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);
    io.to(user.room).emit('message', { user: user.name, text: message });
    callback();
  })

  socket.on('disconnect', () => {
    console.log("User has left.");
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit('message', { user: 'admin', text: `${user.name} has left` })
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
    }
  })
})


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: process.env.APP_SECRET || 'this is the default passphrase',
    store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: false,
    saveUninitialized: false
  })
)

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(router);

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));


const userRouter = require('./routes/User-routes');
app.use('/user',userRouter);

app.use(cookieParser());



