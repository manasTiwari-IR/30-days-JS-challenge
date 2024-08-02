//Day 17 - Algorithms

//Activity 1 - Sorting Algorithms
//task 1 - bubble sort
function bubblesort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
//task 2 - selection sort
function selectionsort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}
//task 3 - quick sort
function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }
  return quicksort(left).concat(pivot, quicksort(right));
}
console.log(quicksort([5, 3, 7, 6, 2, 9]));

//Activity 2 - Searching Algorithms
//task 4 - linear search
function linearsearch(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
  }
  return -1;
}
//task 5 - binary search
function binarysearch(arr, x) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === x) {
      return mid;
    } else if (arr[mid] < x) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}
console.log(binarysearch([2, 3, 4, 10, 40], 10));

//Activity 3 - String Algorithms
//task 6 - count occurences
function countoccurences(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = obj[str[i]] ? obj[str[i]] + 1 : 1;
  }
  return obj;
}
console.log(countoccurences("banana"));
//task 7 - longest substring without repeating characters
function longestsubstring(str) {
  let st = "";
  let ST = "";
  for (let i = 0; i < str.length; i++) {
    st += str[i];
    if (str[i] === str[i + 1] && i !== str.length - 1) {
      if (ST.length < st.length) {
        ST = st;
      }
      st = "";
    }
    if (i === str.length - 1)
      if (ST.length < st.length) {
        ST = st;
      }
  }
  return ST;
}
console.log(longestsubstring("abcdddefgh"));

//Activity 4 - Array Algorithms
//task 8 - rotate an array by k positions
function rotatearray(arr, k) {
  let n = arr.length;
  k = k % n;
  let temp = [];
  for (let i = 0; i < n; i++) {
    temp[(i + k) % n] = arr[i];
  }
  for (let i = 0; i < n; i++) {
    arr[i] = temp[i];
  }
  return arr;
}
console.log(rotatearray([1, 2, 3, 4, 5], 3));
//task 9 - merge two sorted arrays
function merge(a, b) {
  let arr = [];
  let A = a.length;
  let B = b.length;
  let i = 0;
  let j = 0;
  while (i < A && j < B) {
    if (a[i] < b[j]) {
      arr.push(a[i]);
      i++;
    } else {
      arr.push(b[j]);
      j++;
    }
  }
  return arr;
}
console.log(merge([1, 3, 5], [2, 4, 6]));

//Activity 5 - Dynamic Programming
//task 10 - fibonacci sequence
function fibonacci(n) {
  let arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}
console.log(fibonacci(10));
//task 11 - knapsack problem
function knapsack(W, wt, val, n) {
  let K = [];
  for (let i = 0; i <= n; i++) {
    K[i] = [];
    for (let w = 0; w <= W; w++) {
      if (i === 0 || w === 0) {
        K[i][w] = 0;
      } else if (wt[i - 1] <= w) {
        K[i][w] = Math.max(val[i - 1] + K[i - 1][w - wt[i - 1]], K[i - 1][w]);
      } else {
        K[i][w] = K[i - 1][w];
      }
    }
  }
  return K[n][W];
}
let val = [60, 100, 50];
let wt = [10, 20, 30];
let W = 50;
let n = val.length;
console.log(knapsack(W, wt, val, n));

console.log("-----------END OF DAY 17------------");
//End of Day 17 - Algorithms
