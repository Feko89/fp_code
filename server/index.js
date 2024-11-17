const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./db");

const app = express();
app.use(cors());
app.use(bodyParser.json()); // Middleware na spracovanie JSON

// Endpoint na získanie poznámok
app.get("/data", async (req, res) => {
    let client;
    try {
        client = await connectDB();
        const collection = client.db("FP_Code").collection("Notes");
        const data = await collection.find({}).toArray();
        res.send(data);
    } catch (error) {
        console.error("Failed to fetch data:", error);
        res.status(500).send("Error fetching data");
    } finally {
        if (client) client.close();
    }
});

// Endpoint na pridanie poznámky
app.post("/add-note", async (req, res) => {
    const { note } = req.body;
    if (!note) return res.status(400).send("Note is required");

    let client;
    try {
        client = await connectDB();
        const collection = client.db("FP_Code").collection("Notes");
        const result = await collection.insertOne({ note });
        res.status(201).send(result);
    } catch (error) {
        console.error("Failed to add note:", error);
        res.status(500).send("Error adding note");
    } finally {
        if (client) client.close();
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
