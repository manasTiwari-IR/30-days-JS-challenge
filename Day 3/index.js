// Day 3 - Control Structures

//Activity 1 - If Else Statements
//task 1
let a = -6;
if (a > 0) {
  console.log("task 1: a is positive");
} else {
  console.log("task 1: a is negative");
}
//task 2
let age = 23;
if (age >= 18) {
  console.log("task 2: You are eligible to vote");
} else {
  console.log("task 2: You are not eligible to vote");
}

//Activity 2 - Nested If Else Statements
//task 3
let x = 34;
let y = 16;
let z = 28;
if (x > y) {
  if (x > z) {
    console.log("task 3: x is the largest number");
  } else {
    console.log("task 3: z is the largest number");
  }
} else {
  if (y > z) {
    console.log("task 3: y is the largest number");
  } else {
    console.log("task 3: z is the largest number");
  }
}

//Activity 3 - Switch Case Statements
//task 4
let ch = 5;
switch (ch) {
  case 1:
    console.log("task 4: Monday");
    break;
  case 2:
    console.log("task 4: Tuesday");
    break;
  case 3:
    console.log("task 4: Wednesday");
    break;
  case 4:
    console.log("task 4: Thursday");
    break;
  case 5:
    console.log("task 4: Friday");
    break;
  case 6:
    console.log("task 4: Saturday");
    break;
  case 7:
    console.log("task 4: Sunday");
    break;
  default:
    console.log("task 4: Invalid choice");
}
//task 5
let score = 7; // out of 10
switch (score) {
  case 10:
    console.log("task 5: Excellent");
    break;
  case 9:
    console.log("task 5: Very Good");
    break;
  case 8:
  case 7:
    console.log("task 5: Good");
    break;
  case 6:
  case 5:
    console.log("task 5:  Average");
    break;
  default:
    console.log("task 5: Need Improvement");
}

//Activity 4 - Conditional Operator
//task 6
let n = 12;
let result = n % 2 == 0 ? "task 6: Even" : "task 6: Odd";
console.log(result);

//Activity 5 - Combining Conditions
//task 7
let year = 2020;
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log("task 7: Leap year");
} else {
  console.log("task 7: Not a leap year");
}

console.log("------END OF DAY 3------");
//End of Day 3
