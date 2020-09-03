let items = document.querySelectorAll('.items .item');
let divPrice = document.querySelector('.value');

for(let i = 0; i < items.length; i++){
  items[i].onclick = function(){
  this.classList.toggle('item-active');
  calcPrice();
  } 
}

function calcPrice() {
  let price = 0;
  
for(i = 0; i < items.length; i++){
  if(items[i].classList.contains('item-active')){
    price += parseInt(items[i].getAttribute('data-price'));
  } 
}

divPrice.innerHTML = price; 
}
 