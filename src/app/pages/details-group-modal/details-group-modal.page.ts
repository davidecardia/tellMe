import { AngularFireAuth } from '@angular/fire/auth';
import { GroupsService } from 'src/app/services/groups.service';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { ChatService } from './../../services/chat.service';
import { UsersService } from 'src/app/services/users.service';
import { NavParams, ModalController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-details-group-modal',
  templateUrl: './details-group-modal.page.html',
  styleUrls: ['./details-group-modal.page.scss'],
})
export class DetailsGroupModalPage implements OnInit {

  idChat;
  idLoggedUser;
  name;
  photo;
  ids = [];
  date;
  online;
  isSKToggled = false;
  isSilenceToggled = false;
  isFiledToggled = false;
  filed;

  isToggled;
  muted;
  secret;
  secretKeyNumber;

  empty;
  created;

  components: any = [];
  users;
  admin: string;

  loggedFirstname;
  loggedLastname;


  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams,
    private usersService: UsersService,
    private chatService: ChatService,
    private groupsService: GroupsService,
    public toastController: ToastController,
    private authService: AuthService,
    private router: Router,
    private alertCtrl: AlertController,
    private loadCtrl: LoadingController,
    private afAuth: AngularFireAuth

  ) {
    this.afAuth.authState.subscribe(user => {
      this.idLoggedUser = user.uid;
    })



  }


  ionViewWillEnter() {
    this.name = this.navParams.get('name');
    this.idChat = this.navParams.get('id');
    this.photo = this.navParams.get('photo');
    this.ids = this.navParams.get('ids');
    this.users = this.navParams.get('users');
    this.admin = this.navParams.get('admin');

    this.groupsService.getOptionsGroupChat(this.idLoggedUser, this.idChat).subscribe((res: any) => {
      this.empty = res[2];
      this.secret = res[10];
      this.secretKeyNumber = res[11];
      this.filed = res[3];
      this.muted = res[7];
      this.created = res[13];

    });
    this.usersService.getUsers().pipe(map(res => {
      return res.filter(it => {
        return it.payload.child('uid').val() == this.idLoggedUser
      })
    })).subscribe(res => {
      this.loggedFirstname = res[0].payload.child('firstname').val();
      this.loggedLastname = res[0].payload.child('lastname').val();
    })

    // for (let i = 0; i < this.ids.length; i++) {
    //   this.usersService.getUsers().subscribe(user => {
    //     this.components = user.filter(user => {
    //       return user.payload.key == this.ids[i]
    //     });
    //     console.log(this.components)
    //   })
    // }

    for (let i = 0; i < this.users.length; i++) {
      for (let y = 0; y < this.ids.length; y++) {
        if (this.users[i].payload.key === this.ids[y]) {
          this.components.push(this.users[i]);
        }

      }
    }

    // for (let i = 0; i < this.ids.length; i++) {
    //   if (this.users[i].payload.key == this.ids[i]) {
    //     this.components.concat(this.users[i])
    //   }
    // }
    console.log(this.components)
    // console.log(this.users)
    // console.log(this.ids)
  }

  ngOnInit() { }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }


  /////Inizio Leave/////

  async leaveGroup() {
    this.groupsService.leaveGroup(this.idLoggedUser, this.idChat, this.ids, this.loggedFirstname);
    this.abbandonoConferma();
    setTimeout(() => {
      this.dismiss();
    }, 1500);
  }

  async abbandonoConferma() {
    const toast = await this.toastController.create({
      message: 'Hai abbandonato il gruppo ' + this.name,
      duration: 1500,
      cssClass: 'confirmToast'
    });
    toast.present();
  }
  /////Fine Leave/////


  /////Inizio File/////

  fileChat() {
    this.isFiledToggled = !this.isFiledToggled;
    if (this.isFiledToggled) {
      document.getElementById('filedToggle').setAttribute('checked', '');
      this.groupsService.secretSilenceLeaveUser(this.idLoggedUser, this.idChat).update({
        filed: true
      }).then(() => {
        this.archiviazioneConferma(' è stato archiviato!');
      });
    } else {
      document.getElementById('filedToggle').setAttribute('checked', 'false');
      this.groupsService.secretSilenceLeaveUser(this.idLoggedUser, this.idChat).update({
        filed: false
      }).then(() => {
        this.archiviazioneConferma(' non è più archiviato!');
      });
    }
  }

  async archiviazioneConferma(str) {
    const toast = await this.toastController.create({
      message: 'Il gruppo ' + this.name + str,
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
      message: 'Il gruppo ' + this.name + str,
      duration: 1500,
      cssClass: 'confirmToast'
    });
    toast.present();
  }

  async secretKeyNumb() {
    const alert = await this.alertCtrl.create({
      header: 'Digita il codice segreto numerico per proteggere questo gruppo!',
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
              this.groupsService.secretSilenceLeaveUser(this.idLoggedUser, this.idChat).update({
                secret: true,
                secretKey: data.SecretKey
              }).then(() => {
                this.secretConferma(' è ora protetto!');
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
      header: 'Digita il codice segreto numerico per sbloccare questo gruppo!',
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
                this.groupsService.secretSilenceLeaveUser(this.idLoggedUser, this.idChat).update({
                  secret: false,
                  secretKey: ""
                }).then(() => {
                  this.secretConferma(' non è più protetto!');
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
      this.groupsService.secretSilenceLeaveUser(this.idLoggedUser, this.idChat).update({
        muted: true
      }).then(() => {
        this.silenceConferma(' è stato silenziato!');
      });
    } else {
      document.getElementById('silenceToggle').setAttribute('checked', 'false');
      this.groupsService.secretSilenceLeaveUser(this.idLoggedUser, this.idChat).update({
        muted: false
      }).then(() => {
        this.silenceConferma(' non è più silenziato!');
      });
    }
  }

  async silenceConferma(str) {
    const toast = await this.toastController.create({
      message: 'Il gruppo ' + this.name + str,
      duration: 1500,
      cssClass: 'confirmToast'
    });
    toast.present();
  }

  /////Fine silence/////


  /////Inizio emptyChat/////
  emptyChat() {
    this.groupsService.secretSilenceLeaveUser(this.idLoggedUser, this.idChat).update({
      empty: Date.now()
    }).then(() => {
      this.emptyConferma();
    })
  }

  async emptyConferma() {
    const toast = await this.toastController.create({
      message: 'Il gruppo ' + this.name + ' è stato svuotato!',
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
