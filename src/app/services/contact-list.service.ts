import { Injectable } from '@angular/core';
import { ClientClass } from 'src/app/model/client-class';


@Injectable({
  providedIn: 'root'
})

export class ContactListService {
  Clients: ClientClass[] = [
    {
      firstname:"Louis",
      secondname:"vuithon",
      adresse:"18 Rue Kétanou, Lille",
      phone:"06 12 34 56 78",
      type:"Client",
      typeClient:false,
      id:1,
      photo:"https://picsum.photos/200/300?random=1"
    },

    {
      firstname:"Gerard",
      secondname:"Mensoif",
      adresse:"394 Avenue du père Fouétard, Nice",
      phone:"06 12 34 56 78",
      type:"Fournisseur",
      typeClient:true,
      id:2,
      photo:"https://picsum.photos/200/300?random=2"
    },

    {
      firstname:"Johny",
      secondname:"Begood",
      adresse:"585 Boulevard trop la classe, Paris",
      phone:"06 12 34 56 78",
      type:"Client",
      typeClient:false,
      id:3,
      photo:"https://picsum.photos/200/300?random=3"
    },

    {
      firstname:"Saul",
      secondname:"Goodman",
      adresse:"9800 Montgomery Blvd NE, Albuquerque",
      phone:"06 12 34 56 78",
      type:"Client",
      typeClient:false,
      id:4,
      photo:"https://picsum.photos/200/300?random=4"
    },

    {
      firstname:"Monica",
      secondname:"Levinsky",
      adresse:"1600, Pennsylvania Avenue NW, Washington D.C.",
      phone:"06 12 34 56 78",
      type:"Fournisseur",
      typeClient:true,
      id:5,
      photo:"https://picsum.photos/200/300?random=5"
    }
  ]

  listerLesClients ():ClientClass[]{
    return this.Clients;
  }


}
