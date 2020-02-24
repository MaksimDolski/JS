var block = document.querySelector('.block');
block.style.width = "400px";
console.log(block.style);

block.classList.add("red");

block.classList.remove("red");
block.classList.contains("red") // has? true or false
