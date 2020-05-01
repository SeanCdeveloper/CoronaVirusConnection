const express = require('express');
const router = express.Router();

router.get("/", (req,res) => {
    // res.send({response: "Server is up and running"}).status(200);
    res.send("Server is up and running");
})

module.exports = router;

// Route I had for users -Adrian

// router.post('/users', function(req, res){
//     console.log(req);
//     console.log(req.body);
//     res.send("successful request")
//   });

// const passport = require("passport");
// const LocalStrategy = require("passport-local").Strategy;

// const db = require("./models");

// This is the passport.js file i was working on 

// passport.use(new LocalStrategy(
//     function(username, password, done) {
//       db.User.findOne({ username: username }, function (err, user) {
//         if (err) { return done(err); }
//         if (!user) { return done(null, false); }
//         if (!user.verifyPassword(password)) { return done(null, false); }
//         return done(null, user);
//       });
//     }
//   ));

//   passport.serializeUser(function(user, done) {
//     done(null, user.id);
//   });
   
//   passport.deserializeUser(function(id, done) {
//     User.findById(id, function (err, user) {
//       done(err, user);
//     });
//   });

// module.exports = passport;