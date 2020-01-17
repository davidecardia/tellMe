import { AngularFireAuth } from '@angular/fire/auth';
import { SearchService } from './../../services/search.service';
import { AuthService } from './../../services/auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SendMessageService } from './../../services/send-message.service';
import { ChatService } from './../../services/chat.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  @Input() friends: any;
  idLoggedUser;
  @Output() hideBar: EventEmitter<any> = new EventEmitter();
  constructor(private chatService: ChatService,
    private sendMessageService: SendMessageService,
    private authService: AuthService,
    private router: Router,
    private alertCtrl: AlertController,
    private afAuth: AngularFireAuth
  ) {

    this.afAuth.authState.subscribe(user => {
      this.idLoggedUser = user.uid;
    })
  }

  ngOnInit() { }


  openChat(idFriend, firstnameFriend, lastnameFriend, photoFriend, secret, secretKey) {
    this.hideBar.emit(true);

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


}
