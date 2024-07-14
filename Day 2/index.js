// Day 1 - Operators

//Activity 1 - Arithmetic Operations
let a = 12;
let b = 5;
//task 1
let add = a + b;
console.log("task 1: Addition", add);
//task 2
let sub = a - b;
console.log("task 2: Subtraction", sub);
//task 3
let mul = a * b;
console.log("task 3: Multiplication", mul);
//task 4
let div = a / b;
console.log("task 4: Division", div);
//task 5
let mod = a % b;
console.log("task 5: Modulus", mod);

//Activity 2 - Assignment Operators
//task 6
let x = 15;
x += 5;
console.log("task 6: x += 5", x);
//task 7
let y = 25;
y -= 5;
console.log("task 7: y -= 5", y);

//Activity 3 - Comparison Operators
//task 8
let n1 = 10;
let n2 = 20;
let result = n1 > n2;
console.log("task 8: n1 > n2", result);
result = n1 < n2;
console.log("task 8: n1 < n2", result);
//task 9
result = n1 >= n2;
console.log("task 9: n1 >= n2", result);
let n3 = 10;
result = n1 <= n3;
console.log("task 9: n1 <= n3", result);
//task 10
result = n1 == n3;
console.log("task 10: n1 == n3", result);
let n4 = "10";
result = n1 === n4;
console.log("task 10: n1 === n4", result);

//Activity 4 - Logical Operators
//task 11
let p = 56;
let q = 78;
let r = 90;
result = p > q && p > r;
console.log("task 11: p > q && p > r", result);
//task 12
result = p > q || p < r;
console.log("task 11: p > q || p < r", result);
//task 13
result = !(p > q);
console.log("task 11: !(p > q)", result);

//Activity 5 - Ternary Operator
//task 14
let t = -3;
result = t > 0 ? "Positive" : "Negative";
console.log("task 14: t > 0 ? 'Positive' : 'Negative' = ", result);

console.log("-----END OF DAY 2-----");
//End of Day 2