'use strict';

import { anagrammer } from './anagram';
let test = require ('tape');

test ((t: any) => {
    let testwordOne: string = 'gorog';
    let testwordTwo: string = 'gorob';
    t.equals(anagrammer(testwordOne, testwordTwo), false);
t.end();
});


/* 
Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
Create a test for that. */