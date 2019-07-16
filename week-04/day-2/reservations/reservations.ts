'use strict';

interface Reservationy {
    getDowBooking(): string;
    getCodeBooking(): string;
  }

class Reservation implements Reservationy {
    dayList : string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    orderNumber: number;

    constructor(orderNumber: number) {
        this.orderNumber = orderNumber;
    }

    getDowBooking(): string {
        let randomDay = this.dayList[Math.floor(Math.random()* this.dayList.length)];
        return randomDay;
    }

    getCodeBooking(): string{
        let randomCode: string = ''
        let chars: string = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";
        let codeLength: number = 8;
        for (let i: number = 0; i < codeLength; i++) {
            let rNum = Math.floor(Math.random() * chars.length);
            randomCode += chars.substring(rNum,rNum+1);
        }
        return randomCode;
    }

bookingMaker() {
    console.log(`Booking${this.orderNumber} ${this.getCodeBooking()} for ${this.getDowBooking()}`);
    }
}  


let myNewBooking: Reservation = new Reservation(1);
console.log(myNewBooking.getDowBooking());
console.log(myNewBooking.getCodeBooking());
myNewBooking.bookingMaker();