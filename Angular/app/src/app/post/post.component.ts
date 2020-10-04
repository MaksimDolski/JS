import { style } from '@angular/animations';
import {Component} from '@angular/core'
 
@Component({ // декоратор
    selector: 'app-post', // компонент
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'] // можем добавлять через запятую разные .scss стили
})

export class PostComponent {
    title = 'post';
}