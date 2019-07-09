"use strict";
declare function require(path: string): any;
export {};
const fs = require("fs");

function copyMaker (inCopy: string, outCop: string): boolean {
    let fileContent = fs.readFileSync(inCopy, 'utf-8');
    fs.writeFileSync(outCop, fileContent);
    return true;
}

copyMaker("fruits.txt", "copyOfFruits.txt");




// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful