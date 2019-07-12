'use strict';


function countToTen (start: number){
    console.log(start);
    if (start === 10){
        return;
    }
    countToTen(start + 1);
}

countToTen(0);