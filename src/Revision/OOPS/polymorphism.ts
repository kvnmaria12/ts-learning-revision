class Person2 {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return this.firstName + ' ' + this.lastName;
  }

  walk(): void {
    console.log('walking');
  }

  talk(): void {
    console.log('talking');
  }
}

class Student2 extends Person2 {
  constructor(public id: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest(): void {
    console.log('Taking Test1');
  }
}

class Teacher2 extends Person2 {
  override get fullName(): string {
    return 'Professor ' + super.fullName;
  }
}

// Called as PolyMorphism
function printNames(people: Person2[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}

printNames([new Student2(1, 'Kvn', 'Maria'), new Teacher2('Daniel', 'Sekar')]);
