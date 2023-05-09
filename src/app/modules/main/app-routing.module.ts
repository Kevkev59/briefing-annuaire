import { Component, NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CardComponent } from '../annuaire/card/card.component';

const routes: Routes = [
  {
    path:'detail',
    component:CardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
