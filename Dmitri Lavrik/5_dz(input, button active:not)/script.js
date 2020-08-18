// works fine just for one input

// let inputs = document.querySelectorAll('.form input');
// let button = document.querySelector('.form input[type=submit]');
// 
// function success() {  
// 	 if(inputs.value == "") { 
//             button.disabled = true; 
//         } 
//         else { 
//             button.disabled = false;
//         }
//     }

  
// onsubmit
let inputs = document.querySelectorAll('form input[type=text]');
 
let form = document.querySelector('form').onsubmit = function(e) {
  for(let i = 0; i < inputs.length; i++) {
    if(inputs[i].value == "") {
      inputs[i].classList.add('err');
      e.preventDefault(); // блокирует кнопку
      // return = false; // сработало бы, но тогда красная подсветка подсвечивала инпуты после каждого нажатия кнопки
    }
  }
}