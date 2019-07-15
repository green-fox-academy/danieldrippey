"use strict";

import person from "./person";

class GreenFoxStudent extends person {
  gitHubUserName: string;
  frustrationLevel: number = 100;

  constructor(
    name: string,
    age: number,
    height: number,
    gitHubUsername: string
  ) {
    super(name, age, height);
    this.gitHubUserName = gitHubUsername;
  }

Socialize(){
    console.log("I do not know the name of my friends anymore");
    }
}

let averageJoe: person = new person("Joe", 56, 182);
averageJoe.Socialize();

let sandor: GreenFoxStudent = new GreenFoxStudent ('Sandor', 25, 185, 'eksandor');
sandor.Socialize();
console.log(sandor instanceof person);

export default GreenFoxStudent;