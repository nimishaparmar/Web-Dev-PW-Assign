/*Create an object constructor Person that takes name and age as parameters and initializes them. Also, add
a method sayHello to greet the person.*/

function Person(name, age) {
    this.name = name;  
    this.age = age;  
    this.sayHello = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
}
const person1 = new Person('Alice', 30);
person1.sayHello();

const person2 = new Person('Bob', 25);
person2.sayHello();
