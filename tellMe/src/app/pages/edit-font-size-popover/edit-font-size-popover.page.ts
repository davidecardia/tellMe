import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-font-size-popover',
  templateUrl: './edit-font-size-popover.page.html',
  styleUrls: ['./edit-font-size-popover.page.scss'],
})
export class EditFontSizePopoverPage implements OnInit {
  checked1: boolean;
  checked2: boolean;
  checked3: boolean;
  unchecked1: boolean;
  unchecked2: boolean;
  unchecked3: boolean;
  choosenFontSize;
  constructor(private popoverCtrl: PopoverController) {

    if (localStorage.getItem('fontSize') == 'piccolo') {
      this.checked1 = true;
      this.checked2 = false;
      this.checked3 = false;
      this.unchecked1 = false;
      this.unchecked2 = true;
      this.unchecked3 = true;
    } else if (localStorage.getItem('fontSize') == 'grande') {
      this.checked1 = false;
      this.checked2 = false;
      this.checked3 = true;
      this.unchecked1 = true;
      this.unchecked2 = true;
      this.unchecked3 = false;
    } else {
      this.checked1 = false;
      this.checked2 = true;
      this.checked3 = false;
      this.unchecked1 = true;
      this.unchecked2 = false;
      this.unchecked3 = true;
    }
  }

  ngOnInit() {
  }

  check1() {
    this.checked1 = true;
    this.checked2 = false;
    this.checked3 = false;
    this.unchecked1 = false;
    this.unchecked2 = true;
    this.unchecked3 = true;
    localStorage.setItem('fontSize', 'piccolo');
    setTimeout(() => {
      this.closePopover();
    }, 300);
  }

  check2() {
    this.checked1 = false;
    this.checked2 = true;
    this.checked3 = false;
    this.unchecked1 = true;
    this.unchecked2 = false;
    this.unchecked3 = true;
    this.choosenFontSize = 2;
    localStorage.removeItem('fontSize');
    setTimeout(() => {
      this.closePopover();
    }, 300);
  }

  check3() {
    this.checked1 = false;
    this.checked2 = false;
    this.checked3 = true;
    this.unchecked1 = true;
    this.unchecked2 = true;
    this.unchecked3 = false;
    this.choosenFontSize = 3;
    localStorage.setItem('fontSize', 'grande');
    setTimeout(() => {
      this.closePopover();
    }, 300);
  }

  async closePopover() {
    await this.popoverCtrl.dismiss();
  }

}
