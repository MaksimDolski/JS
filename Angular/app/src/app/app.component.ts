import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

 title = 'Dynamic title' 
 number = 42
 arr = [1,2,3]
  img = 'https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg'


constructor() { // если путь картирнки изменится
setTimeout(() => {
  console.log('Timeout is over');
  this.img =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1920px-Angular_full_color_logo.svg.png';
}, 2000);
}
}
 
