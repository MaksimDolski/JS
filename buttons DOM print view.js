
//   <button onclick="printMode1();">Print View</button>
//  <button onclick="printMode2();">Web View</button>
function printMode1() {
  document.querySelector("link").href = "style2.css";
}
function printMode2() {
  document.querySelector("link").href = "style.css";
}
