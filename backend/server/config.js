const convict = require('convict');

const config = convict({
    authentication: {
        google: {
            "clientId": {
                "doc": "The Client ID from Google to use for authentication",
                "default": "",
                "env": "1090471444449-47scdqak07dlfq6lo7i216ua1u7p54ji.apps.googleusercontent.com"
            },
            "clientSecret": {
                "doc": "The Client Secret from Google to use for authentication",
                "default": "",
                "env": "iNc-q4H5WzIMCPIOxCINa9oF"
            }
        },
        token: {
            secret: {
                doc: 'The signing key for the JWT',
                default: 'mySuperSecretKey',
                env: 'JWT_SIGNING_KEY'
            },
            issuer: {
                doc: 'The issuer for the JWT',
                default: 'social-logins-spa'
            },
            audience: {
                doc: 'The audience for the JWT',
                default: 'social-logins-spa'
            }
        }
    }
});

config.validate();

module.exports = config;