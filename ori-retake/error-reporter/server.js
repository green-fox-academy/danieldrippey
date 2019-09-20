'use strict';

const port = 8000;

const express = require('express');
const app = express();
let mysql = require('mysql');

let connection = mysql.createConnection({
  host: "localhost",
  user: "'root'",
  password: "password",
  database: "tickets"
});

app.use(express.json());
app.use(express.static('assets'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/users', (req, res) => {
  connection.query('SELECT * FROM users', (error, rows) => {
    if (error) {
      res.sendStatus(500);
      return; 
  }
  res.send({users:rows});
  });
});

app.get('/tickets', (req, res) => {
  let filterManufacturer = req.query.manufacturer;
  let filterID = req.query.reporter;
  let query = ('SELECT * FROM tickets')
  let filters = [];
  if (filterID && filterManufacturer) {
    query += ' WHERE manufacturer = ? AND id = ?';
    filters.push(filterManufacturer);
    filters.push(filterID);
  } else if (filterID && !filterManufacturer) {
    query += ' WHERE id = ?';
    filters.push(filterID);
  } else if (!filterID && filterManufacturer) {
    query += ' WHERE manufacturer = ?';
    filters.push(filterManufacturer);
  }
  connection.query(query, filters, (error, rows) => {
    if (error) {
      res.sendStatus(500);
      return; 
    }
  res.send({tickets:rows});
  });
});

app.post('/tickets', (req, res) => {
  let inputTicket = req.body;
  if (!inputTicket.manufacturer || !inputTicket.serial_number || !inputTicket.description || isNaN(Number.parseInt(inputTicket.reporter))) {
    res.status(400).send({ message: 'Bad Request'});
    return
  }
  connection.query(`INSERT INTO tickets (reporter, manufacturer, serial_number, description) 
  VALUES (?, ?, ?, ?)`, [inputTicket.reporter, inputTicket.manufacturer, inputTicket.serial_number, inputTicket.description], (error, rows) => {
    if (error) {
      res.sendStatus(500);
      return;
    } 
    let myID = rows.insertId;
    connection.query('SELECT * FROM tickets WHERE id = ?', [myID], (error, rows) => {
      if (error) {
        res.sendStatus(500);
        return;
      } 
      res.send(rows[0]);
    })
  });
});

app.delete('/tickets/:id', (req, res) => {
  let myID = req.params.id;
  let headerAuth = req.headers.authorization;
  if (isNaN(Number.parseInt(myID))) {
    res.status(400).send({ message: 'Bad Request'});
    return
  }
  if (headerAuth !== 'voala') {
    res.sendStatus(401);
    return
  }
  connection.query('DELETE FROM tickets where id = ?', [myID], (error, rows) => {
    if (error) {
      res.sendStatus(500);
      return;
    } 
    res.sendStatus(204)
  });
});

connection.connect(function(err){
  if(err){
    console.log(err);
    console.log("Error connecting to Db");
  return;
  }
  console.log("Mysql connection established");
}); 

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
