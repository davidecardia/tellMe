import { BehaviorSubject } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  empty: boolean = false;

  private friendData = {
    friendFirstname: '',
    friendLastname: '',
    friendPhoto: '',
    friendId: ''
  }

  constructor(
    private db: AngularFireDatabase
    ) {
  }

  getChatMessages(idUser) {
    return this.db.list(`/chat/${idUser}/`).snapshotChanges();
  }

  getChatsList(idLoggedUser) {
    return this.db.list(`/chat/${idLoggedUser}/`).snapshotChanges();
  }
  getChatsList2(idLoggedUser) {
    return this.db.list(`/chat/${idLoggedUser}`).valueChanges();
  }

  createChat(idLoggedUser, uid) {
    return this.db.database.ref(`/chat/${idLoggedUser}/${uid}/`);
  }

  createFriendChat(idLoggedUser, uid) {
    return this.db.database.ref(`/chat/${uid}/${idLoggedUser}/`);
  }

  emptyChatLogged(idLoggedUser,id){
    return this.db.database.ref(`/chat/${idLoggedUser}/${id}/`);
  }

  emptyChatFriend(id,idLoggedUser){
    return this.db.database.ref(`/chat/${id}/${idLoggedUser}/`);
  }

  getClickedUserData(idFriend, firstnameFriend, lastnameFriend, photoFriend) {
    this.friendData.friendId = idFriend;
    this.friendData.friendFirstname = firstnameFriend;
    this.friendData.friendLastname = lastnameFriend;
    this.friendData.friendPhoto = photoFriend;
  }

  getFriendData() {
    return this.friendData;
  }

  getFriendsList(id){
    return this.db.list(`/chat/${id}`).snapshotChanges();
  }

  getOpt(idLoggedUser,idFriend){
    return this.db.list(`/chat/${idLoggedUser}/${idFriend}`).valueChanges();
  }
  setOpt(id,idLoggedUser){
    return this.db.database.ref(`/chat/${id}/${idLoggedUser}/`);
  }

  isWriting(idFriend,idLoggedUser){
    return this.db.database.ref(`/chat/${idFriend}/${idLoggedUser}/`);
  }



  //  getChatList(idLoggedUser){
  //   return this.db.list('/chat/'+ idLoggedUser ).valueChanges();
  // }

  getFriendMess(idFriend, id) {
    return this.db.list(`/chat/${idFriend}/${id}/messages/`).snapshotChanges();
  }







}
