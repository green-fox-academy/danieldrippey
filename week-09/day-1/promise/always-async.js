'use strict';

let myPromise = new Promise (function(fulfill, reject) {
  fulfill('PROMISE VALUE');
});

myPromise.then(console.log);

console.log('MAIN PROGRAM');
