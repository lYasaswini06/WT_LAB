const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

let db;

async function startServer() {
  await client.connect();
  db = client.db("bookFinderDB");

  console.log("MongoDB connected");

  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}

startServer();

const books = () => db.collection("books");


// 1️⃣ Search Books by Title
app.get("/books/search", async (req, res) => {
  const title = req.query.title;

  const result = await books()
    .find({ title: { $regex: title, $options: "i" } })
    .toArray();

  res.json(result);
});


// 2️⃣ Filter Books by Category
app.get("/books/category/:category", async (req, res) => {

  const result = await books()
    .find({ category: req.params.category })
    .toArray();

  res.json(result);
});


// 3️⃣ Sort Books by Price
app.get("/books/sort/price", async (req, res) => {

  const result = await books()
    .find()
    .sort({ price: 1 })
    .toArray();

  res.json(result);
});


// Sort by Rating
app.get("/books/sort/rating", async (req, res) => {

  const result = await books()
    .find()
    .sort({ rating: -1 })
    .toArray();

  res.json(result);
});


// 4️⃣ Top Rated Books
app.get("/books/top", async (req, res) => {

  const result = await books()
    .find({ rating: { $gte: 4 } })
    .limit(5)
    .toArray();

  res.json(result);
});


// 5️⃣ Pagination
app.get("/books", async (req, res) => {

  const page = parseInt(req.query.page) || 1;
  const limit = 5;

  const result = await books()
    .find()
    .skip((page - 1) * limit)
    .limit(limit)
    .toArray();

  res.json(result);
});