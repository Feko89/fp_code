const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://dominofeco89:GRC3veoC2iNTMxO5@cluster0.dixvk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function connectDB() {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Connection failed", error);
    }
    return client;
}

module.exports = connectDB;