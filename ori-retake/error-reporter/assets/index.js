'use strict';

window.addEventListener('load', event => {
  fetch('/users') 
  .then(res => res.json())
  .then(res => nameLister(res.users));
});


function nameLister (reporters) {
  reporters.forEach(reporter => {
    let namelist = document.getElementById('namelist');
    let namelistitem = document.createElement('option');
    namelistitem.textContent = reporter.name;
    namelistitem.value = reporter.id;
    namelist.appendChild(namelistitem);
  });
} 
 
let myForm = document.getElementById('report');
myForm.addEventListener('submit', event => { 
  event.preventDefault();
  let myreporter = document.getElementById('namelist').value;
  console.log(myreporter);
  let mymanufacturer = document.getElementById('manufacturer').value;
  console.log(mymanufacturer);
  let myserial = document.getElementById('serial_number').value;
  console.log(myserial);
  let mydescr = document.getElementById('description').value;
  console.log(mydescr);
  fetch('/tickets', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }, 
    body: JSON.stringify({ reporter: namelist.value, manufacturer: manufacturer.value, serial_number: serial_number.value, description: description.value})
  })
});

