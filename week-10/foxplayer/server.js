'use strict';

const port = 3000;

const express = require('express');
const app = express();

//app.use(express.json());
app.use(express.static('assets'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    });