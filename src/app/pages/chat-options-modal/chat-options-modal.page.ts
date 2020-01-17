import { EditFontSizePopoverPage } from './../edit-font-size-popover/edit-font-size-popover.page';
import { BackgroundsSlidesModalPage } from './../backgrounds-slides-modal/backgrounds-slides-modal.page';
import { ModalController, PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-options-modal',
  templateUrl: './chat-options-modal.page.html',
  styleUrls: ['./chat-options-modal.page.scss'],
})
export class ChatOptionsModalPage implements OnInit {

  constructor(private modalController: ModalController,private popoverController:PopoverController) { }

  ngOnInit() {
  }

  openBackgroundsSlides() {
    this.openModal(BackgroundsSlidesModalPage);

  }

  async openEditFontSize(ev: any, id: number, cssClass?: string) {

    const popover = await this.popoverController.create({
      component: EditFontSizePopoverPage,
      event: ev,
      translucent: true,
      cssClass: cssClass ? cssClass : 'pop-over-style'

    });
    return await popover.present();

  }

  async openModal(str) {
    const modal = await this.modalController.create({
      component: str
    });
    return await modal.present();
  }



  backToChat() {
    this.dismiss();
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
