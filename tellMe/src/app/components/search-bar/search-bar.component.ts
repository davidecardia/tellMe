import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SendMessageService } from './../../services/send-message.service';
import { ChatService } from './../../services/chat.service';
import { SearchService } from './../../services/search.service';
import { AuthService } from './../../services/auth.service';
import { UsersService } from 'src/app/services/users.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit, OnChanges {
  @Output() closeSearchBar: EventEmitter<boolean> = new EventEmitter();
  @Output() sawUsersResult: EventEmitter<boolean> = new EventEmitter();
  form: FormGroup;
  idLoggedUser: string;
  friends: any;
  selected: any = [];
  hideBarr: boolean;
  focus = false;
  testo: string;
  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private authService: AuthService,
    private searchService: SearchService,
    private chatService: ChatService,
    private sendMessageService: SendMessageService,
    private router: Router,
    private alertCtrl: AlertController,
    private afAuth: AngularFireAuth
  ) {
    console.log(this.testo)
    this.afAuth.authState.subscribe(user => {
      this.idLoggedUser = user.uid;
    })
    this.form = this.formBuilder.group({
      user: new FormControl('', Validators.required)
    });

  }

  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.focus = true;
    console.log('ciao')

  }

  searchUsers(ev) {
    if (ev == '') {
      this.searchService.setSawUsers(false);
      this.friends = [];
    } else {
      this.usersService.getUsersData(this.idLoggedUser).subscribe((users: any) => {
        this.friends = users.filter(user => {
          let name = this.form.value.user.trim().charAt(0).toUpperCase() + this.form.value.user.trim().slice(1);
          if (user.payload.val().firstname.indexOf(name) !== -1) {
            return user.payload.val().firstname;
          }

        })
        // this.friends = users.sort((a, b) => {
        //   if (a.payload.val().firstname < b.payload.val().firstname) { return -1; }
        //   if (a.payload.val().firstname > b.payload.val().firstname) { return 1; }
        //   return 0;
        // })
      })
    }




    console.log(this.friends)
  }
  closeSearchB() {
    this.closeSearchBar.emit(false);

    this.searchService.setSawUsers(false);
  }

  getText(ev: any) {
    this.searchService.setSawUsers(true);
    if (ev == '') {
      this.searchService.setSawUsers(false);
      this.friends = [];
    }
    let word = ev.trim().charAt(0).toUpperCase() + ev.trim().slice(1);
    if (ev !== '') {
      this.usersService.getUsersData(this.idLoggedUser).subscribe((users: any) => {
        this.friends = users.filter(user => {
          if (user.payload.val().firstname.includes(word)) {
            return user;
          }
        })
      })
    }

  }


  loseFocus() {
    console.log(0);
  }

  // openChat(idFriend, firstnameFriend, lastnameFriend, photoFriend, secret, secretKey) {
  //   this.closeSearchBar.emit(false);
  //   this.searchService.setSawUsers(false);
  //   console.log('ok')

  //   if (secret) {
  //     this.secretKeyNumb(idFriend, firstnameFriend, lastnameFriend, photoFriend, secretKey);
  //   } else {
  //     this.chatService.getClickedUserData(idFriend, firstnameFriend, lastnameFriend, photoFriend);
  //     this.sendMessageService.newMessages(this.idLoggedUser, idFriend).update({
  //       newMess: false,
  //       zzzzLastView: (Date.now() + 999999999999999999999)
  //     })
  //     this.router.navigate(['user-chat']);

  //   }

  // }

  // async secretKeyNumb(idFriend, firstnameFriend, lastnameFriend, photoFriend, secretKey) {
  //   const alert = await this.alertCtrl.create({
  //     header: 'Digita il codice segreto numerico per accedere a questa chat!',
  //     inputs: [
  //       {
  //         name: 'SecretKey',
  //         type: 'number',
  //         placeholder: '1234'
  //       }
  //     ],
  //     buttons: [
  //       {
  //         text: 'Annulla',
  //         role: 'cancel',
  //         cssClass: 'secondary',
  //         handler: () => {
  //           return;
  //         }
  //       }, {
  //         text: 'Conferma',
  //         handler: (data: any) => {
  //           if (data.SecretKey === secretKey) {
  //             this.chatService.getClickedUserData(idFriend, firstnameFriend, lastnameFriend, photoFriend);
  //             this.sendMessageService.newMessages(this.idLoggedUser, idFriend).update({
  //               newMess: false
  //             })
  //             this.router.navigate(['user-chat']);
  //           } else {
  //             return;
  //           }
  //         }
  //       }
  //     ]
  //   });
  //   await alert.present();
  // }

  hideBar(hideBar) {
    if (hideBar) {
      this.closeSearchB();
    }
  }





}
