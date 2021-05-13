const mongoose = require("mongoose");
const schema = mongoose.Schema;

module.exports = new schema({
    type: String,
    data: Buffer
});