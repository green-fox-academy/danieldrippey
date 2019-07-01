'use strict';

let myArray: string[] = ["Morzsi", "Liza", "Furkesz", "Riley"];
console.log(myArray[0]);
myArray.forEach(function(item) {
    console.log(item);
})

for(let i: number = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}


let myOtherArray: Array<string | number> = [1, "Mazli"];
console.log(myOtherArray[0]);

myOtherArray.splice(0, 1, 12566);
console.log(myOtherArray[0]);

let myOtherArray2: any[] = ["wut", 10, 1, "Mazli", 567, "kex"];
console.log(myOtherArray2);

let doubled: number[] = [1, 2, 3, 4, 5].map(function(i) {
    return i ** 2;
})
console.log(doubled);


let odds:  number[] = [1, 2, 3, 4, 5, 6].filter(function(item) {
    return item % 2 != 0;
})
console.log(odds);

let arrayOne: number[] = [1, 3];
let arrayTwo: number[] = [2, 4];
let ArrayThree: any[] = [... arrayOne, ... arrayTwo];
console.log(ArrayThree);