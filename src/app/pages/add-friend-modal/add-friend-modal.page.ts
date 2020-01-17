import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './../../services/auth.service';
import { ChatService } from './../../services/chat.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

import { map } from 'rxjs/operators'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-friend-modal',
  templateUrl: './add-friend-modal.page.html',
  styleUrls: ['./add-friend-modal.page.scss'],
})
export class AddFriendModalPage implements OnInit {

  form: FormGroup;
  idLoggedUser: string;
  uidFriend: string;
  loggedFirstname: string;
  loggedLastname: string;
  loggedPhoto: string;
  loggedEmail: string;
  showRot: boolean = false;
  uid: string;

  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private chatService: ChatService,
    private authService: AuthService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private afAuth: AngularFireAuth,
    private router: Router
  ) {

    this.afAuth.authState.subscribe(user => {
      this.idLoggedUser = user.uid;
      console.log('id' + this.idLoggedUser);

      this.usersService.getUsers().pipe(map(res => {
        return res.filter(it => {
          return it.payload.child('uid').val() == this.idLoggedUser
        })
      })).subscribe(res => {
        this.loggedFirstname = res[0].payload.child('firstname').val();
        this.loggedLastname = res[0].payload.child('lastname').val();
        this.loggedPhoto = res[0].payload.child('photo').val();
        this.loggedEmail = res[0].payload.child('email').val();
      })

    })

    this.form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([Validators.required, Validators.email]))
    })
  }

  ngOnInit() {
  }

  ionViewWillEnter() {

  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    }).then(() => {
      if (this.showRot) {
        this.conferma();
        this.showRot = false;
      }
    })
  }

  async conferma() {
    const toast = await this.toastCtrl.create({
      message: 'Amico aggiunto con successo agli utenti!',
      duration: 2000,
      cssClass: 'confirmToast'
    });
    toast.present();
  }

  addChatFriendToLoggedUser() {
    this.usersService.getUserss().snapshotChanges().pipe(map(res => {
      return res.filter(it => {
        return it.payload.child('email').val() == this.form.value.email  //email al posto di firstname e email arriva dal form al psoto di pinco
      })
    })
    ).subscribe(res => {
      try {
        const idLoggedUser = this.idLoggedUser;
        const uid = res[0].payload.child('uid').val();
        const firstname = res[0].payload.child('firstname').val();
        const lastname = res[0].payload.child('lastname').val();
        const photo = res[0].payload.child('photo').val();


        this.chatService.createChat(idLoggedUser, uid).set({
          firstname: firstname,
          lastname: lastname,
          foto: photo,
          newMess: false,
          block: false,
          filed: false,
          secret: false,
          secretKey: '',
          empty: 0,
          messages: 0,
          muted: false,
          zMitt: firstname,
          zPrev: '',
          zNewMessDate: '',
          zNewMessNumb: 0,
          zNewMessNumbTot: 0,
          zzzzIsWriting: false,
          zzzzLastView: 0,
          zzzzzLastMess: Date.now()
        })
      } catch (error) {
        console.log(error);
      }
    })
  }

  addChatToFriend() {
    this.usersService.getUs().snapshotChanges().pipe(map(users => {
      return users.filter(user => {
        return user.payload.child('email').val() == this.form.value.email;
      })
    })
    ).subscribe(user => {
      try {
        const idLoggedUser = this.idLoggedUser;
        const uid = user[0].payload.child('uid').val();
        this.uid = user[0].payload.child('uid').val();
        const firstname = this.loggedFirstname;
        const lastname = this.loggedLastname;
        const photo = this.loggedPhoto;
        this.chatService.createFriendChat(idLoggedUser, uid).set({
          firstname: firstname,
          lastname: lastname,
          foto: photo,
          newMess: false,
          block: false,
          filed: false,
          secret: false,
          secretKey: '',
          empty: 0,
          messages: 0,
          muted: false,
          zMitt: firstname,
          zPrev: '',
          zNewMessDate: '',
          zNewMessNumb: 0,
          zNewMessNumbTot: 0,
          zzzzIsWriting: false,
          zzzzLastView: 0,
          zzzzzLastMess: Date.now()
        })
      } catch (error) {
        console.log(error);
      }
    })

  }

  addIdToIdsList() {
    this.usersService.addId(this.idLoggedUser).push({
      id: this.uid
    })
  }

  addIdToIdsListF() {
    console.log(this.uid)
    this.usersService.addId(this.uid).push({
      id: this.idLoggedUser
    })
  }



  addFriend() {
    if (this.form.value.email !== this.loggedEmail) {
      this.addChatFriendToLoggedUser();
      this.addChatToFriend();
      this.showRot = true;
      setTimeout(() => {
        this.addIdToIdsList();
        this.addIdToIdsListF();
        this.dismiss();
        this.router.navigateByUrl('/home/chat');
      }, 1500);
    } else {
      this.presentAlert();
    }
  }


  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Attenzione',
      message: 'Non puoi inserire la tua email,riprova!',
      buttons: ['OK']
    });
    await alert.present();
  }

}
