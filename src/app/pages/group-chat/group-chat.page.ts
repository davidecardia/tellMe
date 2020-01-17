import { AngularFireAuth } from '@angular/fire/auth';
import { ModalController } from '@ionic/angular';
import { PhotoModalPage } from './../photo-modal/photo-modal.page';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { map } from 'rxjs/operators';
import { UsersService } from './../../services/users.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GroupsService } from 'src/app/services/groups.service';
import { UploadTask } from '@angular/fire/storage/interfaces';

@Component({
  selector: 'app-group-chat',
  templateUrl: './group-chat.page.html',
  styleUrls: ['./group-chat.page.scss'],
})
export class GroupChatPage implements OnInit {
  @ViewChild('content', { static: false }) content: any;
  urlVariable: string;
  chatData = {
    idChat: '',
    name: '',
    photo: '',
    idsGroup: []
  }
  form: FormGroup;
  name: string;
  nameGroup: string;
  photo: string;
  idGroupChat;
  idLoggedUser;
  loggedFirstname;
  loggedLastname;
  loggedPhoto;

  groupComponents;

  messages: any = [];
  task: UploadTask;
  urlPhoto: string;
  empty: number;

  leave = false;
  numbMess;
  x = 0;
  zzzNewMessNumbTot;

  leng: any;
  limit: number = 10;
  limitVal: boolean = true;

  marginLeft = false;
  marginRight = false;
  messCit;
  citation: string = '';
  citationName: string = '';
  citName;
  urlPhotoCit: string = '';

  isWrit: boolean = false;
  writer: string;

  fontSize;

  constructor(
    private activatedRoute: ActivatedRoute,
    private groupsService: GroupsService,
    private authService: AuthService,
    private usersService: UsersService,
    private formBuilder: FormBuilder,
    private router: Router,
    private camera: Camera,
    private modalCtrl: ModalController,
    private afAuth: AngularFireAuth

  ) {
    if (localStorage.getItem('fontSize')) {
      this.fontSize = localStorage.getItem('fontSize');
    }

    if (localStorage.getItem('bgChat')) {
      this.urlVariable = localStorage.getItem('bgChat');
    } else {
      this.urlVariable = "/../assets/backgrounds/bg1.png";
    }

    this.chatData = this.groupsService.getClickedGroupData();
    this.name = this.chatData.name;

    if (this.name.length > 14 && localStorage.getItem('fontSize') == 'grande') {
      this.nameGroup = this.name.substring(0, 11) + '..';
    } else if (this.name.length > 20 && !localStorage.getItem('fontSize')) {
      this.nameGroup = this.name.substring(0, 17) + '..';
    } else if (this.name.length > 24 && localStorage.getItem('fontSize') == 'piccolo') {
      this.nameGroup = this.name.substring(0, 21) + '..';
    } else {
      this.nameGroup = this.name;
    }

    this.photo = this.chatData.photo;
    this.idGroupChat = this.chatData.idChat;
    this.groupComponents = this.chatData.idsGroup;
    this.afAuth.authState.subscribe(user => {
      this.idLoggedUser = user.uid;
    })

    setTimeout(() => { this.content.scrollToBottom(); }, 100);


    this.form = this.formBuilder.group({
      message: new FormControl('', Validators.required)
    });

    this.groupsService.isWritingInChat(this.idGroupChat).subscribe((writer: any) => {
      this.isWrit = writer[0];
      this.writer = writer[2];
    })

    // for (let i = 0; i < this.groupComponents.length; i++) {
    //   this.groupsService.getOptionsGroupChat(this.groupComponents[i], this.idGroupChat).subscribe((res: any) => {
    //     const numbMess = res[20];
    //     const name = res[4];
    //     console.log(name + ':' + numbMess)
    //   })
    // }




  }

  ionViewWillEnter() {
    this.groupsService.getOptionsGroupChat(this.idLoggedUser, this.idGroupChat).subscribe((res: any) => {
      this.leave = res[14];
    })


    this.usersService.getUsers().pipe(map(res => {
      return res.filter(it => {
        return it.payload.child('uid').val() == this.idLoggedUser
      })
    })).subscribe(res => {
      this.loggedFirstname = res[0].payload.child('firstname').val();
      this.loggedLastname = res[0].payload.child('lastname').val();
      this.loggedPhoto = res[0].payload.child('photo').val();


    })
    this.getMessages();
    this.chatData = this.groupsService.getClickedGroupData();
    this.name = this.chatData.name;
    this.photo = this.chatData.photo;
    this.idGroupChat = this.chatData.idChat;
    this.groupComponents = this.chatData.idsGroup;
  }

  ngOnInit() {
  }



  swipeUp() {
    this.limit = this.limit + 10;
    this.getMessages();
  }
  getMessages() {
    this.groupsService.getOptionsGroupChat(this.idLoggedUser, this.idGroupChat).subscribe((res: any) => {
      // this.zzzNewMessNumbTot= res[21];
      // console.log('msg:'+this.zzzNewMessNumbTot);
      const empty = res[2];
      const leave = res[14];
      const leaveDate = res[16];
      if (!empty) {
        this.groupsService.getMsgGroup(this.idGroupChat).subscribe((messages: any) => {
          this.messages = messages;
          this.leng = this.messages.length;
          this.messages = this.messages.sort((a, b) => a.createdAt - b.createdAt);
          if (this.limit <= (this.leng / 2)) {
            this.messages = this.messages.slice(this.messages.length - this.limit, this.messages.length);
          }
        })
      } else {
        this.groupsService.getMsgGroup(this.idGroupChat).subscribe((messages: any) => {
          this.messages = messages;
          this.messages = this.messages.sort((a, b) => a.createdAt - b.createdAt);
          this.messages = this.messages.filter(msg => {
            return msg.createdAt > empty;
          })
          this.leng = this.messages.length;
          if (this.limit <= (this.leng / 2)) {
            this.messages = this.messages.slice(this.messages.length - this.limit, this.messages.length);
          }
        })
      }
      if (!leave) {
        this.groupsService.getMsgGroup(this.idGroupChat).subscribe((messages: any) => {
          this.messages = messages;
          this.messages = this.messages.sort((a, b) => a.createdAt - b.createdAt);
        })
      } else {
        this.groupsService.getMsgGroup(this.idGroupChat).subscribe((messages: any) => {
          this.messages = messages;
          this.messages = this.messages.sort((a, b) => a.createdAt - b.createdAt);
          this.messages = this.messages.filter(msg => {
            return msg.createdAt < leaveDate;
          })
        })
      }
    });



  }

  sendTextMessage() {

    let data = new Date;
    let minutes = data.getMinutes();
    let zero = false;
    if (minutes < 10) {
      zero = true;
    }
    let date = data.getHours() + ':' + (zero ? '0' : '') + minutes;
    this.groupsService.sendMessage(this.idGroupChat).push({
      firstname: this.loggedFirstname,
      lastname: this.loggedLastname,
      photoUser: this.loggedPhoto,
      audio: '',
      photo: '',
      date: date,
      uid: this.idLoggedUser,
      createdAt: Date.now(),
      text: this.form.value.message,
      zLeave: false,
      zzCitation: this.citation,
      zzCitName: this.citationName,
      zzMit: this.loggedFirstname,
      zzPhotoCit: this.urlPhotoCit
    });

    for (let i = 0; i < this.groupComponents.length; i++) {
      // this.groupsService.getOptionsGroupChat(this.groupComponents[i], this.idGroupChat).subscribe((res: any) => {
      this.groupsService.getMsgGroup(this.idGroupChat).subscribe(msg => {
        this.zzzNewMessNumbTot = msg.length;

        if (this.groupComponents[i] !== this.idLoggedUser) {
          this.groupsService.newMessages(this.groupComponents[i], this.idGroupChat).update({
            zNewMess: true,
            zzPrev: this.form.value.message,
            zzzNewMessDate: date,
            zzzMitt: this.loggedFirstname,
            zzzNewMessNumbTot: this.zzzNewMessNumbTot,
            zzzzLastMess: Date.now()

          });
        } else {
          this.groupsService.newMessages(this.groupComponents[i], this.idGroupChat).update({
            zNewMess: true,
            zzPrev: this.form.value.message,
            zzzNewMessDate: date,
            zzzMitt: "Tu",
            zzzNewMessNumbTot: this.zzzNewMessNumbTot,
            zzzzLastMess: Date.now()
          });
        }
      })
    }
    document.getElementById('valText').setAttribute('value', '');
    setTimeout(() => { this.content.scrollToBottom(); }, 100);
    this.citation = '';
    this.urlPhotoCit = '';
  }

  addPhotoMessage() {

    // if (this.blockByFriend && this.block) {
    //   this.name = 'entrambi';
    // } else if (this.blockByFriend && !this.block) {
    //   this.name = this.friendData.friendFirstname;
    // } else {
    //   this.name = 'te';
    // }

    // if (this.blockByFriend || this.block) {
    //   this.alert(this.name);
    //   document.getElementById('valText').setAttribute('value', '');

    // } else {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      saveToPhotoAlbum: true //true in prod,
    }
    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.sendPhotoMessage(base64Image);

    }, (err) => {
      alert(err)
    });
  }

  async sendPhotoMessage(image) {
    const fileName = Date.now();
    let data = new Date;
    let minutes = data.getMinutes();
    let zero = false;
    if (minutes < 10) { zero = true; }
    let date = data.getHours() + ':' + (zero ? '0' : '') + minutes;
    this.task = this.groupsService.upLoadPhotoChat(this.idGroupChat, fileName).putString(image, 'data_url');
    this.task.then(() => {
      this.groupsService.upLoadPhotoChat(this.idGroupChat, fileName).getDownloadURL().then(url => {
        this.urlPhoto = url;
        setTimeout(() => { this.content.scrollToBottom(); }, 100);
        this.usersService.getLogUserData(this.idLoggedUser).subscribe(res => {
          this.groupsService.sendMessage(this.idGroupChat).push({
            firstname: this.loggedFirstname,
            lastname: this.loggedLastname,
            photoUser: this.loggedPhoto,
            audio: '',
            photo: this.urlPhoto,
            date: date,
            uid: this.idLoggedUser,
            createdAt: Date.now(),
            text: '',
            zLeave: false,
            zzCitation: this.citation,
            zzCitName: this.citationName,
            zzMit: this.loggedFirstname,
            zzPhotoCit: this.urlPhotoCit
          });
        })
      })
    })
    document.getElementById('valText').setAttribute('value', '');
    for (let i = 0; i < this.groupComponents.length; i++) {
      if (this.groupComponents[i] !== this.idLoggedUser) {
        this.groupsService.newMessages(this.groupComponents[i], this.idGroupChat).update({
          zNewMess: true,
          zzPrev: 'photoIcon',
          zzzNewMessDate: date,
          zzzMitt: this.loggedFirstname,
          zzzzLastMess: Date.now()


        });
      } else {
        this.groupsService.newMessages(this.groupComponents[i], this.idGroupChat).update({
          zNewMess: true,
          zzPrev: 'photoIcon',
          zzzNewMessDate: date,
          zzzMitt: "Tu",
          zzzzLastMess: Date.now()

        });
      }
    }
    this.citation = '';
    this.urlPhotoCit = '';
  }

  addAudioMessage() {
  }



  openPhoto(url) {
    this.presentPhotoModal(url)
  }
  async presentPhotoModal(url) {
    const modal = await this.modalCtrl.create({
      component: PhotoModalPage,
      componentProps: { url: url }
    });
    return await modal.present();
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

  isWriting(ev) {

    if (ev) {
      this.groupsService.setWhoIsWritingInChat(this.idGroupChat).update({
        isWrit: true,
        writer: this.loggedFirstname
      })
      for (let i = 0; i < this.groupComponents.length; i++) {
        this.groupsService.isWriting(this.groupComponents[i], this.idGroupChat).update({
          zzzzzIsWriting: true,
          zzzzzWhoIsWriting: this.loggedFirstname
        })
      }
    }
    setTimeout(() => {
      this.groupsService.setWhoIsWritingInChat(this.idGroupChat).update({
        isWrit: false,
        writer: ''
      });
      for (let i = 0; i < this.groupComponents.length; i++) {
        this.groupsService.isWriting(this.groupComponents[i], this.idGroupChat).update({
          zzzzzIsWriting: false,
          zzzzzWhoIsWriting: ''
        })
      }
    }, 2000);

  }






  backToChat() {
    this.groupsService.getOptionsGroupChat(this.idLoggedUser, this.idGroupChat).subscribe((res: any) => {
      this.zzzNewMessNumbTot = res[21];

      this.chatData = {
        idChat: '',
        name: '',
        photo: '',
        idsGroup: []
      };
      this.messages = [];
      this.x = 0;
      this.groupsService.newMessages(this.idLoggedUser, this.idGroupChat).update({
        zNewMess: false,
        zzzNewMessNumb: this.zzzNewMessNumbTot
      })
    })
    this.router.navigateByUrl('home/gruppi');

  }


}
