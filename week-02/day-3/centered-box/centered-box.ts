'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 1 parameters:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

function squareMaker10000 (sqSize: number){
    ctx.strokeRect((300 - sqSize/2), (200 - sqSize/2), sqSize, sqSize);
} 

for (let i = 1; i < 4; i ++){
    squareMaker10000(i * 50);
}
