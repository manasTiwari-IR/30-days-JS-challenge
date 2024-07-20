//Day - 8 - ES6+ Features

//Activity 1 - Template Literals   
//task 1
console.log('task 1 - Template Literals : ');
let name  = "Manas";
let age = 18;
let person = `My name is ${name} and I am ${age} years old.`;
console.log(person);
//task 2
// multiline string
console.log('task 2 - Multi-line string using Template Literals : ');
let multiline = `This is a
multiline
string`;
console.log(multiline);

//Activity 2 - Destructuring
//task 3
console.log('task 3 - Array Destructuring : ');
let arr = ['red','yellow','green','blue'];
let [first , second,] = arr;
console.log('Fist ele of arr : ',first);
console.log('Second ele of arr : ',second);
//task 4
console.log('task 4 - Object Destructuring : ');
const obj = {
    username:"Homelander",
    email:"vought@gmail.com",
    password:"seven7",
}
let { user , email } = obj;
console.log('Username : ',user);
console.log('Email : ',email);

//Activity 3 - Spread ans Rest Operator
//task 5
console.log('task 5 - Spread Operator : ');
let nums = [1,2,3,4,5];
let newNums = [...nums,6,7,8];
console.log('Old Array : ',nums);
console.log('New Array : ',newNums);
//task 6
console.log('task 6 - Rest Operator : ');
let sum = (...Arr)=>{
    return {
        sum : Arr.reduce((a,b)=>a+b)
    }
}
console.log('Sum of newNums : ',sum(...newNums).sum);

//Activity 4 - Default Parameters
//task 7
console.log('task 7 - Default Parameters : ');
let nul = (a, b=1)=>{
    return a*b;
}
nul(3,7);
console.log('Providing both the parameter : ',nul(3,7));
nul(5);
console.log('Providing only one parameter : ',nul(5));

//Activity 5 - Enhanced Object Literals
//task 8
console.log('task 8 - Enhanced Object Literals : ');
let NAME = "Manas";
let AGE = 18;
let obj1 = {
    NAME,
    AGE,
    greet(){
        console.log(`Hello, ${this.NAME}`);
    },
    ['prop'+(AGE)]: `This is a property named prop${AGE}`
}
console.log(obj1);
obj1.greet();
//task 9
console.log('task 9 - Enhanced Object Literals : ');
let prop = "name";
let prop1 = "age";
let obj2 = {
    [prop] : "Manas",
    [prop1] : "23",
}
console.log(obj2);

console.log('-'.repeat(5)+'End of Day 8'+'-'.repeat(5));
//End of Day 8
