'use strict';

let multiDimensionArray: number[][] = [];
let arrayLength: number = 4;

for (let i: number = 0; i< arrayLength; i++){
   let rows: number[] = [];
   for (let j: number = 0; j < arrayLength; j++) {
   if (arrayLength - j === arrayLength - i){
       rows.unshift(1);
   } else{
       rows.unshift(0);
   }
   }
   multiDimensionArray.push(rows);
}

console.log(multiDimensionArray.join());

multiDimensionArray.forEach(function(value){
    console.log(value.join(" "));
})





// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
// ** Relax, a matrix is just like an array