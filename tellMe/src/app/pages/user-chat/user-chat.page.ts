import { AngularFireAuth } from '@angular/fire/auth';
import { DetailsModalPage } from './../details-modal/details-modal.page';
import { Media } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';
import { AudioService } from './../../services/audio.service';
import { FcmService } from './../../services/fcm.service';
import { PhotoModalPage } from './../photo-modal/photo-modal.page';
import { ModalController, AlertController } from '@ionic/angular';
import { UploadTask } from '@angular/fire/storage/interfaces';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ChatPhotoService } from './../../services/chat-photo.service';
import { AuthService } from './../../services/auth.service';
import { ChatService } from './../../services/chat.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { SendMessageService } from 'src/app/services/send-message.service';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture/ngx';

@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.page.html',

  styleUrls: ['./user-chat.page.scss'],
})
export class UserChatPage implements OnInit, OnChanges {
  @ViewChild('content', { static: false }) content: any;
  urlVariable: string;
  uid: string;
  messages: any = [];
  friendFirstName: string;
  friendLastName: string;
  idLoggedUser: string;
  form: FormGroup;
  firstname: string;
  lastname: string;
  lastN: string;
  photo: string;
  online: any;
  date: any;
  empty: number;

  fileName;
  task: UploadTask;
  urlPhoto: string;
  urlAudio: string;

  friendData = {
    friendFirstname: '',
    friendLastname: '',
    friendPhoto: '',
    friendId: ''
  };
  name: string;
  block: any;
  blockByFriend: any;
  mutedFriend: any;

  leng: any;
  limit: number = 10;
  limitVal: boolean = true;

  y = false;
  isWrit: any = false;

  mess;
  lastView;
  marginLeft = false;
  marginRight = false;
  messCit;
  citation: string = '';
  citationName: string = '';
  loggedFirstname;
  citName;
  urlPhotoCit: string = '';
  fontSize = '';

  constructor(
    private router: Router,
    private usersService: UsersService,
    private formBuilder: FormBuilder,
    private sendMessageService: SendMessageService,
    private chatService: ChatService,
    private authService: AuthService,
    private camera: Camera,
    private chatPhotoService: ChatPhotoService,
    public modalController: ModalController,
    private fcm: FcmService,
    private mediaCapture: MediaCapture,
    private audioService: AudioService,
    private file: File,
    private media: Media,
    private alertCtrl: AlertController,
    private afAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe(user => {
      this.idLoggedUser = user.uid;
    })
    if (localStorage.getItem('fontSize')) {
      this.fontSize = localStorage.getItem('fontSize');
    }
    if (localStorage.getItem('bgChat')) {
      this.urlVariable = localStorage.getItem('bgChat');
    } else {
      this.urlVariable = "/../assets/backgrounds/bg1.png";
    }
    // this.usersService.getCurrentUserMess(this.friendData.friendId, this.idLoggedUser).subscribe(mess => {
    //   this.usersService.getFriendMess(this.idLoggedUser, this.friendData.friendId).subscribe(mes => {
    //     this.leng = mess.length + mes.length; //sto calcolando lunghezza messaggi prima del push di quello attuale
    //   })
    // })
    this.form = this.formBuilder.group({
      message: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    setTimeout(() => { this.content.scrollToBottom(); }, 100);
  }


  async getStatus() {
    if (localStorage.getItem('lastAccessVisibility') && !localStorage.getItem('statusOnline')) {
      this.usersService.getUserStatus(this.friendData.friendId).subscribe(res => {
        this.online = res[1];
        this.date = "";
      })
    } else if (localStorage.getItem('statusOnline') && !localStorage.getItem('lastAccessVisibility')) {
      this.online = false;
      this.date = "";
    } else if (localStorage.getItem('lastAccessVisibility') && localStorage.getItem('statusOnline')) {
      this.online = false;
      this.date = "";
    } else {
      this.usersService.getUserStatus(this.friendData.friendId).subscribe(res => {
        this.online = res[1];
        this.date = res[0];
      })
    }

  }

  ionViewDidEnter() {
    setTimeout(() => { this.content.scrollToBottom(); }, 100);
  }


  ionViewWillEnter() {
    this.friendData = this.chatService.getFriendData();
    this.uid = this.friendData.friendId;
    console.log(this.idLoggedUser)
    this.chatService.getOpt(this.idLoggedUser, this.friendData.friendId).subscribe(wrt => {
      this.isWrit = wrt[16];
    });

    this.usersService.getLogUserData(this.idLoggedUser).subscribe(us => {
      this.loggedFirstname = us[1];
    });
    //////////////////////////////////////////////////////////////////////////////
    // this.chatService.setOpt(this.idLoggedUser, this.friendData.friendId).update({
    //   zzzzLastView: Date.now()
    // });
    //////////////////////////////////////////////////////////////////////////////
    this.usersService.getUserData(this.friendData.friendId, this.idLoggedUser).subscribe(res => {
      this.blockByFriend = res[0];
      this.mutedFriend = res[7];
      this.lastView = res[17];
    });
    this.usersService.getUserData(this.idLoggedUser, this.friendData.friendId).subscribe((res: any) => {
      this.block = res[0];
    });


    this.firstname = this.friendData.friendFirstname;
    this.lastname = this.friendData.friendLastname;
    this.lastN = this.lastname;


    this.photo = this.friendData.friendPhoto;




    this.getMessages();
    this.getStatus();
    if ((this.firstname.length + this.lastname.length) > 13 && localStorage.getItem('fontSize') == 'grande') {
      this.lastN = this.lastname.charAt(0) + '.';
    } else if ((this.firstname.length + this.lastname.length) > 16 && !localStorage.getItem('fontSize')) {
      this.lastN = this.lastname.charAt(0) + '.';
    } else if ((this.firstname.length + this.lastname.length) > 19 && localStorage.getItem('fontSize') == 'piccolo') {
      this.lastN = this.lastname.charAt(0) + '.';
    } else {
      this.lastN = this.lastname;
    }
  }

  swipeUp() {
    this.limit = this.limit + 10;
    this.getMessages();
  }

  getMessages() {
    this.usersService.getUserData(this.idLoggedUser, this.friendData.friendId).subscribe((empty: any) => {
      this.empty = empty[1];
      if (!this.empty) {
        this.usersService.getCurrentUserMess(this.friendData.friendId, this.idLoggedUser).subscribe(mess => {
          this.usersService.getFriendMess(this.idLoggedUser, this.friendData.friendId).subscribe(mes => {
            this.messages = mes.concat(mess);
            this.leng = this.messages.length;
            this.messages = this.messages.sort((a, b) => a.createdAt - b.createdAt);
            if (this.limit <= (this.leng / 2)) {
              this.messages = this.messages.slice(this.messages.length - this.limit, this.messages.length);
            }
          })
        })
      } else {
        this.usersService.getCurrentUserMess(this.friendData.friendId, this.idLoggedUser).subscribe(mess => {
          this.usersService.getFriendMess(this.idLoggedUser, this.friendData.friendId).subscribe(mes => {
            this.messages = mes.concat(mess);
            this.messages = this.messages.sort((a, b) => a.createdAt - b.createdAt);
            this.messages = this.messages.filter(msg => {
              return msg.createdAt > this.empty
            })
            this.leng = this.messages.length;
            if (this.limit <= (this.leng / 2)) {
              this.messages = this.messages.slice(this.messages.length - this.limit, this.messages.length);
            }
          })
        })
      }
    })

  }

  async sendMessage() {

    if (this.blockByFriend && this.block) {
      this.name = 'entrambi';
    } else if (this.blockByFriend && !this.block) {
      this.name = this.friendData.friendFirstname;
    } else {
      this.name = 'te';
    }
    if (this.blockByFriend || this.block) {
      this.alert(this.name);
      document.getElementById('valText').setAttribute('value', '');
    } else {
      let testo = this.form.value.message.trim();
      if (testo !== '') {
        let data = new Date;
        let minutes = data.getMinutes();
        let zero = false;
        if (minutes < 10) {
          zero = true;
        }
        let date = data.getHours() + ':' + (zero ? '0' : '') + minutes;
        this.sendMessageService.send(this.idLoggedUser, this.friendData.friendId).push({
          createdAt: Date.now(),
          uid: this.idLoggedUser,
          text: testo,
          photo: '',
          audio: '',
          date: date,
          zSaw: false,
          zzCitation: this.citation,
          zzCitName: this.citationName,
          zzMit: this.loggedFirstname,
          zzPhotoCit: this.urlPhotoCit
        })
        document.getElementById('valText').setAttribute('value', '');
        setTimeout(() => { this.content.scrollToBottom(); }, 100);

        this.sendMessageService.newMessages(this.friendData.friendId, this.idLoggedUser).update({
          newMess: true,
          zPrev: testo,
          zNewMessDate: date,
          zMitt: this.loggedFirstname,
          zNewMessNumbTot: this.leng,
          zzzzzLastMess: Date.now()
        })
        this.sendMessageService.newMessages(this.idLoggedUser, this.friendData.friendId).update({
          zPrev: testo,
          zNewMessDate: date,
          zMitt: this.loggedFirstname,
          zNewMessNumbTot: this.leng,
          zzzzzLastMess: Date.now()
        });

        if (!this.mutedFriend) {
          this.usersService.getLogUserData(this.idLoggedUser).subscribe(res => {
            this.fcm.createNotification(res[1], res[2], this.friendData.friendId, testo);//da inserire token recuperato dalla lista di token registrati corrispondente a quell 'id dell'amico
          });
        }


      }
    }
    this.citation = '';
    this.urlPhotoCit = '';

  }

  addCameraPhoto() {

    if (this.blockByFriend && this.block) {
      this.name = 'entrambi';
    } else if (this.blockByFriend && !this.block) {
      this.name = this.friendData.friendFirstname;
    } else {
      this.name = 'te';
    }

    if (this.blockByFriend || this.block) {
      this.alert(this.name);
      document.getElementById('valText').setAttribute('value', '');
    } else {
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
        this.sendPhotoMessage(base64Image);

      }, (err) => {
        alert(err)
      });
    }
  }

  async sendPhotoMessage(image) {
    this.fileName = Date.now();
    let data = new Date;
    let minutes = data.getMinutes();
    let zero = false;
    if (minutes < 10) { zero = true; }
    let date = data.getHours() + ':' + (zero ? '0' : '') + minutes;

    this.task = this.chatPhotoService.upLoad(this.idLoggedUser, this.fileName).putString(image, 'data_url');
    this.task.then(() => {
      this.chatPhotoService.upLoad(this.idLoggedUser, this.fileName).getDownloadURL().then(url => {
        this.urlPhoto = url;
        setTimeout(() => { this.content.scrollToBottom(); }, 200);
        this.usersService.getLogUserData(this.idLoggedUser).subscribe(res => {
          this.chatPhotoService.savePhoto(this.idLoggedUser, this.friendData.friendId).push({
            createdAt: Date.now(),
            uid: this.idLoggedUser,
            text: '',
            photo: this.urlPhoto,
            audio: '',
            date: date,
            zzCitation: this.citation,
            zzCitName: this.citationName,
            zzMit: this.loggedFirstname,
            zzPhotoCit: this.urlPhotoCit

          });

        })
      })
    })
    this.sendMessageService.newMessages(this.friendData.friendId, this.idLoggedUser).update({
      newMess: true,
      zPrev: 'photoIcon',
      zNewMessDate: date,
      zMitt: this.loggedFirstname,
      zNewMessNumbTot: this.leng,
      zzzzzLastMess: Date.now()
    })
    this.sendMessageService.newMessages(this.idLoggedUser, this.friendData.friendId).update({
      zPrev: 'photoIcon',
      zNewMessDate: date,
      zMitt: this.loggedFirstname,
      zNewMessNumbTot: this.leng,
      zzzzzLastMess: Date.now()

    });
    document.getElementById('valText').setAttribute('value', '');
    this.citation = '';
    this.urlPhotoCit = '';


  }


  async alert(name) {
    const alert = await this.alertCtrl.create({
      header: 'Blocco',
      message: `Non puoi inviare messaggi,questa chat è bloccata da ${name}!`,
      buttons: ['OK']
    })
    await alert.present();
  }


  openPhoto(url, date) {
    this.presentModal(url, date)
  }

  async presentModal(url, date) {
    const modal = await this.modalController.create({
      component: PhotoModalPage,
      componentProps: { url: url, date: date }
    });
    return await modal.present();
  }

  addAudio() {

    this.mediaCapture.captureAudio().then(audio => {
      console.log(audio)

      this.file.checkFile(audio[0].fullPath, audio[0].name).then(res => {
        console.log(res)
      })

      let aud = 'data:audio/mpeg;base64url,' + audio[0].fullPath.toString();

      this.sendAudioMessage(aud);
    })

    ////

    // this.mediaCapture.captureAudio().then(audio => {

    //   // let n = audio[0].fullPath.lastIndexOf("/");
    //   // let x = audio[0].fullPath.lastIndexOf("g");
    //   // let nameFile = audio[0].fullPath.substring(n + 1, x + 1);
    //   // let directory = audio[0].fullPath.substring(0, n);

    //   this.file.readAsArrayBuffer(audio[0].fullPath.toString(), audio[0].fullPath).then((res) => {
    //     let blob = new Blob([res], { type: "audio/mpeg" });
    //     this.sendAudioMessage(blob)
    //   })
    // })
  }

  async sendAudioMessage(audio) {
    this.fileName = Date.now();
    let data = new Date;
    let minutes = data.getMinutes();
    let zero = false;
    if (minutes < 10) {
      zero = true;
    }
    let date = data.getHours() + ':' + (zero ? '0' : '') + minutes;

    let metadata = {
      contentType: 'audio/mpeg'
    };


    this.task = this.audioService.upLoadAudio(this.idLoggedUser, this.fileName).putString(audio, 'base64url');
    this.task.then(() => {
      this.audioService.upLoadAudio(this.idLoggedUser, this.fileName).getDownloadURL().then(url => {
        this.urlAudio = url;
        setTimeout(() => { this.content.scrollToBottom(); }, 200);
        this.usersService.getLogUserData(this.idLoggedUser).subscribe(res => {
          this.audioService.saveAudio(this.idLoggedUser, this.friendData.friendId).push({
            createdAt: Date.now(),
            uid: this.idLoggedUser,
            text: '',
            photo: '',
            audio: this.urlAudio,
            date: date,
            zzCitation: this.citation,
            zzCitName: this.citationName,
            zzMit: this.loggedFirstname,
            zzPhotoCit: this.urlPhotoCit
          });

        })
      })
    })
    document.getElementById('valText').setAttribute('value', '');
    this.sendMessageService.newMessages(this.friendData.friendId, this.idLoggedUser).update({
      newMess: true,
      zzzzzLastMess: Date.now()
    })
    this.citation = '';
    this.urlPhotoCit = '';

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('cambiamento')

  }


  isWriting(a) {
    if (a) {
      this.chatService.isWriting(this.friendData.friendId, this.idLoggedUser).update({
        zzzzIsWriting: true
      })
    }

    setTimeout(() => {
      this.chatService.isWriting(this.friendData.friendId, this.idLoggedUser).update({
        zzzzIsWriting: false
      })

    }, 2000);

    console.log(this.y)

  }

  //citare me
  citaMe(index, text, id, name, urlPhoto) {
    if (id === this.idLoggedUser) {
      this.citation = text;
      this.marginRight = true;
      this.messCit = index;
      this.citationName = name;
      this.citName = 'Tu';
      this.urlPhotoCit = urlPhoto;
      console.log(this.urlPhotoCit)
      setTimeout(() => {
        this.marginRight = false;
      }, 200);
    }

  }

  //citare interlocutore
  citaLui(index, text, id, name, urlPhoto) {
    if (id !== this.idLoggedUser) {
      this.citation = text;
      this.citationName = name;
      this.citName = name;
      this.marginLeft = true;
      this.messCit = index;
      this.urlPhotoCit = urlPhoto;
      console.log(this.urlPhotoCit)

      setTimeout(() => {
        this.marginLeft = false;
      }, 200);
    }
  }

  //chiusura citazione aperta

  closeCit() {
    this.citation = '';
    this.urlPhotoCit = '';
  }


  //apertura dettagli chat

  openDetails() {
    this.optionsModal(this.friendData.friendId, this.friendData.friendFirstname, this.friendData.friendLastname, this.friendData.friendPhoto);
  }

  async optionsModal(idUser, firstname, lastname, photo) {
    const modal = await this.modalController.create({
      component: DetailsModalPage,
      componentProps: {
        id: idUser,
        firstname: firstname,
        lastname: lastname,
        photo: photo
      }
    });
    return await modal.present();
  }


  backToChat() {
    this.chatService.getOpt(this.idLoggedUser, this.friendData.friendId).subscribe(opt => {
      this.leng = opt[14];
    })


    this.sendMessageService.newMessages(this.idLoggedUser, this.friendData.friendId).update({
      newMess: false,
      zzzzLastView: Date.now()
    })
    this.sendMessageService.newMessages(this.idLoggedUser, this.friendData.friendId).update({
      zNewMessNumb: this.leng - 1
    }).then(() => {
      this.router.navigateByUrl('home/chat');
    })

  }

}
