const express = require('express');
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

var serverRouter = require("./routes/server");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


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


app.use("/public", express.static(path.join(__dirname, "public")));

app.use("/", serverRouter);

app.listen(PORT, () => {
    console.log(`Buzzz App listening at ${PORT}`);
});
