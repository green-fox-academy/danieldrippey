let numberToMultiply: number = 12;

let twice: number = numberToMultiply * 2;
console.log(twice);

let anotherNumberToMultiply: number = 11;
let twiceAnOtherOne: number = anotherNumberToMultiply * 2;
console.log(twiceAnOtherOne);

function numberToChangeAndPrint (inputNumber: number = 1000): void { 
    //100 a default value
    let doubledValue: number = inputNumber * 2;
    console.log(doubledValue);
}
numberToChangeAndPrint ();

function multiplication (base: number, another: number): number {
    return base * another;
}

console.log(multiplication(2, 4));
let result: number = multiplication(3, 5);
console.log(result);
