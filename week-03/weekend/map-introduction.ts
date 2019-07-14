'use strict';

let myNewMap = new Map ([
    [97, 'a'],
    [98, 'b'], 
    [99, 'c'],
    [65, 'A'],
    [66, 'B'],
    [67, 'C'],
]);

myNewMap.set(68, 'D');

console.log(myNewMap.keys());
console.log(myNewMap.values());
console.log(myNewMap.size);
console.log(myNewMap.get(99));
myNewMap.delete(97);
console.log(myNewMap.keys());
console.log(myNewMap.values());
console.log(myNewMap.has(100));
myNewMap.clear();
console.log(myNewMap.size);

