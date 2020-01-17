// import { Injectable, Injector } from '@angular/core';
// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
// import { Observable } from "rxjs";
// import { FcmService } from "../services/fcm.service";

// @Injectable({
//   providedIn: 'root'
// })
// export class NotificationInterceptorService implements HttpInterceptor {

//   constructor(private injector: Injector, private fcmService: FcmService) { }
//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     this.injector.get('');
//     // let localToken= localStorage.getItem('token');
//     // let sessionToken = sessionStorage.getItem('token');

//     /* console.log("getTok: " + this.authService.getToken());
//        console.log(localToken);
//        console.log(sessionToken);*/



//     // if (localToken) {
//     request = request.clone({
//       setHeaders: {
//         // contentType: 'application/json',
//         // Authorization: 'AAAABeetzDU:APA91bGR_JMpXMAp74YAWhDgPU9UICuJ590I2fs2ndBlk2RV-PxJ54KXrGUN8X4AWJaTxbBR7_f5q6vyM9apAq-IQjzXCnYFU_qfXA2Mw8SN9BR_ncxMV5CiBXUw1iYfbei2fT6gIaEq'
//       }
//     });
//     return next.handle(request);
//     // } else if (sessionToken) {
//     //   request = request.clone({
//     //     setHeaders: {
//     //       Authorization: this.authService.getToken()
//     //     }
//     //   });
//     //   return next.handle(request);
//     // } else {
//     //   request = request.clone()
//     //   return next.handle(request);
//     // }

//   }

// }
