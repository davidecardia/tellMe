(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-utenti-utenti-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/utenti/utenti.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/utenti/utenti.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content (swiperight)=\"swipeRight()\" padding>\n  <ion-item-group *ngFor=\"let friend of friends\">\n    <ion-item *ngIf=\"!friend.payload.child('online').val()\"\n      (click)=\"openChat(friend.payload.key,friend.payload.val().firstname,friend.payload.val().lastname,friend.payload.val().foto)\">\n      <ion-avatar slot=\"start\">\n        <img src=\"{{friend.payload.val().foto}}\">\n      </ion-avatar>\n      <ion-label>\n        <ion-text>{{friend.payload.val().firstname}} {{friend.payload.val().lastname}}</ion-text>\n        <ion-icon *ngIf=\"friend.payload.child('status').val()\" name=\"square\" color=\"success\" text-right></ion-icon>\n      </ion-label>\n    </ion-item>\n\n  </ion-item-group>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/utenti/utenti.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/utenti/utenti.module.ts ***!
  \***********************************************/
/*! exports provided: UtentiPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtentiPageModule", function() { return UtentiPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _utenti_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utenti.page */ "./src/app/pages/utenti/utenti.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");








const routes = [
    {
        path: '',
        component: _utenti_page__WEBPACK_IMPORTED_MODULE_6__["UtentiPage"]
    }
];
let UtentiPageModule = class UtentiPageModule {
};
UtentiPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_utenti_page__WEBPACK_IMPORTED_MODULE_6__["UtentiPage"]]
    })
], UtentiPageModule);



/***/ }),

/***/ "./src/app/pages/utenti/utenti.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/utenti/utenti.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --padding-bottom:20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhdmlkZS9TY3JpdmFuaWEvbnVvdmlQcm9nZXR0aS90ZWxsbWUvdGVsbE1lL3NyYy9hcHAvcGFnZXMvdXRlbnRpL3V0ZW50aS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3V0ZW50aS91dGVudGkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3V0ZW50aS91dGVudGkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgLS1wYWRkaW5nLWJvdHRvbToyMCU7XG59IiwiaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOjIwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/utenti/utenti.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/utenti/utenti.page.ts ***!
  \*********************************************/
/*! exports provided: UtentiPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtentiPage", function() { return UtentiPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let UtentiPage = class UtentiPage {
    constructor(userService, authService, chatService, router) {
        this.userService = userService;
        this.authService = authService;
        this.chatService = chatService;
        this.router = router;
        this.idLoggedUser = this.authService.getIdLoggedUser();
        this.userService.getUsersData(this.idLoggedUser).subscribe(users => {
            this.friends = users;
            console.log(users);
        });
    }
    ngOnInit() {
    }
    openChat(idFriend, firstnameFriend, lastnameFriend, photoFriend) {
        this.chatService.getClickedUserData(idFriend, firstnameFriend, lastnameFriend, photoFriend);
        this.router.navigate(['user-chat']);
    }
    swipeRight() {
        this.router.navigateByUrl('/home/stato');
    }
};
UtentiPage.ctorParameters = () => [
    { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
UtentiPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-utenti',
        template: __webpack_require__(/*! raw-loader!./utenti.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/utenti/utenti.page.html"),
        styles: [__webpack_require__(/*! ./utenti.page.scss */ "./src/app/pages/utenti/utenti.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], UtentiPage);



/***/ })

}]);
//# sourceMappingURL=pages-utenti-utenti-module-es2015.js.map