import { Component } from '@angular/core';
import { ContactListService } from '../../../services/contact-list.service';
import { ClientClass } from 'src/app/model/client-class';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent {
  constructor(private contact: ContactListService) {} // appel le service
  public tabCli!:ClientClass[];

  ngOnInit():void

  {
    this.tabCli=this.contact.listerLesClients();
  }

}
