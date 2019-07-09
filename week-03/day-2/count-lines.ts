'use strict';
declare function require(path: string): any;
export {};
const fs = require('fs')

function lineCounter (filename: string): number {   
    let lines = fs.readFileSync(filename, 'utf-8').split("\n").length;
    console.log(lines);
    return lines;    
}

lineCounter("fruits.txt");

try {
    lineCounter("fileeeees.txt");
  }
  catch(e) {
    console.log(0);
  }

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.
