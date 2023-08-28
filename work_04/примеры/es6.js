"use strict";

class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }

  sayName() {
    console.log(`Меня зовут: ${this.name}.`);
  }
}

const person1 = new Person('Павел', 'm');

// ---

class Employee extends Person {
  constructor(name, gender, position) {
    super(name, gender);
    this.position = position;
  }

  sayPosition() {
    console.log(`Моя должность: ${this.position}.`);
  }
}

const employee1 = new Employee('Павел', 'm', 'Дворник');
