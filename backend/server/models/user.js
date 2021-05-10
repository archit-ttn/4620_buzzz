const mongoose = require('mongoose');
const schema = mongoose.Schema;

var ObjectId = schema.ObjectId;
const userSchema = new schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    designation: String,
    portfolio: String,
    gender: String,
    dateOfBirth: Date,
    moderator: Boolean,
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pinCode: {
        type: Number,
        required: true
    },
    post: [{ _id: ObjectId }],
    friends: [{ _id: ObjectId }],
    suggestions: [{ _id: ObjectId }],
    timeStamp: {
        type: Date,
        default: Date.now()
    }
});

const userModel = mongoose.model('Users', userSchema);

module.exports = {
    userModel
};