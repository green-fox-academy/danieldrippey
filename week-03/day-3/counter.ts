'use strict';

class Counter {

    int: number;
    initial: number;

    add(num: number = 100){
        if (num === 0){
            this.int += 1; 
        } else {
        this.int = this.int + num;}
    }

    get(): string  {
        console.log("the counter number is " + this.int);
        return "the counter is" + this.int;   
    }

    reset(): number {
        return this.int = this.initial;
    }

    constructor(int: number = 0){
        this.int = int;
        this.initial = this.int;
    }
}

let myCounter: Counter = new Counter(20);
console.log(myCounter);
myCounter.add();
myCounter.get();
myCounter.reset();
console.log(myCounter);




/* Create a Counter class
which has an integer property
when creating it should have a default value 0 or we can specify it when creating

or we can add() without parameters just increasing the counter's value by one
and we can get() the current value as string
also we can reset() the value to the initial value */