let links = document.querySelectorAll("a[target=_blank]");
console.log(links);

for(let i = 0; i < links.length; i++) {
  links[i].onclick = confirmAway;
}

function confirmAway() {
  if(!confirm("Небезопасный сайт, перейти?")) {
    
    return false; // отменяет стандартное событие браузера и не включит ссылку1

}
}

// чтобы нельзя было перенести картинку на рабочий стол и нельзя было сохранить правой кнопкой мыши:

let images = document.querySelectorAll('.gallery img');

for(let i = 0; i < images.length; i++) {
  images[i].onmousedown  = stopMove; // нельзя переместить на рабочий стол зажав картинку
  images[i].oncontextmenu = stopMove; 
}

function stopMove() {
  return false; 
}