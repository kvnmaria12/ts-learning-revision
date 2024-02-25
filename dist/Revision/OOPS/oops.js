"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error('Invalid Amount');
        }
        this._balance += amount;
    }
    getBalance() {
        return this._balance - this.calculateTax(3000);
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value < 0) {
            throw new Error('Invalid Value');
        }
        this._balance = value;
    }
    calculateTax(taxAmount) {
        return this._balance - taxAmount;
    }
}
const account = new Account(23, 'Kvn', 23000);
account.balance = 400;
console.log(account.balance);
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = 'Kevin';
seats.A2 = 'Jacob';
console.log(seats);
//# sourceMappingURL=oops.js.map