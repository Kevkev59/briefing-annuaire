import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [
    ListComponent,
    CardComponent,
    DetailComponent,
  ],

  imports: [
    CommonModule
  ],

  exports: [
    ListComponent,
    CardComponent
  ]
})
export class AnnuaireModule { }
