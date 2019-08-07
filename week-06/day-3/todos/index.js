const express = require('express');

const PORT = 3000;

const app = express();

app.set('view engine', 'ejs');

const todoList = [
    'get up',
    'survive',
    'go back to bed',
  ];


app.get('/', (req, res) => {
    res.render('home', {todoList} )
});

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
  });