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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
});
