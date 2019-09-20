'use strict';

let getRequest = new XMLHttpRequest();
getRequest.open('GET', 'http://localhost:8000/tickets');
getRequest.onload = function() {
  console.log(getRequest.status);
  let myData = JSON.parse(getRequest.responseText);
  let tableRows = myData.tickets;
  tableMaker(tableRows);
}
getRequest.send();

function tableMaker (data) {
  for (let i = 0; i < data.length; i++) {
    let row = document.createElement('tr');
    let id = document.createElement('td');
    let reporter = document.createElement('td');
    let serial = document.createElement('td');
    let description = document.createElement('td');
    let date = document.createElement('td');
    let actions = document.createElement('td');
    id.innerText = data[i].id;
    reporter.innerText = data[i].reporter;
    serial.innerText = data[i].serial_number;
    description.innerText = data[i].description;
    date.innerText = data[i].reported_at;
    actions.setAttribute('class', 'deletebutton')
    document.getElementsByTagName('tbody')[0].appendChild(row);
    document.getElementsByTagName('tr')[i+1].appendChild(id);
    document.getElementsByTagName('tr')[i+1].appendChild(reporter);
    document.getElementsByTagName('tr')[i+1].appendChild(serial);
    document.getElementsByTagName('tr')[i+1].appendChild(description);
    document.getElementsByTagName('tr')[i+1].appendChild(date);
    document.getElementsByTagName('tr')[i+1].appendChild(actions);
    deleteButtonMaker(i, data);
    }
    makeTheButtonWork()
  } 

function deleteButtonMaker (i, data) {
  let btn = document.createElement("button");
  btn.innerHTML = "delete"
  btn.setAttribute('data-id', data[i].id);
  let buttonList = document.getElementsByClassName('deletebutton');
  buttonList[i].appendChild(btn)
}

function makeTheButtonWork () {
document.querySelectorAll('button')
  .forEach(button => {
    button.addEventListener('click', deleteFromDB);
  });
}

function deleteFromDB (event) {
  const ticketId = event.target.dataset.id;
  fetch(`/tickets/${ticketId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': 'voal',
    },
  })
  event.target.parentNode.parentNode.remove();
};  


