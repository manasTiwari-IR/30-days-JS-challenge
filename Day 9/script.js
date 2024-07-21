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
setInterval(() => {
let img = document.querySelector('img').setAttribute('src', 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png');
}, 3000);
//task 8
document.querySelector('.box3').classList.add('teal');
document.querySelector('.box2').classList.add('teal');
document.querySelector('.box2').classList.remove('teal');

//Activity 5 - Event Listeners
//task 9
document.querySelector('button').addEventListener('click', () => {
    document.querySelector('p').innerText = 'Button Clicked!';
});
//task 10
document.querySelector('.box4').querySelector('h2').addEventListener('mouseover', () => {
    document.querySelector('.box4').querySelector('h2').style.border = '2px solid green';
}   );

console.log('--------End of Day 9--------');
//End of Day 9