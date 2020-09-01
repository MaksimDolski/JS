// operators for for ... of 

// for loop
var list = ["firstItem", "secondItem", "thirdItem"];

for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
}

var array = [];
for (let i = 0; i <= 5; i++) {
  array[i] = `value ${i}`;
  // or we can use: array.push():
  array.push(`value ${i}`);
}
console.log(array);

for... of
var list = ["first", "second", "third"];
for (let value of list) {
  console.log(value);
}

// for ... of and continue/break
var array = ["one", "two", 2, "three", null, "four", "five"];
for (let value of array) {
  if (typeof value === "string") {
    continue;
  }
  if (value === null) {
    break;
  }
  console.log(value);
}

// forEach
var array = ["one", "two", "three"];
array.forEach(function (item) {
  console.log(item);
});

// forEach - two arguments
var array = ["one", "two", "three"];
array.forEach(function (item, index) {
  console.log(`index: ${index}, item: ${item}`);
});

// arrow array foreEach
array.forEach((item, index) => {
  console.log(`index: ${index}, item: ${item}`);
});

// example
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
  console.log(number * 2);
});

// map - makes new array from return
let array = [1, 2, 3, 4, 5];
let doubleArray = array.map(function (number) {
  return number * 2;
});

console.log(array);
console.log(doubleArray);

// example
let array = [1, 2, 3, 4, 5];
let newArray = array.map(function (numbers) {
  return "The number is: " + numbers;
});
console.log(newArray);

// the same result using arrow function
let array = [1, 2, 3, 4, 5];
let newArray = array.map(numbers => {
  console.log(`The number is ${numbers}`);
});
The number is 1
The number is 2
The number is 3
The number is 4
The number is 5

let array2 = [1, 2, 3, 4, 5];
let newArray2 = array2.map(numbers => {
  return `The numbers is ${numbers} `
});
console.log(newArray2); //["The numbers is 1 ", "The numbers is 2 ", "The numbers is 3 ", "The numbers is 4 ", "The numbers is 5 "]

filter(); + arrow
function
let array = ["hello", "Mark", "John", 2, "July", 8];
let newArray = array.filter(items => typeof items === "string");
console.log(newArray);

filter(); + function
let array = ["hello", "Mark", "John", 2, "July", 8];
let newArray = array.filter(function (items) {
  if (typeof items === "string") {
    console.log(items);
  }
});

filter();
example
let array = [1, 2, 3, 4, 5];
let newArray = array.filter(function (values) {
  let newArray = values * 2;
  return values > 2;
});
console.log(newArray); // [3,4,5]

// methods
some(); -
return true
if one of all items in arraw is true
every(); -
return true
if all items in array are true

let array = [1, 2, 3, 4, 5];
let value = array.every(function (items) {
  return items > 1
});
console.log(value); // false

let array = [1, 2, 3, 4, 5];
let value = array.some(function (items) {
  return items > 1
});
console.log(value);

the same as arrow
function
let value = array.some(items => items > 1);
console.log(value);

// reduce and reduceRight methods

// reduce
var array = [1, 2, 3, 4, 5, 6];
var arraySum = array.reduce(function (value, num) {
  return value + num
});
console.log(arraySum); // 21

//reduceRight
var array = [1, 2, 3, 4, 5, 6];
var arraySum = array.reduceRight(function (num1, num2) {
  return num1 + num2
});
console.log(arraySum); // 21





// END