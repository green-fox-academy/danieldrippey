'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

let canvasSize: number = 600; 
canvas.width = canvasSize;
canvas.height = canvasSize;


//ctx.strokeStyle = 'green';
//ctx.beginPath();
//ctx.moveTo(310, 310);
//ctx.lineTo(400, 400);
//ctx.stroke();

function drawLinerGreen (dLGX: number, dLGY: number){
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(0,canvasSize/16*dLGX);
    ctx.lineTo(canvasSize/16*dLGY, canvasSize);
    ctx.stroke();
}




for (let i: number = 1; i<=14; i++) {
    drawLinerGreen(i+1, i);  
    drawLinerPurple(i+1, i);
}


function drawLinerPurple (dLPX: number, dLPY: number){
    ctx.strokeStyle = 'purple';
    ctx.beginPath();
    ctx.moveTo(canvasSize/16*dLPX, 0);
    ctx.lineTo(canvasSize, canvasSize/16*dLPY);
    ctx.stroke();
}


