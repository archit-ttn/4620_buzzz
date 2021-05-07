const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    //
});

app.listen(PORT, () => {
    console.log(`Buzzz App listening at ${PORT}`);
});
