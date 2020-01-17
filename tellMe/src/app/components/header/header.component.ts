import { OptionsPopoverPage } from './../../pages/options-popover/options-popover.page';
import { AddFriendModalPage } from './../../pages/add-friend-modal/add-friend-modal.page';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  hideElement = false;
  hide = false;
  @Input() searchBar: boolean = false;

  constructor(
    private modalController: ModalController,
    private popoverController: PopoverController,
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/user-chat' || event.url === '/login' || event.url === '/registration' || event.url === '/landing' || event.url === '/group-chat') {
          this.hideElement = true;
        } else {
          this.hideElement = false;
        }
      }
    });


  }

  ngOnInit() {
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: AddFriendModalPage
    });
    return await modal.present();
  }

  async options(ev: any, id: number, cssClass?: string) {
    const popover = await this.popoverController.create({
      component: OptionsPopoverPage,
      event: ev,
      translucent: true,
      cssClass: cssClass ? cssClass : 'pop-over-style'

    });
    return await popover.present();
  }

  searchBarActive() {
    this.searchBar = !this.searchBar;
  }

  closeSearchBar(close: boolean) { //attivato dall'emissione del searchbarcomponent(rispetto all'header è un child component)
    this.searchBar = close;
  }







}
