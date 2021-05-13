const express = require("express");
const cors = require('cors');

const router = express.Router();
app.use(cors());

var postsRouter = require("./posts/posts");
var usersRouter = require("./users/users");

router.use("/posts", postsRouter);
router.use("/users", usersRouter);

module.exports = router;