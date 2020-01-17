import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilePhotoService {

  constructor(
    private storage: AngularFireStorage,
    private db: AngularFireDatabase
    ) { }

    upLoad(idLogged, fileName) {
      return this.storage.storage.ref(`fotoProfilo/${idLogged}/${fileName}`);
    }

    savePhotoProfile(idLogged) {
      return this.db.database.ref(`/users/${idLogged}/`);
    }
}
