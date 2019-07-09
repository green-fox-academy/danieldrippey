'use strict';
declare function require(path: string): any;
export {};
const fs = require('fs')

function fileWriter (filename: string, text: string) {
    if (filename !== "my-file.txt") {
        throw "Unable to write file: my-file.txt";
    }
    fs.writeFileSync(filename, text);
}

//fileWriter("my-file.txt", "Peter");

try{
    fileWriter("may-file.txt", "Thomas");
} catch(e){
    console.log("Unable to write file: my-file.txt");
}

// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"