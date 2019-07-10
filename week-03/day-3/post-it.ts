'use strict'

class postIt {

backGroundColor: string;
text: string;
textColor: string;

constructor(backGroundColor: string, text: string, textColor: string){
    this.backGroundColor = backGroundColor;
    this.text = text;
    this.textColor = textColor;
    }

} 

let firstPostIt: postIt = new postIt ("orange", "Idea 1", "blue");
let secondPostIt: postIt = new postIt ("pink", "Awesome", "black");
let thirdPostIt: postIt = new postIt ("yellow", "Superb!", "green");

console.log(firstPostIt);



/* Create a few example post-it objects:
an orange with blue text: "Idea 1"
a pink with black text: "Awesome"
a yellow with green text: "Superb! */