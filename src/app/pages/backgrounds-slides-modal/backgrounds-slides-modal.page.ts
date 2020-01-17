import { ModalController, ToastController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-backgrounds-slides-modal',
  templateUrl: './backgrounds-slides-modal.page.html',
  styleUrls: ['./backgrounds-slides-modal.page.scss'],
})
export class BackgroundsSlidesModalPage {
  bgs = [
    "/../assets/backgrounds/bg1.png",
    "/../assets/backgrounds/bg2.jpg",
    "/../assets/backgrounds/bg3.jpeg",
    "/../assets/backgrounds/bg4.jpg",
    "/../assets/backgrounds/bg5.jpg",
    "/../assets/backgrounds/bg6.jpg",
    "/../assets/backgrounds/bg7.jpg",
    "/../assets/backgrounds/bg8.jpg",
    "/../assets/backgrounds/bg9.jpg",
    "/../assets/backgrounds/bg10.jpg",
    "/../assets/backgrounds/bg11.jpg",
    "/../assets/backgrounds/bg12.jpg",
    "/../assets/backgrounds/bg13.jpg",
    "/../assets/backgrounds/bg14.jpg",
    "/../assets/backgrounds/bg15.jpg",
    "/../assets/backgrounds/bg16.jpg",
    "/../assets/backgrounds/bg17.jpg",
    "/../assets/backgrounds/bg18.jpg"
  ];


  x = 0;

  urlVariable = this.bgs[this.x];

  constructor(private modalController: ModalController, private toastCtrl: ToastController) {
    if (localStorage.getItem('bg')) {
      this.urlVariable = localStorage.getItem('bg');
    } else {
      this.x = 0;
    }
  }

  rightBackground() {
    this.x = this.x + 1;
    if (this.x > 17) {
      this.x = 0;
    }
    this.urlVariable = this.bgs[this.x];
  }
  leftBackground() {
    this.x = this.x - 1;
    if (this.x < 0) {
      this.x = 17;
    }
    this.urlVariable = this.bgs[this.x]
  }

  confirmBg() {
    localStorage.setItem('bgChat', this.bgs[this.x]);
    this.dismiss();
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    }).then(() => {

      this.conferma();

    })
  }

  dismissUnchanged() {
    this.modalController.dismiss({
      'dismissed': true
    })
  }


  async conferma() {
    const toast = await this.toastCtrl.create({
      message: 'Sfondo cambiato con successo!',
      duration: 1500,
      cssClass: 'confirmToast'
    });
    toast.present();
  }




}
