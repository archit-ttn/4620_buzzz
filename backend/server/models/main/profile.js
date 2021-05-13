const mongoose = require("mongoose");
const schema = mongoose.Schema;

const friendsSchema = require('../helper/friends');
const profileImageSchema = require('../helper/profileImage');
const requestSentSchema = require('../helper/requestSent');
const requestsSchema = require('../helper/requests');
const suggestionsSchema = require('../helper/suggestions');


let profileSchema = new schema({
    firstName: {
        type: String,
        required: true,
        maxlength: 100,
        required: true
    },
    lastName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255,
    },
    dateOfBirth: {
        type: Date
    },
    gender: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
    },
    profileImage: {
        type: [profileImageSchema],
        default: [],
    },
    aboutMe: {
        type: String
    },
    requestSent: {
        type: [requestSentSchema],
        default: [],
    },
    requests: {
        type: [requestsSchema],
        default: [],
    },
    friends: {
        type: [friendsSchema],
        default: []
    },
    suggestions: {
        type: [suggestionsSchema],
        default: [],
    }
});

module.exports = {
    profileSchema
};