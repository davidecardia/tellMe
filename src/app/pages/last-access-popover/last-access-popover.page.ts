import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './../../services/auth.service';
import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-access-popover',
  templateUrl: './last-access-popover.page.html',
  styleUrls: ['./last-access-popover.page.scss'],
})
export class LastAccessPopoverPage implements OnInit {

  checked1: boolean;
  checked2: boolean;
  unchecked1: boolean;
  unchecked2: boolean;
  idLoggedUser: string;
  constructor(private popoverCtrl: PopoverController, private authService: AuthService, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(id => {
      this.idLoggedUser = id.uid;
    })

    if (localStorage.getItem('lastAccessVisibility') == 'none') {
      this.checked1 = false;
      this.checked2 = true;
      this.unchecked1 = true;
      this.unchecked2 = false;
    } else {
      this.checked1 = true;
      this.checked2 = false;
      this.unchecked1 = false;
      this.unchecked2 = true;
    }
  }

  ngOnInit() {
  }

  check1() {
    this.checked1 = true;
    this.checked2 = false;
    this.unchecked1 = false;
    this.unchecked2 = true;
    localStorage.removeItem('lastAccessVisibility');
    // this.authService.onlineUsers(this.idLoggedUser).update({
    //   online: true,
    //   date: ""
    // });
    setTimeout(() => {
      this.closePopover();
    }, 300);
  }

  check2() {
    this.checked1 = false;
    this.checked2 = true;
    this.unchecked1 = true;
    this.unchecked2 = false;
    localStorage.setItem('lastAccessVisibility', 'none');
    this.authService.onlineUsers(this.idLoggedUser).update({
      date: ""
    });
    setTimeout(() => {
      this.closePopover();
    }, 300);
  }

  async closePopover() {
    await this.popoverCtrl.dismiss();
  }

}
