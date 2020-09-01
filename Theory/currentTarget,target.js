// this

// example

let user1 = {
  firstName: "John",
  lastName: "Skills",
};

let user2 = {
  firstName: "Mark",
  lastName: "Bublov"
};

function fullName() {
  console.log(`${this.firstName} ${this.lastName}`);
}
user1.getFullName = fullName; // get.FullName - произвольное значение
user2.getFullName = fullName;

user1.getFullName();
user2.getFullName();

// without this we should write:
let user1 = {
  firstName: "John",
  lastName: "Skills",
};

let user2 = {
  firstName: "Mark",
  lastName: "Bublov"
};

user1.getFullName1 = fullName1;
user2.getFullName2 = fullName2;

function fullName1() {
  console.log(`${user1.firstName} ${user1.lastName}`);
}

function fullName2() {
  console.log(`${user2.firstName} ${user2.lastName}`);
}

user1.getFullName1();
user2.getFullName2();

// example
// <div>div element</div>
<
span > span element < /span>
const div = document.querySelector("div");
const span = document.querySelector("span");

function handler() {
  console.log(this);
}

div.addEventListener("click", handler); // <div>div element</div>
span.addEventListener("click", handler); // <span>span element</span>  

// example

// <ul id="list">
//   <li>First</li>
//   <li>Second</li>
//   <li>Third</li>
//   <li>Fourth</li>
// </ul>

const list = document.querySelector('#list');

function handler(event) {
  console.log(this); // выводит все элементы div
  console.log(event.currentTarget); // выводит все элементы div
  console.log(event.target); // выводит всегда первый элемент - <li>First</li>
  console.log(this === event.currentTarget); // true

}

list.addEventListener("click", handler);









// END