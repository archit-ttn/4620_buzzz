const passport = require('passport');
const passportGoogle = require('passport-google-oauth');
require('dotenv').config();
const cloudinary = require('../cloudinary');
const Users = require('../models/main/user');

const passportConfig = {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: 'http://localhost:8000/api/auth/redirect'
};

if (passportConfig.clientID) {
    passport.use(new passportGoogle.OAuth2Strategy(passportConfig, function (request, accessToken, refreshToken, profile, done) {

        Users.find({ email: profile.emails[0].value }, (err, user) => {
            console.log(user);
            if (err) return done(err);
            if (!user.length) {
                user = new Users({
                    email: profile.emails[0].value.toString(),
                    fName: profile.name.givenName,
                    lName: profile.name.familyName,
                    profilePic: profile.photos[0].value
                });
                console.log(user);
                user.save((err) => {
                    return (err);
                });
            }
            return done(null, user);
        });
    }));
}