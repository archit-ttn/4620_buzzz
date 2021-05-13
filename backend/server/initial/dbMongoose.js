const mongoose = require('mongoose');


module.exports = function () {
    mongoose.connect("mongodb://localhost:27017/buzzz", {
        useNewUrlParser: "true",
        useUnifiedTopology: "true"
    });
    mongoose.connection.on("error", err => {
        console.log("Error ==>", err);
    });
    mongoose.connection.on("connected", () => {
        console.log("Mongoose is up and running.");
    });
};