const express = require('express');
const userRouter = express.Router();
const passport = require('passport');
const passportConfig = require('../passport');
const User = require('../db/models/User');
/* This will sign, or create, tokens */
const JWT = require('jsonwebtoken');

/* 'iss' references the issuer of the WebToken.  
'sub' references the subject, whom token is for. 
'sub' is set to the userId of user.
Second argument, "SCDeveloper", references the 'secretOrKey' in 'passport.js'.
Second argument's value must match value set in 'passport.js'. 
*/
const signToken = userID => {
    return JWT.sign({
        iss: 'SCDeveloper',
        sub: userID
    },"SCDeveloper",{expiresIn: "1h"})
}

/* This will make json Web Tokens.  When you 'sign' a web-token, you create a web-token. */ 
userRouter.post('/register', (req,res) => {
    const {username,password} = req.body;
    User.findOne({username},(err,user)=>{
        if(err) res.status(500).json({message: {msgBody:"Error has occurred", msgError:true}});
        if(user) res.status(400).json({message: {msgBody:"Username is already taken", msgError:true}});
        else {
            const newUser = new User({username,password});
            newUser.save(err=>{
                if(err)
                res.status(500).json({message: {msgBody:"Error has occurred", msgError:true}}); 
                else 
                res.status(201).json({message: {msgBody:"Account successfully created.", msgError:false}}); 
            });
        }
    });
});

/* 'local' refers to "Local Strategy" used in 'passport.js' file.  */ 
userRouter.post('/login', passport.authenticate('local',{session:false}),(req,res) => {
    if(req.isAuthenticated()){
        /* These values come from 'user.comparePassword' in 'passport.js' 
        'req.user' is from 'passport.js', which references UserSchema.methods.comparePassword, in 'models/User'.   return cb(null,this);              
        */
        const {_id,username} = req.user;
        const token = signToken(_id);
        /* 'token' is the web token.  'httpOnly' makes it so that you cannot touch the cookie on client side with JavaScript. 
        'sameSite' prevents against cross-sitte forgery attacks.  These two properties are important for security of tokens. 
        */ 
        res.cookie('access_token',token,{httpOnly:true,sameSite:true});
        res.status(200).json({isAuthenticated:true,user:{username}});
    }
});

/* 
We are using the 'jwt' strategy instead of 'local' like code above.
We set JWT token to 'access_token' in code-clock above this.  We are referencing it again to delete it.   
*/
userRouter.get('/logout', passport.authenticate('jwt',{session:false}),(req,res) => {
    res.clearCookie('access_token');
    res.json({user:{username:"",success:true}})
});

/* This route is for `persistance` with a client.  When closing the browser, `state` gets re-set, normally.  
This endpoint makes sure that the back- and fornt-end are synched, so that, even when the user closes the browser  
and then visits the website again, they will still be logged-in - if authenticated. 
This will display the same message in the console as login, but that is because this keeps a person logged-in even after
browser closes.  
*/
userRouter.get('/authenticated',passport.authenticate('jwt',{session : false}),(req,res)=>{
    const {username} = req.user;
    res.status(200).json({isAuthenticated : true, user : {username}});
});

module.exports = userRouter;


