'use strict'

let lineToChange = document.querySelector('h1');

window.addEventListener('keydown', logKey);

function logKey(event) {
console.log(event);
lineToChange.textContent = `Last pressed key code is: ${event.code}`;
}

