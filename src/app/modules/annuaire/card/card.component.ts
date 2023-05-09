import { Component, Input } from '@angular/core';
import { ClientClass } from 'src/app/model/client-class';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls:['./card.component.css']
})

export class CardComponent {
 @Input() Client!:ClientClass;
}
