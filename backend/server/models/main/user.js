const mongoose = require('mongoose');
const schema = mongoose.Schema;

var ObjectId = schema.ObjectId;
const userSchema = new schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    fName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
    },
    lName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
    },
    profilePic: {
        type: String,
    }
});

const userModel = mongoose.model('Users', userSchema);

module.exports = {
    userModel
};