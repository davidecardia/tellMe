import { DetailsGroupModalPage } from './../details-group-modal/details-group-modal.page';
import { GroupModalPage } from './../group-modal/group-modal.page';
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
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { SendMessageService } from 'src/app/services/send-message.service';
import { GroupsService } from 'src/app/services/groups.service';

@Component({
  selector: 'app-gruppi',
  templateUrl: './gruppi.page.html',
  styleUrls: ['./gruppi.page.scss'],
})
export class GruppiPage implements OnInit {

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

  token: any;


  filedUsersShow = false;
  filedGroups: any = [];
  nFiled: number;

  idGroupsList;
  groupsList;
  element;

  lista = [];

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
    private groupsService: GroupsService
  ) {

    if (!this.idLoggedUser) {
      this.caricamento = true;
    }
    this.registeredUser = this.authService.getRegisteredUser();


    this.afAuth.authState.subscribe(user => {
      this.idLoggedUser = user.uid;
      this.usersService.getUsers().subscribe(users => {
        let arr = users.find(item => {
          return item.key == this.idLoggedUser;
        })
      })

      this.getGroupsList();
      if (this.idLoggedUser) {
        this.authService.onlineUsers(this.idLoggedUser).update({
          online: true
        })
      } else {
        alert('Esegui il login, ritenta!');
        this.router.navigateByUrl('/login');
      }

      // this.chatService.getChatsList2(this.idLoggedUser).subscribe(res => {
      //   this.blockedUsers = res.filter((blocked: any) => {
      //     return blocked.block === true;
      //   });
      //   this.nBlocked = this.blockedUsers.length;
      // });
      this.groupsService.getFiledGroups(this.idLoggedUser).subscribe(res => {
        this.filedGroups = res.filter((filed: any) => {
          return filed.filed === true;
        });
        this.nFiled = this.filedGroups.length;
      });
    })



  }

  ngOnInit() { }

  ionViewDidEnter() { }

  ionViewWillEnter() {


  }

  getGroupsList() {
    this.groupsService.getGroups(this.idLoggedUser).subscribe((groups: any) => {
      this.caricamento = false;

      this.groupsList = groups.sort((a, b) => b.payload.val().zzzzLastMess - a.payload.val().zzzzLastMess);
    })
  }

  openChat(id, photo, name, secret, secretKey) {

    if (secret) {
      this.secretKeyNumb(id, photo, name, secretKey);
    } else {
      this.groupsService.getGroupComponents(this.idLoggedUser, id).subscribe(ids => {
        this.groupsService.setClickedGroupData(id, photo, name, ids)
        this.router.navigate(['group-chat']);
      });
      this.groupsService.newMessages(this.idLoggedUser, id).update({
        zNewMess: false
      })
    }
  }

  async secretKeyNumb(idChat, photo, name, secretKey) {
    const alert = await this.alertCtrl.create({
      header: 'Digita il codice segreto numerico per accedere a questo gruppo!',
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
              this.groupsService.getGroupComponents(this.idLoggedUser, idChat).subscribe(ids => {
                this.groupsService.setClickedGroupData(idChat, photo, name, ids)
                this.router.navigate(['group-chat']);
              });
              this.groupsService.newMessages(this.idLoggedUser, idChat).update({
                zNewMess: false
              })
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
    this.router.navigateByUrl('/home/stato');
  }
  swipeRight() {
    this.router.navigateByUrl('/home/chat');
  }

  openDetails(idChat, photo, name, administrator) {
    this.usersService.getUsers().subscribe(users => {
      this.groupsService.getGroupComponents(this.idLoggedUser, idChat).subscribe(ids => {
        this.optionsModal(idChat, photo, name, ids, administrator, users);
      })
    })
  }

  async optionsModal(idChat, photo, name, ids, administrator, users) {
    const modal = await this.modalController.create({
      component: DetailsGroupModalPage,
      componentProps: {
        id: idChat,
        name: name,
        photo: photo,
        ids: ids,
        users: users,
        admin: administrator
      }
    });

    return await modal.present();
  }


  showFiled() {
    this.filedUsersShow = !this.filedUsersShow;
  }



  async addGroup() {
    const modal = await this.modalController.create({
      component: GroupModalPage,
      componentProps: {
        id: this.idLoggedUser
      }
    });
    return await modal.present();
  }


}
