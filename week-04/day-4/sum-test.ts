'use strict';

import { mySum } from './sum' ;
let test = require ('tape');

test ((t: any) => {
    let testSum: mySum = new mySum([1, 1, 8]);
    t.equals(typeof(testSum), 'object');
    t.equals(testSum.summarizer(), 10);
    t.end();
});

test ((t: any) => {
    let testSum: mySum = new mySum([]);
    t.equals(testSum.summarizer(), 0);
    t.end();
});

