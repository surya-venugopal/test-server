const express = require("express");

const app = express();

app.get("/a1", (req, res) => {
    res.send("1");
});

app.get("/a2", (req, res) => {
    res.send("2");
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Running on port 5000.");
});

app.listen(process.env.PORT, function (err) { });