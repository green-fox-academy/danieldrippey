'use strict'

export = {};

let single: string = 'single quotes'

let double: string = "double quotes"

let backTick: string = `Today is ${(100 ** 2) -1}`;
console.log(backTick);

console.log(single.length);
console.log(single.toUpperCase().toLowerCase());
    
function toUpperCaseAtIndex(text: string, index: number): string {
    let prefix: string = text.slice(0, index);
    let replaceUpperCase: string = text.charAt(index).toUpperCase();
    let suffix: string = text.slice(index + 1);
    return prefix.concat(replaceUpperCase).concat(suffix);
}
console.log(toUpperCaseAtIndex("appletree", 0));

//we made a function to change the desired character in our string

let greeting: string = 'hello create class create';
let greetingsTheRightWay: string = greeting.replace(/create/g, 'Create');
console.log(greetingsTheRightWay);


//global expression, changing each create word in the text


let textToSlice: string = "1234567890";
let sliced: string = textToSlice.slice(4, -3);
console.log(sliced);

//slicing out a part of a string with its index