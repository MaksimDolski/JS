let blocks = document.querySelectorAll('.block');
// or let blocks = getElementsByClassName('.block');
for (var i = 0; i < blocks.length; i++) {
  blocks[i].onclick = blocksFunc;
}

function blocksFunc() {
  console.log(this.innerHTML); // elem name
  this.style.color = "white";
}

// or we can use forEach function:
blocks.forEach(function(element) {
   console.log(element);
   element.onclick = function () {
     console.log("Klick!");
   }
});

<div class="block">1</div>
<div class="block">2</div>
<div class="block">3</div>
<div class="block">4</div>
<div class="block">5</div>
<div class="block">6</div>
<div class="block">7</div>
<div class="block">8</div>


.block {
display: flex;
align-items: center;
justify-content: center;
float: left;
width: 50px;
height: 50px;
border: 1px solid white;
background-color: pink;
border-radius: 10px;
}
