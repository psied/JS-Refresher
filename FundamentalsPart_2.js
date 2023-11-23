"use strict";

// Basically strict mode helps us to avoid bugs

/* 
// Functions (22/11/2023) - 5:17am


function logger() {
  console.log("My name is Syed");
}
logger();

function foodProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

console.log(foodProcessor(2, 3));
const juiceOrder = foodProcessor(5, 3);
console.log(juiceOrder);

*/

/* 
// Function Declarations vs Expressions (22/11/2023) - 5:32am


// Standard Function Declerations
function calcAge1(birthYear) {
  const age = 2037 - birthYear;
  return age;
  // or you can use return 2037 - birthYear;
}

const age1 = calcAge1(2000);
console.log(age1);

// Function Expression : The below one is also defining a function but this kind is called an annonymous function
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1990);
console.log(age2);

*/

/* 
// Arrow Functions (22/11/2023) - 5:41am


// Easy to deploy and automatically returns the values without return keyword

const calcAge3 = (birthYear) => 2037 - birthYear;
console.log(calcAge3(1990));

const age3 = calcAge3(2000);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = calcAge3(birthYear);
  const retirement = 65 - age;
  //   return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1990, "Jonas"));

*/

/* 
// Functions calling other functions (22/11/2023) - 5:50am


function cutFruitPieces(fruit) {
  return fruit * 4;
}

function foodProcessor(apples, oranges) {
  const applepieces = cutFruitPieces(apples);
  const orangepieces = cutFruitPieces(oranges);

  console.log(apples, oranges);
  const juice = `Juice with ${applepieces} pieces of apples and ${orangepieces} pieces of oranges.`;
  return juice;
}

console.log(foodProcessor(2, 3));

*/

/* 
// Reviewing Functions (22/11/2023) - 5:56am


const calcAge = (birthYear) => 2037 - birthYear;

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, "Jonas"));

*/

/* 
// Introduction to Arrays (23/11/2023) - 5:01am


// Literal Syntax to create Array
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// Using Array Function to Create Array
const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

// Indexing in array common stuff
console.log(friends[0]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Paul";
console.log(friends);

const firstName = "Syed";
const syed = [firstName, "I", 2037 - 2000, "Student", friends];
console.log(syed);

// Exercise
const calcAge = (birthYear) => 2037 - birthYear;

const yearsNew = [1990, 1967, 2002, 2010, 2018];
console.log(calcAge(yearsNew[0]));

*/

/* 
// Basic Array Operators (Methods) (23/11/2023) - 5:13am


const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// Push add a new element at the end of the array and it return the new length
const newLength = friends.push("Paul");
console.log(friends);
console.log(newLength);

// Unshift adds a new element at the beginning of the array and it also returns the new lenght
friends.unshift("John");
console.log(friends);

// Remove elements
friends.pop(); // Pop basically removes the last element of the array by default and it returns the remvoed element
console.log(friends);

friends.shift(); // Shift removes the first elemenf ot the array by default
console.log(friends);

console.log(friends.indexOf("Steven")); // Return the position of the element

console.log(friends.includes("Peter")); // Same as indexOf but this only says true or false

*/

/* 
// Introduction to Objects (23/11/2023) - 5:32am


const syedArray = ["Syed", "I", 2037 - 1991, "developer", ["Michael", "Steven", "Peter"]];

const syed = {
  firstName: "Syed",
  lastName: "I",
  birthYear: 2037 - 1991,
  job: "developer",
  friends: ["Michael", "Steven", "Peter"],
};

console.log(syed);

*/

/* 
// Dot vs Bracket Notation (23/11/2023) - 5:36am


const syed = {
  firstName: "Syed",
  lastName: "I",
  age: 2037 - 1991,
  job: "developer",
  friends: ["Michael", "Steven", "Peter"],
};

console.log(syed);

// Dot notation
console.log(syed.job);

// Bracket notation
console.log(syed["firstName"]);

// Good thing about bracket notation is that we can use expression inside I mean for indexing
const nameKey = "Name";
console.log(syed["last" + nameKey]);

// const interestedIn = prompt("What do you want to know about Syed?");
// console.log(interestedIn);
// console.log(syed[interestedIn]);

syed.location = "Chennai";
console.log(syed);

*/

/* 
// Object Methods (23/11/2023) - 5:51am


const syed = {
  firstName: "Syed",
  lastName: "I",
  birthYear: 1991,
  job: "developer",
  friends: ["Michael", "Steven", "Peter"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
};

// console.log(syed["calcAge"](1991));

console.log(syed);
console.log(syed.calcAge());
console.log(syed.age);

*/

/* 
// Itertation : The For Loop (23/11/2023) - 6:08am


for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

*/

/* 
// Looping Arrays, Breaking and Continuing (23/11/2023) - 6:13am


const syed = ["Syed", "I", 2037 - 1991, "developer", ["Michael", "Steven", "Peter"]];

console.log(syed);
const types = [];

for (let i = 0; i < syed.length; i++) {
  console.log(syed[i], typeof syed[i]);

  // types[i] = typeof syed[i];
  types.push(typeof syed[i]);
}

console.log(types);

*/

/* 
// Looping Backwards and Loops in Loops (23/11/2023) - 6:20am


const syed = ["Syed", "I", 2037 - 1991, "developer", ["Michael", "Steven", "Peter"]];

for (let i = syed.length - 1; i >= 0; i--) {
  console.log(syed[i]);
}

for (let i = 1; i <= 3; i++) {
  console.log(`Exercise ${i}`);
  for (let j = 1; j <= 5; j++) {
    console.log(`Exercise ${i}, Repiition ${j}`);
  }
}

*/

/* 
// The While Loop (23/11/2023) - 6:26am
*/

// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting weights repition ${rep}`);
//   rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}
