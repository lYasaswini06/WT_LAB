const express = require('express');
const app = express();

app.use(express.json());

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url} ${new Date()}`);
    next();
};

const auth = (req, res, next) => {
    console.log("Auth middleware executed");
    next();
};

app.use(logger);

app.get('/', (req, res) => {
    res.send("Home Page");
});

app.get('/secure', auth, (req, res) => {
    res.send("Secure Page");
});

app.listen(3000, () => console.log("Server running on port 3000"));