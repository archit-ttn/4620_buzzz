const express = require('express');
const router = express.Router();
const passport = require('passport');
const token = require('../authentication/utils/token');
require('../authentication/google');

function generateUserToken(req, res) {
    const accessToken = token.generateAccessToken(req.user.id);
    res.cookie('token', accessToken);
    res.send(accessToken);
}

router.get('/', passport.authenticate('google', { session: false, scope: ['openid', 'profile', 'email'] }));
router.get('/redirect', passport.authenticate('google', { session: false }), generateUserToken);

module.exports = router;