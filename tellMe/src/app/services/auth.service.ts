import { map } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState = new BehaviorSubject(false);
  logFlag = new BehaviorSubject(false);
  userData: any;

  private registeredUser = {
    firstname: '',
    lastname: '',
    email: '',
    photo: null
  }

  idLoggedUser: string;


  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router,
    private route: ActivatedRoute,
    private alertCtrl: AlertController
  ) {



  }

  setId(id) {
    this.idLoggedUser = id;
  }

  getId() {
    return this.idLoggedUser;
  }

  login(email, password) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.logFlag.next(true);
        this.getLoggedUserId();
        setTimeout(() => {
          this.router.navigateByUrl('/home/chat');
        }, 2000);
        // this.onlineUsers(user.user.uid).update({
        //   online: true,
        //   date: ''
        // })
        // if (this.router.url == '/login') {
        //   this.router.navigateByUrl('/home/chat');
        // }

      })
      .catch(function (error) {

        alert("Credenziali errate!");
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      })
  }





  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Attenzione',
      message: 'Credenziali errate!',
      buttons: ['OK']
    });

    await alert.present();
  }

  getLoggedUserId() {

    this.afAuth.authState.subscribe(user => {
      this.idLoggedUser = user.uid;
    })
    //   if (user) {
    //     //   this.userData = user;
    //     //   this.authState.next(true);
    //     this.idLoggedUser = user.uid;
    // this.router.navigateByUrl('/home/chat');
    // this.onlineUsers(user.uid).update({
    //   online: true,
    //   date: ''
    // })
    // }
    // })

    //
    /////////////////////
    // this.afAuth.authState.subscribe(user => {
    //   if (user) {
    //     this.userData = user;
    //     console.log('entra qui')
    //     if (user.email) {
    //       this.authState.next(true);
    //       this.idLoggedUser = this.userData.uid;
    //       console.log('entra quii')

    //       this.onlineUsers(this.userData.uid).update({
    //         online: true,
    //         date: ''
    //       })
    //     }
    //     // localStorage.setItem('user', this.userData.uid);
    //     // localStorage.setItem('emailLogged', user.email);//
    //   } else {
    //     this.presentAlert();
    //   }
    // })
  }

  // getAuthState() {
  //   return this.authState.value;
  // }
  getAuthState() {
    return this.afAuth.authState.pipe(map(auth => auth));
  }


  register(email, password, cpassword, firstname, lastname, photo) {
    if (password === cpassword) {
      this.registeredUser.email = email;
      this.registeredUser.firstname = firstname;
      this.registeredUser.lastname = lastname;
      this.registeredUser.photo = photo;
      console.log(this.registeredUser)

      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
          this.router.navigateByUrl('login');
        })
        .catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        })
    } else {
      return console.log('Password non corrispondenti!');
    }

  }

  onlineUsers(idUser) {
    return this.db.database.ref(`/online/${idUser}/`);
  }

  getRegisteredUser() {
    return this.registeredUser;
  }

  getIdLoggedUser(): any {
    this.getAuthState().subscribe(auth => {
      this.idLoggedUser = auth.uid;
    })
  }


  logOut(): void {
    this.afAuth.auth.signOut();
    this.idLoggedUser = '';
    this.logFlag.next(false);
    this.router.navigate(['/login'])
    console.log(this.idLoggedUser);



  }


}