'use strict';

let lineCount: number = 4;


let stars: string = "*";

for (let i: number = 1; i<=lineCount; i++){
    let spaces: string = "";
    for (let j: number = 0; j<lineCount - i; j++){
        spaces += " ";
    }
    console.log(spaces + stars);
    stars += "**";
}



// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is