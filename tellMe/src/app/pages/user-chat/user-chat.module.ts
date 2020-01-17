import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UserChatPage } from './user-chat.page';
import { SortPipe } from 'src/app/pipes/sort.pipe';

const routes: Routes = [
  {
    path: '',
    component: UserChatPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserChatPage,SortPipe]
})
export class UserChatPageModule {}
