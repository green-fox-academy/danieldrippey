'use strict';

abstract class instrument {
    abstract name: string;
    play(): void{};
    constructor(){};
}

abstract class stringedInstrument extends instrument {
    abstract numberOfStrings: number;
    sound(): void{};
}

class ElectricGuitar extends stringedInstrument {
    name: string = 'Electric Guitar';
    numberOfStrings: number;
    constructor(numberOfStrings: number = 6){
        super ();
        this.numberOfStrings = numberOfStrings;
    }
    sound(): string {
        return 'Twang';
    };

    play(){
        console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}.`);
    }

}

class BassGuitar extends stringedInstrument {
    name: string = 'Bass Guitar';
    numberOfStrings: number;
    constructor(numberOfStrings: number = 4){
        super ();
        this.numberOfStrings = numberOfStrings;
    }
    sound(): string {
        return 'Duum-duum-duum';
    };

    play(){
        console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}.`);
    }
}

class Violin extends stringedInstrument {
    name: string = 'Violin';
    numberOfStrings: number;
    constructor(numberOfStrings: number = 4){
        super ();
        this.numberOfStrings = numberOfStrings;
    }
    sound(): string {
        return 'Screech';
    };

    play(){
        console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}.`);
    }
}

export {instrument, stringedInstrument, ElectricGuitar, BassGuitar, Violin}; 