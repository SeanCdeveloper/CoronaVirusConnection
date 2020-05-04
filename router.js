const express = require('express');
const router = express.Router();
const axios = require("axios");
const passport = require("passport");
require('dotenv').config();


router.get("/", (req, res) => {
    // res.send({response: "Server is up and running"}).status(200);
    res.send("Server is up and running");
})
router.get("/news", (req, res) => {
    axios.get("http://newsapi.org/v2/everything?q=coronavirus&apiKey=" + process.env.API_KEY)
        .then(data => {
            res.send(data.data.articles);
            //   const { articles } = data.data;
            //   setNews(articles);
        })
        .catch(err => console.log(err));

})

router.post('/login',
    // passport.authenticate('local', { failureRedirect: '/login' }),
    function (req, res) {
        console.log("passport");
        res.redirect('/');
    });

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