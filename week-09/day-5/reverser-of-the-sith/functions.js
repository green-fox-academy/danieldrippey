'use strict';

let testText = 'This is my example sentence. Just for fun. This is third test sentence. And a fourth one. ';

let extraSentencesOfYoda = [
  'Hrrmmm.', 'Hmm.', 'Yes, hrrmmm.', 'Yeesssssss.', 'Herh herh herh.', 'Arrgh.', 'Uhmm.'
];

function yodaSpeaker (words) {
  let convertedSentences = [];
  let wordsAndDot = words.split('. ');
  for (let i = 0; i < wordsAndDot.length-1; i++) {
    let splitted = wordsAndDot[i].split(' ');
    let oneSentenceOfYoda = changeWordOrder(splitted).join(' ') + '.';
    convertedSentences.push(toTitleCase(oneSentenceOfYoda));
  }
  return addExtraSentences(convertedSentences);
}

function changeWordOrder (array) {
  let changedOrderWords = [];
  for (let i = 0; i < array.length; i+=2) {
    if (array[i+1]) {
    changedOrderWords.push(array[i+1]);
    changedOrderWords.push(array[i]);
    } else {
      changedOrderWords.push(array[i]);
    }
  }  
  return changedOrderWords;
}

function toTitleCase (text) {
  return text.substr(0, 1).toUpperCase() + text.substr(1).toLowerCase();;
}

function addExtraSentences(array) {
  let FinalYodaSentences = [];
  for (let i = 0; i < array.length; i++) {
    FinalYodaSentences.push(array[i]);
    let randomNum = Math.floor(Math.random() * (extraSentencesOfYoda.length - 0)) + 0;
    FinalYodaSentences.push(extraSentencesOfYoda[randomNum]);
  }
  return FinalYodaSentences.join(' ');
}

console.log(yodaSpeaker(testText));
