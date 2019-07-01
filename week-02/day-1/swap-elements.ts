'use strict'

// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`
 
let abc: string[] = ["Arthur", "Boe", "Chloe"];

let abc_temp: string[] = [abc[0]];
abc[0] = abc[2];
abc[2] = abc_temp[0];

console.log(abc);



