const express = require("express");
const app = express();

app.use(express.json());

let logs = [];

app.post("/log", (req, res) => {
    const newLog = req.body;
    
    
    logs.push(newLog);
    if (logs.length > 50) {
        logs.shift(); 
    }

    console.log("LOG:", newLog);
    res.sendStatus(200);
});

app.get("/getLast", (req, res) => {
    
    res.json(logs);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
});
