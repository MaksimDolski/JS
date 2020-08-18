let btn_preview = document.querySelector('.gallery .buttons .preview');
let btn_next = document.querySelector('.gallery .buttons .next');
let images = document.querySelectorAll('.gallery .photos img');


// Slider
let slider = new Slider();
btn_preview.onclick = function() {
  slider.btn_preview();
}

btn_next.onclick = function() {
slider.btn_next();
}

function Slider() {
  this.images = images;
  let i = 0;

  // Preview button
  this.btn_preview = function() {
      this.images[i].classList.remove('showed');
      i++;
      
      if(i >= this.images.length) {
        i = 0;
      }
      this.images[i].classList.add("showed");
    }
    
    
    // Next button
    this.btn_next = function() {
      
    this.images[i].classList.remove('showed');
    i--;
    
    if(i < 0) {
      i = this.images.length - 1;
    }
    this.images[i].classList.add("showed");
  }
    
  }
  


