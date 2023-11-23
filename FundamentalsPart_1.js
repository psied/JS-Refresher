// Start Time (22/11/2023 - 1:50am)

/*
// Values and Variables (22/11/2023 - 1:50am)

let js = "amazing";
console.log(40 + 60);

console.log("Syed");

let firstName = "Paul";
//naming should be discriptive just a good practice can be ignored if you wnat to be cryptic
console.log(firstName);

*/

/*
// Data Types (22/11/2023 - 2:02am)


// Numbers : Floating Point Numbers
// String : Sequence of Characters
// Boolean : Logical type that can only be true or false
// Undefined : So it's a variable without a value or not defined yet
// Null : Empty value basically
// Symbol (Introduced in ES2015) : It's just a value that's unique and cannot be changed
// BigInt (Introduced in ES2020) : Integers that are larger than the Number data type

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log("javascriptIsFun before changing below");
console.log(typeof javascriptIsFun); // typeof : It literally means what it says
console.log(typeof "Hello World!");
console.log(typeof 23);

// Dynamic Typing : Basically a fancy word to say JS automatically can change Data Types

javascriptIsFun = "Yes!";
console.log("javascriptIsFun after changing below");
console.log(typeof javascriptIsFun); // See it changed from boolean to string automatically

let year;
console.log(year);
console.log(typeof year);

*/

/*
// let, const and var (22/11/2023 - 2:19am)


let age = 30;
age = 31;

const birthYear = 2000;

// const job;
// In the above statement you see this will throw an error because const cant be undefined, coz it kinda makes sense, const cant be changed

var job = "programmer";
// Pro tip never use var keyword just an FYI if your planning to use one until and unless you know what your doing DONT USE IT
job = "student";

*/

/* 
// Basic Operators (22/11/2023 - 2:26am)


const ageSyed = 2037 - 2000;
const agePaul = 2037 - 2018;

console.log(ageSyed, agePaul);

const firstName = "Syed";
const lastName = "I";

console.log(firstName + " " + lastName);

*/

/* 
// Operator Precedence (22/11/2023 - 2:36am)

// Basically BODMAS from Math but if you want some more info check out the mdn for js
*/

/*
// String and Template Literal (22/11/2023 - 2:45am)


const firstName = "Syed";
const job = "programmer";
const birthYear = 1991;
const year = 2037;

// Normal string concatination method
const syed = "I'am " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(syed);

// Template Literal method
const syedNew = `I'am ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(syedNew);

// To move to next line use this
console.log(`first line
second line`);

*/

/* 
// If/Else Statements (22/11/2023 - 2:51am)


const age = 19;

if (age >= 18) {
  console.log("You can get a driving license!");
} else {
  console.log("You cannot get a driving license!");
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

*/

/* 
// Type Conversion and Coersion (22/11/2023 - 3:25am)


const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number("Syed"));
// Basically it prints out it as a NaN which means Not a Number which is a type of number

console.log(String(23));

*/

/* 
// Truthy and Falsy values (22/11/2023 - 3:32am)


// Falsy Values : Values which will be converted to false { 0, '', undefined, null, NaN }

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("Syed")); // true

const money = 0;

if (money) {
  console.log("Save some money!");
} else {
  console.log("You need a job fr!");
}

*/

/* 
// Equality Operators (22/11/2023 - 3:36am)


const age = 18;

// === means strict equalt like character by character match
if (age === 18) {
  console.log("You a adult now!");
}

*/

/* 
// Boolean Logic (22/11/2023 - 3:39am)


// Boolean Logic : Uses true and false to solve problems (AND, OR, NOT)

*/

/* 
// Logical Operators (22/11/2023 - 3:42am)


const hasDriversLicense = false;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense && hasGoodVision);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
  console.log("You are able to drive!");
} else {
  console.log("You wont be able to drive");
}

*/

/* 
// Switch Statement (22/11/2023 - 3:51am)


const day = "sunday";

switch (day) {
  case "monday":
    console.log("Chest and Triceps");
    break;
  case "tuesday":
    console.log("Cardio");
    break;
  case "wednesday":
    console.log("Back and Biceps");
    break;
  case "thursday":
    console.log("Cardio");
    break;
  case "friday":
    console.log("Legs and Shoulder");
    break;
  case "saturday":
  case "sunday":
    console.log("Rest");
    break;
  default:
    console.log("Not a valid day!");
}

*/

/* 
// Statements and Expressions (22/11/2023 - 3:58am)
*/

/* 
// The Conditional Ternary Operator (22/11/2023 - 4:01am)


const age = 23;
age >= 18 ? console.log("Adult!") : console.log("Not Adult!");
// So what you see here is basically if else but as operators statements after "?" is if part and statements after ":" is the else part

const isAdult = age >= 18 ? "Yes" : "No";
console.log(isAdult);

console.log(`I am an Adult? ${age >= 18 ? "Yes" : "No"}`);

*/
