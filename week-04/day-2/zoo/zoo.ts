'use strict';

abstract class Animals {
    name: string;
    age: number;
    size: string;
    numberOfLegs: number;

    constructor(name: string, age: number, size: string, numberOfLegs: number) {
        this.name = name;
        this.age = age;
        this.size = size;
        this.numberOfLegs = numberOfLegs;
    };

    abstract getName(): void;
    abstract breed(): void;
}

class Mammal extends Animals {
    hasFur : boolean;
    speed: string;

    getName(): string {
        return this.name;
    };
    breed(): string {
        return 'pushing miniature versions out';
    };

    constructor(name: string, age: number, size: string, numberOfLegs: number, hasFur: boolean, speed: string){
        super(name, age, size, numberOfLegs);
        this.hasFur = hasFur;
        this.speed = speed;
    }
}

class Reptile extends Animals {
    venomous : boolean;
    speed: string;

    getName(): string {
        return this.name;
    }
    breed(): string {
        return "laying eggs";
    };

    constructor(name: string, age: number, size: string, numberOfLegs: number, venomous: boolean, speed: string){
        super(name, age, size, numberOfLegs);
        this.venomous = venomous;
        this.speed = speed;
    }
}

class Bird extends Animals {
    canFly : boolean;
    speed: string;

    getName(): string {
        return this.name;
    };
    breed(): string {
        return "laying eggs"
    };

    constructor(name: string, age: number, size: string, numberOfLegs: number, canFly: boolean, speed: string){
        super(name, age, size, numberOfLegs);
        this.canFly = canFly;
        this.speed = speed;
    }
}

export {Animals, Mammal, Reptile, Bird};