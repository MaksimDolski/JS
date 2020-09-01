// Objects - data type, has key and value

let user = {
  firstName: "John",
  lastName: "Connor",
  age: 25,
  info: { // 2x level object
    birthday: "19/11/1986",
    language: "English"
  },
  hairColor: "brown",
  greating: function (name) { // method
    return console.log("Hello " + name);
  }
};

user.greating("John"); // Hello John
user.info.language; // English

let name = user.firstName;
delete user.hairColor;
user.password = "123";

// перебор ключей в объекте
let key;
for (key in user) {
  console.log(user[key]);
}

// example
let a = "value";
let b = a;
a; // value
b; // value

let a = null;
a; // null
b; // value

// example 
var original = {
  number: "777"
};
var linked = original; // здесь передаётся не сам объёкт, а ссылка на объект

original.number = "888";
linked.number; // 888


// example - object coppying
let userA = {
  name: "John",
  surname: "Connor"
};

let userB = {
  name: "John",
  surname: "Connor"
};

let userC = userA; // скопировали по ссылке

console.log(userA === userB); // false
console.log(userA === userC); // true

// example - object coppying
let products = {
  fruit: "banana",
  vegetable: "carrot",
  juice: "orange"
};

let key;
let newProducts = {};

for (key in products) {
  newProducts[key] = products[key];
}
newProducts.fruit = "apple";

console.log(products.fruit); // banana - no changes
console.log(newProducts.fruit); // apple


// example Object.assign() - копирует объекты
let products = {
  fruit: "banana",
  vegetable: "carrot"
};

let newProducts = {
  juice: "orange"
};

let allProducts = Object.assign({}, products, newProducts);
console.log(allProducts);

// example for... in
let products = {
  juice: "orange",
  fruit: "banana",
  vegetable: "carrot"
};

let key;
for (key in products) {
  console.log(products[key]);
}

// Object.keys() - выводит массив со списком ключей
let a = {
  juice: "orange",
  fruit: "banana",
  vegetable: "carrot"
};

let result = Object.keys(a);
console.log(result);

//  Spread - оператор разворота, разворачивает один объект в другой
var programmer = {
  name: "David",
  age: 30,
  editor: "VS Code"
};

var user = {
  editor: "Sublime Text"
};

var newUser = {
  ...programmer,
  ...user
};
// {name: "David, age: 30, editor: "Sublime Text"}

// END