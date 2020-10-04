import { Component } from "@angular/core";

@Component({
    selector: 'app-post4',
    template: 
    `<div class="post4">
    <h2>Post title</h2>
    <p>Lorem </p>
    < /div>`,
    styles: [`
    .post4 {
        padding: 10px;
        border: 1px solid red; 
    }
    h2 {
      font-size: 16px;  
    }
    `]
})

export class Post4Component {

}