const express = require('express');
const User = require('./model');

const app = express();
app.use(express.json());

app.post('/users', async (req, res) => {
    const user = await User.create({ name: req.body.name });
    res.json(user);
});

app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

app.put('/users/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate(
        req.params.id,
        { name: req.body.name },
        { new: true }
    );
    res.json(user);
});

app.delete('/users/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.send("Deleted");
});

app.listen(3000, () => console.log("Server running"));