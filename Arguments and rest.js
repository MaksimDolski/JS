// аргументы
// псевдо-класс arguments
// rest оператор

function sayHello(param) {
  var prefix = "Hi Mr. ";
  param.name = "Bart";
  return prefix + param.name;
}

var obj = {
  name: "Smith",
};

console.log(name); // Smith
console.log(obj.name); // Smith
console.log(sayHello(obj)); // Hi mr. Bart
console.log(obj.name); // Bart


// 2x arguments
function sayHello(firstName, lastName) {
  var pref = "Hello, Mr. ";
  return pref + firstName + " " + lastName;
}

var result = sayHello("Maxim", "Connor"); // Hello Mr. Maxim Connor
var result = sayHello("Maxim"); // Hello Mr. Maxim undefined
console.log(result);

// 2x arguments + Nobody (old version)
function sayHello(firstName, lastName) {
  var pref = "Hello Mr. ";
  return pref + firstName + " " + (lastName || "Nobody");
}

var result = sayHello("Maxim");
console.log(result);

// arguments
function sayHello() {
  console.log(arguments);
}

sayHello("Maxim", "Connor"); // ["Maxim", "Connor"]

function sayHello(greeting, name) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);

  console.log(greeting + name + arguments[2] + arguments[3]);
}

sayHello("Hi ", "John ", "Connor", "!");

function sayHello(greeting, name) {
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
sayHello("Hi ", "John ", "Connor", "!");

// оператор ...(rest) используется вместо arguments
// превращает строку в массив
function rest(...args) {
  console.log(args);
  console.log(Array.isArray(args));
}

rest(1, 2, 3);
// [1, 2, 3]
// true


// rest выдаёт все невыведенные переменные
function rest(person, secondPerson, ...arg) {
  console.log(person);
  console.log(secondPerson);
  console.log(...arg);
}
rest("John", "Max", "July", "Mia", 3212, true);




// END