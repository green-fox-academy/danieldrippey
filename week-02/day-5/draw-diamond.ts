'use strict';

let lineCount: number = 15;


let stars: string = "*";
let spaceBottom: string = " ";
for (let i: number = 1; i<=lineCount; i++){
    if (i < lineCount / 2 + 1){
        let spaces: string = "";
        for (let j: number = 0; j<lineCount/2 - i; j++){
        spaces += " ";
        }
        console.log(spaces + stars);
        stars += "**";      
    } else {        
        let starsBottom: string = "*";
        for (let k: number = 0; k < 2*lineCount - 2*i; k++) {
            starsBottom += "*";                                          
            }                    
        console.log(spaceBottom + starsBottom);
        spaceBottom += " ";
    }
}


// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is