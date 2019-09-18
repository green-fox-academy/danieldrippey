'use strict';

let myForm = document.getElementById('submit-form');
myForm.addEventListener('submit', event => {
  let myAlias = document.getElementById('alias').value;
  let myUrl = document.getElementById('url').value;
  event.preventDefault();
  fetch('/api/links', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify({ url: url.value, alias: alias.value})
  })
  .then(res => res.json()).then(function(res) {
    if (res.message === 'Alias already in use') {
        denyAliasReply();
    } else {
        acceptAliasReply(myAlias, myUrl, res[0].secretCode);
    } 
  });
});

function acceptAliasReply (inputAlias, inputUrl, inputSecretCode) { 
   let reply = document.getElementById('response');
   reply.innerHTML = `Congratulations, your URL:   <span> ${inputUrl} </span> is aliased to <span> ${inputAlias} </span> and your secret code is <span>  ${inputSecretCode} </span>.`
   document.getElementById('submit-form').reset();
}

function denyAliasReply () {
    let reply = document.getElementById('response');
   reply.innerHTML = `<span id="denial"> Your alias is already in use! </span>`
}
