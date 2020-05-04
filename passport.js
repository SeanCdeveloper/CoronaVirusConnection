const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const JwtStrategy = require('passport-jwt').Strategy
const User = require('./db/models/User');

const cookieExtractor = req =>{
    let token = null;
    if(req && req.cookies){
        token = req.cookies["access_token"];
    }
    return token;
}

/* This verifies that the tokens are correct.  The authorization here will be used for 
anywhere a protected resource is required.  This will protect 'endpoints'. 
*/
passport.use(new JwtStrategy({
    jwtFromRequest: cookieExtractor,
    // below statement verifies that token is legitimate
    secretOrKey: "SCDeveloper"
    // 'payload' is data set inside jwtToken. 
}, (payload, done) => {
    User.findById({ _id: payload.sub }, (err, user) => {
        if (err)
            return done(err, false);
        if (user)
            return done(null, user);
        else
            return done(null, false);
    });
}));

/* Authenticated local Strategy using username and password.  This middleware is used for 
  signing in. 
*/
passport.use(new LocalStrategy((username, password, done) => {
    User.findOne({ username }, (err, user) => {
        if (err) return done(err);
        if (!user) return done(null, false);
        // checks if password is correct. 
        user.comparePassword(password, done);
    })
}))

/* Adrien's Version */ 

/* Commented Out 5/3/20 */
// const passport = require("passport");
// const LocalStrategy = require("passport-local").Strategy;
// const db = require("./db");

// passport.use(new LocalStrategy({
//     usernameField: 'email',
//     passwordField: 'passwd'
// },
//     function (username, password, done) {
//         console.log("running passport")
//         db.User.findOne({ username: username }, function (err, user) {
//             console.log("find one log")
//             if (err) { return done(err); }
//             if (!user) { return done(null, false); }
//             if (!user.verifyPassword(password)) { return done(null, false); }
//             return done(null, user);
//         });
//     }
// ));

// passport.serializeUser(function (user, done) {
//     console.log("running serialize")
//     done(null, user.id);
// });

// passport.deserializeUser(function (id, done) {
//     console.log("running deserializeUser")
//     User.findById(id, function (err, user) {
//         done(err, user);
//     });
// });

// module.exports = passport;