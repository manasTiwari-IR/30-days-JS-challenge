// Day 11 - Promises and async/await

//Activity 1 - Understanding Promises
//task 1- Create a promise that resolves after 2 seconds with a message
const pro = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise is resolved");
  }, 2000);
});
pro.then((m) => console.log(m));
// task 2 - Create a promise that rejects after 2 seconds with an error message
const pro1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise is rejected");
  }, 2000);
});
pro1.catch((m) => console.log(m));

//Activity 2 - Chaining Promises
//task 3 - create a  sequence of promises that simulate fetching data from a server
function fetchServerData(url) {
  return fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Error occurred while fetching data");
      }
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
}
fetchServerData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => {
    console.log(data);
    return fetchServerData("https://jsonplaceholder.typicode.com/todos/2");
  })
  .then((data) => {
    console.log(data);
    return fetchServerData("https://jsonplaceholder.typicode.com/todos/3");
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//Activity 3 - Using Async/Await
//task 4 - Write an async function that waits for a promise to resolve
async function wait() {
  const message = await new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve("Promise is resolved");
      }, 2000);
    } catch (err) {
      reject("Promise is rejected");
    }
  });
  console.log(message);
}
wait();
//task 5 - Write an async function that handles a rejected promise using try/catch
async function wait1() {
  const message = await new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        reject("Promise is rejected");
      }, 2000);
    } catch (err) {
      reject("Promise is rejected");
    }
  });
  console.log(message);
}
wait1();

//Activity - 4 - Fetching Data from an API
//task 6 - Fetch data from an API using promises
fetch("https://jsonplaceholder.typicode.com/todos/5")
  .then((res) => {
    if (!res.ok) {
      throw new Error("Error occurred while fetching data");
    }
    return res.json();
  })
  .then((data) => {
    console.log("Fetched Data : ", data);
  })
  .catch((err) => {
    console.log(err);
  });
//task 7 - Fetch data from an API using async/await
async function fetchData() {
  return fetch("https://jsonplaceholder.typicode.com/todos/6")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Error occurred while fetching data");
      }
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
}
async function callfetch() {
  const data = await fetchData();
  console.log("fetched data using async/await : ", data);
}
callfetch();

//Activity 5 - Concurrent Promises
//task 8 - Use Promise.all to wait for multiple promises to resolve
const p1 = new Promise((resolve, reject) => {
  let x = Math.random();
  if (x > 0.3) {
    resolve("Promise 1 is resolved");
  } else {
    reject("Promise 1 is rejected");
  }
});
const p2 = new Promise((resolve, reject) => {
  let x = Math.random();
  if (x > 0.3) {
    resolve("Promise 2 is resolved");
  } else {
    reject("Promise 2 is rejected");
  }
});
const p3 = new Promise((resolve, reject) => {
  let x = Math.random();
  if (x > 0.3) {
    resolve("Promise 3 is resolved");
  } else {
    reject("Promise 3 is rejected");
  }
});
Promise.all([p1, p2, p3])
  .then((values) => {
    console.log(values);
  })
  .catch((err) => {
    console.log(err);
  });
//task 9 -  Use Promise.race to wait for the first promise to resolve
Promise.race([p1, p2, p3])
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("--------END OF DAY 11--------");
//End of Day 11 - Promises and async/await
