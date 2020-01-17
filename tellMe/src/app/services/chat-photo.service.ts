import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatPhotoService {

  constructor(
    private storage: AngularFireStorage,
    private db: AngularFireDatabase
  ) { }

  upLoad(idLogged, fileName) {
    return this.storage.storage.ref(`messages/${idLogged}/${fileName}.jpg`);
  }

  savePhoto(idLogged,idFriend) {
    return this.db.database.ref(`/chat/${idLogged}/${idFriend}/messages/`);
  }

}
