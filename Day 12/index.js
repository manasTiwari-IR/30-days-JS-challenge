// DAY 12 - Error Handling

//Activity 1 - Basic Error Handling with Try-Catch
//task 1
function err() {
  try {
    throw new Error("This is an error");
  } catch (e) {
    console.log(e.message);
  }
}
err();
//task 2
function divide1(a, b) {
  try {
    if (b === 0) throw new Error("Divide by zero error");
    let d = a / b;
    console.log("The result is: " + d);
  } catch (e) {
    console.log(e.message);
  }
}
divide1(10, 0);

//Activity -  2 - Finally Block
//task 3
function divide2(a, b) {
  try {
    if (b === 0) throw new Error("Divide by zero error");
    let d = a / b;
    console.log("The result is: " + d);
  } catch (e) {
    console.log(e.message);
  } finally {
    console.log("Finally block executed");
  }
}
divide2(10, 0);

//Activity - 3 - Custom Error Objects
//task 4
class CustomError {
  constructor(message) {
    this.message = message;
    this.name = "ByCustomErrorClass";
  }
}
function err2() {
  try {
    throw new CustomError("This is a custom error\n");
  } catch (e) {
    console.log(e.name + ": " + e.message);
  }
}
err2();
//task 5
class CustomError2 extends CustomError {
  constructor(message) {
    super(message);
    this.name = "ByCustomErrorClass2";
  }
}
function validate(...detail) {
  try {
    if (detail[0] === "") throw new CustomError2("Name cannot be empty");
    if (
      typeof detail[1] !== "number" ||
      isNaN(detail[1]) ||
      detail[1].toString().length !== 10
    )
      throw new CustomError2("Phone number must be a 10 digit number");
    if (isNaN(detail[2])) throw new CustomError2("Age must be a number");
    if (detail[2] < 18 || detail[2] > 100)
      throw new CustomError2("Age must be between 18 and 100");
    if (typeof detail[2] !== "number")
      throw new CustomError2("Name must be a string");

    console.log("Validation successful");
    console.log("Name: " + detail[0]);
    console.log("Phone: " + detail[1]);
    console.log("Age: " + detail[2] + " years old \n");
  } catch (e) {
    console.log(e.name + ": " + e.message);
  }
}
validate("John", 1234567890, 56);
validate("", 1234567890, 56);
validate("John", 123456789, 56);
validate("John", 1234567890, "56");

//Activity - 4 - Error Handling in Promises
//task 6
const p1 = new Promise((res, rej) => {
  let x = Math.random();
  if (x > 0.5) res("Promise Resolved");
  else rej("Promise Rejected");
});
p1.then((msg) => console.log(msg)).catch((msg) => console.log(msg));
//task 7
function p2() {
  return new Promise((res, rej) => {
    let x = Math.random();
    if (x > 0.5) res("Promise Resolved");
    else rej(new Error("Promise Rejected"));
  });
}
async function handle() {
    try {
        const msg = await p2();
        console.log(msg);
    }
    catch (msg) {
        console.log(msg.message);
    }
}
handle();

//Activity - 5 - Graceful Error Handling to fetch
//task 8
fetch("https://invalid.url/api/data")
.then((response) => {
    if (response.ok) {
        return response.json();
    }
    throw new Error(`HTTP error! status: ${response.status}`);
})
.then((data) => console.log(data))
.catch((error) => console.error("Error Occured : "+error.message));
//task 9
async function fetchData() {
    try {
        const response = await fetch("https://invalid.url/api/data");
        if (response.ok) {
            const data = await response.json();
            console.log(data);
        }
        else {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    }
    catch (error) {
        console.error("Error Occured : "+error.message);
    }
}
fetchData();

console.log('---------END OF DAY 12---------');
//End of Day 12 - Error Handling