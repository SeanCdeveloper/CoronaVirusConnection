const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const PORT = process.env.PORT || 3001;
const router = require('./router');
const app = express();
const server = http.createServer(app);
const io = socketio(server);

const {addUser,removeUser,getUser,getUsersInRoom} = require('./users/users'); 

io.on('connection', (socket) => {
    // console.log('We have a new connection.');

    socket.on('join', ({name,room}, callback) => {
        // console.log(name,room);
        const {error,user} = addUser({id: socket.id, name, room});
        if(error) return callback(error);

        socket.join(user.room);

        /* Welcome Message for the User.   */
        socket.emit('message', {user:'admin', text: `${user.name}, Welcome to Room ${user.room}`});

        /* 'broadcast' sends a message to everyone except the specific user. We can send a message to specific room inside this code (we are sending the messages to a specific room and not all chats). 
        The specific room sent to is {user.room}.
        '.emit' sends the same message as 'socket.emit', and the payload is 
        */
        socket.broadcast.to(user.room).emit('message', {user: 'admin', text: `${user.name} has joined.`})

        // io.to(user.room).emit('roomData', {room: user.room, users: getUsersInRoom(users.room)})

        callback();
    });

    /* Events for user-generated messages.  The user-generated messages are called 'sendMessage'; the 'admin-generated messages' are called 'messages'. 
    We are sending the message to {user.room}, or the room the user is currently in. 
    The 'message' value for 'text' is coming from front-end code.  
    */ 
    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);
        io.to(user.room).emit('message', {user: user.name, text: message});
        // io.to(user.room).emit('roomData', {room: user.room, users: getUsersInRoom(users.room)});
        callback();
    })

    socket.on('disconnect', () => {
        console.log("User has left.");
         const user = removeUser(socket.id);

        if(user) {
            io.to(user.room).emit('message', {user: 'admin', text: `${user.name} has left`})
            /* Sending a message when a user leaves a room. */
            io.to(user.room).emit('roomData', {room: user.room, users: getUsersInRoom(user.room)});
        }
    })
})

app.use(router);

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));