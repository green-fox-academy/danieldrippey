'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function squareMaker (cooX: number, cooY: number){
    ctx.fillRect(cooX, cooY, 50, 50);
}

for (let i=1; i < 4; i++){
    squareMaker(i * 75, i * 75);
}
