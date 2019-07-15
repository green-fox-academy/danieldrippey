'use strict';

class Flower {
    color: string;
    waterLevel: number;

    constructor (color: string){
        this.color = color;
        this.waterLevel = 0;
    }

    waterStatus (){
        if (this.waterLevel < 6){
            console.log(`${this.color} flower needs water.`);
        } else{
            console.log(`${this.color} flower does not need water.`);
        }
    }

    watering (waterAmount: number){
        //console.log("watering with ");
        this.waterLevel = this.waterLevel + waterAmount*0.75;
    }
}

export default Flower;

/* let blue: Flower = new Flower("yellow");
blue.waterStatus();
blue.watering(8);
blue.waterStatus();
blue.watering(30);
blue.waterStatus(); 
 */