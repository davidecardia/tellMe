import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {


  caricamentoRot: boolean = false;
  caricamentoAtt: boolean = false;
  caricamentoTit: boolean = false;
  caricamentoAer: boolean = false;

  constructor(private router: Router, private authService: AuthService) {
   
    setTimeout(() => {
      this.caricamentoTit = true;
    }, 200);
    setTimeout(() => {
      this.caricamentoRot = true;
    }, 2500);
    setTimeout(() => {
      this.caricamentoAtt = true;
    }, 2000);
    setTimeout(() => {
      this.caricamentoAer = true;
    }, 2500);





  }
  ngOnInit() {
  }

}
