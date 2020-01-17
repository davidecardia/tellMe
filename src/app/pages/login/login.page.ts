import { NetworkService } from './../../services/network.service';
import { AlertController, ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  private form: FormGroup;
  today = new Date();
  year: any;
  id;

  email: string = '';

  logFlag: boolean = false;

  caricamentoRot: boolean = false;
  caricamentoAtt: boolean = false;
  caricamentoTit: boolean = false;
  caricamentoAer: boolean = false;

  disconnect: boolean = false;
  connect: boolean = false;
  conn: any;
  connType;
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private formBuilder: FormBuilder,
    private router: Router,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private networkService: NetworkService,
    private network: Network,

  ) {

    this.authService.logFlag.subscribe(log => {
      this.logFlag = log;
    });

    setTimeout(() => {
      this.caricamentoTit = true;
    }, 10);
    setTimeout(() => {
      this.caricamentoRot = true;
    }, 100);
    // setTimeout(() => {
    //   this.caricamentoAtt = true;
    // }, 2000);
    setTimeout(() => {
      this.caricamentoAer = true;
    }, 100);

    var today = new Date();
    this.year = today.getFullYear();

    this.form = this.formBuilder.group({
      password: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email]))
    });
  }


  login() {

    if (this.form.valid) {
      this.authService.login(this.form.value.email, this.form.value.password);
    } else {
      this.presentAlert();
    }



  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Attenzione',
      message: 'Credenziali errate!',
      buttons: ['OK']
    });

    await alert.present();
  }

  async networkAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Attenzione',
      message: 'Connessione assente. Connettiti per accedere!',
      buttons: ['OK']
    });

    await alert.present();
  }


}
