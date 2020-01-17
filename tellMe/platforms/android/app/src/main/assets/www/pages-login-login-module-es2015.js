(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content *ngIf=\"email == ''\" class=\"cont-login\">\n  <form [formGroup]=\"form\" (ngSubmit)=\"login()\">\n    <ion-item text-center class=\"cont-login--item\">\n      <ion-title class=\"cont-login--title\">TellMe</ion-title>\n    </ion-item>\n\n    <div class=\"cont-input\">\n      <ion-item text-center class=\"cont-input--item\">\n        <ion-label class=\"cont-input--label\" position=\"floating\">Email</ion-label>\n        <ion-input formControlName=\"email\"></ion-input>\n      </ion-item>\n      <ion-item text-center class=\"cont-input--item\">\n        <ion-label class=\"cont-input--label\" position=\"floating\">Password</ion-label>\n        <ion-input formControlName=\"password\"></ion-input>\n      </ion-item>\n    </div>\n\n    <div class=\"cont-btn\">\n      <ion-button expand=\"full\" fill=\"clear\" class=\"cont-btn--btn\" id=\"login\" type=\"submit\"> LOGIN</ion-button>\n      <ion-button expand=\"full\" fill=\"clear\" class=\"cont-btn--btn\" id=\"registr\" [routerLink]=\"[ '/registration']\">\n        Registrati\n      </ion-button>\n    </div>\n\n\n  </form>\n\n</ion-content>\n\n<!-- se login non necessario -->\n\n<ion-content *ngIf=\"email !== ''\">\n  <ion-grid>\n    <ion-col size=\"12\">\n      <ion-title *ngIf=\"caricamentoTit\" class=\"titolo\">Benvenuto su TellMe</ion-title>\n      <ion-title *ngIf=\"caricamentoAtt\" class=\"titolo2\">Attendi\n        <span id=\"span-puntino1\">.</span>\n        <span id=\"span-puntino2\">.</span>\n        <span id=\"span-puntino3\">.</span>\n      </ion-title>\n    </ion-col>\n    <ion-col size=\"4\" offset=\"4\">\n      <div class=\"contenitore-rotella\" *ngIf=\"caricamentoRot\">\n        <img id=\"immagine1\" src=\"https://image.flaticon.com/icons/png/512/34/34448.png\" alt=\"\">\n        <img id=\"immagine2\" src=\"https://image.flaticon.com/icons/png/512/34/34448.png\" alt=\"\">\n        <!-- <img id=\"immagine3\" src=\"https://image.flaticon.com/icons/png/512/34/34448.png\" alt=\"\"> -->\n      </div>\n    </ion-col>\n  </ion-grid>\n  <div *ngIf=\"caricamentoAer\" class=\"cont-aereo\">\n    <img id=\"aereo\" src=\"https://img.icons8.com/wired/452/paper-plane.png\" alt=\"\">\n  </div>\n</ion-content>\n\n\n\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-text class=\"footer-p\">All rights reserved - © Copyright {{year}}</ion-text>\n    <ion-text class=\"footer-name\">Davide Cardia</ion-text>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cont-login {\n  --background: #000000;\n}\n.cont-login--title {\n  font-size: 24px;\n  letter-spacing: 10px;\n  color: #000000;\n  font-weight: bold;\n}\n.cont-login--item {\n  font-size: 18px;\n  color: #fff;\n  --background: transparent;\n}\n.cont-login--item:first-of-type {\n  --border-color: transparent;\n  --background: #ffffff;\n}\n.cont-input {\n  margin-top: 25%;\n}\n.cont-input--item {\n  font-size: 18px;\n  color: #fff;\n  --background: transparent;\n}\n.cont-input--label {\n  color: rgba(255, 255, 255, 0.6);\n}\nlabel:focus {\n  color: red;\n}\n.cont-btn {\n  margin-top: 40%;\n}\n.cont-btn--btn {\n  text-align: center !important;\n}\n.cont-btn #login {\n  letter-spacing: 8px;\n  color: #fff;\n  margin-bottom: 40px;\n  font-size: 30px;\n}\n.cont-btn #registr {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.6);\n  letter-spacing: 4px;\n}\nion-toolbar {\n  height: 40px;\n  --padding: 0;\n  --background: #000000;\n}\n.footer-p {\n  padding-left: 5px;\n  text-align: left;\n  font-size: 12px;\n}\n.footer-name {\n  position: absolute;\n  right: 5px;\n  font-size: 12px;\n  padding-right: 5px;\n  font-weight: bold;\n}\n.titolo {\n  margin-top: 40px;\n  text-align: center;\n  font-size: 24px;\n  letter-spacing: 2px;\n  font-weight: bold;\n  -webkit-animation: title 0.6s linear 0.2s;\n          animation: title 0.6s linear 0.2s;\n}\n@-webkit-keyframes title {\n  0% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n    color: #ffffff;\n  }\n  90% {\n    -webkit-transform: translateX(101%);\n            transform: translateX(101%);\n    color: #000000;\n    font-size: 28px;\n  }\n  100% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n    color: #000000;\n    font-size: 24px;\n  }\n}\n@keyframes title {\n  0% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n    color: #ffffff;\n  }\n  90% {\n    -webkit-transform: translateX(101%);\n            transform: translateX(101%);\n    color: #000000;\n    font-size: 28px;\n  }\n  100% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n    color: #000000;\n    font-size: 24px;\n  }\n}\n.titolo2 {\n  margin-top: 20px;\n  text-align: center;\n  letter-spacing: 4px;\n  font-weight: bold;\n}\n.contenitore-rotella {\n  margin-top: 30px;\n  padding-left: 40px;\n  padding-right: 40px;\n  padding-top: 10px;\n}\n#immagine1 {\n  width: 60%;\n  height: auto;\n  z-index: 1;\n  -webkit-animation: rotazione1 8s infinite linear;\n          animation: rotazione1 8s infinite linear;\n}\n#immagine2 {\n  width: 30%;\n  height: auto;\n  -webkit-animation: rotazione2 4s infinite linear;\n          animation: rotazione2 4s infinite linear;\n}\n@-webkit-keyframes rotazione1 {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg);\n  }\n}\n@keyframes rotazione1 {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg);\n  }\n}\n@-webkit-keyframes rotazione2 {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes rotazione2 {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n#span-puntino1 {\n  font-size: 24px;\n  font-weight: bold;\n  -webkit-animation: puntini 1s infinite linear 0.5s;\n          animation: puntini 1s infinite linear 0.5s;\n}\n#span-puntino2 {\n  font-size: 24px;\n  font-weight: bold;\n  -webkit-animation: puntini 1s infinite linear 0.75s;\n          animation: puntini 1s infinite linear 0.75s;\n}\n#span-puntino3 {\n  font-size: 24px;\n  font-weight: bold;\n  -webkit-animation: puntini 1s infinite linear 1s;\n          animation: puntini 1s infinite linear 1s;\n}\n@-webkit-keyframes puntini {\n  0% {\n    color: #000000;\n  }\n  100% {\n    color: #ffffff;\n  }\n}\n@keyframes puntini {\n  0% {\n    color: #000000;\n  }\n  100% {\n    color: #ffffff;\n  }\n}\n.cont-aereo {\n  width: 100%;\n  height: 150px;\n}\n#aereo {\n  z-index: 10;\n  left: 0px;\n  bottom: 3px;\n  width: 10%;\n  height: auto;\n  -webkit-animation: aereo 1s linear infinite;\n          animation: aereo 1s linear infinite;\n}\n@-webkit-keyframes aereo {\n  0% {\n    -webkit-transform: translateX(-150px) translateY(120px) rotate(70deg);\n            transform: translateX(-150px) translateY(120px) rotate(70deg);\n  }\n  30% {\n    -webkit-transform: translateX(100px) translateY(50px) rotate(30deg);\n            transform: translateX(100px) translateY(50px) rotate(30deg);\n  }\n  50% {\n    -webkit-transform: translateX(150px) translateY(0px) rotate(0deg);\n            transform: translateX(150px) translateY(0px) rotate(0deg);\n  }\n  50% {\n    -webkit-transform: translateX(150px) translateY(10px) rotate(-90deg);\n            transform: translateX(150px) translateY(10px) rotate(-90deg);\n  }\n  70% {\n    -webkit-transform: translateX(180px) translateY(60px) rotate(-180deg);\n            transform: translateX(180px) translateY(60px) rotate(-180deg);\n  }\n  80% {\n    -webkit-transform: translateX(200px) translateY(90px) rotate(-250deg);\n            transform: translateX(200px) translateY(90px) rotate(-250deg);\n  }\n  100% {\n    -webkit-transform: translateX(500px) translateY(140px) rotate(-360deg);\n            transform: translateX(500px) translateY(140px) rotate(-360deg);\n  }\n}\n@keyframes aereo {\n  0% {\n    -webkit-transform: translateX(-150px) translateY(120px) rotate(70deg);\n            transform: translateX(-150px) translateY(120px) rotate(70deg);\n  }\n  30% {\n    -webkit-transform: translateX(100px) translateY(50px) rotate(30deg);\n            transform: translateX(100px) translateY(50px) rotate(30deg);\n  }\n  50% {\n    -webkit-transform: translateX(150px) translateY(0px) rotate(0deg);\n            transform: translateX(150px) translateY(0px) rotate(0deg);\n  }\n  50% {\n    -webkit-transform: translateX(150px) translateY(10px) rotate(-90deg);\n            transform: translateX(150px) translateY(10px) rotate(-90deg);\n  }\n  70% {\n    -webkit-transform: translateX(180px) translateY(60px) rotate(-180deg);\n            transform: translateX(180px) translateY(60px) rotate(-180deg);\n  }\n  80% {\n    -webkit-transform: translateX(200px) translateY(90px) rotate(-250deg);\n            transform: translateX(200px) translateY(90px) rotate(-250deg);\n  }\n  100% {\n    -webkit-transform: translateX(500px) translateY(140px) rotate(-360deg);\n            transform: translateX(500px) translateY(140px) rotate(-360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhdmlkZS9TY3JpdmFuaWEvbnVvdmlQcm9nZXR0aS90ZWxsbWUvdGVsbE1lL3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKO0FEQ0k7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNDUjtBREdJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0RSO0FESUk7RUFDSSwyQkFBQTtFQUNBLHFCQUFBO0FDRlI7QURPQTtFQUNJLGVBQUE7QUNKSjtBRE1JO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0pSO0FET0k7RUFDSSwrQkFBQTtBQ0xSO0FEVUE7RUFDSSxVQUFBO0FDUEo7QURVQTtFQUNJLGVBQUE7QUNQSjtBRFNJO0VBQ0ksNkJBQUE7QUNQUjtBRFVJO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDUlI7QURXSTtFQUNJLGVBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0FDVFI7QURjQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBRUEscUJBQUE7QUNaSjtBRGVBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNaSjtBRGVBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNaSjtBRGdCQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlDQUFBO1VBQUEsaUNBQUE7QUNiSjtBRGdCQTtFQUNJO0lBQ0ksb0NBQUE7WUFBQSw0QkFBQTtJQUNBLGNBQUE7RUNiTjtFRGdCRTtJQUNJLG1DQUFBO1lBQUEsMkJBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFQ2ROO0VEa0JFO0lBQ0ksbUNBQUE7WUFBQSwyQkFBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0VDaEJOO0FBQ0Y7QUREQTtFQUNJO0lBQ0ksb0NBQUE7WUFBQSw0QkFBQTtJQUNBLGNBQUE7RUNiTjtFRGdCRTtJQUNJLG1DQUFBO1lBQUEsMkJBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFQ2ROO0VEa0JFO0lBQ0ksbUNBQUE7WUFBQSwyQkFBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0VDaEJOO0FBQ0Y7QURxQkE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ25CSjtBRHNCQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDbkJKO0FENEJBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFFQSxVQUFBO0VBQ0EsZ0RBQUE7VUFBQSx3Q0FBQTtBQzFCSjtBRDhCQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0RBQUE7VUFBQSx3Q0FBQTtBQzNCSjtBRHdDQTtFQUNJO0lBQ0ksK0JBQUE7WUFBQSx1QkFBQTtFQ3JDTjtFRHdDRTtJQUNJLGtDQUFBO1lBQUEsMEJBQUE7RUN0Q047QUFDRjtBRCtCQTtFQUNJO0lBQ0ksK0JBQUE7WUFBQSx1QkFBQTtFQ3JDTjtFRHdDRTtJQUNJLGtDQUFBO1lBQUEsMEJBQUE7RUN0Q047QUFDRjtBRDBDQTtFQUNJO0lBQ0ksK0JBQUE7WUFBQSx1QkFBQTtFQ3hDTjtFRDJDRTtJQUNJLGlDQUFBO1lBQUEseUJBQUE7RUN6Q047QUFDRjtBRGtDQTtFQUNJO0lBQ0ksK0JBQUE7WUFBQSx1QkFBQTtFQ3hDTjtFRDJDRTtJQUNJLGlDQUFBO1lBQUEseUJBQUE7RUN6Q047QUFDRjtBRDZDQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtEQUFBO1VBQUEsMENBQUE7QUMzQ0o7QUQ4Q0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtREFBQTtVQUFBLDJDQUFBO0FDM0NKO0FEOENBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0RBQUE7VUFBQSx3Q0FBQTtBQzNDSjtBRCtDQTtFQUNJO0lBQ0ksY0FBQTtFQzVDTjtFRCtDRTtJQUNJLGNBQUE7RUM3Q047QUFDRjtBRHNDQTtFQUNJO0lBQ0ksY0FBQTtFQzVDTjtFRCtDRTtJQUNJLGNBQUE7RUM3Q047QUFDRjtBRGdEQTtFQUdJLFdBQUE7RUFDQSxhQUFBO0FDaERKO0FEbURBO0VBQ0ksV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0FDaERKO0FEbURBO0VBQ0k7SUFDSSxxRUFBQTtZQUFBLDZEQUFBO0VDaEROO0VEbURFO0lBQ0ksbUVBQUE7WUFBQSwyREFBQTtFQ2pETjtFRG9ERTtJQUNJLGlFQUFBO1lBQUEseURBQUE7RUNsRE47RURxREU7SUFDSSxvRUFBQTtZQUFBLDREQUFBO0VDbkROO0VEc0RFO0lBQ0kscUVBQUE7WUFBQSw2REFBQTtFQ3BETjtFRHVERTtJQUNJLHFFQUFBO1lBQUEsNkRBQUE7RUNyRE47RUR3REU7SUFDSSxzRUFBQTtZQUFBLDhEQUFBO0VDdEROO0FBQ0Y7QUQyQkE7RUFDSTtJQUNJLHFFQUFBO1lBQUEsNkRBQUE7RUNoRE47RURtREU7SUFDSSxtRUFBQTtZQUFBLDJEQUFBO0VDakROO0VEb0RFO0lBQ0ksaUVBQUE7WUFBQSx5REFBQTtFQ2xETjtFRHFERTtJQUNJLG9FQUFBO1lBQUEsNERBQUE7RUNuRE47RURzREU7SUFDSSxxRUFBQTtZQUFBLDZEQUFBO0VDcEROO0VEdURFO0lBQ0kscUVBQUE7WUFBQSw2REFBQTtFQ3JETjtFRHdERTtJQUNJLHNFQUFBO1lBQUEsOERBQUE7RUN0RE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250LWxvZ2luIHtcbiAgICAtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG5cbiAgICAmLS10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgIH1cblxuICAgICYtLWl0ZW0ge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgICYtLWl0ZW06Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIH1cblxufVxuXG4uY29udC1pbnB1dCB7XG4gICAgbWFyZ2luLXRvcDogMjUlO1xuXG4gICAgJi0taXRlbSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgJi0tbGFiZWwge1xuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNik7XG4gICAgfVxuXG59XG5cbmxhYmVsOmZvY3VzIHtcbiAgICBjb2xvcjogcmVkO1xufVxuXG4uY29udC1idG4ge1xuICAgIG1hcmdpbi10b3A6IDQwJTtcblxuICAgICYtLWJ0biB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgICNsb2dpbiB7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiA4cHg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuXG4gICAgI3JlZ2lzdHIge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC42KTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcblxuICAgIH1cbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIGhlaWdodDogNDBweDtcbiAgICAtLXBhZGRpbmc6IDA7XG5cbiAgICAtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG59XG5cbi5mb290ZXItcCB7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5mb290ZXItbmFtZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuXG4udGl0b2xvIHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBhbmltYXRpb246IHRpdGxlIC42cyBsaW5lYXIgLjJzO1xufVxuXG5Aa2V5ZnJhbWVzIHRpdGxlIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIH1cblxuICAgIDkwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDElKTtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcblxuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG5cbiAgICB9XG59XG5cblxuLnRpdG9sbzIge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jb250ZW5pdG9yZS1yb3RlbGxhIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG5cbi8vIC5jb250ZW5pdG9yZS1yb3RlbGxhIGltZyB7XG4vLyAgICAgei1pbmRleDogMTtcbi8vICAgICBhbmltYXRpb246IHJvdGF6aW9uZSA2cyBpbmZpbml0ZSBsaW5lYXI7XG4vLyB9XG5cbiNpbW1hZ2luZTEge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuXG4gICAgei1pbmRleDogMTtcbiAgICBhbmltYXRpb246IHJvdGF6aW9uZTEgOHMgaW5maW5pdGUgbGluZWFyO1xuXG59XG5cbiNpbW1hZ2luZTIge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGFuaW1hdGlvbjogcm90YXppb25lMiA0cyBpbmZpbml0ZSBsaW5lYXI7XG59XG5cbi8vICNpbW1hZ2luZTN7XG4vLyAgICAgd2lkdGg6NDAlO1xuLy8gICAgIGhlaWdodDogYXV0bztcbi8vICAgICBhbmltYXRpb246IHJvdGF6aW9uZSA0cyBpbmZpbml0ZSBsaW5lYXI7XG5cbi8vIH1cblxuXG5cblxuQGtleWZyYW1lcyByb3RhemlvbmUxIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcbiAgICB9XG59XG5cblxuQGtleWZyYW1lcyByb3RhemlvbmUyIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbn1cblxuXG4jc3Bhbi1wdW50aW5vMSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGFuaW1hdGlvbjogcHVudGluaSAxcyBpbmZpbml0ZSBsaW5lYXIgLjVzO1xufVxuXG4jc3Bhbi1wdW50aW5vMiB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGFuaW1hdGlvbjogcHVudGluaSAxcyBpbmZpbml0ZSBsaW5lYXIgLjc1cztcbn1cblxuI3NwYW4tcHVudGlubzMge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBhbmltYXRpb246IHB1bnRpbmkgMXMgaW5maW5pdGUgbGluZWFyIDFzO1xufVxuXG5cbkBrZXlmcmFtZXMgcHVudGluaSB7XG4gICAgMCUge1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgfVxufVxuXG4uY29udC1hZXJlbyB7XG4gICAgLy8gcG9zaXRpb246YWJzb2x1dGU7XG4gICAgLy8gYm90dG9tOjMwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxNTBweDtcbn1cblxuI2FlcmVvIHtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgYm90dG9tOiAzcHg7XG4gICAgd2lkdGg6IDEwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYW5pbWF0aW9uOiBhZXJlbyAxcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgYWVyZW8ge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNTBweCkgdHJhbnNsYXRlWSgxMjBweCkgcm90YXRlKDcwZGVnKVxuICAgIH1cblxuICAgIDMwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDBweCkgdHJhbnNsYXRlWSg1MHB4KSByb3RhdGUoMzBkZWcpO1xuICAgIH1cblxuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNTBweCkgdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgwZGVnKTtcbiAgICB9XG5cbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTUwcHgpIHRyYW5zbGF0ZVkoMTBweCkgcm90YXRlKC05MGRlZyk7XG4gICAgfVxuXG4gICAgNzAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE4MHB4KSB0cmFuc2xhdGVZKDYwcHgpIHJvdGF0ZSgtMTgwZGVnKTtcbiAgICB9XG5cbiAgICA4MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwcHgpIHRyYW5zbGF0ZVkoOTBweCkgcm90YXRlKC0yNTBkZWcpO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAwcHgpIHRyYW5zbGF0ZVkoMTQwcHgpIHJvdGF0ZSgtMzYwZGVnKTtcbiAgICB9XG5cblxufSIsIi5jb250LWxvZ2luIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xufVxuLmNvbnQtbG9naW4tLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMTBweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnQtbG9naW4tLWl0ZW0ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjZmZmO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmNvbnQtbG9naW4tLWl0ZW06Zmlyc3Qtb2YtdHlwZSB7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG4uY29udC1pbnB1dCB7XG4gIG1hcmdpbi10b3A6IDI1JTtcbn1cbi5jb250LWlucHV0LS1pdGVtIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5jb250LWlucHV0LS1sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG59XG5cbmxhYmVsOmZvY3VzIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmNvbnQtYnRuIHtcbiAgbWFyZ2luLXRvcDogNDAlO1xufVxuLmNvbnQtYnRuLS1idG4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbi5jb250LWJ0biAjbG9naW4ge1xuICBsZXR0ZXItc3BhY2luZzogOHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLmNvbnQtYnRuICNyZWdpc3RyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICBsZXR0ZXItc3BhY2luZzogNHB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIGhlaWdodDogNDBweDtcbiAgLS1wYWRkaW5nOiAwO1xuICAtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG59XG5cbi5mb290ZXItcCB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5mb290ZXItbmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGl0b2xvIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBhbmltYXRpb246IHRpdGxlIDAuNnMgbGluZWFyIDAuMnM7XG59XG5cbkBrZXlmcmFtZXMgdGl0bGUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuICA5MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDElKTtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxufVxuLnRpdG9sbzIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29udGVuaXRvcmUtcm90ZWxsYSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbiNpbW1hZ2luZTEge1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHotaW5kZXg6IDE7XG4gIGFuaW1hdGlvbjogcm90YXppb25lMSA4cyBpbmZpbml0ZSBsaW5lYXI7XG59XG5cbiNpbW1hZ2luZTIge1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGFuaW1hdGlvbjogcm90YXppb25lMiA0cyBpbmZpbml0ZSBsaW5lYXI7XG59XG5cbkBrZXlmcmFtZXMgcm90YXppb25lMSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyByb3RhemlvbmUyIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbiNzcGFuLXB1bnRpbm8xIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYW5pbWF0aW9uOiBwdW50aW5pIDFzIGluZmluaXRlIGxpbmVhciAwLjVzO1xufVxuXG4jc3Bhbi1wdW50aW5vMiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGFuaW1hdGlvbjogcHVudGluaSAxcyBpbmZpbml0ZSBsaW5lYXIgMC43NXM7XG59XG5cbiNzcGFuLXB1bnRpbm8zIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYW5pbWF0aW9uOiBwdW50aW5pIDFzIGluZmluaXRlIGxpbmVhciAxcztcbn1cblxuQGtleWZyYW1lcyBwdW50aW5pIHtcbiAgMCUge1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICB9XG4gIDEwMCUge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG59XG4uY29udC1hZXJlbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuXG4jYWVyZW8ge1xuICB6LWluZGV4OiAxMDtcbiAgbGVmdDogMHB4O1xuICBib3R0b206IDNweDtcbiAgd2lkdGg6IDEwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBhbmltYXRpb246IGFlcmVvIDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBhZXJlbyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1MHB4KSB0cmFuc2xhdGVZKDEyMHB4KSByb3RhdGUoNzBkZWcpO1xuICB9XG4gIDMwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMHB4KSB0cmFuc2xhdGVZKDUwcHgpIHJvdGF0ZSgzMGRlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTUwcHgpIHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoMGRlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTUwcHgpIHRyYW5zbGF0ZVkoMTBweCkgcm90YXRlKC05MGRlZyk7XG4gIH1cbiAgNzAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTgwcHgpIHRyYW5zbGF0ZVkoNjBweCkgcm90YXRlKC0xODBkZWcpO1xuICB9XG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMHB4KSB0cmFuc2xhdGVZKDkwcHgpIHJvdGF0ZSgtMjUwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAwcHgpIHRyYW5zbGF0ZVkoMTQwcHgpIHJvdGF0ZSgtMzYwZGVnKTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let LoginPage = class LoginPage {
    constructor(authService, usersService, formBuilder, router) {
        this.authService = authService;
        this.usersService = usersService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.today = new Date();
        this.email = '';
        this.caricamentoRot = false;
        this.caricamentoAtt = false;
        this.caricamentoTit = false;
        this.caricamentoAer = false;
        if (localStorage.getItem('email')) {
            this.email = localStorage.getItem('email');
            this.authService.login(localStorage.getItem('email'), localStorage.getItem('password'));
        }
        ;
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
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]))
        });
    }
    ngOnInit() {
    }
    login() {
        if (this.form.valid) {
            this.authService.login(this.form.value.email, this.form.value.password);
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        src_app_services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map