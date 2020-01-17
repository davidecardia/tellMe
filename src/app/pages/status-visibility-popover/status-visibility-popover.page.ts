import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './../../services/auth.service';
import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-visibility-popover',
  templateUrl: './status-visibility-popover.page.html',
  styleUrls: ['./status-visibility-popover.page.scss'],
})
export class StatusVisibilityPopoverPage implements OnInit {

  checked1: boolean;
  checked2: boolean;
  unchecked1: boolean;
  unchecked2: boolean;
  idLoggedUser: string;
  constructor(private popoverCtrl: PopoverController, private authService: AuthService, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(id => {
      this.idLoggedUser = id.uid;
    })

    if (localStorage.getItem('statusOnline') == 'false') {
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
    localStorage.removeItem('statusOnline');
    this.authService.onlineUsers(this.idLoggedUser).update({
      online: true,
      date: ""
    });
    setTimeout(() => {
      this.closePopover();
    }, 300);
  }

  check2() {
    this.checked1 = false;
    this.checked2 = true;
    this.unchecked1 = true;
    this.unchecked2 = false;
    localStorage.setItem('statusOnline', 'false');
    this.authService.onlineUsers(this.idLoggedUser).update({
      online: false,
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
