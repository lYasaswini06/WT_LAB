const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function seedDB() {

    await client.connect();

    const db = client.db("bookFinderDB");
    const books = db.collection("books");

    await books.deleteMany({});

    await books.insertMany([
        {
            title: "JavaScript Essentials",
            author: "John Smith",
            category: "Programming",
            price: 450,
            rating: 4.5,
            year: 2023
        },
        {
            title: "Python Basics",
            author: "Mike Ross",
            category: "Programming",
            price: 400,
            rating: 4.2,
            year: 2022
        },
        {
            title: "Data Science Guide",
            author: "Anna Lee",
            category: "Data Science",
            price: 550,
            rating: 4.8,
            year: 2024
        },
        {
            title: "AI Foundations",
            author: "Sarah Connor",
            category: "AI",
            price: 600,
            rating: 4.7,
            year: 2024
        },
        {
            title: "Web Development Bootcamp",
            author: "Tom Hardy",
            category: "Programming",
            price: 350,
            rating: 3.9,
            year: 2021
        }
    ]);

    console.log("Database seeded successfully!");

    await client.close();
}

seedDB();