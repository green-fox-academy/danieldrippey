'use strict';

let myPromise = new Promise(function(fulfill, reject) { 
  fulfill('I FIRED'), 
  reject(new Error('I DID NOT FIRE'));
});

function onRejected (error) {
   console.log(error.message)
  }

myPromise.then(console.log, onRejected);