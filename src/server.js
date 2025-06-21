const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let questions = [];

app.post("/ask", (req, res) => {
    const question = req.body.question;
    questions.push({ question, answer: null });
    res.json({ message: "Question received!" });
});

app.get("/questions", (req, res) => {
    res.json(questions);
});

app.listen(3000, () => console.log("Server running on port 3000"));
