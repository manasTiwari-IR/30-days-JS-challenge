// Day 16 - Recursion
console.log("-----------------------------------");
console.log("---------------Day 16--------------");
//Activity 1 - Basic Recursion
//task 1 - find factorial
console.log("Task 1 - Factorial of a number");
function fact(n) {
  if (n <= 1) {
    return 1;
  }
  return n * fact(n - 1);
}
console.log(fact(6));
//task 2 - find nth fibonacci number
console.log("Task 2 - Nth Fibonacci number");
function fibo(n) {
  if (n <= 1) return n;
  return fibo(n - 1) + fibo(n - 2);
}
console.log(fibo(6));

//Activity 2 - Recursion with Arrays
//task 3 - find sum of elements in an array
const arr = [1, 2, 3, 4, 5];
function sumArr(...arr) {
  if (arr.length == 0) return 0;
  return arr[0] + sumArr(...arr.slice(1));
}
console.log("Task 3 - Sum of elements in an array");
console.log(sumArr(...arr));
//task 4 - find maximum element in an array
const arr1 = [2, 5, 1, 9, 6, 4];
function Max(...arr) {
  if (arr.length == 1) return arr[0];
  return Math.max(arr[0], Max(...arr.slice(1)));
}
console.log("Task 4 - Maximum element in an array");
console.log(Max(...arr1));

//Activity 3 - String Manipulation using Recursion
//task 5 - reverse a string
const str = "manas";
function reverseSTR(str) {
  if (str == "") return "";
  return reverseSTR(str.substr(1)) + str[0];
}
console.log("Task 5 - Reverse a string");
console.log(reverseSTR(str));
//task 6 - check if a string is palindrome
const str1 = "abbcbba";
const str2 = reverseSTR(str1);
if (str1 === str2) console.log("Task 6 - ", str1, " is a palindrome");
else console.log("Task 6 - ", str1, " is not a palindrome");

//Activity 4 - Recursive Searching
//task 7 - binary search
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function binarySearch(arr, l, r, t) {
  if (r >= l) {
    let mid = l + Math.floor((r - l) / 2);

    if (arr[mid] == t) return mid;
    if (arr[mid] > t) return binarySearch(arr, l, mid - 1, t);
    return binarySearch(arr, mid + 1, r, t);
  }
  return -1;
}
console.log("Task 7 - Binary Search");
console.log("Array is : ", ...arr2);
let idx = binarySearch(arr2, 0, arr2.length - 1, 99);
if (idx === -1) console.log("Element not found");
else console.log("Element found at index : ", idx);
//task 8 - count frerquency of an element in an array
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 3, 1, 2, 3, 4];
function freq(arr, t) {
  if (arr.length == 0) return 0;
  if (arr.length == 1) return arr[0] == t ? 1 : 0;

  let count = 0;
  if (arr[0] == t) count++;
  return count + freq(arr.slice(1), t);
}
console.log("Task 8 - Frequency of an element in an array");
console.log("Array is : ", ...arr3);
console.log("Frequency of 1 : ", freq(arr3, 3));

//Activity 5 - Tree traversal
//task 9 - inorder traversal
function inorder(root) {
  if (root == null) return;
  inorder(root.left);
  console.log(root.data);
  inorder(root.right);
}
//task 10 - find depth of a tree
function depth(root) {
  if (root == null) return 0;
  let ldepth = depth(root.left);
  let rdepth = depth(root.right);
  return Math.max(ldepth, rdepth) + 1;
}

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
console.log("Task 9 - Inorder Traversal");
inorder(root);
console.log("Task 10 - Depth of a tree");
const D = depth(root);
console.log(D);
console.log("Height of a tree is : ");
console.log(D - 1);
console.log("-----------------------------------");
console.log("-----------End Of Day 16-----------");
//End of Day 16 - Recursion