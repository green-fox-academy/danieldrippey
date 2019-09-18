'use strict';

const port = 3000;

const express = require('express');
const app = express();
let mysql = require('mysql');

let connection = mysql.createConnection({
  host: "localhost",
  user: "'root'",
  password: "password",
  database: "aliaser"
});

app.use(express.json());
app.use(express.static('assets'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

connection.connect(function(err){
  if(err){
    console.log(err);
    console.log("Error connecting to Db");
    return;
  }
  console.log("Connection established");
}); 

app.post('/api/links', (req, res) => {
  let inputAlias = req.body.alias;
  connection.query('SELECT * FROM alias where alias = ?', [inputAlias], (error, rows) => {
    if (rows.length > 0) {
      res.status(400).send({ message: 'Alias already in use'});
      return
    }
  let secretCode = Math.floor(Math.random() * (10000 - 1000)) + 1000; 
  connection.query('INSERT INTO alias (url, alias, secretCode) VALUES (?, ?, ?)', [req.body.url, req.body.alias, secretCode], (error, rows) => {
    if (error) {
      res.sendStatus(500);
      return;
    } 
    let myID = rows.insertId;
    connection.query('SELECT * from alias WHERE id = ?', [myID], (error, rows) => {
      res.send(rows);
    });
  });
}); 
});

app.get('/a/:alias', (req, res) => {
  let inputParam = req.params.alias;
  connection.query('SELECT * FROM alias where alias = ?', [inputParam], (error, rows) => {
    if (rows.length = 0) {
      res.status(404).send({ message: 'Page not found'});
      return
    } 
    connection.query('UPDATE alias SET hitCount = hitCount + 1 WHERE alias = ?', [inputParam], (error, rows) => {
      if (error) {
        res.sendStatus(500);
        return; 
     } connection.query('SELECT url FROM alias WHERE alias = ?', [inputParam], (error, row) => { 
       let redirect = row[0].url;
     res.redirect(redirect);
     });
    })
  });
});

app.get('/api/links', (req, res) => {
  connection.query('SELECT id, url, alias, hitCount FROM alias', (error, rows) => {
    if (error) {
      res.sendStatus(500);
      return;
    }   
    res.send(rows);
  })
});

app.delete('/api/links/:id', (req, res) => {
  let inputId = req.params.id;
  let inputCode = req.body.secretCode;
  console.log(inputCode);
  console.log(inputId);
  connection.query('SELECT * FROM alias where id = ?', [inputId], (error, rows) => {
    if (rows.length === 0) {
      res.status(404).send({ message:'ID does not exist!'});
      return
    } connection.query('SELECT * FROM alias where secretCode = ?', [inputCode], (error, rows) => {
      if (rows.length === 0) {
      res.status(403).send({ message: 'Code does not match'});
      return
      } connection.query('DELETE FROM alias WHERE secretCode = ?', [inputCode], (error, rows) => {
        res.sendStatus(204);
      });
    }); 
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// fetch sttus code + last delet endpoint