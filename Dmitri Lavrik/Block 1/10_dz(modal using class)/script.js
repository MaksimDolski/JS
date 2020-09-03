function Popup() {

  this.modal = document.querySelector('.modal');
  this.modalContent = document.querySelector('.modal-content');
  this.modalBody = document.querySelector('.modal-body');
  this.about = document.querySelector('.about');

  let popup = this;

  popup.open = function (content) {
    // popup.modal.innerHTML = content;

    popup.modal.classList.remove('modal');
    popup.modal.classList.add('open');

    popup.modalContent.classList.remove('.modal-content');
    popup.modalContent.classList.add('open');
  }

  popup.close = function () {
    popup.modal.classList.remove('open');
    popup.modalContent.classList.remove('open');

  }

  popup.modalContent.onclick = popup.close;

}




let p = new Popup();

// p.open();

// setTimeout(function () {
//   p.close();
// }, 3000);

document.querySelector('.about').onclick = function () {
  p.open();
}

// document.querySelector('.closeX').onmouseover = function () {
//   p.close();
// }
// 
// document.querySelector('.btn2').onclick = function () {
//   let form = document.querySelector('.reg');
//   p.open(form.innerHTML);
// }