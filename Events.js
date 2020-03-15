a // Events

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