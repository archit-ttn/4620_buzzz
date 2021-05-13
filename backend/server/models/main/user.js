const mongoose = require('mongoose');
const schema = mongoose.Schema;

var ObjectId = schema.ObjectId;
const userSchema = new schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
});

const userModel = mongoose.model('Users', userSchema);

module.exports = {
    userModel
};