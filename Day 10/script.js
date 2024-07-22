// DAY - 10 - Event Handling

//Activity 1 - Basic Event Handling
//task 1
document
  .querySelector(".task12")
  .querySelector("button")
  .addEventListener("click", () => {
    document.querySelector(".task12").querySelector("p").innerHTML =
      "Content Changed";
  });
//task 2
document
  .querySelector(".task12")
  .querySelector("img")
  .addEventListener("dblclick", () => {
    document.querySelector(".image").classList.toggle("hide");
  });

//Activity 2 - Mouse Events
//task 3 - mouseover event
//task 4 - mouseout event
document.querySelector(".act2").addEventListener("mouseover", () => {
  document.querySelector(".act2").classList.add("orange");
});
document.querySelector(".act2").addEventListener("mouseout", () => {
  document.querySelector(".act2").classList.remove("orange");
});

//Activity 3 - Keyboard Events
//task 5 - keydown event
//task 6 - keyup event
document
  .querySelector(".act3")
  .querySelector("input")
  .addEventListener("keydown", (e) => {
    console.log(e.key);
  });
document
  .querySelector(".act3")
  .querySelector("input")
  .addEventListener("keyup", (e) => {
    let x = document.querySelector(".act3").querySelector("input").value;
    document.querySelector(".act3").querySelector("p").innerText = x;
  });

//Activity 4 - Form Events
//task 7 - submit event
const f = document.getElementById("aform");
const sub = document.querySelector("#aform").querySelector("button[type='submit']");
f.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form Submitted");
  let a = f.querySelector("#name").value;
  let b = f.querySelector("#email").value;
  console.log("Name : " ,a,"\nEmail :", b);
});
//task 8 - change event
document.addEventListener('DOMContentLoaded', (event) => {
  const y = document.getElementById('code');
  const r = document.getElementById('result');
  if (y && r) { // Check if both elements exist
    y.addEventListener('change', (e) => {
      r.innerText = y.value;
    });
  } else if(y) {
    console.log('Result element not found');
  }
  else if (r) {
    console.log('Language element not found');
  }
});

document.querySelector('.act5').addEventListener('click', (e) => {
  console.log(e.target.innerText)
});

console.log('-------END Of DAY 10-------');
//End of Day 10