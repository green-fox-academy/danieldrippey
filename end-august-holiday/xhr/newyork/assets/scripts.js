'use strict';

let request = new XMLHttpRequest();
request.open('GET', 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=apollo&fq=science&api-key=pWExdD1WJcs2fPBI26opTvOoIzRAwsmJ');
request.onload = function() {
  let myData = JSON.parse(request.responseText);
    for (let i = 0; i < 10; i++) { 
      let articleTitle = myData.response.docs[i].headline.main;
      let articleDate = myData.response.docs[i].pub_date;
      let articleSnippet = myData.response.docs[i].snippet;
      let articleLink = myData.response.docs[i].web_url;
    listItemMaker(articleTitle, articleDate, articleSnippet, articleLink);
    }
}
request.send();

function listItemMaker (title, date, snippet, link) {
    let listTitle = document.createElement("h2");
    listTitle.textContent = title + ": ";
    document.body.appendChild(listTitle);
    let listSection = document.createElement("ul");
    document.body.appendChild(listSection);
    let listLine1 = document.createElement("li");
    listLine1.innerText = "date: " + date;
    listSection.appendChild(listLine1);
    let listLine2 = document.createElement("li");
    listLine2.innerText = "snippet: " + snippet;
    listSection.appendChild(listLine2);
    let listLine3 = document.createElement("a");
    listLine3.innerText = "Jump to article";
    listLine3.setAttribute("href", link )
    listSection.appendChild(listLine3);
}