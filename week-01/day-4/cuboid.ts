'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000


let lengthcm: number = 30;
let heigthcm: number = 40;
let depthcm: number = 50;

console.log("The volume of your cuboid in cm is " + (lengthcm * heigthcm * depthcm) + " and its surface area is " + (2 * (lengthcm * heigthcm + heigthcm * depthcm + depthcm *lengthcm)));
console.log("Surface Area: " + (2 * (lengthcm * heigthcm + heigthcm * depthcm + depthcm *lengthcm))); 
console.log("Volume: " + (lengthcm * heigthcm * depthcm));