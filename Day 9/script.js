//Day 9 - DOM MANIPULATION

//Activity 1 - Selecting and Manipulating Elements
//task 1
document.getElementById('heading1').style.color = 'yellow';
//task 2
let dom = document.querySelector('.box');
dom.style.backgroundColor = 'teal';

//Activity 2 - Creating and Appending Elements
//task 3
let div = document.createElement('div');
div.innerText = 'I am a new div';
document.body.prepend(div);
//task 4
let li = document.createElement('li');
li.innerText = 'Python';
document.querySelector('ul').appendChild(li);

//Activity 3 - Removing Elements
//task 5
let rem = document.querySelector('.box3').querySelector('h1');
rem.remove();
//task 6
let rem2 = document.querySelector('.box3').querySelector('ul').lastElementChild;
rem2.remove();

//Activity 4 - Modifying Attributes and Classes
//task 7
 