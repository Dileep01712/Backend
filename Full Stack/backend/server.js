// const express = require('express');
import express from 'express'; // Module JS

const app = express();

// app.get('/', (req, res) => {
//     res.send("Server is ready to serve!!");
// });

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            "id": 1,
            "title": "First Joke",
            "content": "Why do programmers prefer dark mode? Because light attracts bugs!"
        },
        {
            "id": 2,
            "title": "Second Joke",
            "content": "Why do Java developers wear glasses? Because they don't see sharp."
        },
        {
            "id": 3,
            "title": "Third Joke",
            "content": "How many programmers does it take to change a light bulb? None, that's a hardware problem."
        },
        {
            "id": 4,
            "title": "Fourth Joke",
            "content": "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25."
        },
        {
            "id": 5,
            "title": "Fifth Joke",
            "content": "What do you call a programmer from Finland? Nerdic."
        }
    ];
    res.send(jokes); // json formatter
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});
