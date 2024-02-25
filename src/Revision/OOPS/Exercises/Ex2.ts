class Human {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return this.firstName + ' ' + this.lastName;
  }

  protected paySlip(): void {
    console.log('payslip printing');
  }
}

class Employee extends Human {
  constructor(public salary: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  printPaySlip() {
    super.paySlip();
  }
}
