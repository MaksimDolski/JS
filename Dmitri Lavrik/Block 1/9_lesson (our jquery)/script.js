//JQuery
function OurJquery(elements) {

  this.elements = elements;

  this.on = function (eventname, f) {
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].addEventListener(eventname, f);
    }
  }
}



// script.js
let jqInputs = new OurJquery(inputs);

jqInputs.on('click', function () {
  this.classList.remove('err');
});

jqInputs.on('focus', function () {
  this.classList.add('focus');
});

jqInputs.on('blur', function () {
  this.classList.remove('focus');
});