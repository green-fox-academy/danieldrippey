'use strict';

const mapWith = (array, callback) => {
    let output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(callback(array[i]));
    }
    
    return output;
  }

const addOne = (number) => {
    return number + 1;
  }

console.log(mapWith([1, 2, 3], addOne));

const charRemover = (string) => {
    let wordWorkWith = string.split('');
    let splittedWord = [];
    for (let i = 0; i < string.length; i++ ) {
        if (i % 2 !== 1) {
            splittedWord.push(wordWorkWith[i]);
        }
    }
    return splittedWord.join('');
}
 
const everySecondRemover = (array, callback) => {
    let wordsOutPut = [];
    for (let i = 0; i < array.length; i++) {
        wordsOutPut.push(callback(array[i]));
    }
    return wordsOutPut;
}

const words = ['map', 'reduce', 'filter'];

console.log(everySecondRemover(words, charRemover));
