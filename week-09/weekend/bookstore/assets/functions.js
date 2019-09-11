'use strict';

let myFilter = document.forms['filtering'];
myFilter.addEventListener('submit', function(e) {
  e.preventDefault();
  let filterList = [];
  filterList.push(document.getElementById('myList').value);
  filterList.push(document.getElementById('gtp').value);
  filterInputRequest(filterList);
  
});

function filterInputRequest (inputValue) {
  let myUrl = '';
  if (inputValue[0] === '') {
    myUrl = 'http://localhost:3050/bookstoreApi/?pgt=' + inputValue[1];
  } else {
   myUrl = 'http://localhost:3050/bookstoreApi/?category=' + inputValue[0] + '&pgt=' + inputValue[1];
  } 
  let inputRequest = new XMLHttpRequest();
  inputRequest.open('GET', myUrl);
  inputRequest.onload = function() {
    console.log(inputRequest.status);
    let myInputData = JSON.parse(inputRequest.responseText);
    let tableReload = document.querySelector('tbody');
    tableReload.innerHTML = "";
    tableMaker(myInputData);
  }
  inputRequest.send();
} 

let getRequest = new XMLHttpRequest();
getRequest.open('GET', 'http://localhost:3050/bookstoreApi');
getRequest.onload = function() {
  console.log(getRequest.status);
  let myData = JSON.parse(getRequest.responseText);
  tableMaker(myData);
}
getRequest.send();

function tableMaker (data) {
  for (let i = 0; i < data.length; i++) {
    let row = document.createElement('tr');
    let bookTitle = document.createElement('td');
    let bookAuthor = document.createElement('td')
    let bookCategory = document.createElement('td')
    let bookPublisher = document.createElement('td')
    let bookPrice = document.createElement('td')
    bookTitle.innerText = data[i].book_name;
    bookAuthor.innerText = data[i].aut_name;
    bookCategory.innerText = data[i].cate_descrip;
    bookPublisher.innerText = data[i].pub_name;
    bookPrice.innerText = data[i].book_price;
    document.getElementsByTagName('tbody')[0].appendChild(row);
    document.getElementsByTagName('tr')[i+1].appendChild(bookTitle);
    document.getElementsByTagName('tr')[i+1].appendChild(bookAuthor);
    document.getElementsByTagName('tr')[i+1].appendChild(bookCategory);
    document.getElementsByTagName('tr')[i+1].appendChild(bookPublisher);
    document.getElementsByTagName('tr')[i+1].appendChild(bookPrice);
  }
} 