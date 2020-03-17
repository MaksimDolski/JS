ф a // Events

document.querySelector(".new").onclick = function () {
  console.log("click");
}

document.querySelector(".double").ondblclick = function () {
  console.log("double click");
}

document.querySelector(".mouse").onmousemove = function () {
  console.log("mouse has moved");
}

document.querySelector(".mouseEnter").onmouseenter = function () {
  console.log("mouse has moved2");
}

document.querySelector(".mouseLeave").onmouseleave = function () {
  console.log("mouse leave");
}

// Events
// <button onclick = "clickHandler()" > Button < /button>  // (старый способ)

function clickHandler() {
  console.log("Pressed!");
}

// the same code using DOM (старый способ)
var button = document.querySelector('button');

function click() {
  console.log("Pressed!");
}
button.onclick = click;

// using addEventListener();
var button = document.querySelector('button');
button.addEventListener("click", function () {
  console.log("Clicked!");
})

// example html: <button>Button</button>
var button = document.querySelector("button");

function buttonClicker1() {
  console.log("Clicked one");
}

function buttonClicker2() {
  console.log("Clicked two");
}

button.addEventListener("click", buttonClicker1);
button.addEventListener("click", buttonClicker2);

// example 
var link = document.querySelector("#link");
link.addEventListener("click", function () {
  console.log("click");
})
link.addEventListener("mousedown", function () {
  console.log("mousedown");
})
link.addEventListener("mouseup", function () {
  console.log("mouseup");
})
link.addEventListener("keyup", function () {
  console.log("keyup");
})

separate

function
var link = document.querySelector("#link");

function mouseDown() {
  console.log("mousedown");
}

function mouseUp() {
  console.log("mouseup");
}

function keyUp() {
  console.log("keyup");
}

link.addEventListener("mousedown", mouseDown);
link.addEventListener("mouseup", mouseUp);
link.addEventListener("keyup", keyUp);


// removeEventListener 
<
button > Button < /button>
var link = document.querySelector("#link");

function clicker() {
  console.log("Clicked");
}

link.addEventListener("click", clicker);
link.removeEventListener("click", clicker);






// END