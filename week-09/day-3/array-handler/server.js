'use strict';

const port = 3050;

const express = require('express');
const app = express();

app.use(express.json());

function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};
  
function multiply(array) {
  let multiply = 1;
  for (let i = 0; i < array.length; i++) {
    multiply *= array[i];
  }
  return multiply;
};
  
function double(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}
  
app.post("/arrays", (req, res) => {
  req.body = {"what": "double", "numbers": [1,2,5,10]};
  if (req.body.what === "double") {
    res.send({
      result: sumArray(req.body.numbers)
    });
    } else if (req.body.what === "multiply") {
      res.send({
        result: multiply(req.body.numbers)
      })
    } else if (req.body.what === "double") {
      res.send({
        result: double(req.body.numbers)
      })
    } else  {
      res.send({
        error: "Please provide what to do with the numbers!"
      })
    }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
