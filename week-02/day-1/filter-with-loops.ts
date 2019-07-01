'use strict'

let originalNames: string[] = ["Captain Marvel", "winter Soldier", "Black Panther", "Sloth"];

function filterNamesLongerThanFive(names: string[]): string[] {
    let filteredNames: string[] = [];
    for (let index: number = 0; index < names.length; index++) {
        if (names[index].length > 5) {
            filteredNames.push(names[index]);
        }   
}
return filteredNames;
}

console.log(filterNamesLongerThanFive(originalNames));