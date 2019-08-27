'use strict';

let button = document.getElementById("partybutton");
//button.classList.toggle("party");
let body = document.getElementsByTagName("body")[0];

button.onclick = function () {
    body.classList.toggle("party");
}