'use strict';

import { apple } from './apples';
let test = require ('tape');

test ((t: any) => {
    let newApple: apple = new apple;
    t.equal((typeof (newApple.getApple())), 'string');
    t.end();
});
