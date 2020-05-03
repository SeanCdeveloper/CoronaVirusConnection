const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("./db");



passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'passwd'
},
    function (username, password, done) {
        console.log("running passport")
        db.User.findOne({ username: username }, function (err, user) {
            console.log("find one log")
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (!user.verifyPassword(password)) { return done(null, false); }
            return done(null, user);
        });
    }
));

passport.serializeUser(function (user, done) {
    console.log("running serialize")
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    console.log("running deserializeUser")
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

module.exports = passport;