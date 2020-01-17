import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private afAuth: AngularFireAuth) {
  }


  canActivate(): Observable<boolean> {
    return this.afAuth.authState.pipe(map(auth => {
      if (auth) {
        return true;
      } else {
        this.router.navigateByUrl('login');
        return false;
      }
    }));
  }
}
