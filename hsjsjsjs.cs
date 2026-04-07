const express = require("express");
const app = express();

app.use(express.json());

let lastLog = null;

app.post("/log", (req, res) => {
    lastLog = req.body;
    console.log("LOG:", lastLog);
    res.sendStatus(200);
});

app.get("/getLast", (req, res) => {
    res.json(lastLog || {});
});

app.listen(3000, () => {
    console.log("Server started");
});