import { AngularFireAuth } from '@angular/fire/auth';
import { ChatService } from './../../services/chat.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.page.html',
  styleUrls: ['./utenti.page.scss'],
})
export class UtentiPage implements OnInit {
  idLoggedUser: string;
  friends: any;
  caricamento = false;
  constructor(
    private userService: UsersService,
    private authService: AuthService,
    private chatService: ChatService,
    private router: Router,
    private afAuth: AngularFireAuth
  ) {
    
    if (!this.idLoggedUser) {
      this.caricamento = true;
    }
    this.afAuth.authState.subscribe(user => {
      this.idLoggedUser = user.uid;
      this.userService.getUsersData(this.idLoggedUser).subscribe((users: any) => {
        this.caricamento = false;
        this.friends = users.sort(function (a, b) {
          if (a.payload.val().firstname < b.payload.val().firstname) { return -1; }
          if (a.payload.val().firstname > b.payload.val().firstname) { return 1; }
          return 0;
        })
        // this.friends.sort(((a, b) => a.payload.val().firstname - a.payload.val().firstname));
      })
    })

  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.afAuth.authState.subscribe(user => {
      this.idLoggedUser = user.uid;
      this.userService.getUsersData(this.idLoggedUser).subscribe((users: any) => {
        this.friends = users.sort(function (a, b) {
          if (a.payload.val().firstname < b.payload.val().firstname) { return -1; }
          if (a.payload.val().firstname > b.payload.val().firstname) { return 1; }
          return 0;
        })
        // this.friends.sort(((a, b) => a.payload.val().firstname - a.payload.val().firstname));
      })
    })
  }


  openChat(idFriend, firstnameFriend, lastnameFriend, photoFriend) {

    this.chatService.getClickedUserData(idFriend, firstnameFriend, lastnameFriend, photoFriend);

    this.router.navigate(['user-chat']);
  }

  swipeRight() {
    this.router.navigateByUrl('/home/stato');
  }


}
