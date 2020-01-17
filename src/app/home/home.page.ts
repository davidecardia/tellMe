import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './../services/auth.service';
import { SearchService } from './../services/search.service';
import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnChanges {
  idLoggedUser;
  sawUsers: boolean;

  constructor(
    private searchService: SearchService,
    private authService: AuthService,
    private afAuth: AngularFireAuth
  ) {
   

    this.searchService.getSawUsers().subscribe(result => {
      this.sawUsers = result;
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.sawUsers = this.searchService.getSawUsers();


  }




}
