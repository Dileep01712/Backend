require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello, world!");
});

app.get('/twitter', (req, res) => {
    res.send("Hello, this is twitter!");
});

app.get('/login', (req, res) => {
    res.send("<h1>Please login</h1>");
});

app.get('/github', (req, res) => {
    res.send("<h2>Go to https://github.com/Dileep01712</h2>");
});

app.listen(process.env.PORT, () => {
    console.log(`App listening on port http://localhost:${port}`);
});