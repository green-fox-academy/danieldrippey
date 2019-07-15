'use strict'

import Flower from './flower';
import Tree from './tree';
import Garden from './garden';



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