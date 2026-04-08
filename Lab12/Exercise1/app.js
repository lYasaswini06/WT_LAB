const express = require('express');
const app = express();

app.use(express.json());

let users = [
    { id: 1, name: "Yasaswini" },
    { id: 2, name: "John" }
];

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    res.json(user);
});

app.post('/users', (req, res) => {
    const user = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(user);
    res.json(user);
});

app.put('/users/:id', (req, res) => {
    let user = users.find(u => u.id == req.params.id);
    if (user) {
        user.name = req.body.name;
        res.json(user);
    } else {
        res.send("User not found");
    }
});

app.delete('/users/:id', (req, res) => {
    users = users.filter(u => u.id != req.params.id);
    res.send("User deleted");
});

app.listen(3000, () => console.log("Server running on port 3000"));