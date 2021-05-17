const express = require('express');
const path = require("path");

const app = express();
const PORT = 8000;

var serverRouter = require("./routes/server");
require('./initial/dbMongoose')();
require('./routes/server')(app);



app.use("/public", express.static(path.join(__dirname, "public")));


app.listen(PORT, () => {
    console.log(`Buzzz App listening at ${PORT}`);
});
