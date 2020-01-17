import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private db: AngularFireDatabase) {
  }

  getUsersData(idLoggedUser) {
    return this.db.list('/chat/' + idLoggedUser).snapshotChanges();
  }

  // getFriendMessages(uid){
  //   return this.db.list('/chat/'+ uid,ref => ref.orderByChild('date')).snapshotChanges();

  // }

  getUserData(id, uid) {
    return this.db.list(`/chat/${id}/${uid}`).valueChanges();
  }

  getUserStatus(id) {
    return this.db.list(`/online/${id}/`).valueChanges();
  }

  getFriendMess(id, uid) {
    return this.db.list(`/chat/${id}/${uid}/messages/`).valueChanges();
  }

  getCurrentUserMess(uid, id) {
    return this.db.list(`/chat/${uid}/${id}/messages/`).valueChanges();
  }

  getUsers() {
    return this.db.list('/users').snapshotChanges();
  }
  getUserss() {
    return this.db.list('/users');
  }

  getGroups(id) {
    return this.db.list(`users/${id}/zGroups/`).valueChanges();
  }

  getUs() {
    return this.db.list('users');
  }

  createUser(id) {
    return this.db.database.ref(`users/${id}`);
  }

  createIdGroup(id) {
    return this.db.database.ref(`users/${id}/zGroups`);
  }

  getLogUserData(id) {
    return this.db.list(`/users/${id}`).valueChanges();
  }
  getSnapLogUserData(id) {
    return this.db.list(`/users/${id}`).snapshotChanges();
  }
  getUD(id) {
    return this.db.list(`/users/${id}`).valueChanges();
  }


  blockUser(id, uid) {
    return this.db.database.ref(`/chat/${id}/${uid}/`);
  }

  secretChat(id, uid) {
    return this.db.database.ref(`/chat/${id}/${uid}`);
  }

  getBlockedUsers(id, uid) {
    return this.db.list(`/chat/${id}/${uid}/`).valueChanges();
  }

  getSecretChats(id, uid) {
    return this.db.list(`/chat/${id}/${uid}/`).valueChanges();
  }
  getSecretKey(id, uid) {
    return this.db.list(`/chat/${id}/${uid}/`).valueChanges();
  }

  addId(id) {
    return this.db.database.ref(`/users/${id}/zIdFriends/`);
  }
  getListFriendsIds(id) {
    return this.db.list(`/users/${id}/zIdFriends/`).valueChanges();
  }

  setProp(id) {
    return this.db.database.ref(`users/${id}`);
  }





}
