const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('assets'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });


app.get('/doubling', (req, res) => {
    console.log(req.query.input);
    let inputObject = {};
    
    if (req.query.input === undefined) {
        inputObject = {
            error: "Please provide an input!"
        }
    } else {
        inputObject = {
            received : req.query.input,
            result : req.query.input * 2   
        }
    }
   res.json(inputObject);
});

app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
  });
