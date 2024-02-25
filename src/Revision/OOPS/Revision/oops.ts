class MyInfo {
  //   public myId: string;
  //   constructor(myId: string) {
  //     this.myId = myId;
  //   }

  //

  constructor(public myId: string, private myAccNo: number) {}

  get myAccount() {
    return this.myAccNo;
  }

  set myAccount(value: number) {
    this.myAccNo = value;
  }
}

const myInfoDemo = new MyInfo('23', 34343);
console.log(myInfoDemo.myAccount);
myInfoDemo.myAccount = 3332;
console.log(myInfoDemo.myAccount);

// How to add property dynamically
class SeatNoAllotment {
  // Index Signature - to add property dynamically
  [seatNo: string]: number;
}

const seatNo = new SeatNoAllotment();
seatNo.S2 = 23;
seatNo.S3 = 24;
seatNo.S6 = 84;

console.log(seatNo);
