// var a = 5;
// var b = "5";

// if (a === b) {
// console.log(true);
// }
// else {
//     console.log(false);
// }


// if () {

// }
// else if () {

// }
// else if () {

// }

// else () {

// }

//Gues the number

var a = Math.random(); // генирирует случайное число
a = a * 10;
a = Math.round(a);
console.log(a);

var userNum = document.querySelector("#user-num");
document.querySelector("#btn").onclick = checkNum;

function checkNum() {
    let num = userNum.value;
    num = parseInt(num); // возвращает целое число, если будет 321e - функция вернёт 321 
    console.log(num);
    if (isNaN(num)) {
        alert("Введите корректное число");
    }
    else if (num == a) {
        alert("Вы угадали число!");
        location.reload();
    }
    else {
        alert("Try again");
    }
}

