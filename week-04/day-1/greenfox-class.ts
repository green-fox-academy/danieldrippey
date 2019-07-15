'use strict';

import GreenFoxStudent from './GFStudents';

class GreenFoxClass {
    classMembers: GreenFoxStudent[]; 

    constructor(){
        this.classMembers = [];   
    } 

    registerStudents(student: GreenFoxStudent){
        this.classMembers.push(student);
    }
}

let create: GreenFoxClass = new GreenFoxClass;
let peter: GreenFoxStudent = new GreenFoxStudent("Petya", 27, 188, "petyagithub");
let thomas: GreenFoxStudent = new GreenFoxStudent("Tom", 47, 169, "tomigithub");

create.registerStudents(peter);
create.registerStudents(thomas);

console.log(create.classMembers);