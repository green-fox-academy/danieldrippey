'use strict';

function divider (thisWithTen: number) {
    if (thisWithTen == 0){
        throw "you shall not divide with 0!";
    }
    console.log(10 / thisWithTen);   
}

try {
    divider(1);
  }
  catch(e) {
    console.log(e);
  }


// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

