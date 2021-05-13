const mongoose = require('mongoose');
const schema = mongoose.Schema;


const requestSentSchema = new schema({
    _id: {
        type: mongoose.Types.ObjectId,
        ref: "Profile",
        required: true,
    },
    user_name: {
        type: String,
        required: true,
    }
});

module.exports = requestSentSchema;