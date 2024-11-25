const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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


// Endpoint na registráciu
app.post("/register", async (req, res) => {
    const { name, surname, email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send("Email and password are required");
    }

    let client;
    try {
        client = await connectDB();
        const collection = client.db("FP_Code").collection("Users");

        // Skontroluj, či už email existuje
        const existingUser = await collection.findOne({ email });
        if (existingUser) {
            return res.status(400).send("User already exists");
        }

        // Hashuj heslo
        const hashedPassword = await bcrypt.hash(password, 10);

        // Ulož nového používateľa
        const result = await collection.insertOne({
            name,
            surname,
            email,
            password: hashedPassword,
        });
        res.status(201).send({ userId: result.insertedId });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).send("Error registering user");
    } finally {
        if (client) client.close();
    }
});

// Endpoint na prihlásenie
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send("Email and password are required");
    }

    let client;
    try {
        client = await connectDB();
        const collection = client.db("FP_Code").collection("Users");

        // Nájdeme používateľa
        const user = await collection.findOne({ email });
        if (!user) {
            return res.status(401).send("Invalid email or password");
        }

        // Overíme heslo
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).send("Invalid email or password");
        }

        // Generuj JWT token
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });
        res.send({ token });
    } catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).send("Error logging in user");
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


app.listen(5000, () => {
    console.log("Server running on port 5000");
});
