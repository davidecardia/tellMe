import { UsersService } from './users.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { FCM } from '@ionic-native/fcm/ngx';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FcmService {



  token;

  constructor(
    private http: HttpClient,
    private fcm: FCM,
    private db: AngularFireDatabase,
    private usersService: UsersService
  ) { }

  createNotification(firstname, lastname, idFriend, text) {
    this.usersService.getLogUserData(idFriend).subscribe((us: any) => {
      ///se l'utente ha bloccato le notifiche non invia la notifica
      if (!us[7]) {

        this.db.list(`/tokens/${idFriend}`).valueChanges().subscribe(tok => {
          const token = tok.filter(tok => {
            return tok[0];
          });
          console.log(token);

          const url = 'https://fcm.googleapis.com/fcm/send';
          const body: any = {
            'notification': {
              'title': `${firstname} ${lastname}`,
              'text': `${text}`,
              // 'image': 'https://cdn2.iconfinder.com/data/icons/social-productivity-line-art-1/128/feedback-512.png',
              'color': '#000000'
            },
            "android": {
              "priority": "high"
            },
            "webpush": {
              "headers": {
                "Urgency": "high"
              }
            },

            'to': `${token}`
          };
          const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': 'key=AAAABeetzDU:APA91bGR_JMpXMAp74YAWhDgPU9UICuJ590I2fs2ndBlk2RV-PxJ54KXrGUN8X4AWJaTxbBR7_f5q6vyM9apAq-IQjzXCnYFU_qfXA2Mw8SN9BR_ncxMV5CiBXUw1iYfbei2fT6gIaEq'
            })
          }
          return this.http.post<any>(url, body, httpOptions).subscribe(res => {
            console.log(res)
          })
        })
      }
    })
  }


  getAndSaveToken(idLoggedUser) {

    this.fcm.getToken().then(tok => {
      this.db.database.ref(`/tokens/${idLoggedUser}`).update({
        token: tok
      })

    });

    this.fcm.onTokenRefresh().subscribe(token => {
      this.db.database.ref(`/tokens/${idLoggedUser}`).update({
        token: token
      })
    })

  }


  sendNotification() {

  }

}
