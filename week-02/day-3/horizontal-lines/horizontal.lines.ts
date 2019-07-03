    
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as as CanvasRenderingContext2D;

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// Draw at least 3 lines with that function using a loop.

function myLineDrawer (cooX: number, cooY: number){
    ctx.beginPath();
    ctx.moveTo(cooX, cooY);
    ctx.lineTo(cooX + 50, cooY);
    ctx.stroke();
}

myLineDrawer(50, 100);

for (let i=1; i < 4; i++){
    myLineDrawer(i * 20, i * 35);  
}