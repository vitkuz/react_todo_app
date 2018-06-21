class Person {
  constructor(fullname = 'Anoni Mus') {
    this.name1 = fullname.split(' ')[0];
    this.name2 = fullname.split(' ')[1];
  }
  firstName() {
    return this.name1;
  }
  lastName() {
    return this.name2;
  }
  getGreeting() {
    return `Hello ${this.name1}`
  }
}

class Student extends Person {
  constructor(fullname, grade = 0) {
    super(fullname);
    this.grade = grade;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.hasGrade()) {
      greeting += `!!! ${this.grade}`
    }
    return greeting;
  }
  hasGrade() {
    return !!this.grade
  }
}


const me = new Person('Vitali Kuzmenka');
const student = new Student('Varvara Turovets', 4);

console.log(me);
console.log(student);
console.log(student.getGreeting());