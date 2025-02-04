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
      { question: "Ktorý diagram zobrazuje komunikáciu?", options: ["A. Aktivita", "B. Sekvenčný", "C. Vývojový"], answer: "B" }],
    "Operátory": [
      { question: "Ako nazývame na sčítanie,odčítanie...?", options: ["A. Aritmetické", "B. Porovnávacie", "C. Logické"], answer: "A" },
      { question: "Aký operátor použijeme ak chceme získať zvyšok po delení?", options: ["A. //", "B. /", "C. %"], answer: "C" },
      { question: "Čo je výsledkom porovnávacích operátorov?", options: ["A. Int (číslo)", "B. String (text)", "C. Bool (True,False)"], answer: "C" },
      { question: "Ako označujeme nerovnosť?", options: ["A. =!", "B. !=", "C. !"], answer: "B" },
      { question: "Čo nepatrí medzi logické operátory v pythone?", options: ["A. and", "B. xor", "C. or"], answer: "B" },
      { question: "Ako zapisujeme mocninu v pythone?", options: ["A. ", "B. *", "C. '"], answer: "B" },
      { question: "Aký znak označuje bitový operátor AND?", options: ["A. &", "B. |", "C. ^"], answer: "A" },
      { question: "Čo bude výsledkom tejto operácie? 10//3", options: ["A. 3.33", "B. 2", "C. 3"], answer: "C" },
      { question: "Čo bude výsledkom tejto operácie? 5==7", options: ["A. False", "B. True", "C. 2"], answer: "A" },
      { question: "Čo bude výsledkom tejto operácie? 10 | 3", options: ["A. 13", "B. 7", "C. 11"], answer: "C" },
    ]
  };

const app = express();
const JWT_SECRET = "your_jwt_secret_key"; // Pre bezpečnosť ulož do .env

app.use(cors());
app.use(bodyParser.json()); // Middleware na spracovanie JSON

// Middleware na autentifikáciu
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).send("Unauthorized");
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).send("Invalid token");
  }
};

// Registrácia používateľa
app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Email and password are required");
  }

  let client;
  try {
    client = await connectDB();
    const collection = client.db("FP_Code").collection("Users");

    const existingUser = await collection.findOne({ email });
    if (existingUser) {
      return res.status(400).send("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await collection.insertOne({ email, password: hashedPassword });
    res.status(201).send({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send("Error registering user");
  } finally {
    if (client) client.close();
  }
});

// Prihlásenie používateľa
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Email and password are required");
  }

  let client;
  try {
    client = await connectDB();
    const collection = client.db("FP_Code").collection("Users");

    const user = await collection.findOne({ email });
    if (!user) {
      return res.status(400).send("Invalid email or password");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).send("Invalid email or password");
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });
    res.send({ token });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).send("Error logging in user");
  } finally {
    if (client) client.close();
  }
});

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
      createdAt: new Date(),
    });
    res.status(201).send(result);
  } catch (error) {
    console.error("Failed to add note:", error);
    res.status(500).send("Error adding note");
  } finally {
    if (client) client.close();
  }
});

app.delete("/delete-note/:id", authenticate, async (req, res) => {
    const { id } = req.params;

    let client;
    try {
        client = await connectDB();
        const collection = client.db("FP_Code").collection("Notes");
        const result = await collection.deleteOne({ _id: new require("mongodb").ObjectId(id), userId: req.userId });

        if (result.deletedCount === 0) {
            return res.status(404).send("Note not found");
        }

        res.status(200).send("Note deleted");
    } catch (error) {
        console.error("Failed to delete note:", error);
        res.status(500).send("Error deleting note");
    } finally {
        if (client) client.close();
    }
});

app.put("/update-note/:id", authenticate, async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).send("Title and content are required");
    }

    let client;
    try {
        client = await connectDB();
        const collection = client.db("FP_Code").collection("Notes");
        const result = await collection.updateOne(
            { _id: new require("mongodb").ObjectId(id), userId: req.userId },
            { $set: { title, content, updatedAt: new Date() } }
        );

        if (result.matchedCount === 0) {
            return res.status(404).send("Note not found");
        }

        res.status(200).send("Note updated");
    } catch (error) {
        console.error("Failed to update note:", error);
        res.status(500).send("Error updating note");
    } finally {
        if (client) client.close();
    }
});


// Endpoint na validáciu testu
app.post("/api/tests/validate", (req, res) => {
  const { topic, answers } = req.body;

  const correctAnswers = topicsContent[topic]?.map((q) => q.answer);
  if (!correctAnswers) {
    return res.status(400).json({ error: "Invalid topic" });
  }

  const totalQuestions = correctAnswers.length;
  const correctCount = answers.filter((answer, i) => answer === correctAnswers[i]).length;
  const successRate = Math.round((correctCount / totalQuestions) * 100);

  res.json({ successRate, message: "Test evaluated successfully" });
});

// Spustenie servera
app.listen(5000, "0.0.0.0", () => {
  console.log("Server running on port 5000");
});
    
