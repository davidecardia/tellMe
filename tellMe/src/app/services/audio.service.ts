import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  constructor(
    private storage: AngularFireStorage,
    private db: AngularFireDatabase
  ) { }

  upLoadAudio(idLogged, fileName) {
    return this.storage.storage.ref(`messages/${idLogged}/${fileName}.mpeg`);
  }

  saveAudio(idLogged, idFriend) {
    return this.db.database.ref(`/chat/${idLogged}/${idFriend}/messages/`);
  }
}
