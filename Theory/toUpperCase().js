var p1 = document.querySelector('#p1');
var p2 = document.querySelector('#p2');
var line = document.querySelector('#line');
var btn = document.querySelector('#btn');


function run() {
var result = document.querySelector('#line').value;
console.log(result);

var result2 = result.toUpperCase();
document.querySelector('#p2').innerHTML += result2;
}

// or

function run() {
var result = document.querySelector('#line').value;
document.querySelector('#p1').innerHTML += result;

var str;
for (var i = 0; i < result.length; i++) {
var str = result[i].toUpperCase();

document.querySelector('#p2').innerHTML += str;
}
}

// or
document.querySelector('#p1').style.textTransform = "uppercase";

<input id="line" type="text">
<button id="btn" type="button" onclick="run(); run2()">Upper</button>

<p id="p1">Lower case: </p>
<p id="p2">Upper case: </p>
