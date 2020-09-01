// document.getElementById("one").innerHTML = 4314;
// var p = document.getElementById("one");
// p.innerHTML = 2342314;

// function hello() {
//     console.log("Hello from 1-st function");
//     hello_2();
// }

// function hello_2() {
//     console.log("Hello from 2-nd function");
// }

// hello();

// var btn = document.querySelector("#btn");
// btn.onclick = hello;


function show() {
    var modal = document.querySelector(".modal");
    if (modal.style.display === "none") {
        modal.style.display = "block";
} else {
    modal.style.display = "block";
    }
}

function hide() {
    var modal = document.querySelector(".modal");
    if (modal.style.display === "block") {
        modal.style.display = "none";
    } else {
        modal.style.display = "none";
    }
}
