import { Injectable } from '@angular/core';
import { ClientClass } from 'src/app/model/client-class';


@Injectable({
  providedIn: 'root'
})

export class ContactListService {
  Clients: ClientClass[] = [
    {
      firstname:"Louis",
      secondname:"Huithon",
      adresse:"inconu",
      phone:"06 12 34 56 78",
      type:false,
      id:1,
    },

    {
      firstname:"Gerard",
      secondname:"Mensoif",
      adresse:"inconu",
      phone:"06 12 34 56 78",
      type:true,
      id:2,
    },

    {
      firstname:"Johny",
      secondname:"Begood",
      adresse:"inconu",
      phone:"06 12 34 56 78",
      type:false,
      id:3,
    },

    {
      firstname:"Saul",
      secondname:"Goodman",
      adresse:"inconu",
      phone:"06 12 34 56 78",
      type:true,
      id:4,
    },

    {
      firstname:"Monica",
      secondname:"Levinsky",
      adresse:"inconu",
      phone:"06 12 34 56 78",
      type:true,
      id:5,
    }
  ]

  listerLesClients ():ClientClass[]{
    return this.Clients;
  }

}
