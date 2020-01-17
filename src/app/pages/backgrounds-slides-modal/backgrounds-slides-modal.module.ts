import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BackgroundsSlidesModalPage } from './backgrounds-slides-modal.page';

const routes: Routes = [
  {
    path: '',
    component: BackgroundsSlidesModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BackgroundsSlidesModalPage]
})
export class BackgroundsSlidesModalPageModule {}
