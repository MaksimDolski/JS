// Порядок работы событий
// addEventListener принимает три параметра:
//   -имя события,
//   -функцию,
//   -стадия обработки события:
//   1) true - стадия захвата(capturing);
// 2) false - стадия всплытия(bubbling);


// bubbling
var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");

function msg(event) {
  console.log("Type: " + event.type); // click
  console.log("Target: " + event.target.id); // где была вызвана изначально
  console.log("Current target: " + event.currentTarget.id);
  console.log("---------------------");
}

one.addEventListener("click", msg);
two.addEventListener("click", msg);
three.addEventListener("click", msg);

// Type: click
// Target: three
// Current target: three
// ---------------------
// Type: click
// Target: three
// Current target: two
// ---------------------
// Type: click
// Target: three
// Current target: one
// ---------------------