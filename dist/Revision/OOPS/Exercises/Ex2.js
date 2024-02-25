"use strict";
class Human {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    paySlip() {
        console.log('payslip printing');
    }
}
class Employee extends Human {
    constructor(salary, firstName, lastName) {
        super(firstName, lastName);
        this.salary = salary;
    }
    printPaySlip() {
        super.paySlip();
    }
}
//# sourceMappingURL=Ex2.js.map