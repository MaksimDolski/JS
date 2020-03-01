// function declaration and function expression

// Function declaration
function add(num1, num2) {
  return num1 + num2;
}

// Function expression
var add = function (num1, num2) {
  return num1 + num2;
};

function sayHello(name) {
  var nameUpper = name.toUpperCase();
  return "Hello " + nameUpper;
}
let userName = "Max";
var result = sayHello(userName);
console.log(result);
и

// or:
function sayHello(name) {
  return "Hello " + name.toUpperCase();
}
let userName = "Maxim";
let result = sayHello(userName);
console.log(res ult);

var run1 = function () {
  return "This is a first function";
}

function run2(param) {
  var one = "This is a second function";
  var two = param();
  return one + two;
}
console.log(run2(run1));

function expression
var showFullName = function (firstName, secondName) {
  return firstName + " " + secondName;
}
var obj = {
  fullName: showFullName
}

var result = obj.fullName("John", "Duble");
console.log(result);

//setTimeout
var param = function () {
  console.log("Anonymous function");
}
setTimeout(param, 2000);

// or:
setTimeout(function () {
  console.log("Anonymous function");
}, 500);

// Immediatly Invoked function
(function () {
  console.log("IIFE");
})();

//Arrow function
let getSum = (a, b) => a + b;

[1, 2, 3, 4, 5].map(item => item * 2); // [2,4,6,8,10]







// END