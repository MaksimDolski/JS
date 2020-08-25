// let modal = document.querySelector('.modal');
// let btn = document.querySelector(".btn");
// let span = document.querySelector(".close");
// 
// btn.onclick = function () {
//   modal.style.display = "block";
// }
// 
// span.onclick = function () {
//   modal.style.display = "none";
// }
// 
// window.onclick = function (event) {
//   if (event.target == modal) { // event.target - показывает куда именно кликнули / где именно сработал обработчик
//     modal.style.display = "none";
//   }
// }



function Popup() {
  this.modal = document.querySelector('.modal');
  this.modalBody = document.querySelector('.modal-body');
  this.btn = document.querySelector('.btn');
  this.span = document.querySelector('.close');

  let popup = this;

  popup.open = function (content) {
    popup.modalBody.innerHTML = content;
    popup.modal.classList.add('open');
  }

  popup.close = function () {
    popup.modal.classList.remove('open');
  }

  popup.modal.onclick = popup.close;

}

let p = new Popup();

setTimeout(function () {
  p.open('Lorem ipsum dolor sit amet, consectetur adipisicing elit');
}, 3000);

p.btn.onclick = function () {
  p.open("форма отправки сообщения");
}

p.span.onclick = function () {
  p.close();
}