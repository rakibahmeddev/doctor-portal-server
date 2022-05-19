const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://DB_USER:DB_PASS@cluster0.ady3n.mongodb.net/?retryWrites=true&w=majority";

app.get("/", (req, res) => {
  res.send("Hello from Doctor Portal");
});

app.listen(port, () => {
  console.log(`Doctors App listening on port ${port}`);
});
