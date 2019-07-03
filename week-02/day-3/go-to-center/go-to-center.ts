'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop.

function myDrawer (cooX: number, cooY: number){
    ctx.beginPath();
    ctx.moveTo(cooX, cooY);
    ctx.lineTo(300, 200);
    ctx.stroke();
}

for (let i = 1; i < 4; i++ ){
   myDrawer(i * 15, i * 25); 
}
