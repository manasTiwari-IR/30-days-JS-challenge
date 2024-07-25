// Day 13 - Modules

//Activity 1 - Creating and Exporting Modules
//task 1 - Create a module that export a function to add two numbers. Import and use this module in another script.
import * as mod from "./add.mjs";
console.log("task 1 : ");
console.log(mod.str());
console.log(mod.add(5, 6));
//task 2
import { per } from "./person.mjs";
console.log("task 2 : ");
console.log("Name : " + per.name);
console.log("Age : " + per.age);
per.greet();

//Activity 2 - Named and Default Exports
//task 3 - Create a module that exports multiple functions using named exports.
import { add, str } from "./add.mjs";
console.log("task 3 : ");
console.log(add(5, 6));
console.log(str());
//task 4 - Create a module that exports an object using default export.
import intro from "./defaultex.mjs";
console.log("task 4 : ");
intro();

//Activity 3 - Importing Entire Modules
//task 5 - Create a module that exports multiple functions and constants.
import * as act3 from "./act3.mjs";
console.log("task 5 : ");
act3.greet("BOSS");
act3.sqr(5);
act3.cube(5);
console.log(act3.PI);
console.log(act3.E);

//Activity 4 - Using Third Party Modules
//task 6 - Install a third party module (e.g. lodash) using npm.
import pkg from "lodash";
const { chunk } = pkg;
console.log(chunk([1, 2, 3, 4, 5], 2));
// import _ from 'lodash';
// console.log(_.chunk([1, 2, 3, 4, 5], 2));
//task 7 - Install a third party module (e.g. axios) using npm.
import axios from "axios";
axios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => {
    console.log("task 7 : ");
    console.log(res.data);
  })
  .catch((err) => {
    console.log("Error occured : " + err);
  });

//Activity 5 - Module Bundling
//task  8 - Use a module bundler (e.g. webpack pr Parcel) to bundle multiple JS files into a single file.
//DOME

console.log('----------END OF DAY 13----------');
//End of Day 13
