import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DoubleCheckPopoverPage } from './double-check-popover.page';

const routes: Routes = [
  {
    path: '',
    component: DoubleCheckPopoverPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DoubleCheckPopoverPage]
})
export class DoubleCheckPopoverPageModule {}
