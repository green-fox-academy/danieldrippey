'use strict';

class Animal {
    name: string;
    hunger: number;
    thirst: number;

    public eat(): number {
        this.hunger = this.hunger -1;
        return this.hunger;
    }

    public drink(): number {
        this.thirst = this.thirst -1;
        return this.thirst;
    }

    play(): number {
        this.thirst = this.thirst + 1;
        this.hunger = this.hunger + 1;
        return this.thirst, this.hunger;
    }

    constructor (name: string) {
        this.name = name;
        this.hunger = 50;
        this.thirst = 50;
    }   
}

let Zebra: Animal = new Animal("Zebra");
let Otter: Animal = new Animal("Otter");
let Whale: Animal = new Animal("Whale");
let Beluga: Animal = new Animal("Beluga");

/* when creating a new animal object these values are created with the default 50 value
Every animal can eat() which decreases their hunger by one
Every animal can drink() which decreases their thirst by one
Every animal can play() which increases both by one */