// or we can use css
function dispNone() {
  let tabBody = document.querySelectorAll('.tab_body');
  for (let i = 0; i < tabBody.length; i++) {
    tabBody[i].style.display = "none";
  }
}
dispNone();

// onclick function for 3x tabs
let showTabs = document.querySelectorAll('.tab');
for (let i = 0; i < showTabs.length; i++) {
  showTabs[i].onclick = show;
}

// define attribute 'data'
function show() {
  let data = this.getAttribute("data");
  console.log(data);

  // define 3x "tab_body"
  let tabBody = document.querySelectorAll(".tab_body");
  for (let i = 0; i < tabBody.length; i++) {
    tabBody[i].style.display = "none";
  }
  document.querySelector(` .tab_body[data="${data}"]`).style.display = "block";
}

// css style
.tabs {
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: auto;
  background-color: pink;
}

.tab {
  display: inline-block;
  border: 1px solid black;
  padding: 5px 5px;
  background-color: pink;
  font-weight: bold;
}
