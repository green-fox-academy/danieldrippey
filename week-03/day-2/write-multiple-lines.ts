"use strict";
declare function require(path: string): any;
export {};
const fs = require("fs");

function multiLines(path: string, words: string, number: number) {
  let fullPath = path + "multi-lines.txt";
  for (let i = 0; i < number; i++) {
    fs.appendFileSync(fullPath, words + '\r\n' );
  }
}

multiLines("", "apple", 5);

try {
    multiLines();
  }
  catch(e) {
    console.log('');
  }

// The function should not raise any errors if it could not write the file.
