import { AngularFireAuth } from '@angular/fire/auth';
import { ModalController } from '@ionic/angular';
import { GroupsService } from 'src/app/services/groups.service';
import { ChatService } from './../../services/chat.service';
import { UsersService } from 'src/app/services/users.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-chat-modal',
  templateUrl: './info-chat-modal.page.html',
  styleUrls: ['./info-chat-modal.page.scss'],
})
export class InfoChatModalPage implements OnInit {
  idLoggedUser: string;
  friendsNumber: number;
  blockUsers: number;
  mutedUsers: number;
  groupsNumber: number;
  mutedGroups: number;
  filedUsers: number;
  filedGroups: number;
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private chatService: ChatService,
    private groupsService: GroupsService,
    private modalController: ModalController,
    private afAuth: AngularFireAuth
  ) {


    this.afAuth.authState.subscribe(user => {
      this.idLoggedUser = user.uid;
    })

  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.chatService.getChatsList(this.idLoggedUser).subscribe(users => {
      this.friendsNumber = users.length;
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
      const filed = groups.filter((group: any) => {
        return group.payload.val().filed == true;
      });
      console.log(filed)
      this.filedGroups = filed.length;
    })
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
