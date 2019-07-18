'use strict';

function anagrammer (wordA: string, wordB: string): boolean {
    let firstWord: string = wordA.split('').sort().join();
    let secondWord: string = wordB.split('').sort().join();
    if (firstWord === secondWord){
       return true; 
    } else {
        return false;
    }
}

export { anagrammer};

console.log(anagrammer('abcd', 'abcd'));

/* 
Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
Create a test for that. */