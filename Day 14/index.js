//Day 14 - Classes

//Acticity 1 - Class Definition
//task 1
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am `,
      this.age,
      ` years old.`
    );
  }
  static genericMessage() {
    console.log("Hello there");
  }
}
const per1 = new Person("Homelander", 43);
per1.greet();
//task 2
Person.prototype.updateAge = function (newAge) {
  //using prototype to add a new method to the class
  this.age = newAge;
  console.log("new age is ", this.age);
};
per1.updateAge(44);

//Activity 2 - Class Inheritance
//task 3 - create a class called Student that extends Person
class Student extends Person {
  static count = 0;
  constructor(name, age, stid) {
    super(name, age);
    this.stid = stid;
    Student.count++; // static properties cannot be accessed using this keyword
  }
  greet() {
    // super.greet();
    console.log(`My student id is :`, this.stid);
  }
}
const st1 = new Student("john", 15, 10234);
st1.greet();
st1.updateAge(16); // updateAge func inherited from Person class
// task 4
st1.greet = function () {
  // greet func overriden in student class but specially for instance st1
  console.log("super greet");
};
st1.greet();

//Activity 3 - Static Methods and Properties
//task 5 - create a static method in Person class that return a generaic message
Person.genericMessage();
// task 6
console.log(Student.count); // static property accessed using class name

//Activity 4 - Getters and Setters
// task 7 and 8 
class Men {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  }
  set name(fullname) {
    const parts = fullname.split(" ");
    this.firstname = parts[0];
    this.lastname = parts[1];
  }
}
const man1 = new Men("John", "Doe");   
console.log(man1.fullname); // getter
man1.name = "Jane dae"; // setter
console.log(man1.fullname); // getter

//Activity 5 - Private Fields
// task 9 and 10
class Account {
    #balance = 0;  // # is used to make the field private
    // balance = 0 // this is public field
    constructor(name) {
        this.name = name;
    }
    getBalance() {
        return this.#balance;
        // return this.balance;
    }
    deposit(amount) {
        this.#balance += amount;
        // this.balance += amount;
    }
    withdraw(amount) {
        this.#balance -= amount;
        // this.balance -= amount;
    }
}
const acc1 = new Account("John");
acc1.deposit(100);
console.log(acc1.getBalance());
acc1.withdraw(50);
console.log(acc1.getBalance());
// export {Account}; // exporting the class to be used in another file

console.log('-------END OF DAY 14--------');
//End of Day 14 - Classes