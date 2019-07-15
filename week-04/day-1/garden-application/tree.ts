'use strict';

class Tree {
    color: string;
    waterLevel: number;

    constructor (color: string){
        this.color = color;
        this.waterLevel = 0;
    }

    waterStatus (){
        if (this.waterLevel < 10){
            console.log(`${this.color} tree needs water.`);
        } else{
            console.log(`${this.color} tree does not need water.`);
        }
    }

    watering (waterAmount: number){
        //console.log("watering with " + waterAmount);
        this.waterLevel = this.waterLevel + waterAmount*0.4;
    }
}

export default Tree;