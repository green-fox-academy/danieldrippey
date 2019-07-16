'use strict';

import {Bird} from './zoo/zoo';

interface Flyable {
    land(): void;
    fly(): void;
    takeOff(): void;
}

abstract class Veichle {
    speed: number;
    color: string;
    numberOfWheels: number;

    constructor(speed: number, color: string, numberOfWheels: number){
        this.speed = speed;
        this.color = color;
        this.numberOfWheels = numberOfWheels;
    }
}

class Helicopter extends Veichle implements Flyable  {
    land(): string {
    return 'Watch out, this helicopter is landing'
    }
    fly(){};
    takeOff(){};
}



/* Extend Bird from your abstract Animal class (zoo exercise)
implement yourˇFlyable interface  */ */