'use strict'

document.addEventListener('keydown', event => {
  if (event.keyCode === 32) {
    alert('this will toggle play / pause');
  }
});

document.addEventListener('keydown', event => {
  if (event.keyCode === 78) {
    alert('this will play the next track');
  }
});   

document.addEventListener('keydown', event => {
  if (event.keyCode === 80) {
    alert('this will play the previous track');
  }
});

document.addEventListener('keydown', event => {
  if (event.keyCode === 27) {
    alert('this will mute the volume');
  }
});