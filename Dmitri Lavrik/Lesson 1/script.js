const button = document.querySelector("button");

function buttonClicker () {
  console.log("Click");
}

button.addEventListener("click", buttonClicker);


const b = {
  russia: "Moscow",
  usa: "Washington",
  knr: "Beiging"
};

for(let key in b) {
  console.log(key); // russia usa knr
}

for(let key in b) {
  console.log(b[key]); // Moscow Washington Beiging
}
   