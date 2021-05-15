const passport = require('passport');
const passportJwt = require('passport-jwt');
const config = require('../config');
const Users = require('../models/main/user');

const jwtOptions = {
    jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeader(),
    secretOrKey: config.get('authentication.token.secret'),
    issuer: config.get('authentication.token.issuer'),
    audience: config.get('authentication.token.audience')
};

passport.use(new passportJwt.Strategy(jwtOptions, (payload, done) => {
    console.log(payload);
    Users.findById(payload.sub, (err, user) => {
        if (err) return done(err);
        if (user)
            return done(null, user, payload);
        return done();
    });
}));