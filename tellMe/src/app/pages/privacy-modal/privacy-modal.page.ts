import { PhotoVisibilityPopoverPage } from './../photo-visibility-popover/photo-visibility-popover.page';
import { LastAccessPopoverPage } from './../last-access-popover/last-access-popover.page';
import { DoubleCheckPopoverPage } from './../double-check-popover/double-check-popover.page';
import { ModalController, PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { StatusVisibilityPopoverPage } from '../status-visibility-popover/status-visibility-popover.page';

@Component({
  selector: 'app-privacy-modal',
  templateUrl: './privacy-modal.page.html',
  styleUrls: ['./privacy-modal.page.scss'],
})
export class PrivacyModalPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private popoverController: PopoverController
  ) { }

  ngOnInit() {
  }

  changeLastAccess(ev) {
    this.presentPopover(ev, LastAccessPopoverPage);
  }

  changePhotoVisibility(ev) {
    this.presentPopover(ev, PhotoVisibilityPopoverPage);
  }

  changeDoubleCheck(ev) {
    this.presentPopover(ev, DoubleCheckPopoverPage);
  }

  hideOnlineStatus(ev){
    this.presentPopover(ev, StatusVisibilityPopoverPage);

  }

  async presentPopover(ev: any, str) {
    const popover = await this.popoverController.create({
      component: str,
      event: ev,
      translucent: true
    });
    return await popover.present();
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
