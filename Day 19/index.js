//Day 19 - Regular Expressions
//Activity 1 - Basic Regular Expressions
//task 1 
function task1(str){
    let pattern = /JavaScript/g;
    let res = str.match(pattern);
    return res;
}
// console.log('Task 1: ', task1('JavaScript is a programming language. I am learning JavaScript.'));
//task 2
function task2(str){
    let pattern = /[0-9]/g
    let res = str.match(pattern)
    return res
}
// console.log('Task 2: ', task2('I have 2 cats and 3 dogs.'));

//Activity 2 - Character Classes and Quantifiers
//task 3 
function task3(str)
{
    
    let res = str.match(pattern);
    return res;
}
// console.log('Task 3: ', task3('JavaScript is a programming language.'));
//task 4
function task4(str){
    let pattern = /\d+/g
    let res = str.match(pattern)
    return res
}
// console.log('Task 4: ', task4('I have 232 12312 cats and 3 dogs.'));