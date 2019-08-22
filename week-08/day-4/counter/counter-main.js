'use strict';

function resultUpdater (listLength) {
  let result = document.getElementsByClassName('result');
  result[0].textContent = listLength; 
}

function itemCounter () {
  let numberOfListItems = document.getElementsByTagName('li');
  resultUpdater(numberOfListItems.length);
}

const button = document.querySelector('button');
button.addEventListener('click', itemCounter);
