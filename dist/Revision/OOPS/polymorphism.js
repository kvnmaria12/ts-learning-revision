"use strict";
class Person2 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    walk() {
        console.log('walking');
    }
    talk() {
        console.log('talking');
    }
}
class Student2 extends Person2 {
    constructor(id, firstName, lastName) {
        super(firstName, lastName);
        this.id = id;
    }
    takeTest() {
        console.log('Taking Test1');
    }
}
class Teacher2 extends Person2 {
    get fullName() {
        return 'Professor ' + super.fullName;
    }
}
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
printNames([new Student2(1, 'Kvn', 'Maria'), new Teacher2('Daniel', 'Sekar')]);
//# sourceMappingURL=polymorphism.js.map