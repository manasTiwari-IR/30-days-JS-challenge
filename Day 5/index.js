// Day 5 - Functions

//Activity 1 - Function Declaration
//task 1
function evenOdd(num) {
  if (num % 2 === 0) {
    return "task 1 : Even";
  } else {
    return "task 1 : Odd";
  }
}
console.log(evenOdd(5));
//task 2
function square(x) {
  return x * x;
}
console.log("task 2 : " + square(5));

//Activity 2 - Function Expression
//task 3
let maxi = function (a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};
console.log("task 3 : " + maxi(5, 10));
//task 4
let concat = function (a, b) {
  return a + b;
};
console.log("task 4 :" + concat(" Hey ", "Bro!"));

//Activity 3 - Arrow Function
//task 5
let add = (x, y) => x + y;
console.log("task 5 : " + add(5, 10));
//task 6
let search = (str, ch) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ch) {
      return "task 6 : Found";
    }
  }
  return "task 6 : Not Found";
};
console.log("task 6 : " + search("coding", "e"));

//Activity 4 - Function parameters and Default Values
//task 7
function multiply(a, b = 5) {
  return a * b;
}
console.log("task 7 : " + multiply(3, 4));
console.log("task 7 : " + multiply(3));
//task 8
console.log("task 8 : ");

function greeting(name, age = 20) {
  return "Hello " + name + " you are " + age + " years old";
}
console.log(greeting("Manas", 18));
console.log(greeting("Manas"));

//Activity 5 - Higher Order Functions
//task 9
console.log("task 9 : ");
function repeat(repeatFunc, n) {
  while (n > 0) {
    repeatFunc();
    n--;
  }
}
function repeatFunc() {
  console.log("calling a function");
}
repeat(repeatFunc, 5);
//task 10
console.log("task 10 : ");
function twoFunc(func1, func2, n) {
  let res = func1(n);
  console.log(func2(res));
}
function func1(x) {
  return x * x;
}
function func2(x) {
  return x * 2;
}
twoFunc(func1, func2, 5); 

console.log("-------END OF DAY 5-------"); 
//End of Day 5