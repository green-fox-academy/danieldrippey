'use strict';

let button = document.querySelector("button");

let counter = 0;

function getTheTime (event){
    console.log(event.timeStamp);
    button.disabled = true;
    //button.removeEventListener('click', getTheTime); <- this is the other way to prevent the button to work
}

button.addEventListener('click', getTheTime );
