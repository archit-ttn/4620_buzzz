const jwt = require('jsonwebtoken');
require('dotenv').config();

// Generate an Access Token for the given User ID
function generateAccessToken(userId) {
    // How long will the token be valid for
    const expiresIn = '1 hour';
    // Which service issued the token
    const audience = process.env.AUDIENCE;
    const issuer = process.env.ISSUER;
    const secret = process.env.SECRET_OR_KEY;

    const token = jwt.sign({}, secret, {
        expiresIn: expiresIn,
        audience: audience,
        issuer: issuer,
        subject: userId.toString()
    });

    return token;
}

module.exports = {
    generateAccessToken: generateAccessToken
};