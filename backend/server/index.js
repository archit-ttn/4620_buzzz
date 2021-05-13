const express = require('express');
const path = require("path");

const app = express();
const PORT = 3000;

var serverRouter = require("./routes/server");
require('./initial/dbMongoose')();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/public", express.static(path.join(__dirname, "public")));

app.use("/", serverRouter);

app.listen(PORT, () => {
    console.log(`Buzzz App listening at ${PORT}`);
});
