import { AngularFireAuth } from '@angular/fire/auth';
import { ChatOptionsModalPage } from './../chat-options-modal/chat-options-modal.page';
import { InfoChatModalPage } from './../info-chat-modal/info-chat-modal.page';
import { ModalController, ToastController, NavParams } from '@ionic/angular';
import { GroupsService } from 'src/app/services/groups.service';
import { ChatService } from './../../services/chat.service';
import { UsersService } from './../../services/users.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { UploadTask } from '@angular/fire/storage/interfaces';
import { ProfilePhotoService } from 'src/app/services/profile-photo.service';
import { PrivacyModalPage } from '../privacy-modal/privacy-modal.page';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.page.html',
  styleUrls: ['./edit-modal.page.scss'],
})
export class EditModalPage implements OnInit {
  idLoggedUser: string;
  photo: any;
  firstname: any;
  lastname: any;
  email: any;
  groups: any = [];

  friendsNumber: number;
  blockUsers: number;
  mutedUsers: number;
  groupsNumber: number;
  mutedGroups: number;
  filedUsers: number;
  filedGroups: number;

  file: any;
  task: UploadTask;
  url: string;

  listFriendsIds: any = [];

  isSilenceAllToggled = false;
  silenceAll;


  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private chatService: ChatService,
    private groupsService: GroupsService,
    private modalController: ModalController,
    private profilePhotoService: ProfilePhotoService,
    private afAuth: AngularFireAuth,
    private toastController: ToastController,
    private navParams: NavParams

  ) {
    this.afAuth.authState.subscribe(user => {
      this.idLoggedUser = user.uid;
    })
    // this.idLoggedUser = this.navParams.get('id');
  }

  ngOnInit() {
  }

  ionViewWillEnter() {

    this.usersService.getLogUserData(this.idLoggedUser).subscribe(user => {
      this.photo = user[3];
      this.firstname = user[1];
      this.lastname = user[2];
      this.email = user[0];
      this.silenceAll = user[7];

    });

    this.chatService.getChatsList(this.idLoggedUser).subscribe(users => {
      this.friendsNumber = users.length;
      this.listFriendsIds = users;

      const blocked = users.filter((user: any) => {
        return user.payload.val().block == true;
      });
      this.blockUsers = blocked.length;
      const muted = users.filter((user: any) => {
        return user.payload.val().muted == true;
      });
      this.mutedUsers = muted.length;
      const filed = users.filter((user: any) => {
        return user.payload.val().filed == true;
      });
      this.filedUsers = filed.length;
    })

    this.groupsService.getGroups(this.idLoggedUser).subscribe(groups => {
      this.groupsNumber = groups.length;
      const muted = groups.filter((group: any) => {
        return group.payload.val().muted == true;
      });
      this.mutedGroups = muted.length;
    })
  }

  openInfoChats() {
    this.openModal(InfoChatModalPage);
  }

  async openModal(str) {
    const modal = await this.modalController.create({
      component: str
    });
    return await modal.present();
  }

  editData() {

  }


  editPhoto(event) {
    this.file = event.target.files[0];

    if (this.file) {
      let fileName = 'fotoProfilo';
      if (this.file) {
        this.task = this.profilePhotoService.upLoad(this.idLoggedUser, fileName).put(this.file);
        this.task.then(() => {
          this.profilePhotoService.upLoad(this.idLoggedUser, fileName).getDownloadURL().then(url => {
            this.url = url;
            this.usersService.createUser(this.idLoggedUser).update({
              photo: url
            });
            for (let i = 0; i < this.listFriendsIds.length; i++) {
              this.chatService.setOpt(this.listFriendsIds[i].payload.key, this.idLoggedUser).update({
                foto: this.url
              })
            }
          })

        })


      }
    }
  }

  openChatsOptions() {
    this.openModal(ChatOptionsModalPage);
  }

  blockAllNotifications() {
    this.isSilenceAllToggled = !this.isSilenceAllToggled;
    console.log(this.isSilenceAllToggled)

    if (this.isSilenceAllToggled) {
      document.getElementById('silenceAllToggle').setAttribute('checked', '');
      this.usersService.setProp(this.idLoggedUser).update({
        zSilenceAll: true
      }).then(() => {
        this.bloccoConferma('Tutte le notifiche sono state bloccate!');
      }).catch(()=>{
        console.log('errore1')
      })
    } else {
      document.getElementById('silenceAllToggle').setAttribute('checked', 'false');
      this.usersService.setProp(this.idLoggedUser).update({
        zSilenceAll: false
      }).then(() => {
        this.bloccoConferma('Le notifiche sono state riattivate!');
      }).catch(()=>{
        console.log('errore2')
      })
    }
  }

  async bloccoConferma(str) {
    const toast = await this.toastController.create({
      message: str,
      duration: 2000,
      cssClass: 'confirmToast'
    });
    toast.present();
  }

  changePrivacyStatus(){
    this.openModal(PrivacyModalPage);
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
