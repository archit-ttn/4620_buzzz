const mongoose = require('mongoose');
const schema = mongoose.Schema;

var ObjectId = schema.ObjectId;
const postSchema = new schema({
    user: ObjectId,
    description: String,
    likeCount: Number,
    dislikeCount: Number,
    moderator: Boolean,
    profilePic: Buffer,
    comments: [{
        _id: ObjectId,
        comment: String
    }],
    timeStamp: {
        type: Date,
        default: Date.now()
    }
});

const postModel = mongoose.model('Posts', postSchema);

module.exports = {
    postModel
};