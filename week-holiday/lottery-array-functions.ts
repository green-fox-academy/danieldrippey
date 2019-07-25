'use strict';

function mostCommonElement (inputArray: any[]): any {
    inputArray.sort();
    let counterArray: any[] = [];
    let counter: number = 0;
    let topOccurence: number = 0;
    let mostFrequentItem: any = '';

    for (let i: number = 0; i < inputArray.length; i++ ) {
        if (counterArray.includes(inputArray[i])) {
            counter += 1;
        } else {
            counterArray.push(inputArray[i]);
            counter = 1;
        }

        if (counter > topOccurence) {
            topOccurence = counter;
            mostFrequentItem = inputArray[i];
        }
    }
    return mostFrequentItem;
} 

function topFiveElement (inputArray: any[]): any[] {
    let listOfTopThree: any[] = [];
    let arrayToCheck = inputArray;
        for (let i: number = 0; i < 5; i++){
            let topOne = mostCommonElement(arrayToCheck);
            listOfTopThree.push(topOne);
            arrayToCheck = arrayToCheck.filter(elements => elements !== topOne);
        }
    return listOfTopThree;
}

export { mostCommonElement, topFiveElement};