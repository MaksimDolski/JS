// Plus
let num1 = document.querySelector('input[name=num1]');
let num2 = document.querySelector('input[name=num2]');
let btn1 = document.querySelector('button[name=button]');
let result1 = document.querySelector('.result1');

btn1.onclick = function() {
let res1 = parseInt(num1.value) + parseInt(num2.value);
 result1.innerHTML = res1;
}

// Minus
let num3 = document.querySelector('input[name=num3]');
let num4 = document.querySelector('input[name=num4]');
let btn2 = document.querySelector('button[name=button2]');
let result2 = document.querySelector('.result2');

btn2.onclick = function() {
let res2 = parseInt(num3.value) - parseInt(num4.value);
result2.innerHTML = res2;
}

//Division
let num5 = document.querySelector('input[name=num5]');
let num6 = document.querySelector('input[name=num6]');
let btn3 = document.querySelector('button[name=button3]');
let result3 = document.querySelector('.result3');

btn3.onclick = function() {
let res3 = parseInt(num5.value) / parseInt(num6.value);
result3.innerHTML = res3;
}

//Multiply
let num7 = document.querySelector('input[name=num7]');
let num8 = document.querySelector('input[name=num8]');
let btn4 = document.querySelector('button[name=button4]');
let result4 = document.querySelector('.result4');

btn4.onclick = function() {
let res4 = parseInt(num7.value) * parseInt(num8.value);
result4.innerHTML = res4;
}