'use strict';

import { mostCommonElement, topFiveElement} from './lottery-array-functions';
import { fileReader, getTheLastFive, connectingtheFives, } from './text-functions';

declare function require(path: string): any;
export {};
const fs = require('fs');

let lotto = fileReader('lottery.txt');
let lastFiveLists: any[] = [];
for (let i: number = 0; i < lotto.length; i++) {
    lastFiveLists.push(getTheLastFive(lotto[i]));
}
let mergedArrays = connectingtheFives(lastFiveLists);
console.log(mergedArrays);
let theTopFiveLotteryNumber = topFiveElement(mergedArrays);
console.log('These were the most frequent lottery numbers in Hungary: ' + theTopFiveLotteryNumber.join(' '));