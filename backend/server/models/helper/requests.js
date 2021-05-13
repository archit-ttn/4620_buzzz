const mongoose = require('mongoose');
const schema = mongoose.Schema;

const requestSchema = new schema({
    _id: {
        type: mongoose.Types.ObjectId,
        ref: "Profile",
        required: true,
    },
    userName: {
        type: String,
        required: true,
    }
});

module.exports = requestSchema;