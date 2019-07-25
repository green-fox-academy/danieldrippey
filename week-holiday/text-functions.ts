'use strict';

declare function require(path: string): any;
export {};
const fs = require('fs');

function fileReader (fileName: string): string[] {
    let fileContent = fs.readFileSync(fileName, 'utf-8').split('\r\n');
    return fileContent;
}

function getTheLastFive (input: string): string[] {
    let rawInput = input.split(';').slice(-5);;
    return rawInput;
} 

function connectingtheFives (input: any[]): any[] {
    let connectedArray = [].concat(...input);
    return connectedArray;
}


export { fileReader, getTheLastFive, connectingtheFives, };

let lotto = fileReader('text-test.txt');
console.log(lotto);
let lastFiveLists: any[] = [];
for (let i: number = 0; i < lotto.length; i++) {
    lastFiveLists.push(getTheLastFive(lotto[i]));
}
console.log(lastFiveLists);
let mergedArrays = connectingtheFives(lastFiveLists);
console.log(mergedArrays);


