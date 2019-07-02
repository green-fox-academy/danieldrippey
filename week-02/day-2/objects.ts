'use strict'

export = {};

let person = {
    name: 'John',
    age: 21,
    friends: [],
    greeting: function() {
        console.log('Hi my name is John');
    }
};

console.log(person);
console.log(person.name);
person.greeting();

//az object key értékeit listázza:
console.log(Object.keys(person));

//az 1. key értéke:
console.log(person[Object.keys(person)[0]]);

//if (person.hasOwnPrperty("address")){
//    console.log()
//}

let personCopyWithReference = person;
console.log(person);
console.log(personCopyWithReference);