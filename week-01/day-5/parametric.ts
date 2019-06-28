'use strict';


let myNumber: number = 6
let sumNumber: number = 0;
for (let i: number = 1; i < myNumber + 1 ; i++){ 
    sumNumber = sumNumber + i;
} 
console.log("Sum: " + sumNumber + ", Average: " + (sumNumber / myNumber));

// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3