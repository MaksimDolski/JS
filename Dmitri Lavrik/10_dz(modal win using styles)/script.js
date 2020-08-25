let modal = document.querySelector('.modal');
let btn = document.querySelector(".btn");
let span = document.querySelector(".close");

btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) { // event.target - показывает куда именно кликнули / где именно сработал обработчик
    modal.style.display = "none";
  }
}