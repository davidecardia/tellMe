import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StatusVisibilityPopoverPage } from './status-visibility-popover.page';

const routes: Routes = [
  {
    path: '',
    component: StatusVisibilityPopoverPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StatusVisibilityPopoverPage]
})
export class StatusVisibilityPopoverPageModule {}
