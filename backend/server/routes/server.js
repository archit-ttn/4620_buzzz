const express = require("express");
const passport = require('passport');
const login = require('../routes/login');
require('../authentication/jwt');

// router.use("/posts", postsRouter);
// router.use("/users", usersRouter);
module.exports = function (app) {
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use('/api/auth', login);
    app.use('/api/secure',
        passport.authenticate(['jwt'], { session: false }),
        (req, res) => {
            res.send('Test ' + JSON.stringify(req.user));
        }
    );
};