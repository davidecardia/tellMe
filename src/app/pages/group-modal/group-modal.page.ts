import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { AuthService } from './../../services/auth.service';
import { ChatService } from './../../services/chat.service';
import { UsersService } from './../../services/users.service';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { ModalController, LoadingController, NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { GroupsService } from 'src/app/services/groups.service';
import { UploadTask } from '@angular/fire/storage/interfaces';

@Component({
  selector: 'app-group-modal',
  templateUrl: './group-modal.page.html',
  styleUrls: ['./group-modal.page.scss'],
})
export class GroupModalPage implements OnInit {

  // form: FormGroup;

  idLoggedUser: string = '';
  uidFriend: string = '';
  loggedFirstname: string = '';
  loggedLastname: string = '';
  loggedPhoto: string = '';

  friends: any = [];

  groupName: string = '';

  selectedValue = [];
  str: {} = {};


  file: any = '';
  task: UploadTask;
  url: any = '';

  photoArr: any = [];
  photoAr: any = [];

  showPhoto = true;
  idGroup: number = null;
  aborted: boolean = false;
  stri: string;

  constructor(
    private modalCtrl: ModalController,
    private usersService: UsersService,
    private authService: AuthService,
    private groupsService: GroupsService,
    private formBuilder: FormBuilder,
    private loadCtrl: LoadingController,
    private navParams: NavParams,
    private afAuth: AngularFireAuth
  ) {
    this.url = './../assets/anonymousGroup.png';

    this.idLoggedUser = this.navParams.get('idLoggedUser');
    this.afAuth.authState.subscribe(auth => {
      this.idLoggedUser = auth.uid;
      this.idGroup = Math.floor(Math.random() * (999999999999 - 111111111111 + 1)) + 111111111111;

      //carico lista amici
      this.usersService.getUsersData(this.idLoggedUser).subscribe(users => {
        this.friends = users;
      });

      //sembra inutile,da verificare
      // for (let i = 0; i < this.selectedValue.length; i++) {
      //   this.usersService.getUD(this.selectedValue[i]).subscribe(us => {
      //     this.photoArr = us;
      //   })
      // }

      // this.usersService.getLogUserData(this.idLoggedUser).subscribe(res => {
      //   this.photoArr= this.photoArr.concat(res[3]);
      // })

      this.usersService.getUsers().pipe(map(res => {
        return res.filter(it => {
          return it.payload.child('uid').val() == this.idLoggedUser
        })
      })).subscribe(res => {
        this.loggedFirstname = res[0].payload.child('firstname').val();
        this.loggedLastname = res[0].payload.child('lastname').val();
        this.loggedPhoto = res[0].payload.child('photo').val();


      })
    })



  }

  ionViewWillEnter() {
    this.selectedValue = [];
    this.idGroup = Math.floor(Math.random() * (999999999999 - 111111111111 + 1)) + 111111111111;
    // this.usersService.getUsersData(this.idLoggedUser).subscribe(users => {
    //   this.friends = users;
    // });
  }


  addGroup() {
    this.showPhoto = false;
    this.groupName = this.groupName.charAt(0).toUpperCase() + this.groupName.slice(1);
    const createdAt = Date.now();
    const data = new Date();
    let month = data.getMonth() + 1;
    let year = data.getFullYear();
    let day = data.getDate();
    let hour = data.getHours();
    let minutes = data.getMinutes();
    const createdDate = `Creato alle ${hour}:${minutes} del ${day}/${month}/${year}`;

    //aggiungo idLogged come valore di default
    this.selectedValue.push(this.idLoggedUser);

    for (let y = 0; y < this.selectedValue.length; y++) {
      this.usersService.createIdGroup(this.selectedValue[y]).push({
        idChat: this.idGroup
      })
    }


    //per ciascun utente devo creare il gruppo
    for (let i = 0; i < this.selectedValue.length; i++) {

      // recupero dati degli utenti che fanno parte dei valori selezionati dalla lista amici
      this.usersService.getUD(this.selectedValue[i]).subscribe(us => {
        if (this.selectedValue[i] == this.idLoggedUser) {
          this.stri = 'Hai creato il gruppo!';
        } else {
          this.stri = `${this.loggedFirstname} ti ha inserito nel gruppo!`;
        }


        this.groupsService.createGroup(this.selectedValue[i], this.idGroup).set({
          createdAt: createdAt,
          secret: false,
          muted: false,
          empty: 0,
          secretKey: '',
          filed: false,
          administrator: this.idLoggedUser,
          firstname: us[1],
          lastname: us[2],
          photoUser: us[3],
          groupName: this.groupName,
          users: this.selectedValue,
          photoGroup: this.url,
          zCreatedDate: createdDate,
          zLeave: false,
          zzLeaveDate: 0,
          zzPrev: this.stri,
          zzzNewMessDate: '',
          zzzMitt: this.loggedFirstname,
          zzzNewMessNumb: 0,
          zNewMess: false,
          zzzNewMessNumbTot: 1,
          zzzzLastMess: Date.now()
        }).catch((err) => {
          console.log(err);
        })

      })
    }



    this.str = {
      firstname: this.loggedFirstname,
      lastname: this.loggedLastname,
      photoUser: this.loggedPhoto,
      audio: '',
      photo: '',
      date: '',
      uid: this.idLoggedUser,
      createdAt: 0,
      text: `${this.loggedFirstname} ha creato il gruppo ${this.groupName}`,
      zLeave: false,
      zzCitation: '',
      zzCitName: '',
      zzMit: '',
      zzPhotoCit: ''
    };

    this.groupsService.createMessagesChatGroup(this.idGroup).push(this.str).then(() => {
      this.dismiss();
    }).catch((err) => {
      console.log(err);
    })

  }

  ngOnInit() { }

  getUsersPhoto() {
    this.photoArr = [];
    this.usersService.getLogUserData(this.idLoggedUser).subscribe(res => {
      this.photoArr = this.photoArr.concat(res[3]);
      for (let index = 0; index < this.selectedValue.length; index++) {
        this.usersService.getUD(this.selectedValue[index]).subscribe(us => {
          this.photoArr = this.photoArr.concat(us[3]);
        })
        // this.photoArr.push(this.selectedValue[index]);
      }
    })

  }

  deletePhotoAborted() { //elimina foto precaricata nel caso decida di smettere di creare il gruppo o la creazione non vada in porto
    this.groupsService.deletePhotoPreUpload(this.idGroup, 'fotoGruppo');
  }

  deleteComponent(i) {
    if (i !== 0) {
      this.photoArr.splice(i, 1);
    }
  }

  getPhoto(event) {
    this.file = event.target.files[0];
    let fileName = 'fotoGruppo';

    if (this.file) {
      this.task = this.groupsService.upLoad(this.idGroup, fileName).put(this.file);
      if (this.task) {
        this.task.then(() => {
          this.groupsService.upLoad(this.idGroup, fileName).getDownloadURL().then(url => {
            this.url = url;
          })
        })
      }
    } else {
      this.url = './../assets/anonymousGroup.png';
    }

  }
  dismissMod() {
    if (this.file) {
      this.deletePhotoAborted();
      this.url = './../assets/anonymousGroup.png';
    }
    this.dismiss();
  }
  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
