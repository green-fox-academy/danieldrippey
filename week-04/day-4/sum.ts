'use strict'

class mySum {

    numberList: number[];

    summarizer (): number {
        let sumOfTheList: number = 0;
        for (let i = 0; i < this.numberList.length; i++) {
        sumOfTheList += this.numberList[i];
        }
        return sumOfTheList;        
    }

    constructor (numberList: number[]){
        this.numberList = numberList;
    }

 }

export { mySum };

