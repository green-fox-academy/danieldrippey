'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

let canvasSize: number = 600; 
canvas.width = 1000;
canvas.height = 1000;

function triangleMaker10000 (startX: number, length: number){
    ctx.beginPath();
    ctx.moveTo(startX, startX + length);
    ctx.lineTo(startX + length, startX + length);
    ctx.lineTo(startX + (length)/2, (600-(0.866*length)) - (600-(startX + length))); //433
    ctx.lineTo(startX, startX + length);
    ctx.stroke();
}


triangleMaker10000(10, 30);

//ctx.beginPath();
//ctx.moveTo(50, 550);
//ctx.lineTo(550, 550);
//ctx.lineTo(300, 116);
//ctx.lineTo(50, 550);
//ctx.stroke();






