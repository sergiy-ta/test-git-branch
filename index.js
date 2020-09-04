'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    res.send('<h1 style="color:green;">Hello from test git branch sergiy-ta</h1> \n');
});

app.get('/sergiy-ta', (req, res) => {
    res.send('<h1 style="color:red;">Hello from my page</h1> \n');
});

app.get('/about', (req, res) => {
    res.send('<h1 style="color:red;">Hello from about page</h1> \n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);