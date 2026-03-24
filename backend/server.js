const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// simple ML logic (same formula)
app.post("/predict", (req, res) => {
    const hours = req.body.hours;

    // simple linear formula (approx from model)
    const predictedScore = 10 * hours + 25;

    res.json({ score: predictedScore });
});

app.listen(5000, () => console.log("Server running on port 5000"));