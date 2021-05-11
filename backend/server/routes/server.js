const express = require("express");
const router = express.Router();

var postsRouter = require("./posts/posts");
var usersRouter = require("./users/users");

router.use("/posts", postsRouter);
router.use("/users", usersRouter);

module.exports = router;