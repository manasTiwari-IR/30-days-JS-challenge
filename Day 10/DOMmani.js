// DAY - 10 - Event Handling
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//Activity 1 - Basic Event Handling
//task 1
(_b = (_a = document
    .querySelector(".task12")) === null || _a === void 0 ? void 0 : _a.querySelector("button")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    var _a;
    var pElement = (_a = document.querySelector(".task12")) === null || _a === void 0 ? void 0 : _a.querySelector("p");
    if (pElement) {
        pElement.innerHTML = "Content Changed";
    }
});
//task 2
(_d = (_c = document
    .querySelector(".task12")) === null || _c === void 0 ? void 0 : _c.querySelector("img")) === null || _d === void 0 ? void 0 : _d.addEventListener("dblclick", function () {
    var imageElement = document.querySelector(".image");
    if (imageElement) {
        imageElement.classList.toggle("hide");
    }
});
//Activity 2 - Mouse Events
//task 3 - mouseover event
//task 4 - mouseout event
(_e = document.querySelector(".act2")) === null || _e === void 0 ? void 0 : _e.addEventListener("mouseover", function () {
    var act2Element = document.querySelector(".act2");
    if (act2Element) {
        act2Element.classList.add("orange");
    }
});
(_f = document.querySelector(".act2")) === null || _f === void 0 ? void 0 : _f.addEventListener("mouseout", function () {
    var act2Element = document.querySelector(".act2");
    if (act2Element) {
        act2Element.classList.remove("orange");
    }
});
//Activity 3 - Keyboard Events
//task 5 - keydown event
//task 6 - keyup event
var inputElement = (_g = document.querySelector(".act3")) === null || _g === void 0 ? void 0 : _g.querySelector("input");
inputElement === null || inputElement === void 0 ? void 0 : inputElement.addEventListener("keydown", function (e) {
    console.log(e.key);
});
inputElement === null || inputElement === void 0 ? void 0 : inputElement.addEventListener("keyup", function (e) {
    var _a, _b, _c;
    var inputValue = (_b = (_a = document.querySelector(".act3")) === null || _a === void 0 ? void 0 : _a.querySelector("input")) === null || _b === void 0 ? void 0 : _b.value;
    var pElement = (_c = document.querySelector(".act3")) === null || _c === void 0 ? void 0 : _c.querySelector("p");
    if (pElement) {
        pElement.innerText = inputValue;
    }
});
//Activity 4 - Form Events
//task 7 - submit event
var f = document.getElementById("aform");
var sub = (_h = document.querySelector("#aform")) === null || _h === void 0 ? void 0 : _h.querySelector("button[type='submit']");
f === null || f === void 0 ? void 0 : f.addEventListener("submit", function (e) {
    var _a, _b;
    e.preventDefault();
    console.log("Form Submitted");
    var a = (_a = f.querySelector("#name")) === null || _a === void 0 ? void 0 : _a.value;
    var b = (_b = f.querySelector("#email")) === null || _b === void 0 ? void 0 : _b.value;
    console.log("Name : ", a, "\nEmail :", b);
});
//task 8 - change event
document.addEventListener('DOMContentLoaded', function (event) {
    var y = document.getElementById('code');
    var r = document.getElementById('result');
    if (y && r) { // Check if both elements exist
        y.addEventListener('change', function (e) {
            r.innerText = y.value;
        });
    }
    else if (y) {
        console.log('Result element not found');
    }
    else if (r) {
        console.log('Language element not found');
    }
});
(_j = document.querySelector('.act5')) === null || _j === void 0 ? void 0 : _j.addEventListener('click', function (e) {
    var target = e.target;
    console.log(target.innerText);
});
console.log('-------END Of DAY 10-------');
//End of Day 10
