'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

let canvasSize: number = 600; 
canvas.width = 600;
canvas.height = 600;


function envelopeLeftUp (lineMulti: number){
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(canvasSize/20*lineMulti, canvasSize/2);
    ctx.lineTo(canvasSize/2, canvasSize/2-canvasSize/20*lineMulti);
    ctx.stroke();
}
function envelopeLeftDown (lineMulti: number){
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(canvasSize/20*lineMulti, canvasSize/2);
    ctx.lineTo(canvasSize/2, canvasSize/2 + canvasSize/20*lineMulti);
    ctx.stroke();
}

function envelopeRightUp (lineMulti: number){
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(canvasSize/2, canvasSize/20*lineMulti);
    ctx.lineTo(canvasSize/2 + canvasSize/20*lineMulti, canvasSize/2);
    ctx.stroke();
}

function envelopeRightDown (lineMulti: number){
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(canvasSize/2, canvasSize/2 + canvasSize/20*lineMulti);
    ctx.lineTo(canvasSize -  canvasSize/20*lineMulti, canvasSize/2);
    ctx.stroke();
}

for (let i: number = 1; i<=9; i++){
    envelopeLeftUp(i,i);
    envelopeLeftDown(i,i);
    envelopeRightUp(i,i);
    envelopeRightDown(i, i);
}



