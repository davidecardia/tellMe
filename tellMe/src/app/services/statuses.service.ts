import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StatusesService {

  constructor(
    private storage: AngularFireStorage,
    private db: AngularFireDatabase
  ) { }


  upLoad(idLogged, fileName) {
    return this.storage.storage.ref(`statuses/${idLogged}/${fileName}.jpg`);
  }

  saveStatus(idLogged) {
    return this.db.database.ref(`/statuses/${idLogged}/`);
  }
  viewStatus(id, idFriend) {
    return this.db.database.ref(`/statusesViews/${id}/${idFriend}`);
  }
  getViewsStatus(id) {
    return this.db.list(`/statusesViews/${id}/`).valueChanges();
  }

  getViewsListStatus() {
    return this.db.list(`/statusesViews`).snapshotChanges();
  }

  getListStatus() {
    return this.db.list('/statuses/');
  }

  removeStatus(idLogged) {
    this.db.database.ref(`statuses/${idLogged}`).remove().then(() => {
      console.log('removed status');
    })
  }

  removeStatusStorage(idLogged, filename) {
    this.storage.storage.ref(`statuses/${idLogged}/${filename}.jpg`).delete().then(() => {
      console.log('deleted status');
    })
  }

  getMyStatus() {
    return this.db.list('/statuses/');
  }

  getStatus(id) {
    return this.db.list(`/statuses/${id}`).valueChanges();
  }
  removeView(id, idLogged) {
    this.db.database.ref(`statusesViews/${id}/${idLogged}`).remove();
  }

  setViewStatus(id, idLogged) {
    return this.db.database.ref(`/statuses/${id}/zViews/${idLogged}/`);
  }

  getViews(id) {
    return this.db.list(`/statuses/${id}/zViews/`).snapshotChanges();
  }
}
