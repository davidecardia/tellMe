import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StatusPhotoModalPage } from './status-photo-modal.page';
import { ProgressBarComponent } from 'src/app/components/progress-bar/progress-bar.component';

const routes: Routes = [
  {
    path: '',
    component: StatusPhotoModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StatusPhotoModalPage,ProgressBarComponent]
})
export class StatusPhotoModalPageModule {}
