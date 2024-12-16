const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const topicsContent = {
    "Úvod do programovania": [
        { question: "Čo je programovanie?", options: ["A. Riešenie problémov", "B. Hranie hier", "C. Kreslenie"], answer: "A" },
        { question: "Aký jazyk sa odporúča pre začiatočníkov?", options: ["A. C++", "B. Python", "C. Java"], answer: "B" }
    ],
    "Diagramy": [
        { question: "Aký diagram zobrazuje tok procesu?", options: ["A. Vývojový", "B. Tried", "C. Sekvenčný"], answer: "A" },
        { question: "Ktorý diagram zobrazuje komunikáciu?", options: ["A. Aktivita", "B. Sekvenčný", "C. Vývojový"], answer: "B" }
    ]
};

const app = express();
const JWT_SECRET = "your_jwt_secret_key"; // Pre bezpečnosť ulož do `.env`

app.use(cors());
app.use(bodyParser.json()); // Middleware na spracovanie JSON

// Middleware na autentifikáciu
const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Token z hlavičky

    if (!token) {
        return res.status(401).send("Unauthorized");
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.userId; // Pridáme userId do requestu
        next();
    } catch (error) {
        res.status(401).send("Invalid token");
    }
};

// Endpoint na získanie poznámok
app.get("/data", authenticate, async (req, res) => {
    let client;
    try {
        client = await connectDB();
        const collection = client.db("FP_Code").collection("Notes");
        const data = await collection.find({ userId: req.userId }).toArray();
        res.send(data);
    } catch (error) {
        console.error("Failed to fetch data:", error);
        res.status(500).send("Error fetching data");
    } finally {
        if (client) client.close();
    }
});

// Endpoint na pridanie poznámky
app.post("/add-note", authenticate, async (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).send("Title and content are required");
    }

    let client;
    try {
        client = await connectDB();
        const collection = client.db("FP_Code").collection("Notes");
        const result = await collection.insertOne({
            title,
            content,
            userId: req.userId,
            createdAt: new Date(), // Timestamp
        });
        res.status(201).send(result);
    } catch (error) {
        console.error("Failed to add note:", error);
        res.status(500).send("Error adding note");
    } finally {
        if (client) client.close();
    }
});

// Endpoint na kontrolu testov
app.post("/api/tests/validate", authenticate, async (req, res) => {
    const { topic, answers } = req.body;

    // Vaša logika validácie odpovedí
    const correctAnswers = topicsContent[topic]?.map((q) => q.answer);
    if (!correctAnswers) {
        return res.status(400).json({ error: "Invalid topic" });
    }

    const totalQuestions = correctAnswers.length;
    const correctCount = answers.filter((answer, i) => answer === correctAnswers[i]).length;
    const successRate = Math.round((correctCount / totalQuestions) * 100);

    let client;
    try {
        client = await connectDB();
        const collection = client.db("FP_Code").collection("Tests");

        await collection.insertOne({
            userId: req.userId,
            topic,
            successRate,
            createdAt: new Date(),
        });

        res.json({ successRate, message: "Test submitted successfully" });
    } catch (error) {
        console.error("Error saving test:", error);
        res.status(500).json({ error: "Failed to save test" });
    } finally {
        if (client) client.close();
    }
});

// Endpoint na získanie výsledkov
app.get("/api/tests/results", authenticate, async (req, res) => {
    let client;
    try {
        client = await connectDB();
        const collection = client.db("FP_Code").collection("Tests");

        const results = await collection.find({ userId: req.userId }).toArray();
        res.json({ results });
    } catch (error) {
        console.error("Error fetching test results:", error);
        res.status(500).send("Error fetching test results");
    } finally {
        if (client) client.close();
    }
});

// Endpoint na posledný test
app.get("/api/tests/last", authenticate, async (req, res) => {
    let client;
    try {
        client = await connectDB();
        const collection = client.db("FP_Code").collection("Tests");

        const lastTest = await collection.find({ userId: req.userId }).sort({ createdAt: -1 }).limit(1).toArray();
        if (!lastTest || lastTest.length === 0) {
            return res.status(404).json({ successRate: null, message: "No test results found" });
        }

        res.json({ successRate: lastTest[0].successRate, message: "Last test result retrieved" });
    } catch (error) {
        console.error("Error fetching last test result:", error);
        res.status(500).json({ error: "Server error" });
    } finally {
        if (client) client.close();
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
