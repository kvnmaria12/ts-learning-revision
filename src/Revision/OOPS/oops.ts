class Account {
  //   readonly id: number;
  //   owner: string;
  //   private _balance: number;
  //   nickName?: string;

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {
    this.id = id;
    this.owner = owner;
    this._balance = _balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error('Invalid Amount');
    }

    this._balance += amount;
  }

  getBalance(): number {
    return this._balance - this.calculateTax(3000);
  }

  get balance(): number {
    return this._balance;
  }

  set balance(value: number) {
    if (value < 0) {
      throw new Error('Invalid Value');
    }
    this._balance = value;
  }

  private calculateTax(taxAmount: number): number {
    return this._balance - taxAmount;
  }
}

const account = new Account(23, 'Kvn', 23_000);
// console.log(account);
// account.deposit(300);
// console.log(account);
// console.log(typeof account);
// console.log(account instanceof Account); // true
// get balance using methods
// console.log(account.getBalance());
// console.log(account.balance);

// setting the balance using setter
account.balance = 400;
// getting the balance using getter
console.log(account.balance);

// Indexed Signature(used to create object dynamically)
class SeatAssignment {
  // A1, A2....
  // Kevin, Jesus
  // Index Signature Property
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = 'Kevin';
seats.A2 = 'Jacob';
console.log(seats);
