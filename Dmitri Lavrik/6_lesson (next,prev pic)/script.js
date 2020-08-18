let btn_preview = document.querySelector('.gallery .buttons .preview');
let btn_next = document.querySelector('.gallery .buttons .next');

let images = document.querySelectorAll('.gallery .photos img');
let i = 0;

btn_next.onclick = function() {
  images[i].classList.remove('showed');
  i++;
  
  if(i >= images.length) {
    i = 0;
  }
  images[i].classList.add("showed");
}

  btn_preview.onclick = function() {
  images[i].classList.remove('showed');
  i--;
  
  if(i < 0) {
    i = images.length - 1;
  }
  images[i].classList.add("showed");
}


