'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.


let colorList: string[] = ['crimson', 'skyBlue', 'maroon', 'lawnGreen', 'tomato', 'red', 'blue', 'green', 'yellow', 'orange', 'purple', 'black', 'brown', 'indigo', 'navy', 'sienna', 'orchid', 'coral'];

function coloredSquareMaker (sqSize: number, colorSq: string ){  

    colorList.unshift(colorSq);
    ctx.strokeStyle = colorList[0];              
    ctx.strokeRect((300 - sqSize/2), (200 - sqSize/2), sqSize, sqSize);   
    colorList.shift;
    } 

let squareSize: number = 20;
let squareColor: string = 'darkKhaki';

for (let i=0; i<=60; i++){    
    if (i === 0){        
        coloredSquareMaker(squareSize, squareColor);
    } else {
        
        coloredSquareMaker(squareSize * i + 15, colorList[i++] );
    }
}

//for (let c = 0; c  < colorList.length; c++){
    //ctx.strokeStyle = colorList[c];  
