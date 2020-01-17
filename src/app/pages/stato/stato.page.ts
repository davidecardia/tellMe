import { AngularFireAuth } from '@angular/fire/auth';
import { StatusPhotoModalPage } from './../status-photo-modal/status-photo-modal.page';
import { AngularFireDatabase } from '@angular/fire/database';
import { PhotoModalPage } from './../photo-modal/photo-modal.page';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ChatService } from './../../services/chat.service';
import { Router } from '@angular/router';
import { StatusesService } from './../../services/statuses.service';
import { AuthService } from './../../services/auth.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { UploadTask } from '@angular/fire/storage/interfaces';
import { UsersService } from 'src/app/services/users.service';
import { LoadingController, ModalController } from '@ionic/angular';
import { Observable, Subscription } from 'rxjs';



@Component({
  selector: 'app-stato',
  templateUrl: './stato.page.html',
  styleUrls: ['./stato.page.scss'],
})
export class StatoPage implements OnInit {
  private form: FormGroup;
  url: any;
  idLogged: string;

  file;
  task: UploadTask;
  statuses: any[] = [];
  personalStatus: any[] = [];
  statusExists;

  friendsList;
  fileName: any;
  friend = [];


  selectedPhoto;

  views: any = [];
  loggedFirstname;
  loggedLastname;
  loggedPhoto;

  addClicked = false;
  x = 1;
  caricamento = false;
  constructor(
    private storage: AngularFireStorage,
    private fb: AngularFireDatabase,
    private formBuilder: FormBuilder,
    private statusesService: StatusesService,
    private authService: AuthService,
    private usersService: UsersService,
    private chatService: ChatService,
    private camera: Camera,
    public loadingController: LoadingController,
    private modalController: ModalController,
    private router: Router,
    private afAuth: AngularFireAuth

  ) {

    if (!this.idLogged) {
      this.caricamento = true;
    }


    this.afAuth.authState.subscribe(user => {
      this.idLogged = user.uid;

      this.chatService.getFriendsList(this.idLogged).subscribe(res => {
        this.friendsList = res.filter(item => {
          return item.payload.key;
        });
        console.log(this.friendsList)

      })



      this.usersService.getLogUserData(this.idLogged).subscribe(res => {
        this.loggedFirstname = res[1];
        this.loggedLastname = res[2];
        this.loggedPhoto = res[3];
      });

      this.getMyStatus();
      this.getListStatuses();


    });
    this.form = this.formBuilder.group({
      foto: new FormControl('', Validators.required),
    });


  }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.afAuth.authState.subscribe(user => {
      this.idLogged = user.uid;

      this.chatService.getFriendsList(this.idLogged).subscribe(res => {
        this.friendsList = res.filter(item => {
          return item.payload.key;
        });
        console.log(this.friendsList)

      })



      this.usersService.getLogUserData(this.idLogged).subscribe(res => {
        this.loggedFirstname = res[1];
        this.loggedLastname = res[2];
        this.loggedPhoto = res[3];
      });

      this.getMyStatus();
      this.getListStatuses();


    });
    this.removeStat();
  }

  removeStat() {

    this.statusesService.getStatus(this.idLogged).subscribe((status: any) => {
      const now = Date.now();
      const diff = now - status[3];
      if (diff >= 86400000) { //eliminazione dopo 24h
        this.statusesService.removeStatus(this.idLogged);
        this.statusesService.removeStatusStorage(this.idLogged, this.fileName);
      }
    });


  }

  addCameraPhoto(ev) {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      saveToPhotoAlbum: false //true in prod,
      // popoverOptions: new CameraPopoverOptions //slider di foto della gallery,ma funge solo con ios

    }

    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.add(base64Image);
    }, (err) => {
      alert(err)
    });
  }

  async add(image) {
    this.addClicked = true;

    this.fileName = 'status';

    this.task = this.statusesService.upLoad(this.idLogged, this.fileName).putString(image, 'data_url');
    let data = new Date;
    let minutes = data.getMinutes();
    let zero = false;
    if (minutes < 10) {
      zero = true;
    }
    let date = data.getHours() + ':' + (zero ? '0' : '') + minutes;

    // let progress = (this.task.snapshot.bytesTransferred / this.task.snapshot.totalBytes) * 100;

    // alert(progress)


    this.task.then(() => {
      this.statusesService.upLoad(this.idLogged, this.fileName).getDownloadURL().then(url => {
        this.url = url;
        this.usersService.getLogUserData(this.idLogged).subscribe(res => {
          this.statusesService.saveStatus(this.idLogged).set({
            status: this.url,
            firstname: res[1],
            lastname: res[2],
            zCreatedAt: Date.now(),
            zDate: date,
            zPhoto: res[3]
          })
        })


      })
      for (let i = 0; i < this.friendsList.length; i++) {
        this.statusesService.getViewsStatus(this.friendsList[i].payload.key).subscribe((view) => {
          const me = view.filter((res: any) => {
            return res.view == this.idLogged
          })

          if (me.length == 1) {
            this.statusesService.removeView(this.friendsList[i].payload.key, this.idLogged);
          }

        })

      }



    })

  }


  getFile(event) {
    this.file = event.target.files[0];
    setTimeout(() => {
      this.addPhoto();
    }, 200);
  }

  addPhoto() {
    let data = new Date;
    let minutes = data.getMinutes();
    let zero = false;
    if (minutes < 10) {
      zero = true;
    }
    let date = data.getHours() + ':' + (zero ? '0' : '') + minutes;

    if (this.idLogged) {
      this.fileName = 'status';
      // this.presentLoading(timer);
      this.task = this.statusesService.upLoad(this.idLogged, this.fileName).put(this.file);
      // this.task.then((p) => {
      // })
      this.task.then(() => {
        // this.authService.
        this.statusesService.upLoad(this.idLogged, this.fileName).getDownloadURL().then(url => {
          this.url = url;
          this.usersService.getLogUserData(this.idLogged).subscribe(res => {
            this.statusesService.saveStatus(this.idLogged).set({
              status: this.url,
              firstname: res[1],
              lastname: res[2],
              zCreatedAt: Date.now(),
              zDate: date,
              zPhoto: res[3]
            })
          })


        })

        //questo rimuove le visualizzazioni allo stato precedente degli amici..quindi nuovo stato non deve avere nessuna visualizzazione
        //Il problema è quì,perchè la rimozione della visualizzazione viene richiamata dentro il subscribe e dipende da view..quando carico nuova foto
        //,aggiunge id visualizzazione, ma l'altro utente lo rimuove in automatico perché richiama questa funzione e risulta 'me.length== 1',quindi avvia subito la rimozione
        for (let i = 0; i < this.friendsList.length; i++) {
          this.statusesService.getViewsStatus(this.friendsList[i].payload.key).subscribe((view: any) => {

            const me = view.filter(res => {
              return res.view == this.idLogged
            })


            if (me.length == this.x) {
              console.log('entra qui dio maiale')  ///DEVO RIMUOVERLO DA DENTRO IL SUBSCRIBE
              this.statusesService.removeView(this.friendsList[i].payload.key, this.idLogged);
            }

          })


        }



        setTimeout(() => {
          this.statusesService.removeStatus(this.idLogged);
          this.statusesService.removeStatusStorage(this.idLogged, this.fileName);
        }, 86400000);
      })
    } else {
      this.authService.logOut();
    }
    this.file = null;
  }


  getListStatuses() {
    this.statusesService.getListStatus().snapshotChanges().subscribe(res => {
      this.statuses = res.filter(item => {
        for (let i = 0; i < this.friendsList.length; i++) {
          this.friend.push(this.friendsList[i].key);
        }
        if (this.friend.includes(item.key)) {
          return item;
        }
      });
      if (this.statuses.length > 1) {
        this.statuses.sort(((a, b) => b.payload.val().zCreatedAt - a.payload.val().zCreatedAt));
      }

      this.statusesService.getViewsStatus(this.idLogged).subscribe((views: any) => {
        this.views = [];
        for (let i = 0; i < views.length; i++) {
          this.views = this.views.concat(views[i].view);
        }
      })
    });
  }



  async getMyStatus() {
    this.statusesService.getMyStatus().snapshotChanges().subscribe(res => {
      this.caricamento = false;
      this.personalStatus = res.filter(item => {
        return item.key === this.idLogged
      });

    });
  }




  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Caricamento..',
      duration: 5000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

  }

  openPhoto(url, id, date, index, firstname, lastname) {
    let data = new Date;
    let minutes = data.getMinutes();
    let zero = false;
    if (minutes < 10) {
      zero = true;
    }
    let hour = data.getHours() + ':' + (zero ? '0' : '') + minutes;

    this.presentModal(url, date, index, firstname, lastname, id);


    this.statusesService.setViewStatus(id, this.idLogged).update({
      firstname: this.loggedFirstname,
      lastname: this.loggedLastname,
      photo: this.loggedPhoto,
      hour: hour
    })

  }

  async presentModal(url, date, index, firstname, lastname, idFriend) {
    console.log(this.friendsList)
    const modal = await this.modalController.create({
      component: StatusPhotoModalPage,
      componentProps: {
        url: url,
        date: date,
        i: index,
        idLoggedUser: this.idLogged,
        friendsList: this.friendsList,
        viewsList: this.views,
        statusesList: this.statuses,
        firstname: this.loggedFirstname,
        lastname: this.loggedLastname,
        photo: this.loggedPhoto,
        idFriend: idFriend
      }
    });
    return await modal.present();
  }

  openMyStatus(url, date) {
    this.openStatus(url, date);
  }

  async openStatus(url, date) {
    const modal = await this.modalController.create({
      component: PhotoModalPage,
      componentProps: {
        url: url,
        date: date,
        idLoggedUser: this.idLogged,
        status: true,
        viewsList: this.views,
        statuses: this.statuses,
        friendsList: this.friendsList
      }
    });
    return await modal.present();
  }




  swipeLeft() {
    this.router.navigateByUrl('/home/utenti');
  }
  swipeRight() {
    this.router.navigateByUrl('/home/gruppi');
  }

  removeStatus() {
    this.statusesService.removeStatus(this.idLogged);
    this.statusesService.removeStatusStorage(this.idLogged, this.fileName);
  }


}
