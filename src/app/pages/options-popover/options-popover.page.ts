import { AngularFireAuth } from '@angular/fire/auth';
import { EditModalPage } from './../edit-modal/edit-modal.page';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { PopoverController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-options-popover',
  templateUrl: './options-popover.page.html',
  styleUrls: ['./options-popover.page.scss'],
})
export class OptionsPopoverPage implements OnInit {

  idLoggedUser: string;

  constructor(
    private popoverCtrl: PopoverController,
    private authService: AuthService,
    private modalController: ModalController,
    private afAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe(user => {
      this.idLoggedUser = user.uid;
    })
  }

  ngOnInit() {
  }

  editProfile() {
    this.closePopover();
    this.openEdit();
  }

  async openEdit() {
    const modal = await this.modalController.create({
      component: EditModalPage,
      componentProps: { id: this.idLoggedUser }
    });
    return await modal.present();
  }

  async closePopover() {
    await this.popoverCtrl.dismiss();
  }


  logout() {
    if (this.idLoggedUser) {
      if (!localStorage.getItem('lastAccessVisibility') && !localStorage.getItem('statusOnline')) {
        let data = new Date();
        let minutes = data.getMinutes();
        let zero = false;
        if (minutes < 10) {
          zero = true;
        }
        let date = data.getHours() + ':' + (zero ? '0' : '') + minutes;

        this.authService.onlineUsers(this.idLoggedUser).update({
          online: false,
          date: date
        })
      } else {
        this.authService.onlineUsers(this.idLoggedUser).update({
          online: false,
          date: ""
        })
      }

    }
    this.closePopover();
    this.authService.logOut();

  }



}
