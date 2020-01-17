import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditFontSizePopoverPage } from './edit-font-size-popover.page';

const routes: Routes = [
  {
    path: '',
    component: EditFontSizePopoverPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditFontSizePopoverPage]
})
export class EditFontSizePopoverPageModule {}
