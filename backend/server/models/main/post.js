const mongoose = require('mongoose');
const schema = mongoose.Schema;

var ObjectId = schema.ObjectId;
const postSchema = new schema({
    description: {
        type: String,
        required: true,
        minlength: 15,
    },
    likeCount: Number,
    dislikeCount: Number,
    authorId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Profile",
    },
    profilePic: {
        default: false
    },
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