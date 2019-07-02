'use strict'

export = {};

let myNameList: string[] = [];

//Print out the number of elements in the list
console.log(myNameList.length);

//Add William to the list
myNameList.push("William");

//Print out whether the list is empty or not
if (myNameList.length > 0) {
    console.log("My list is not empty");    
}   else {
    console.log("My list is empty");
}

myNameList.push("John", "Amanda");

console.log(myNameList.length);
console.log(myNameList[2]);

//Iterate through the list and print out each name

for(let i = 0; i < myNameList.length; i++){
    console.log(myNameList[i]);
}

//Iterate through the list and print
//1. William
//2. John
//3. Amanda

for(let i = 0; i < myNameList.length; i++){
    console.log((i+1) + ". " + myNameList[i]);
}

//Remove the 2nd element
myNameList.splice(1, 1);
console.log(myNameList);

//Iterate through the list in a reversed order and print out each name

for(let i = myNameList.length -1; i >= 0; i--){
    console.log(myNameList[i]);
}

//Remove all elements

myNameList.splice(0, 2);
console.log(myNameList);