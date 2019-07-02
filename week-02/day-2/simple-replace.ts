'use strict';

let example: string = 'In a dishwasher far far away';
let changing: any = /dishwasher/;
example = example.replace(changing, "galaxy");
console.log(example);

// I would like to replace "dishwasher" with "galaxy" in this example
// Please fix it for me!
// Expected ouput: In a galaxy far far away

export = example;

