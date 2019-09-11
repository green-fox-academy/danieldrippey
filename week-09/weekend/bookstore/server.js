'use strict';

const PORT = 3050;
const express = require('express');
let mysql = require('mysql');

let connection = mysql.createConnection({
  host: "localhost",
  user: "'root'",
  password: "password",
  database: "bookstore"
});

const app = express();

app.use(express.json());
app.use(express.static('assets'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/assets/index.html');
}); 

connection.connect(function(err){
  if(err){
      console.log(err);
      console.log("Error connecting to Db");
      return;
  }
  console.log("Connection established");
}); 

app.get('/bookstoreApi', (req, res) => {
  let filterCategory = req.query.category;
  let filterPlt = req.query.plt || 10000;
  let filterPgt = req.query.pgt || 0;
  console.log(filterCategory, filterPlt, filterPgt);
  if (filterCategory === undefined) {
    let booksAllData =
    `SELECT
      book_mast.book_name, author.aut_name, category.cate_descrip, publisher.pub_name, book_mast.book_price 
    FROM 
      book_mast, author, category, publisher 
    WHERE 
     book_mast.aut_id = author.aut_id AND book_mast.cate_id = category.cate_id 
     AND publisher.pub_id = book_mast.pub_id
     AND category.cate_descrip IS NOT NULL
     AND book_mast.book_price < ?
     AND book_mast.book_price > ?`;
    connection.query(booksAllData, [filterPlt, filterPgt], (err, rows) => {
      if (err) {
        console.log(err.toString());
        res.status(500).send('Database error');
        return;
      }
      res.send(rows);
    });
  } else { 
  let booksAllData =
    `SELECT
      book_mast.book_name, author.aut_name, category.cate_descrip, publisher.pub_name, book_mast.book_price 
    FROM 
      book_mast, author, category, publisher 
    WHERE 
     book_mast.aut_id = author.aut_id AND book_mast.cate_id = category.cate_id 
     AND publisher.pub_id = book_mast.pub_id 
     AND category.cate_descrip = ?
     AND book_mast.book_price < ?
     AND book_mast.book_price > ?`;
    connection.query(booksAllData, [filterCategory, filterPlt, filterPgt], (err, rows) => {
      if (err) {
        console.log(err.toString());
        res.status(500).send('Database error');
        return;
      }
      res.send(rows);
    });
  }
});

app.listen(PORT, () => console.log(`App is listening on ${PORT}`));