"use strict";
class Person {
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
const person = new Person('Kvn', 'Maria');
console.log(person.fullName);
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        super.walk();
        console.log('Taking Test1');
    }
    talk() {
        console.log('overriding talk method');
    }
}
let student = new Student(1, 'Kevin', 'Maria');
console.log(student.fullName);
student.takeTest();
student.talk();
class Teacher extends Person {
    get fullName() {
        return 'Professeor' + super.fullName;
    }
}
let teacher = new Teacher('Daniel', 'Sekar');
//# sourceMappingURL=inheritance.js.map