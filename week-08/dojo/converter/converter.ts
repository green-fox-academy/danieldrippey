export function converter(amount: number) :string {
    let lastDigit:number = amount % 10;
    let secondDigit: number = Math.floor(amount/10);
    let thirdDigit: number = Math.floor(amount/100);

    let numberInArray: number []=[];
    let sNumber = amount.toString();
    for (let i: number = 0; i < sNumber.length; i++) {
    numberInArray.push(+sNumber.charAt(i));
    }

    let oneDigit: string[] = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let twoDigits: string [] =['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eightteen', 'nineteen'];
    let multiplesOfTen: string [] = ['ten', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if(amount <= 0) {
        return 'You can only send positive amount, dummy!';
    } else if (amount<10) {
        return `${amount} $ (${oneDigit[amount]})`;
    } else if (amount % 10 === 0 && amount < 100){
        return `${amount} $ (${multiplesOfTen[secondDigit - 1]})`;
    } else if(10<amount&& amount<=19) {
        return `${amount} $ (${twoDigits[amount - 11]})`;
    } else if (amount < 100) {
        return `${amount} $ (${multiplesOfTen[secondDigit - 1]} ${oneDigit[lastDigit]})`;
    }   else if (amount % 100 === 0) {
        return `${amount} $ (${oneDigit[thirdDigit]} hundred)`;
    } else {
        return `${amount} $ (${oneDigit[numberInArray[0]]} hundred and ${twoDigits[(numberInArray[1] * 10 + numberInArray[2]) - 11]})`;
    }
}