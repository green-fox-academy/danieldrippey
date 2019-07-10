'use strict';

class Sharpie {
    color: string;
    width: number;
    inkAmount: number = 100;

    use(): number {
        return this.inkAmount = this.inkAmount - 10;
    }

    constructor (color: string, width: number) {
        this.color = color;
        this.width = width;
    }
}

let blueSharpie: Sharpie = new Sharpie ("blue", 55.6);
blueSharpie.use();
console.log(blueSharpie);

/* We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
When creating one, we need to specify the color and the width
Every sharpie is created with a default 100 as inkAmount
We can use() the sharpie objects
which decreases inkAmount */