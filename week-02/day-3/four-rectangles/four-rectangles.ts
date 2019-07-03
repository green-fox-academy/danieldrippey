'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

let myColorList: string[] = ['red', 'blue', 'green', 'yellow'];

function rectMaker (startX: number, startY: number, sideOne: number, sideTwo: number){
    ctx.fillRect(startX, startY, sideOne, sideTwo);
}



for (let i=1; i<5; i++){
    ctx.fillStyle = myColorList[i-1];
    rectMaker(i*50, i*50, i*20, i*20,);
}