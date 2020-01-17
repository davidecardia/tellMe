(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-landing-landing-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/landing/landing.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/landing/landing.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content>\n    <ion-grid>\n      <ion-col size=\"12\">\n        <ion-title *ngIf=\"caricamentoTit\" class=\"titolo\">Benvenuto su TellMe</ion-title>\n        <ion-title *ngIf=\"caricamentoAtt\" class=\"titolo2\">Attendi\n          <span id=\"span-puntino1\">.</span>\n          <span id=\"span-puntino2\">.</span>\n          <span id=\"span-puntino3\">.</span>\n        </ion-title>\n      </ion-col>\n      <ion-col size=\"4\" offset=\"4\">\n        <div class=\"contenitore-rotella\" *ngIf=\"caricamentoRot\">\n          <img id=\"immagine1\" src=\"https://image.flaticon.com/icons/png/512/34/34448.png\" alt=\"\">\n          <img id=\"immagine2\" src=\"https://image.flaticon.com/icons/png/512/34/34448.png\" alt=\"\">\n          <!-- <img id=\"immagine3\" src=\"https://image.flaticon.com/icons/png/512/34/34448.png\" alt=\"\"> -->\n        </div>\n      </ion-col>\n    </ion-grid>\n    <div *ngIf=\"caricamentoAer\" class=\"cont-aereo\">\n      <img id=\"aereo\" src=\"https://img.icons8.com/wired/452/paper-plane.png\" alt=\"\">\n    </div>\n  </ion-content>\n\n\n\n  <ion-footer>\n    <ion-toolbar>\n      <ion-text class=\"footer-p\">All rights reserved - © Copyright {{year}}</ion-text>\n      <ion-text class=\"footer-name\">Davide Cardia</ion-text>\n    </ion-toolbar>\n  </ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/landing/landing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/landing/landing.module.ts ***!
  \*************************************************/
/*! exports provided: LandingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageModule", function() { return LandingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing.page */ "./src/app/pages/landing/landing.page.ts");







const routes = [
    {
        path: '',
        component: _landing_page__WEBPACK_IMPORTED_MODULE_6__["LandingPage"]
    }
];
let LandingPageModule = class LandingPageModule {
};
LandingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_landing_page__WEBPACK_IMPORTED_MODULE_6__["LandingPage"]]
    })
], LandingPageModule);



/***/ }),

/***/ "./src/app/pages/landing/landing.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/landing/landing.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".titolo {\n  margin-top: 40px;\n  text-align: center;\n  font-size: 24px;\n  letter-spacing: 2px;\n  font-weight: bold;\n  -webkit-animation: title 0.6s linear 0.2s;\n          animation: title 0.6s linear 0.2s;\n}\n\n@-webkit-keyframes title {\n  0% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n    color: #ffffff;\n  }\n  90% {\n    -webkit-transform: translateX(101%);\n            transform: translateX(101%);\n    color: #000000;\n    font-size: 28px;\n  }\n  100% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n    color: #000000;\n    font-size: 24px;\n  }\n}\n\n@keyframes title {\n  0% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n    color: #ffffff;\n  }\n  90% {\n    -webkit-transform: translateX(101%);\n            transform: translateX(101%);\n    color: #000000;\n    font-size: 28px;\n  }\n  100% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n    color: #000000;\n    font-size: 24px;\n  }\n}\n\n.titolo2 {\n  margin-top: 20px;\n  text-align: center;\n  letter-spacing: 4px;\n  font-weight: bold;\n}\n\n.contenitore-rotella {\n  margin-top: 30px;\n  padding-left: 40px;\n  padding-right: 40px;\n  padding-top: 10px;\n}\n\n#immagine1 {\n  width: 60%;\n  height: auto;\n  z-index: 1;\n  -webkit-animation: rotazione1 8s infinite linear;\n          animation: rotazione1 8s infinite linear;\n}\n\n#immagine2 {\n  width: 30%;\n  height: auto;\n  -webkit-animation: rotazione2 4s infinite linear;\n          animation: rotazione2 4s infinite linear;\n}\n\n@-webkit-keyframes rotazione1 {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg);\n  }\n}\n\n@keyframes rotazione1 {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg);\n  }\n}\n\n@-webkit-keyframes rotazione2 {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes rotazione2 {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n.footer-p {\n  padding-left: 5px;\n  text-align: left;\n  font-size: 12px;\n}\n\n.footer-name {\n  position: absolute;\n  right: 5px;\n  font-size: 12px;\n  padding-right: 5px;\n  font-weight: bold;\n}\n\n#span-puntino1 {\n  font-size: 24px;\n  font-weight: bold;\n  -webkit-animation: puntini 1s infinite linear 0.5s;\n          animation: puntini 1s infinite linear 0.5s;\n}\n\n#span-puntino2 {\n  font-size: 24px;\n  font-weight: bold;\n  -webkit-animation: puntini 1s infinite linear 0.75s;\n          animation: puntini 1s infinite linear 0.75s;\n}\n\n#span-puntino3 {\n  font-size: 24px;\n  font-weight: bold;\n  -webkit-animation: puntini 1s infinite linear 1s;\n          animation: puntini 1s infinite linear 1s;\n}\n\n@-webkit-keyframes puntini {\n  0% {\n    color: #000000;\n  }\n  100% {\n    color: #ffffff;\n  }\n}\n\n@keyframes puntini {\n  0% {\n    color: #000000;\n  }\n  100% {\n    color: #ffffff;\n  }\n}\n\n.cont-aereo {\n  width: 100%;\n  height: 150px;\n}\n\n#aereo {\n  z-index: 10;\n  left: 0px;\n  bottom: 3px;\n  width: 10%;\n  height: auto;\n  -webkit-animation: aereo 2s linear infinite;\n          animation: aereo 2s linear infinite;\n}\n\n@-webkit-keyframes aereo {\n  0% {\n    -webkit-transform: translateX(-150px) translateY(120px) rotate(70deg);\n            transform: translateX(-150px) translateY(120px) rotate(70deg);\n  }\n  30% {\n    -webkit-transform: translateX(100px) translateY(50px) rotate(30deg);\n            transform: translateX(100px) translateY(50px) rotate(30deg);\n  }\n  50% {\n    -webkit-transform: translateX(150px) translateY(0px) rotate(0deg);\n            transform: translateX(150px) translateY(0px) rotate(0deg);\n  }\n  50% {\n    -webkit-transform: translateX(150px) translateY(10px) rotate(-90deg);\n            transform: translateX(150px) translateY(10px) rotate(-90deg);\n  }\n  70% {\n    -webkit-transform: translateX(180px) translateY(60px) rotate(-180deg);\n            transform: translateX(180px) translateY(60px) rotate(-180deg);\n  }\n  80% {\n    -webkit-transform: translateX(200px) translateY(90px) rotate(-250deg);\n            transform: translateX(200px) translateY(90px) rotate(-250deg);\n  }\n  100% {\n    -webkit-transform: translateX(500px) translateY(140px) rotate(-360deg);\n            transform: translateX(500px) translateY(140px) rotate(-360deg);\n  }\n}\n\n@keyframes aereo {\n  0% {\n    -webkit-transform: translateX(-150px) translateY(120px) rotate(70deg);\n            transform: translateX(-150px) translateY(120px) rotate(70deg);\n  }\n  30% {\n    -webkit-transform: translateX(100px) translateY(50px) rotate(30deg);\n            transform: translateX(100px) translateY(50px) rotate(30deg);\n  }\n  50% {\n    -webkit-transform: translateX(150px) translateY(0px) rotate(0deg);\n            transform: translateX(150px) translateY(0px) rotate(0deg);\n  }\n  50% {\n    -webkit-transform: translateX(150px) translateY(10px) rotate(-90deg);\n            transform: translateX(150px) translateY(10px) rotate(-90deg);\n  }\n  70% {\n    -webkit-transform: translateX(180px) translateY(60px) rotate(-180deg);\n            transform: translateX(180px) translateY(60px) rotate(-180deg);\n  }\n  80% {\n    -webkit-transform: translateX(200px) translateY(90px) rotate(-250deg);\n            transform: translateX(200px) translateY(90px) rotate(-250deg);\n  }\n  100% {\n    -webkit-transform: translateX(500px) translateY(140px) rotate(-360deg);\n            transform: translateX(500px) translateY(140px) rotate(-360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhdmlkZS9TY3JpdmFuaWEvbnVvdmlQcm9nZXR0aS90ZWxsbWUvdGVsbE1lL3NyYy9hcHAvcGFnZXMvbGFuZGluZy9sYW5kaW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9sYW5kaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlDQUFBO1VBQUEsaUNBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0ksb0NBQUE7WUFBQSw0QkFBQTtJQUNBLGNBQUE7RUNDTjtFREVFO0lBQ0ksbUNBQUE7WUFBQSwyQkFBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0VDQU47RURJRTtJQUNJLG1DQUFBO1lBQUEsMkJBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFQ0ZOO0FBQ0Y7O0FEZkE7RUFDSTtJQUNJLG9DQUFBO1lBQUEsNEJBQUE7SUFDQSxjQUFBO0VDQ047RURFRTtJQUNJLG1DQUFBO1lBQUEsMkJBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFQ0FOO0VESUU7SUFDSSxtQ0FBQTtZQUFBLDJCQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7RUNGTjtBQUNGOztBRE9BO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNMSjs7QURRQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDTEo7O0FEY0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUVBLFVBQUE7RUFDQSxnREFBQTtVQUFBLHdDQUFBO0FDWko7O0FEZ0JBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxnREFBQTtVQUFBLHdDQUFBO0FDYko7O0FEMEJBO0VBQ0k7SUFDSSwrQkFBQTtZQUFBLHVCQUFBO0VDdkJOO0VEMEJFO0lBQ0ksa0NBQUE7WUFBQSwwQkFBQTtFQ3hCTjtBQUNGOztBRGlCQTtFQUNJO0lBQ0ksK0JBQUE7WUFBQSx1QkFBQTtFQ3ZCTjtFRDBCRTtJQUNJLGtDQUFBO1lBQUEsMEJBQUE7RUN4Qk47QUFDRjs7QUQ0QkE7RUFDSTtJQUNJLCtCQUFBO1lBQUEsdUJBQUE7RUMxQk47RUQ2QkU7SUFDSSxpQ0FBQTtZQUFBLHlCQUFBO0VDM0JOO0FBQ0Y7O0FEb0JBO0VBQ0k7SUFDSSwrQkFBQTtZQUFBLHVCQUFBO0VDMUJOO0VENkJFO0lBQ0ksaUNBQUE7WUFBQSx5QkFBQTtFQzNCTjtBQUNGOztBRDhCQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDNUJKOztBRCtCQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDNUJKOztBRCtCQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtEQUFBO1VBQUEsMENBQUE7QUM1Qko7O0FEK0JBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbURBQUE7VUFBQSwyQ0FBQTtBQzVCSjs7QUQrQkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnREFBQTtVQUFBLHdDQUFBO0FDNUJKOztBRGdDQTtFQUNJO0lBQ0ksY0FBQTtFQzdCTjtFRGdDRTtJQUNJLGNBQUE7RUM5Qk47QUFDRjs7QUR1QkE7RUFDSTtJQUNJLGNBQUE7RUM3Qk47RURnQ0U7SUFDSSxjQUFBO0VDOUJOO0FBQ0Y7O0FEaUNBO0VBR0ksV0FBQTtFQUNBLGFBQUE7QUNqQ0o7O0FEb0NBO0VBQ0ksV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0FDakNKOztBRG9DQTtFQUNJO0lBQ0kscUVBQUE7WUFBQSw2REFBQTtFQ2pDTjtFRG9DRTtJQUNJLG1FQUFBO1lBQUEsMkRBQUE7RUNsQ047RURxQ0U7SUFDSSxpRUFBQTtZQUFBLHlEQUFBO0VDbkNOO0VEc0NFO0lBQ0ksb0VBQUE7WUFBQSw0REFBQTtFQ3BDTjtFRHVDRTtJQUNJLHFFQUFBO1lBQUEsNkRBQUE7RUNyQ047RUR3Q0U7SUFDSSxxRUFBQTtZQUFBLDZEQUFBO0VDdENOO0VEeUNFO0lBQ0ksc0VBQUE7WUFBQSw4REFBQTtFQ3ZDTjtBQUNGOztBRFlBO0VBQ0k7SUFDSSxxRUFBQTtZQUFBLDZEQUFBO0VDakNOO0VEb0NFO0lBQ0ksbUVBQUE7WUFBQSwyREFBQTtFQ2xDTjtFRHFDRTtJQUNJLGlFQUFBO1lBQUEseURBQUE7RUNuQ047RURzQ0U7SUFDSSxvRUFBQTtZQUFBLDREQUFBO0VDcENOO0VEdUNFO0lBQ0kscUVBQUE7WUFBQSw2REFBQTtFQ3JDTjtFRHdDRTtJQUNJLHFFQUFBO1lBQUEsNkRBQUE7RUN0Q047RUR5Q0U7SUFDSSxzRUFBQTtZQUFBLDhEQUFBO0VDdkNOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL2xhbmRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdG9sbyB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYW5pbWF0aW9uOiB0aXRsZSAuNnMgbGluZWFyIC4ycztcbn1cblxuQGtleWZyYW1lcyB0aXRsZSB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB9XG5cbiAgICA5MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAxJSk7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG5cbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuXG4gICAgfVxufVxuXG5cbi50aXRvbG8yIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29udGVuaXRvcmUtcm90ZWxsYSB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuXG4vLyAuY29udGVuaXRvcmUtcm90ZWxsYSBpbWcge1xuLy8gICAgIHotaW5kZXg6IDE7XG4vLyAgICAgYW5pbWF0aW9uOiByb3RhemlvbmUgNnMgaW5maW5pdGUgbGluZWFyO1xuLy8gfVxuXG4jaW1tYWdpbmUxIHtcbiAgICB3aWR0aDogNjAlO1xuICAgIGhlaWdodDogYXV0bztcblxuICAgIHotaW5kZXg6IDE7XG4gICAgYW5pbWF0aW9uOiByb3RhemlvbmUxIDhzIGluZmluaXRlIGxpbmVhcjtcblxufVxuXG4jaW1tYWdpbmUyIHtcbiAgICB3aWR0aDogMzAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBhbmltYXRpb246IHJvdGF6aW9uZTIgNHMgaW5maW5pdGUgbGluZWFyO1xufVxuXG4vLyAjaW1tYWdpbmUze1xuLy8gICAgIHdpZHRoOjQwJTtcbi8vICAgICBoZWlnaHQ6IGF1dG87XG4vLyAgICAgYW5pbWF0aW9uOiByb3RhemlvbmUgNHMgaW5maW5pdGUgbGluZWFyO1xuXG4vLyB9XG5cblxuXG5cbkBrZXlmcmFtZXMgcm90YXppb25lMSB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XG4gICAgfVxufVxuXG5cbkBrZXlmcmFtZXMgcm90YXppb25lMiB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG59XG5cbi5mb290ZXItcCB7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5mb290ZXItbmFtZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI3NwYW4tcHVudGlubzEge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBhbmltYXRpb246IHB1bnRpbmkgMXMgaW5maW5pdGUgbGluZWFyIC41cztcbn1cblxuI3NwYW4tcHVudGlubzIge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBhbmltYXRpb246IHB1bnRpbmkgMXMgaW5maW5pdGUgbGluZWFyIC43NXM7XG59XG5cbiNzcGFuLXB1bnRpbm8zIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYW5pbWF0aW9uOiBwdW50aW5pIDFzIGluZmluaXRlIGxpbmVhciAxcztcbn1cblxuXG5Aa2V5ZnJhbWVzIHB1bnRpbmkge1xuICAgIDAlIHtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIH1cbn1cblxuLmNvbnQtYWVyZW8ge1xuICAgIC8vIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIC8vIGJvdHRvbTozMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTUwcHg7XG59XG5cbiNhZXJlbyB7XG4gICAgei1pbmRleDogMTA7XG4gICAgbGVmdDogMHB4O1xuICAgIGJvdHRvbTogM3B4O1xuICAgIHdpZHRoOiAxMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGFuaW1hdGlvbjogYWVyZW8gMnMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGFlcmVvIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTUwcHgpIHRyYW5zbGF0ZVkoMTIwcHgpIHJvdGF0ZSg3MGRlZylcbiAgICB9XG5cbiAgICAzMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwcHgpIHRyYW5zbGF0ZVkoNTBweCkgcm90YXRlKDMwZGVnKTtcbiAgICB9XG5cbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTUwcHgpIHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoMGRlZyk7XG4gICAgfVxuXG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1MHB4KSB0cmFuc2xhdGVZKDEwcHgpIHJvdGF0ZSgtOTBkZWcpO1xuICAgIH1cblxuICAgIDcwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxODBweCkgdHJhbnNsYXRlWSg2MHB4KSByb3RhdGUoLTE4MGRlZyk7XG4gICAgfVxuXG4gICAgODAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMHB4KSB0cmFuc2xhdGVZKDkwcHgpIHJvdGF0ZSgtMjUwZGVnKTtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwMHB4KSB0cmFuc2xhdGVZKDE0MHB4KSByb3RhdGUoLTM2MGRlZyk7XG4gICAgfVxuXG5cbn0iLCIudGl0b2xvIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBhbmltYXRpb246IHRpdGxlIDAuNnMgbGluZWFyIDAuMnM7XG59XG5cbkBrZXlmcmFtZXMgdGl0bGUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuICA5MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDElKTtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxufVxuLnRpdG9sbzIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29udGVuaXRvcmUtcm90ZWxsYSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbiNpbW1hZ2luZTEge1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHotaW5kZXg6IDE7XG4gIGFuaW1hdGlvbjogcm90YXppb25lMSA4cyBpbmZpbml0ZSBsaW5lYXI7XG59XG5cbiNpbW1hZ2luZTIge1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGFuaW1hdGlvbjogcm90YXppb25lMiA0cyBpbmZpbml0ZSBsaW5lYXI7XG59XG5cbkBrZXlmcmFtZXMgcm90YXppb25lMSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyByb3RhemlvbmUyIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbi5mb290ZXItcCB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5mb290ZXItbmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jc3Bhbi1wdW50aW5vMSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGFuaW1hdGlvbjogcHVudGluaSAxcyBpbmZpbml0ZSBsaW5lYXIgMC41cztcbn1cblxuI3NwYW4tcHVudGlubzIge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBhbmltYXRpb246IHB1bnRpbmkgMXMgaW5maW5pdGUgbGluZWFyIDAuNzVzO1xufVxuXG4jc3Bhbi1wdW50aW5vMyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGFuaW1hdGlvbjogcHVudGluaSAxcyBpbmZpbml0ZSBsaW5lYXIgMXM7XG59XG5cbkBrZXlmcmFtZXMgcHVudGluaSB7XG4gIDAlIHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgfVxuICAxMDAlIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxufVxuLmNvbnQtYWVyZW8ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cblxuI2FlcmVvIHtcbiAgei1pbmRleDogMTA7XG4gIGxlZnQ6IDBweDtcbiAgYm90dG9tOiAzcHg7XG4gIHdpZHRoOiAxMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYW5pbWF0aW9uOiBhZXJlbyAycyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgYWVyZW8ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNTBweCkgdHJhbnNsYXRlWSgxMjBweCkgcm90YXRlKDcwZGVnKTtcbiAgfVxuICAzMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDBweCkgdHJhbnNsYXRlWSg1MHB4KSByb3RhdGUoMzBkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1MHB4KSB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDBkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1MHB4KSB0cmFuc2xhdGVZKDEwcHgpIHJvdGF0ZSgtOTBkZWcpO1xuICB9XG4gIDcwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE4MHB4KSB0cmFuc2xhdGVZKDYwcHgpIHJvdGF0ZSgtMTgwZGVnKTtcbiAgfVxuICA4MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDBweCkgdHJhbnNsYXRlWSg5MHB4KSByb3RhdGUoLTI1MGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwMHB4KSB0cmFuc2xhdGVZKDE0MHB4KSByb3RhdGUoLTM2MGRlZyk7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/landing/landing.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/landing/landing.page.ts ***!
  \***********************************************/
/*! exports provided: LandingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPage", function() { return LandingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LandingPage = class LandingPage {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.caricamentoRot = false;
        this.caricamentoAtt = false;
        this.caricamentoTit = false;
        this.caricamentoAer = false;
        if (localStorage.getItem('id')) {
            this.authService.login(localStorage.getItem('email'), localStorage.getItem('password'));
            this.authService.setId(localStorage.getItem('id'));
        }
        else {
            setTimeout(() => {
                this.router.navigateByUrl('login');
            }, 7200);
        }
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
};
LandingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
];
LandingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-landing',
        template: __webpack_require__(/*! raw-loader!./landing.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/landing/landing.page.html"),
        styles: [__webpack_require__(/*! ./landing.page.scss */ "./src/app/pages/landing/landing.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
], LandingPage);



/***/ })

}]);
//# sourceMappingURL=pages-landing-landing-module-es2015.js.map