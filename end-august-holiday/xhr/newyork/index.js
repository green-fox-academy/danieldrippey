'use strict';

const PORT = 3001;

const express = require('express');

const app = express();
app.use(express.static('assets'));

app.get('/', function (req, res) {
  res.sendFile('/index.html');  
});

app.listen(PORT, () => console.log(`App is listening on ${PORT}`));