import { AngularFireAuth } from '@angular/fire/auth';
import { ChatService } from './../../services/chat.service';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { UsersService } from 'src/app/services/users.service';
import { ModalController, NavParams, ToastController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.page.html',
  styleUrls: ['./details-modal.page.scss'],
})
export class DetailsModalPage implements OnInit {
  id;
  idLoggedUser;
  firstname;
  lastname;
  photo;
  date;
  online;
  isBlockToggled = false;
  isSKToggled = false;
  isSilenceToggled = false;
  isFiledToggled = false;
  filed;

  isToggled;
  muted;
  blocked;
  secret;
  secretKeyNumber;

  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams,
    private usersService: UsersService,
    private chatService: ChatService,
    public toastController: ToastController,
    private authService: AuthService,
    private router: Router,
    private alertCtrl: AlertController,
    private afAuth: AngularFireAuth

  ) {
    this.afAuth.authState.subscribe(user => {
        this.idLoggedUser = user.uid;
      })
  }


  ionViewWillEnter() {
    this.id = this.navParams.get('id');

    this.usersService.getBlockedUsers(this.idLoggedUser, this.id).subscribe((res: any) => {
      this.blocked = res[0];
      this.secret = res[9];
      this.secretKeyNumber = res[10];
      this.filed = res[2];
      this.muted = res[7];
    });

    this.firstname = this.navParams.get('firstname');
    this.lastname = this.navParams.get('lastname');
    this.photo = this.navParams.get('photo');

    this.usersService.getUserStatus(this.id).subscribe(status => {
      this.online = status[1];
      this.date = status[0];
    });

  }

  ngOnInit() { }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  notify() {
    console.log(this.isToggled);
  }

  /////Inizio blocco/////
  block() {
    this.isBlockToggled = !this.isBlockToggled;
    if (this.isBlockToggled) {
      document.getElementById('blockToggle').setAttribute('checked', '');
      this.usersService.blockUser(this.idLoggedUser, this.id).update({
        block: true
      }).then(() => {
        this.bloccoConferma(' è stato bloccato!');
      });
    } else {
      document.getElementById('blockToggle').setAttribute('checked', 'false');
      this.usersService.blockUser(this.idLoggedUser, this.id).update({
        block: false
      }).then(() => {
        this.bloccoConferma(' è stato sbloccato!');
      });
    }
  }

  async bloccoConferma(str) {
    const toast = await this.toastController.create({
      message: this.firstname + str,
      duration: 1500,
      cssClass: 'confirmToast'
    });
    toast.present();
  }

  /////Fine blocco/////

  /////Inizio File/////

  fileChat() {
    this.isFiledToggled = !this.isFiledToggled;
    if (this.isFiledToggled) {
      document.getElementById('filedToggle').setAttribute('checked', '');
      this.usersService.blockUser(this.idLoggedUser, this.id).update({
        filed: true
      }).then(() => {
        this.archiviazioneConferma(' è stata archiviata!');
      });
    } else {
      document.getElementById('filedToggle').setAttribute('checked', 'false');
      this.usersService.blockUser(this.idLoggedUser, this.id).update({
        filed: false
      }).then(() => {
        this.archiviazioneConferma(' non è più archiviata!');
      });
    }
  }

  async archiviazioneConferma(str) {
    const toast = await this.toastController.create({
      message: 'La chat con ' + this.firstname + str,
      duration: 1500,
      cssClass: 'confirmToast'
    });
    toast.present();
  }
  /////Fine File/////


  /////Inizio Secret/////
  secretKey() {
    if (this.secret) {
      this.secretKeyNumb2();
    } else {
      this.secretKeyNumb();
    }
  }

  async secretConferma(str) {
    const toast = await this.toastController.create({
      message: 'La chat con ' + this.firstname + str,
      duration: 1500,
      cssClass: 'confirmToast'
    });
    toast.present();
  }

  async secretKeyNumb() {
    const alert = await this.alertCtrl.create({
      header: 'Digita il codice segreto numerico per proteggere questa chat!',
      inputs: [
        {
          name: 'SecretKey',
          type: 'number',
          placeholder: '1234'
        }
      ],
      buttons: [
        {
          text: 'Annulla',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.isSKToggled = false;
            return;
          }
        }, {
          text: 'Conferma',
          handler: (data: any) => {
            if (data.SecretKey < 10000 && data.SecretKey > 999) {
              this.isSKToggled = !this.isSKToggled;
              this.usersService.secretChat(this.idLoggedUser, this.id).update({
                secret: true,
                secretKey: data.SecretKey
              }).then(() => {
                this.secretConferma(' è ora protetta!');
              });

            }
          }
        }
      ]
    });
    await alert.present();
  }

  async secretKeyNumb2() {
    const alert = await this.alertCtrl.create({
      header: 'Digita il codice segreto numerico per sbloccare questa chat!',
      inputs: [
        {
          name: 'SecretKey',
          type: 'number',
          placeholder: '1234'
        }
      ],
      buttons: [
        {
          text: 'Annulla',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.isSKToggled = true;
            return;
          }
        }, {
          text: 'Conferma',
          handler: (data: any) => {
            if (data.SecretKey == null) {
              this.isSKToggled = true;
              return;
            }
            if (data.SecretKey < 10000 && data.SecretKey > 999) {
              if (data.SecretKey === this.secretKeyNumber) {
                this.isSKToggled = !this.isSKToggled;
                this.usersService.secretChat(this.idLoggedUser, this.id).update({
                  secret: false,
                  secretKey: ""
                }).then(() => {
                  this.secretConferma(' non è più protetta!');
                });
              } else {
                this.isSKToggled = true;
                return;
              }
            }
          }
        }
      ]
    });
    await alert.present();
  }
  /////Fine Secret/////



  /////Inizio silence/////
  silenceChat() {
    this.isSilenceToggled = !this.isSilenceToggled;
    if (this.isSilenceToggled) {
      document.getElementById('silenceToggle').setAttribute('checked', '');
      this.usersService.blockUser(this.idLoggedUser, this.id).update({
        muted: true
      }).then(() => {
        this.silenceConferma(' è stata silenziata!');
      });
    } else {
      document.getElementById('silenceToggle').setAttribute('checked', 'false');
      this.usersService.blockUser(this.idLoggedUser, this.id).update({
        muted: false
      }).then(() => {
        this.silenceConferma(' non è più silenziata!');
      });
    }
  }

  async silenceConferma(str) {
    const toast = await this.toastController.create({
      message: 'La chat con ' + this.firstname + str,
      duration: 1500,
      cssClass: 'confirmToast'
    });
    toast.present();
  }

  /////Fine silence/////


  /////Inizio emptyChat/////
  emptyChat() {
    this.chatService.emptyChatLogged(this.idLoggedUser, this.id).update({
      empty: Date.now()
    }).then(() => {
      this.emptyConferma();
    })
  }

  async emptyConferma() {
    const toast = await this.toastController.create({
      message: 'La chat con ' + this.firstname + ' è stata svuotata!',
      duration: 1500,
      cssClass: 'confirmToast'
    });
    toast.present();
  }



  /////Fine emptyChat/////


  backToChat() {
    this.dismiss();
  }
}
