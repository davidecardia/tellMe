import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
        children: [
          {
            path: 'chat',
            loadChildren: './../pages/chat/chat.module#ChatPageModule'
          },
          {
            path: 'gruppi',
            loadChildren: './../pages/gruppi/gruppi.module#GruppiPageModule'
          },
          {
            path: 'stato',
            loadChildren: './../pages/stato/stato.module#StatoPageModule'
          },
          {
            path: 'utenti',
            loadChildren: './../pages/utenti/utenti.module#UtentiPageModule'
          }]
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
