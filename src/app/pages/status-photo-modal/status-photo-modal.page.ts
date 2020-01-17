import { AngularFireAuth } from '@angular/fire/auth';
import { StatusesService } from './../../services/statuses.service';
import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';


@Component({
  selector: 'app-status-photo-modal',
  templateUrl: './status-photo-modal.page.html',
  styleUrls: ['./status-photo-modal.page.scss'],
})
export class StatusPhotoModalPage implements OnInit {

  url: string;
  date: string;
  index: number;

  statuses;
  friendsList;
  friend = [];
  views = [];

  idLoggedUser;

  selected: any = [];
  i: number;
  interval;

  animation = false;
  pause = false;


  firstname;
  lastname;
  photo;

  jump = false;
  idFriend;

  constructor(
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private statusesService: StatusesService,
    private afAuth: AngularFireAuth
  ) {


    // this.filterStatuses();
    // this.setInterval();
  }

  ngOnInit() { }

  ionViewWillEnter() {
    this.date = this.navParams.get('date');
    this.friendsList = this.navParams.get('friendsList');
    this.index = this.navParams.get('i');
    this.idLoggedUser = this.navParams.get('idLoggedUser');
    this.views = this.navParams.get('viewsList');
    this.statuses = this.navParams.get('statusesList');
    this.firstname = this.navParams.get('firstname');
    this.lastname = this.navParams.get('lastname');
    this.photo = this.navParams.get('photo');
    this.idFriend = this.navParams.get('idFriend');

    this.filterStatuses();
    if (this.selected.length == 1) {
      console.log('if 1 stato')
      let data = new Date;
      let minutes = data.getMinutes();
      let zero = false;
      if (minutes < 10) { zero = true; }
      let hour = data.getHours() + ':' + (zero ? '0' : '') + minutes;


      this.statusesService.viewStatus(this.idLoggedUser, this.idFriend).set({
        view: this.idFriend
      }).then(() => {
        if (!this.jump) {
          console.log('entra a settare la i dati di chi ha visualizzato')

          this.statusesService.setViewStatus(this.statuses[this.index].payload.key, this.idLoggedUser).update({
            firstname: this.firstname,
            lastname: this.lastname,
            photo: this.photo,
            hour: hour
          }).finally(() => {
            setTimeout(() => {
              this.dismiss();

            }, 1700);
          })
        }
      })
    } else {
      console.log('else più di 1 stato')
      this.setInterval();
    }


  }

  filterStatuses() {
    if (this.views.length === this.statuses.length) {
      console.log('if')
      for (let i = 0; i < this.statuses.length; i++) {
        this.selected = this.selected.concat(this.statuses[i].payload.val().status)
      }
    } else if (this.views.length > 0 && this.views.length < this.statuses.length) {
      console.log('else if')
      this.selected = [];
      for (let i = 0; i < this.statuses.length; i++) {
        for (let y = 0; y < this.views.length; y++) {
          if (!this.views.includes(this.statuses[i].payload.key)) {
            this.selected = this.selected.concat(this.statuses[i].payload.val().status)
          }
        }
      }
      for (let i = 0; i < this.selected.length; i++) {
        if (this.selected[i] === this.selected[i + 1]) {
          this.selected.splice(i, 1);
        }
      }
    } else {
      console.log('else')
      for (let i = 0; i < this.statuses.length; i++) {
        this.selected = this.selected.concat(this.statuses[i].payload.val().status)
      }
    }
    console.log(this.selected)
  }

  setInterval() {
    console.log('setint');
    let data = new Date;
    let minutes = data.getMinutes();
    let zero = false;
    if (minutes < 10) { zero = true; }
    let hour = data.getHours() + ':' + (zero ? '0' : '') + minutes;

    this.interval = setInterval(() => {
      this.index = this.index + 1;
      this.url = this.selected[this.index];
      if (this.index >= this.selected.length) {
        this.dismiss();
      }
      if (this.index < this.selected.length) {
        console.log('entra a settare la view')

        this.statusesService.viewStatus(this.idLoggedUser, this.statuses[this.index].payload.key).set({
          view: this.statuses[this.index].payload.key
        })

        if (!this.jump) {
          console.log('entra a settare la i dati di chi ha visualizzato')

          this.statusesService.setViewStatus(this.statuses[this.index].payload.key, this.idLoggedUser).update({
            firstname: this.firstname,
            lastname: this.lastname,
            photo: this.photo,
            hour: hour
          })
        }
      }

    }, 2000);


  }

  jumpStatus(n) {
    console.log('entra in jumpstatus')
    let data = new Date;
    let minutes = data.getMinutes();
    let zero = false;
    if (minutes < 10) {
      zero = true;
    }
    let hour = data.getHours() + ':' + (zero ? '0' : '') + minutes;
    this.jump = true;
    this.pause = false;
    clearInterval(this.interval);
    this.animation = !this.animation;
    if (n == -1) {
      if (this.index != 0) {
        this.index = this.index + n;
      }
    }
    if (n == 1) {
      this.index = this.index + n;
    }
    this.url = this.selected[this.index];
    if (this.index >= this.selected.length) {
      clearInterval(this.interval);
      this.dismiss();
    }
    if (this.index < this.selected.length) {
      this.statusesService.viewStatus(this.idLoggedUser, this.statuses[this.index].payload.key).set({
        view: this.statuses[this.index].payload.key
      });
      this.statusesService.setViewStatus(this.statuses[this.index].payload.key, this.idLoggedUser).update({
        firstname: this.firstname,
        lastname: this.lastname,
        photo: this.photo,
        hour: hour
      })
    }

    this.setInterval();
  }

  stopStatus() {
    this.pause = true;
    clearInterval(this.interval);
  }












  dismiss() {
    clearInterval(this.interval);
    this.modalCtrl.dismiss({
      'dismissed': true
    }).catch(() => { console.log('err') });
  }

  zoom() {
    document.getElementById('immagine').classList.add('scala');
    document.getElementById('immagine').classList.remove('ridimensiona');
  }
  zoomEnd() {
    document.getElementById('immagine').classList.remove('scala');
    document.getElementById('immagine').classList.add('ridimensiona');
  }
}
