var a = Math.random(); // генирирует случайное число
var a = Math.round(a); // округляет число
var userNum = document.querySelector("#user-num");
document.querySelector("#btn").onclick = checkNum;
num = parseInt(num); // возвращает целое число, если будет 321e - функция вернёт 321
location.reload(); // перезагружает код в месте вставки

// String, number, boolean, date, math 

//indexOf(); - метод, возвращает номер позиции в строке
var text = "Life is good, life is great!";
var search = "is";
var result = text.indexOf(search);
console.log(result);

var result2 = "bad"; // такой позиции нет
var result2 = text.indexOf(result2);
console.log(result2); // -1

//lastIndexOf();
const text = "Life is good, life is great";
const position = text.lastIndexOf("is"); // 19

//lastIndexOf(); has second param,
const text = "life is good, life is great";
const key = "g";
const position = text.indexOf(key, 10); // пропустить 10 поз и искать "g"

// trim(); удаляет пробелы
var language = " JS ";
var result = language.trim();

// substr()
var a = "Life is good";
var result = a.substr(8, 4); // good

// substring();
var a = "Life is good";
var result = a.substring(0, 5); // life

//split();
var a = "Life is good, life is great";
var result = a.split(" "); // ["Life", "is", "good,", "life", "is", "great"] // разделяет строку по тому принципу, который мы указали

// concat(); - объединяет строки в одну
var a = "Hello";
var b = "Jogh";
var c = "";
var result = c.concat(a, " ", b);
console.log(result);

// Number and Boolean
let num = Number("777"); // 777
let num = Number("number"); // Nan

// Number.isInteger();
Number.isInteger(0); // false
Number.isInteger(12); // true
Number.isInteger(0.1); // false

// String example
var str = "Sting"; // String
var srs = String("String"); // string
var str = new Sctring("String"); // object

// Number example
let num = 25; // Number
let num = Number(25); // Number 
let num = new Number(25); // object

// Boolean example
let bool = true; // Boolean
let bool = Boolean(true); // Boolean
let bool = new Boolean(true) // object

// Date
let a = new Date; // from 1 Januart of 1970 

// END