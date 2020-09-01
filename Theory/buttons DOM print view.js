
//   <button onclick="printMode1();">Print View</button>
//  <button onclick="printMode2();">Web View</button>
function printMode1() {
  document.querySelector("link").href = "style2.css";
}
function printMode2() {
  document.querySelector("link").href = "style.css";
}

// or:
// document.querySelector(".btn").onclick = function () {
// console.log("show text"); console.log("show text");
// }
