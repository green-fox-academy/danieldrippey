'use strict';

class person {
    name: string;
    age: number;
    height: number;

    constructor (name: string, age: number, height: number){
        this.name = name;
        this.age = age;
        this.height = height;
    }

    askMeHowIAm(){
        console.log("I am fine");
    }

    Socialize(){
        console.log("I'm seeing my friends every day");
    }
}

let averageJoe: person = new person ("John", 25, 180);


export default person;