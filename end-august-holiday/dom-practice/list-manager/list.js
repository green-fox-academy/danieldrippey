'use strict';

let foodList = ['bread', 'milk', 'orange', 'tomato'];
let symbolList = ['Up', '>', 'X', 'Down'];

function listMaker () {
  let list = document.createElement("ul");
  document.body.appendChild(list);
}

listMaker();
listMaker();
listMaker();

function settingID () {
  let leftL = document.getElementsByTagName("ul")[0];
  leftL.setAttribute("id", "left")
  let rightL = document.getElementsByTagName("ul")[2];
  rightL.setAttribute("id", "right")
}

settingID();

function listFiller (number) {
  for (let i = 0; i < 4; i++ ) {
    let l = document.createElement("li");
    let ListToFill = document.getElementsByTagName("ul")[number];
    ListToFill.appendChild(l);
  }
}

function buttonFiller (number) {
  for (let i = 0; i < 4; i++ ) {
    let butt  = document.createElement("button");
    let ListToFill = document.getElementsByTagName("ul")[number];
    ListToFill.appendChild(butt);
  }
}

listFiller(0);
buttonFiller(1);
listFiller(2);


function textAdder (array) {
  let textadd = document.getElementsByTagName("li")
  for (let i = 0; i < 4; i++) {
    textadd[i].textContent = array[i];
  }
}

textAdder(foodList);

function buttonAdder (array) {
  let textadd = document.getElementsByTagName("button")
  for (let i = 0; i < 4; i++) {
    textadd[i].textContent = array[i];
  }
}

buttonAdder(symbolList);

let buttonDown = document.getElementsByTagName("button")[3];
  buttonDown.onclick = function () {
    goDown();
}

let buttonUp = document.getElementsByTagName("button")[0];
  buttonUp.onclick = function () {
    goUp();
}

let deleteItem = document.getElementsByTagName("button")[2];
  deleteItem.onclick = function () {
    deleter();
}

let moveItem = document.getElementsByTagName("button")[1];
  moveItem.onclick = function () {
    itemMover();
}

let initial = document.getElementsByTagName("li")[0];
initial.className = "chosen";

function goDown () {
  let items = document.getElementById("left").getElementsByTagName("li");
  if (items.length > 0) {
    if (items[items.length-1].className === "chosen") {
      items[items.length-1].classList.remove("chosen");
      items[0].className = "chosen";
    } else { 
        for (let i = 0; i < 4; i++) {
          if (items[i].className === "chosen") {
            items[i].classList.remove("chosen");
            items[i+1].className = "chosen";
            return;
          }
        }
      }
  }
}

function goUp () {
  let items = document.getElementById("left").getElementsByTagName("li");
  if (items.length > 0) {
    if (items[0].className === "chosen") {
      items[0].classList.remove("chosen");
      items[items.length-1].className = "chosen";
    } else {
        for (let i = 0; i < 4; i++) {
          if (items[i].className === "chosen") {
            items[i].classList.remove("chosen");
            items[i-1].className = "chosen";
            return;
          }
        }
      }
  }
}

function deleter () {
  let items = document.getElementById("left").getElementsByTagName("li");
  if (items.length > 0) {
    let parentTag = document.getElementsByTagName("ul")[0];
    for (let i = 0; i < 4; i++) {
      if (items[i].className === "chosen") {
        parentTag.removeChild(items[i]);
          if (items[0] !== undefined) {
            items[0].className = "chosen";
            return; 
          } else {
            return
          }
      }
    }
  }
}

function itemMover () {
  let itemsFrom = document.getElementById("left").getElementsByTagName("li");
  if (itemsFrom.length > 0) {
  let itemsFor = document.getElementById("right").getElementsByTagName("li");
  let parentTag = document.getElementsByTagName("ul")[0];
  for (let i = 0; i < 4; i++) {
    if (itemsFrom[i].className === "chosen") {
      let textToCopy = itemsFrom[i].textContent;
        for (let j = 0; j < 4; j++) {
          if (itemsFor[j].textContent === "") {
            itemsFor[j].textContent = textToCopy;
            parentTag.removeChild(itemsFrom[i]);
            if (itemsFrom[0] !== undefined) {
            itemsFrom[0].className = "chosen";
            return }  else {
              return
            }
          }
        } 
      }   
    }   
  }  
}