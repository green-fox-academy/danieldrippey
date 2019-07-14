'use strict';

let lineCount: number = 6;

for (let i: number = 0; i < lineCount; i++) {
    let lineStart: string = '%';
    let lineEnd: string = '%';
    if (i === 0 || i === lineCount-1){
        for (let j: number = 0; j<3; j++){
            lineStart = lineStart + '%';
        }
    } else{
        for (let k: number = 0; k<3; k++){
            lineStart = lineStart + ' ';
        }
    }
    console.log(lineStart + lineEnd);
}

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is**>>_::?_: