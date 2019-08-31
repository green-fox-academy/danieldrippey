'use strict';

let myFirstRequest = new XMLHttpRequest();
myFirstRequest.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=qQfQCdWgOfY20fFJeRqKrE7EzguoYv9r&q=cat&limit=20&offset=0&rating=G&lang=en');
myFirstRequest.onload = function() {
    let myData = JSON.parse(myFirstRequest.responseText);
    smallGifMaker(myData);
}
myFirstRequest.send();

 function smallGifMaker (inputData) {
    for (let i = 0; i < 16; i++) {
    let sourceUrl = inputData.data[i].images.fixed_height_small_still.url;
    let sourceUrlofBig = inputData.data[i].images.original.url;
    let newPic = document.createElement('img');
    newPic.setAttribute('src', sourceUrl );
    newPic.setAttribute('alt', '#');
    newPic.addEventListener("click", function(){
        bigPicMaker(sourceUrlofBig);
    })
    document.body.appendChild(newPic);
    }
} 

function bigPicMaker (input) {
    let bigPic = document.getElementById("big");
    bigPic.setAttribute('src', input);
}
