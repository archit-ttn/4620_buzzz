var express = require("express");
var router = express.Router();

var User = require("../../models/user");
var Post = require("../../models/post");


// GET all users
router.get(
    "/",
    async (req, res, next) => {
        try {
            const users = await User.find({});
            res.status(200).json({ users: users });
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }
);

// POST search for user
router.post(
    "/search",
    //logic
);

// GET specific user
router.get(
    "/:userId",
    //logic
);

// PUT update user details
router.put(
    "/:userId",
    //logic
);

// DELETE user account
router.delete("/:userId", async (req, res, next) => {
    // logic
    return res.status(200).json({ message: "User deleted" });
});

module.exports = router;