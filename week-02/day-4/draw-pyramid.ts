'use strict'

let lines: number = 4;

let stars: string = "";
let spaces: string = "";
for (let i = 0; i < lines; i++){   //4
    
    for (let j = 0; j < lines -i - 1; j++){   //4*3
        spaces += "_";
      for (let k = 1; k <= 2*i +1; k++){  
        stars += "*"; 
      }
      console.log(spaces + stars);      
    }


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
