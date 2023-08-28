"use strict";

function Person(name, gender) {
  this.name = name;
  this.gender = gender;
}

Person.prototype.sayName = function () {
  console.log(`Меня зовут: ${this.name}.`);
};

const person1 = new Person('Павел', 'm');

// ---

function Employee(name, gender, position) {
  Person.call(this, name, gender);
  this.position = position;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.sayPosition = function () {
  console.log(`Моя должность: ${this.position}.`);
};

const employee1 = new Employee('Павел', 'm', 'Дворник');
