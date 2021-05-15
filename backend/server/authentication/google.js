const passport = require('passport');
const passportGoogle = require('passport-google-oauth');
const config = require('../config');
const users = require('../models/main/user');

const passportConfig = {
    clientID: config.get('authentication.google.clientId'),
    clientSecret: config.get('authentication.google.clientSecret'),
    callbackURL: 'http://localhost:3000/api/authentication/google/redirect'
};

if (passportConfig.clientID) {
    passport.use(new passportGoogle.OAuth2Strategy(passportConfig, function (request, accessToken, refreshToken, profile, done) {

        Users.find({ email: profile.emails[0].value }, (err, user) => {
            console.log(user);
            if (err) return done(err);
            if (!user) {
                user = new Users({
                    email: profile.emails[0].value.toString()
                });
                console.log(user);
                user.save((err) => {
                    err ? console.log(err) : console.log('Yay');
                });
            }
            return done(null, user);

        });
    }));
}