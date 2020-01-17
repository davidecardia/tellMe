import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  private chatData = {
    idChat: '',
    name: '',
    photo: '',
    idsGroup: []
  }
  constructor(
    private storage: AngularFireStorage,
    private db: AngularFireDatabase
  ) { }

  getGroups(idLoggedUser) {
    return this.db.list(`/groups/${idLoggedUser}`).snapshotChanges();
  }

  createGroup(idLoggedUser, idGroup) {
    return this.db.database.ref(`/groups/${idLoggedUser}/${idGroup}`);
  }
  createMessagesChatGroup(idGroup) {
    return this.db.database.ref(`/groupsMessages/${idGroup}/messages/`);
  }
  getMsgGroup(idChat) {
    return this.db.list(`/groupsMessages/${idChat}/messages/`).valueChanges();
  }

  getIdGroup(idLoggedUser) {
    return this.db.list(`/users/${idLoggedUser}/zGroups`).valueChanges();
  }

  getUserGroupData(idUser, idGroup) {
    return this.db.list(`/groups/${idUser}/${idGroup}`).valueChanges();

  }


  // getGroupMessages(idUser, idChat) {
  //   return this.db.list(`/groups/${idUser}/${idChat}/messages/`).valueChanges();

  // }

  getGroupComponents(idLoggedUser, idChat) {
    return this.db.list(`/groups/${idLoggedUser}/${idChat}/users`).valueChanges();
  }



  upLoad(idGroup, fileName) {
    return this.storage.storage.ref(`fotoGruppo/${idGroup}/${fileName}`);
  }

  upLoadPhotoChat(idGroup, fileName) {
    return this.storage.storage.ref(`groupPhotoMessages/${idGroup}/${fileName}`);
  }

  newMessages(idUser, idChat) {
    return this.db.database.ref(`/groups/${idUser}/${idChat}/`);
  }
  setClickedGroupData(id, photo, name, idsGroup) {
    this.chatData.idChat = id;
    this.chatData.photo = photo;
    this.chatData.name = name;
    this.chatData.idsGroup = idsGroup;
  }

  getClickedGroupData() {
    return this.chatData;
  }

  sendMessage(idGroup) {
    return this.db.database.ref(`groupsMessages/${idGroup}/messages/`);
  }
  setMessageProp(idGroup) {
    return this.db.database.ref(`groupsMessages/${idGroup}/messages/`);
  }

  deletePhotoPreUpload(idGroup, fileName) {
    this.storage.storage.ref(`fotoGruppo/${idGroup}/${fileName}`).delete().catch(() => {
      console.log('Gruppo non creato!');
    })
  }

  ////////

  secretSilenceLeaveUser(idUser, idChat) {
    return this.db.database.ref(`/groups/${idUser}/${idChat}/`);
  }


  getOptionsGroupChat(idUser, idChat) {
    return this.db.list(`/groups/${idUser}/${idChat}/`).valueChanges();
  }

  getFiledGroups(idUser) {
    return this.db.list(`/groups/${idUser}/`).valueChanges();
  }

  leaveGroup(idUser, idChat, idS, firstname) {
    // const idS = ids.filter(id => {
    //   return id !== idUser;
    // });
    for (let i = 0; i < idS.length; i++) {
      this.leaveGroupRemoveId(idS[i], idChat).set(idS);
    }
    this.sendMessage(idChat).push({
      firstname: firstname,
      lastname: '',
      photoUser: '',
      audio: '',
      photo: '',
      date: '',
      uid: idUser,
      createdAt: Date.now(),
      text: `${firstname} ha abbandonato il gruppo!`,
      zLeave: true
    })

    this.secretSilenceLeaveUser(idUser, idChat).update({
      zLeave: true,
      zzLeaveDate: Date.now()
    })
  }

  leaveGroupRemoveId(idUser, idChat) {
    return this.db.database.ref(`/groups/${idUser}/${idChat}/users`);
  }

  isWriting(idFriend,idGroup){
    return this.db.database.ref(`/groups/${idFriend}/${idGroup}/`);
  }

  setWhoIsWritingInChat(idGroup){
    return this.db.database.ref(`/groupsMessages/${idGroup}/`);
  }

  isWritingInChat(idGroup) {
    return this.db.list(`/groupsMessages/${idGroup}/`).valueChanges();
  }


}
