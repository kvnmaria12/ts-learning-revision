"use strict";
class MyInfo {
    constructor(myId, myAccNo) {
        this.myId = myId;
        this.myAccNo = myAccNo;
    }
    get myAccount() {
        return this.myAccNo;
    }
    set myAccount(value) {
        this.myAccNo = value;
    }
}
const myInfoDemo = new MyInfo('23', 34343);
console.log(myInfoDemo.myAccount);
myInfoDemo.myAccount = 3332;
console.log(myInfoDemo.myAccount);
class SeatNoAllotment {
}
const seatNo = new SeatNoAllotment();
seatNo.S2 = 23;
seatNo.S3 = 24;
seatNo.S6 = 84;
console.log(seatNo);
//# sourceMappingURL=oops.js.map