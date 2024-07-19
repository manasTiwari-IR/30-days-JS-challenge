//Day 7 - Objects

//Activity 1 - Object Creation and Access
//task 1
const book = {
  title: "The Alchemist",
  author: "Paulo Coehlo",
  year: 1988,
  genre: "Quest, Adventure,Fantasy",
  publisher: "HarperTorch",
  getDetails: function () {
    return `The book ${this.title} was written by ${this.author}`;
  },
};
console.log("task 1 :create object");

console.log(book);
//task 2
console.log("task 2 :access object");
console.log("title : ", book.title);
console.log("authot : ", book.author);

//Activity 2 - Object Methods
//task 3
console.log("task 3 :object method");
console.log(book.getDetails());
//task 4
book.updateYear = function (year) {
  this.year = year;
};
console.log("task 4 :add method to object");
book.updateYear(1989);
console.log(book);

//Activity 3 - Nested Objects
//task 5
const lib = {
  name: "Library of Books",
  books: [
    {
      title: "The Alchemist",
      author: "Paulo Coehlo",
      year: 1988,
    },
    {
      title: "The Da Vinci Code",
      author: "Dan Brown",
      year: 2003,
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
    },
  ],
};
console.log("task 5 :");
console.log(lib);
//task 6
console.log("task 6 :");
console.log("name of library : ", lib.name);
console.log("Name of each book : ");
lib.books.forEach((e) => {
  console.log(e.title);
});

//Activity 4 - The 'this' Keyword
//task 7 - DONE IN TASK !

//Activity 5 - Object Iteration
//task 8
const b = {
  title: "The Alchemist",
  author: "Paulo Coehlo",
  year: 1988,
  genre: "Quest, Adventure,Fantasy",
  publisher: "HarperTorch",
};
console.log("task 8 :");
for (let key in b) {
  console.log(key, " : ", b[key]);
}
//task 9
console.log("task 9 :");
console.log(Object.keys(b));
console.log(Object.values(b));

console.log("-------END OF DAY 7--------");

//End of Day 7 - Objects