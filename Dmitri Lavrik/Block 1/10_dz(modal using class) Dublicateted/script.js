function Popup() {

  this.modal = document.querySelector('.modal');
  this.overlay = document.querySelector('.overlay');

  let popup = this;

  this.open = function (content) {
    popup.modal.innerHTML = content;
    popup.modal.style.display = 'block';
    popup.overlay.style.display = 'block';
  }

  this.close = function () {
    popup.modal.style.display = 'none';
    popup.overlay.style.display = 'none';

  }

  popup.overlay.onclick = popup.close;

}

let p = new Popup();

// p.open();

// setTimeout(function () {
//   p.open("fwoeqf");
// }, 3000);

document.querySelector('.about').onclick = function () {
  p.open("about");
}

document.querySelector('.form').onclick = function () {
  p.open("form");
}

document.querySelector('.call').onclick = function () {
  let form = document.querySelector('.form');
  p.open(form.innerHTML);
}