'use strict';

import Flower from './flower';
import Tree from './tree';

class Garden{

    trees: Tree[] = [];
    flowers: Flower[] = [];

    constructor(){}
    
    addTree(newTree: Tree){
        this.trees.push(newTree);
    }

    addFlower(newFlower: Flower){
        this.flowers.push(newFlower);
    }

    whatIsInThegarden(){
        console.log(`In this garden, you can find ${this.trees.length} trees and ${this.flowers.length} flowers.`);
    }

    gardenStatus(){
        for (let i = 0; i < this.trees.length; i++ ){
            this.trees[i].waterStatus();
        }
        for (let j = 0; j < this.flowers.length; j++ ){    
            this.flowers[j].waterStatus();
        }
    }

    thirstyPlants(): number {
        let thirstyPlantSum: number = 0;
        for (let i: number = 0; i < this.trees.length; i++){
            if (this.trees[i].waterLevel < 10){
                thirstyPlantSum += 1;}
        }
        for (let i: number = 0; i < this.flowers.length; i++){
            if (this.flowers[i].waterLevel < 6){
                thirstyPlantSum += 1;}
    } return thirstyPlantSum;}

    gardenWatering(watering: number){
        console.log("watering with " + watering);
        watering = watering / this.thirstyPlants();
        for (let i: number = 0; i < this.trees.length; i++){
            if (this.trees[i].waterLevel < 10){
                this.trees[i].watering(watering);}
        }
        for (let i: number = 0; i < this.flowers.length; i++){
            if (this.flowers[i].waterLevel < 6){
                this.flowers[i].watering(watering);
            }
        }
     } 
}

export default Garden;


let garden: Garden = new Garden;
let brown: Tree = new Tree("brown");
let green: Tree = new Tree("green");
let yellow: Flower = new Flower("yellow");
let red: Flower = new Flower("red");

garden.addFlower(yellow);
garden.addFlower(red);
garden.addTree(brown);
garden.addTree(green);

garden.whatIsInThegarden();

garden.gardenStatus();
garden.gardenWatering(40);
garden.gardenStatus();
garden.gardenWatering(70);
garden.gardenStatus();