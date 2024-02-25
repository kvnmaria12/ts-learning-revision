class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return this.firstName + ' ' + this.lastName;
  }

  //   never use protected keyword in your code
  protected walk(): void {
    console.log('walking');
  }

  talk(): void {
    console.log('talking');
  }
}

const person = new Person('Kvn', 'Maria');
console.log(person.fullName);

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest(): void {
    super.walk();
    console.log('Taking Test1');
  }

  //   overriding talk method from
  override talk(): void {
    console.log('overriding talk method');
  }
}

let student = new Student(1, 'Kevin', 'Maria');
console.log(student.fullName);
student.takeTest();
student.talk();

class Teacher extends Person {
  override get fullName(): string {
    return 'Professeor' + super.fullName;
  }
}

let teacher = new Teacher('Daniel', 'Sekar');
