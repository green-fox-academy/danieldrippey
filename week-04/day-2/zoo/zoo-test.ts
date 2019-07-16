'use strict'

import {Animals, Mammal, Reptile, Bird} from './zoo'; 

let reptile = new Reptile("Crocodile", 55, 'large', 4, true, 'slow');
let mammal = new Mammal("Koala", 50, 'small', 2, true, 'slow');
let bird = new Bird("Parrot", 25, 'small', 2, true, 'fast');

console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.breed());
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
console.log("A " + bird.getName() + " is breeding by " + bird.breed());