'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!


function reverse (inputText: string): string {
    return inputText.split("").reverse().join("");
}

let reversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;
console.log(reverse(reversed));

export = reverse;