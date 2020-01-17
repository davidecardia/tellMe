import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SendMessageService {

  constructor(private db: AngularFireDatabase) {
  }

  send(id, uid) {
    return this.db.list(`/chat/${id}/${uid}/messages/`);
  }

  newMessages(id,uid){
    return this.db.database.ref(`/chat/${id}/${uid}/`);
  }

  setOptMsg(idFriend,idLoggedUser,id){
    return this.db.database.ref(`/chat/${idFriend}/${idLoggedUser}/messages/${id}`);

  }
}
