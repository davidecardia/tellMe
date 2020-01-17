import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LastAccessPopoverPage } from './last-access-popover.page';

const routes: Routes = [
  {
    path: '',
    component: LastAccessPopoverPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LastAccessPopoverPage]
})
export class LastAccessPopoverPageModule {}
