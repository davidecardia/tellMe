import { SearchResultsComponent } from './../components/search-results/search-results.component';
import { SearchBarComponent } from './../components/search-bar/search-bar.component';
import { AddFriendModalPageModule } from './../pages/add-friend-modal/add-friend-modal.module';
import { HeaderComponent } from './../components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [HeaderComponent, SearchBarComponent,SearchResultsComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [HeaderComponent, SearchBarComponent,SearchResultsComponent]
})
export class SharedModule { }
