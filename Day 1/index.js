// DAY 1 - Variables & Data Types

//Activity 1: Variable Declaration
//task 1
var a = 3526;
console.log("task 1:", a);
//task 2
var b = "Manas";
console.log("task 2:", b);

//Activity 2: Constant Declaration
//task 3
const ch = true;
console.log("task 3:", ch);

//Activity 3: Data Types
//task 4
let num = 34;
let st = "Manas";
let bool = true;
const obj = { name: "Manas", age: 29 };
let arr = [1, 2, 3, 4, 5];
console.log("task 4:", num, st, bool, obj, arr);
console.log(typeof num, typeof st, typeof bool, typeof obj, typeof arr);

//Activity 4: reassiging Variables
//task 5
let x = 10;
console.log("task 5:\nprevious value = ", x);
x = 20;
console.log("new value = ", x);

//Activity 5: Understanding const
//task 6
console.log('task 6:');
try{
    const y = 10;
    console.log('previous value = ', y);
    console.log('trying to reassign y');    
    y = 20;
}
catch(e){
    console.log('Error:', e);
}


console.log('-------END OF DAY 1-------');
//End of Day 1
