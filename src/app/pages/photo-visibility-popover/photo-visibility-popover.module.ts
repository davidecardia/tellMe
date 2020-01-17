import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PhotoVisibilityPopoverPage } from './photo-visibility-popover.page';

const routes: Routes = [
  {
    path: '',
    component: PhotoVisibilityPopoverPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PhotoVisibilityPopoverPage]
})
export class PhotoVisibilityPopoverPageModule {}
