let num1 = document.querySelector('input[name=num1]');
let num2 = document.querySelector('input[name=num2]');
let btn = document.querySelector('button[name=button]');
let result = document.querySelector('.result');

btn.onclick = function () {
  // Вариант 1 для блокировки кнопки:
  // btn.className = "btn_off";
  
  // Вариант 2 для блокировки кнопки:
  // this.setAttribute('disabled', 'disabled'); // btn off
  // this.removeAttribute('disabled'); // btn on
  // element.setAttribute(имяАтрибута, значение);
  //    let p = document.getElementById("para");
  //    p.setAttribute("style", "color: red;");
  
  // Вариант 3:
  this.disabled = true;
  // this.disabled = false;
  
  // Дальнейшая активация кнопки, вариант 1:
  // num1.onchange = function() {
  //   btn.disabled = false;
  // }
  
  // активация кнопки, вариант 2:
  // num1.oninput = function() {
  // btn.disabled = false;  
  
  // можно сделать функцию для двух инпутов, чтобы не было повторяющегося кода:
  num1.oninput = btnEnable;
  num2.oninput = btnEnable;
  
  function btnEnable () {
    btn.disabled = false;
  }
  
    
if (document.querySelector('.symbols').value === 'plus') {
  res = parseInt(num1.value) + parseInt(num2.value);
  result.innerHTML = res;
}

else if (document.querySelector('.symbols').value === 'minus') {
  res = parseInt(num1.value) - parseInt(num2.value);
  result.innerHTML = res;
}

else if (document.querySelector('.symbols').value === 'division') {
  res = parseInt(num1.value) / parseInt(num2.value);
  result.innerHTML = res;
}

else if (document.querySelector('.symbols').value === 'multiply') {
  res = parseInt(num1.value) * parseInt(num2.value);
  result.innerHTML = res;
}

}

// чтобы не дублировать код, можно написать логику программы так:
function (calcForm) {
  var a = parseInt(num1.value);
  var b = parseInt(num2.value);
  var result = 0;
  
switch (calcForm) {
  case "+":
 result = a + b;    
    break;
    
    case "-":
    result = a - b;
    break;
  
  case "*":
  result = a * b; 
  break;
  
  case "/":
  result = a / b;
  break;
  
  result.innerHTML = res;
}

}






































//
