//Day 15 - Closures

//Activity 1 - Understanding Closures
//task 1
console.log("Task 1");
function outerFunction() {
  let x = 10;

  return {
    innerFunction: function () {
      return x;
    },
  };
}
const func = outerFunction();
console.log(func.innerFunction());
//task 2
console.log("Task 2");
function out2() {
  let x = 0;
  return {
    increase: function () {
      x++;
    },
    val: function () {
      return x;
    },
  };
}
const func2 = out2();
console.log(func2.val());
func2.increase();
func2.increase();
console.log(func2.val());

//Activity - 2 - Practical Closures
//task 3 - Write a function that generates unique IDs. Use the closure to keep tack of the last ID generated.
console.log("Task 3");
function createUniqueIdGenerator() {
  let id = 0;
  let lastId = id;

  return {
    generateUniqueId: function () {
      id++;
      lastId = id;
      return id;
    },
    lastID: function () {
      return lastId;
    },
  };
}
const uniqueIdGenerator = createUniqueIdGenerator();
console.log(uniqueIdGenerator.generateUniqueId());
console.log(uniqueIdGenerator.generateUniqueId());
console.log(uniqueIdGenerator.lastID());
//task 4 - Write a closure that capture a user's name and return a function that greet the user by name
console.log("Task 4");
function greet(name) {
  return function () {
    return "Hello " + name;
  };
}
const greetUser = greet("John");
console.log(greetUser());
// console.log(greet("John")());

//Activity 3 - Closures in Loops
//task 5
console.log("Task 5");
const funcs = [];
for (let i = 0; i < 5; i++) {
  funcs.push(function () {
    return i;
  });
}
for (const func of funcs) {
  console.log(func());
}

//Activity - 4 - Module Pattern
//task 6 - Use Closures to create a simple module for managing a collection of items. Implement methods to add, remove, and get items from the collection.
console.log("Task 6");
function collection() {
  let items = [];
  return {
    add: function (item) {
      items.push(item);
      console.log(item, " added   ");
      //   console.log("size: ", items.length);
    },
    remove: function (item) {
      let i = items.indexOf(item);
      if (i !== -1) {
        items = items.filter((x) => {
          return x !== item;
        });
        console.log(item, " removed");
        // console.log("size: ", items.length);
      } else {
        console.log(item, " not found in list");
        // console.log("size: ", items.length);
      }
    },
    get: function () {
      return items;
    },
  };
}
const list = collection();
list.add(1);
list.add(2);
list.add(3);
list.add(5);
list.add(4);
list.remove(5);
list.add(8);
list.remove(9);
console.log(list.get());

//Activity 5 - Memoization
//task 7  - Write a function that memorizes the result of another function. Use  a closure to store the results of previous computations.
console.log("Task 7");
function memorize() {
  let cache = {};
  return function (n) {
    if (n in cache) {
      {
        console.log("******From cache******");
        return cache[n];
      }
    } else {
      let result = n * n;
      cache[n] = result;
      console.log("-----Calculated------");
      return result;
    }
  };
}
const square = memorize();
console.time("Time taken ");
console.log(square(5));
console.timeEnd("Time taken ");

console.time("Time taken ");
console.log(square(5));
console.timeEnd("Time taken ");

console.time("Time taken ");
console.log(square(6));
console.timeEnd("Time taken ");

console.time("Time taken ");
console.log(square(6));
console.timeEnd("Time taken ");

//task 8 - Create a memorized version of a function that calculates the factorial of a number.
console.log("\n\nTask 8");
async function factorial() {
  let cache = {};
  return function (n) {
    if (n in cache) {
      console.log("******From cache******");
      return cache[n];
    } else {
      let result = 1;
      for (let i = 2; i <= n; i++) {
        result *= i;
      }
      cache[n] = result;
      console.log("-------Calculated-------");
      return result;
    }
  };
}
async function calcu()
{
const fact = await factorial();
console.time("Time taken");
console.log(fact(5));
console.timeEnd("Time taken");

console.time("Time taken");
console.log(fact(5));
console.timeEnd("Time taken");

console.time("Time taken");
console.log(fact(20));
console.timeEnd("Time taken");

console.time("Time taken");
console.log(fact(20));
console.timeEnd("Time taken");
console.log("--------End of Day 15--------");
}
calcu();
//End of Day 15 - Closures
