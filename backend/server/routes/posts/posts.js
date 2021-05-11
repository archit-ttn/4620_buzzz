const express = require("express");
const router = express.Router();

var Post = require("../../models/post");
var User = require("../../models/user");

// GET all posts (self + friends) (10 at a time)
router.get(
    "/",
    //logic
);

// POST new post
router.post(
    "/",
    //logic
);

// PUT add image to existing post
router.put(
    "/:postId",
    //logic
);

// PUT toggle like post
router.put(
    "/:postId/like",
    //logic
);

// PUT toggle dislike post
router.put(
    "/:postId/dislike",
    //logic
);

// DELETE Post

router.delete(
    "/:postId",
    //logic
);

module.exports = router;