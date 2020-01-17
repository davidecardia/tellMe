
import { StatusesService } from './../../services/statuses.service';
import { DetailsModalPage } from './../details-modal/details-modal.page';
import { FcmService } from './../../services/fcm.service';
import { ModalController, AlertController } from '@ionic/angular';
import { PhotoModalPage } from './../photo-modal/photo-modal.page';
import { ProfilePhotoService } from './../../services/profile-photo.service';
import { UploadTask } from '@angular/fire/storage/interfaces';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './../../services/auth.service';
import { UsersService } from 'src/app/services/users.service';
import { ChatService } from './../../services/chat.service';
import { Component, OnInit, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { SendMessageService } from 'src/app/services/send-message.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})

export class ChatPage implements OnInit, OnChanges {

  chats: any;
  chatUser: any
  $key: any;
  idLoggedUser: string;
  chatsList: any;
  users: any;

  email: string;

  registeredUser: {
    firstname: string,
    lastname: string,
    email: string,
    photo: any
  };

  task: UploadTask;
  url: any;

  mess;

  token: any;
  blockedUsers: any = [];
  nBlocked: number;
  blockedUsersShow = false;

  filedUsersShow = false;
  filedChats: any = [];
  nFiled: number;

  caricamento = false;
  constructor(
    private chatService: ChatService,
    private afAuth: AngularFireAuth,
    private usersService: UsersService,
    private router: Router,
    private sendMessageService: SendMessageService,
    private authService: AuthService,
    private profilePhotoService: ProfilePhotoService,
    private modalController: ModalController,
    private fcmService: FcmService,
    private alertCtrl: AlertController,
    private statusesService: StatusesService

  ) {
    if (!this.idLoggedUser) {
      this.caricamento = true;
    }

    this.afAuth.authState.subscribe(user => {
      // if (!this.authService.logFlag.value) {
      this.idLoggedUser = user.uid;
      this.authService.setId(this.idLoggedUser);
      // } else {
      //   this.idLoggedUser = this.authService.getId();
      // this.idLoggedUser = this.authService.idLoggedUser;
      // }
      this.registeredUser = this.authService.getRegisteredUser();





      this.fcmService.getAndSaveToken(this.idLoggedUser);

      this.usersService.getUsers().subscribe(users => {
        let arr = users.find(item => {
          return item.key == this.idLoggedUser;
        })
        if (!arr) {
          let fileName = 'fotoProfilo';
          if (this.registeredUser.photo) {
            this.task = this.profilePhotoService.upLoad(this.idLoggedUser, fileName).put(this.registeredUser.photo);
            this.task.then(() => {
              this.profilePhotoService.upLoad(this.idLoggedUser, fileName).getDownloadURL().then(url => {
                this.url = url;
                this.usersService.createUser(this.idLoggedUser).set({
                  firstname: this.registeredUser.firstname,
                  lastname: this.registeredUser.lastname,
                  email: this.registeredUser.email,
                  uid: this.idLoggedUser,
                  photo: url,
                  zSilenceAll: false
                })
              })
            })
          } else {
            this.url = './../assets/anonymous.png';
            this.usersService.createUser(this.idLoggedUser).set({
              firstname: this.registeredUser.firstname,
              lastname: this.registeredUser.lastname,
              email: this.registeredUser.email,
              uid: this.idLoggedUser,
              photo: './../assets/anonymous.png'
            })
          }
        }
      })

      this.getChatsList();
      if (this.idLoggedUser) {
        if (!localStorage.getItem('statusOnline')) {
          this.authService.onlineUsers(this.idLoggedUser).update({
            online: true,
            date: ""
          });
        }else{
          this.authService.onlineUsers(this.idLoggedUser).update({
            online: false,
            date: ""
          });
        }


      }

      this.chatService.getChatsList2(this.idLoggedUser).subscribe(res => {
        this.blockedUsers = res.filter((blocked: any) => {
          return blocked.block === true;
        });
        this.nBlocked = this.blockedUsers.length;
      });
      this.chatService.getChatsList2(this.idLoggedUser).subscribe(res => {
        this.filedChats = res.filter((filed: any) => {
          return filed.filed === true;
        });
        this.nFiled = this.filedChats.length;
      });
    });

  }
  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

  }

  // ionViewDidEnter() {
  //   if (this.idLoggedUser) {
  //     this.authService.onlineUsers(this.idLoggedUser).update({
  //       online: true
  //     })
  //   } else {
  //     this.router.navigateByUrl('/login');
  //   }
  // }
  ionViewWillEnter() {

    // this.afAuth.authState.subscribe(user => {
    //   this.idLoggedUser = user.uid;
    // })
    this.getChatsList();
    this.removeStat();
  }

  removeStat() {
    this.statusesService.getStatus(this.idLoggedUser).subscribe((status: any) => {
      const now = Date.now();
      const diff = now - status[3];
      if (diff >= 86400000) { //eliminazione dopo 24h
        this.statusesService.removeStatus(this.idLoggedUser);
        this.statusesService.removeStatusStorage(this.idLoggedUser, 'status');
      }
    })
  };

  getChatsList() {
    this.chatService.getChatsList(this.idLoggedUser).subscribe((res: any) => {
      this.chatsList = res.sort((a, b) => b.payload.val().zzzzzLastMess - a.payload.val().zzzzzLastMess);
      this.caricamento = false;
    })

  }

  openChat(idFriend, firstnameFriend, lastnameFriend, photoFriend, secret, secretKey) {

    if (secret) {
      this.secretKeyNumb(idFriend, firstnameFriend, lastnameFriend, photoFriend, secretKey);
    } else {
      this.chatService.getClickedUserData(idFriend, firstnameFriend, lastnameFriend, photoFriend);
      this.sendMessageService.newMessages(this.idLoggedUser, idFriend).update({
        newMess: false,
        zzzzLastView: (Date.now() + 999999999999999999999)
      })
      this.router.navigate(['user-chat']);

    }

  }

  async secretKeyNumb(idFriend, firstnameFriend, lastnameFriend, photoFriend, secretKey) {
    const alert = await this.alertCtrl.create({
      header: 'Digita il codice segreto numerico per accedere a questa chat!',
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
            return;
          }
        }, {
          text: 'Conferma',
          handler: (data: any) => {
            if (data.SecretKey === secretKey) {
              this.chatService.getClickedUserData(idFriend, firstnameFriend, lastnameFriend, photoFriend);
              this.sendMessageService.newMessages(this.idLoggedUser, idFriend).update({
                newMess: false
              })
              this.router.navigate(['user-chat']);
            } else {
              return;
            }
          }
        }
      ]
    });
    await alert.present();
  }

  openPhoto(url) {
    this.presentModal(url)
  }

  async presentModal(url) {
    const modal = await this.modalController.create({
      component: PhotoModalPage,
      componentProps: { url: url }
    });
    return await modal.present();
  }

  swipeLeft() {
    this.router.navigateByUrl('/home/gruppi');
  }

  openDetails(id, firstname, lastname, photo) {
    this.optionsModal(id, firstname, lastname, photo);
  }

  async optionsModal(idUser, firstname, lastname, photo) {
    const modal = await this.modalController.create({
      component: DetailsModalPage,
      componentProps: {
        id: idUser,
        firstname: firstname,
        lastname: lastname,
        photo: photo
      }
    });
    return await modal.present();
  }

  showBlocked() {
    this.blockedUsersShow = !this.blockedUsersShow;
  }

  showFiled() {
    this.filedUsersShow = !this.filedUsersShow;
  }


}
