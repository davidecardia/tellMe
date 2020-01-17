import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './services/auth.service';
import { StatusesService } from './services/statuses.service';
import { NetworkService } from './services/network.service';
import { Component } from '@angular/core';

import { Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Network } from '@ionic-native/network/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private network: Network,
    private networkService: NetworkService,
    private toastCtrl: ToastController,
    private afAuth: AngularFireAuth,
    private authService: AuthService
  ) {
    this.initializeApp()
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.networkService.getNetworkStatus();
      this.network.onDisconnect().subscribe((res) => {
        this.connToast('Sei disconnesso!', 'dangerToastLog', '');
      });

      this.network.onConnect().subscribe((res) => {
        let type = this.network.type;
        type = type.charAt(0).toUpperCase() + type.slice(1);
        this.connToast('Sei connesso! ', 'confirmToastLog', type);
      });
      this.platform.pause.subscribe(e => {


        this.afAuth.authState.subscribe(auth => {

          let data = new Date();
          let minutes = data.getMinutes();
          let zero = false;
          if (minutes < 10) {
            zero = true;
          }
          let date = data.getHours() + ':' + (zero ? '0' : '') + minutes;
          if (auth) {
            if (!localStorage.getItem('lastAccessVisibility')) {
              this.authService.onlineUsers(auth.uid).update({
                online: false,
                date: date
              })
            } else {
              this.authService.onlineUsers(auth.uid).update({
                online: false,
                date: ""
              })
            }


          }
        })
      });

      this.platform.resume.subscribe(e => {
        this.afAuth.authState.subscribe(auth => {
          if (auth) {
            if (!localStorage.getItem('statusOnline')) {
              this.authService.onlineUsers(auth.uid).update({
                online: true,
                date: ""
              })
            } else {
              this.authService.onlineUsers(auth.uid).update({
                online: false,
                date: ""
              })
            }


          }
        })
      });




    }).catch(err => {
      console.log(err);
    })

  }
  async connToast(str, str2, str3) {
    const toast = await this.toastCtrl.create({
      message: str + str3,
      duration: 1000,
      cssClass: str2
    });
    toast.present();
  }

}
