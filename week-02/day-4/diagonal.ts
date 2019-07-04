'use strict';

let linesCount: number = 6;

let innerLine: string = '%';
for (let i: number = 1; i <= linesCount; i++){
    if (i === 1 || i === linesCount) {
        console.log('%%%%%%');
    }  else{        
        console.log('%' + innerLine + innerLine + innerLine + '%');
        innerLine += " " + innerLine;
    }
}

// Write a program that draws a
// square like this:
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is