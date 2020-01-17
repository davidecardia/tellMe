import { AngularFireAuth } from '@angular/fire/auth';
import { UsersService } from 'src/app/services/users.service';
import { ChatService } from './../../services/chat.service';
import { StatusesService } from './../../services/statuses.service';
import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-photo-modal',
  templateUrl: './photo-modal.page.html',
  styleUrls: ['./photo-modal.page.scss'],
})
export class PhotoModalPage implements OnInit {

  url: string;
  date: string;
  status = false;
  idLoggedUser: string;
  views: any = [];

  constructor(
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private statusesService: StatusesService,
    private chatService: ChatService,
    private usersService: UsersService,
    private afAuth: AngularFireAuth
  ) {

    this.url = this.navParams.get('url');
    this.date = this.navParams.get('date');
    this.afAuth.authState.subscribe(user => {
      this.idLoggedUser = user.uid;
    })

  }

  ngOnInit() {
  }
  ionViewWillEnter() {
    if (this.navParams.get('status')) {
      this.status = true;
      this.statusesService.getViews(this.idLoggedUser).subscribe(views => {
        this.views = views;
      })
    }
  }


  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
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
