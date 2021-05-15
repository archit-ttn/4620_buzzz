const express = require("express");
const cors = require('cors');
const passport = require('passport');
const login = require('../routes/login');


const router = express.Router();
router.use(cors());
router.use(passport.initialize());

var postsRouter = require("./posts/posts");
var usersRouter = require("./users/users");

router.use("/posts", postsRouter);
router.use("/users", usersRouter);
router.use('/api/auth', loginRouter);
router.get('/api/secure',
    passport.authenticate(['jwt'], { session: false }),
    (req, res) => {
        res.send('Secure response from ' + JSON.stringify(req.user));
    }
);

module.exports = router;