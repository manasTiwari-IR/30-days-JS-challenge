//Day 6 - Arrays

//Activity 1 - Array Creation and Access
//task 1
let arr = [1, 2, 3, 4, 5];
console.log("task 1 : Print Array = ", arr);
//task 2
console.log("task 2 : Print first and last ele. of array :- ");
console.log("First element of the array : ", arr[0]);
console.log("First element of the array : ", arr[arr.length - 1]);

//Activity 2 - Array Methods (Basic)
//task 3
arr.push(9);
console.log("task 3 : push func = ", arr);
//task 4
arr.pop();
console.log("task 4 : Pop func = ", arr);
//task 5
arr.shift();
console.log("task 5 : Shift func = ", arr);
//task 6
arr.unshift(-1);
console.log("task 6 : Unshift func = ", arr);

//Activity 3 - Array Methods (Intermediate)
//task 7
let a = [1, 2, 3, 4, 5];
let b = a.map((x) => {
  return x * 2;
});
console.log("task 7 : Map func = ", b);
//task 8
let c = a.filter((x) => x % 2 == 0);
console.log("task 8 : Filter func = ", c);
//task 9
let d = a.reduce((a, b) => a + b);
console.log("task 9 : Reduce func = ", d);

//Activity 4 - Array Iteration
//task 10
const A = [1, 2, 3, 4, 5];
console.log("task 10 : For loop:-");
for (let i = 0; i < A.length; i++) {
  console.log(A[i]);
}
//task 11
console.log("task 11 : forEach loop:-");

A.forEach((e) => {
  console.log(e);
});

//Activity 5 - Multi-Dimentional Arrays
//task 12
let e = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("task 12 : ", e);
//task 13
console.log("task 13 : ", e[1][2]);

console.log("-------END OF DAY 6-------");
//End of Day 6
