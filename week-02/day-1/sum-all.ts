'use strict'

// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console

let ai: number[] = [3, 4, 5, 6, 7];
let sumAi: number = 0
console.log(ai[0] + ai[1] + ai[2] + ai[3] + ai[4]);



for (let i: number = 0; i < ai.length; i++) {
    sumAi = sumAi + ai[i];
}
console.log(sumAi);


     