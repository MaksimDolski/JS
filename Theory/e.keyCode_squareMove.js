// document.querySelector('#one').onkeypress = function(e) {
// console.log(e);  // e - shows us properties
// }

let left = 0;
let up = 0;
document.onkeypress = function(e) {
  console.log(e.keyCode);
  let square = document.querySelector('.square');

  // D - right
  if (e.keyCode == 100) {
    left = left + 10;
    square.style.marginLeft = left + "px";

  // A - left
  } else if (e.keyCode == 97) {
    left = left - 10;
    square.style.margindadsLeft = left + "px";

  // W - up
} else if (e.keyCode == 119) {
  up = up - 10;
  square.style.marginTop = up + "px";

  // S - down
  } else if (e.keyCode == 115) {
    up = up + 10;
    square.style.marginTop = up + "px";
}
}
