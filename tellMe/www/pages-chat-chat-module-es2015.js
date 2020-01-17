(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chat-chat-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/chat/chat.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/chat/chat.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content (swipeleft)=\"swipeLeft()\" padding>\n  <ion-item-group class=\"contenitore\" *ngFor=\"let chat of chatsList \">\n    <div *ngIf=\"chat.payload.val().messages || (chat.payload.val().newMess == true)\">\n      <ion-item>\n        <ion-avatar slot=\"start\">\n          <img (click)=\"openPhoto(chat.payload.val().foto)\" src=\"{{chat.payload.val().foto}}\">\n        </ion-avatar>\n        <ion-label (press)=\"options()\"\n          (click)=\"openChat(chat.payload.key,chat.payload.val().firstname,chat.payload.val().lastname,chat.payload.val().foto)\">\n          <ion-text>{{chat.payload.val().firstname}} {{ chat.payload.val().lastname}}</ion-text>\n          <p *ngIf=\"chat.payload.val().newMess == true\" color=\"success\"> Nuovi/o messaggi/o</p>\n        </ion-label>\n      </ion-item>\n    </div>\n  </ion-item-group>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/chat/chat.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/chat/chat.module.ts ***!
  \*******************************************/
/*! exports provided: ChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat.page */ "./src/app/pages/chat/chat.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");








const routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]
    }
];
let ChatPageModule = class ChatPageModule {
};
ChatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]]
    })
], ChatPageModule);



/***/ }),

/***/ "./src/app/pages/chat/chat.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/chat/chat.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --padding-bottom: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhdmlkZS9TY3JpdmFuaWEvbnVvdmlQcm9nZXR0aS90ZWxsbWUvdGVsbE1lL3NyYy9hcHAvcGFnZXMvY2hhdC9jaGF0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2hhdC9jaGF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGF0L2NoYXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tcGFkZGluZy1ib3R0b206IDIwJTtcbn0iLCJpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/chat/chat.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/chat/chat.page.ts ***!
  \*****************************************/
/*! exports provided: ChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPage", function() { return ChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_fcm_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/fcm.service */ "./src/app/services/fcm.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _photo_modal_photo_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../photo-modal/photo-modal.page */ "./src/app/pages/photo-modal/photo-modal.page.ts");
/* harmony import */ var _services_profile_photo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/profile-photo.service */ "./src/app/services/profile-photo.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_send_message_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/send-message.service */ "./src/app/services/send-message.service.ts");












let ChatPage = class ChatPage {
    constructor(chatService, afAuth, usersService, router, sendMessageService, authService, profilePhotoService, modalController, fcmService) {
        this.chatService = chatService;
        this.afAuth = afAuth;
        this.usersService = usersService;
        this.router = router;
        this.sendMessageService = sendMessageService;
        this.authService = authService;
        this.profilePhotoService = profilePhotoService;
        this.modalController = modalController;
        this.fcmService = fcmService;
        this.registeredUser = this.authService.getRegisteredUser();
        this.idLoggedUser = this.authService.getIdLoggedUser();
        this.fcmService.getAndSaveToken(this.idLoggedUser);
        this.usersService.getUsers().subscribe(users => {
            let arr = users.find(item => {
                return item.key == this.idLoggedUser;
            });
            if (!arr) {
                let fileName = Date.now();
                if (this.registeredUser.photo) {
                    this.task = this.profilePhotoService.upLoad(this.idLoggedUser, fileName).put(this.registeredUser.photo);
                    this.task.then(() => {
                        this.profilePhotoService.upLoad(this.idLoggedUser, fileName).getDownloadURL().then(url => {
                            this.url = url;
                            this.usersService.createUser(this.idLoggedUser).set({
                                firstname: this.registeredUser.firstname,
                                lastname: this.registeredUser.lastname,
                                email: this.registeredUser.email,
                                uid: this.idLoggedUser,
                                photo: url
                            });
                        });
                    });
                }
                else {
                    this.url = './../assets/anonymous.png';
                    this.usersService.createUser(this.idLoggedUser).set({
                        firstname: this.registeredUser.firstname,
                        lastname: this.registeredUser.lastname,
                        email: this.registeredUser.email,
                        uid: this.idLoggedUser,
                        photo: './../assets/anonymous.png'
                    });
                }
            }
        });
        this.getChatsList();
        if (this.idLoggedUser) {
            this.authService.onlineUsers(this.idLoggedUser).update({
                online: true
            });
        }
        else {
            alert('Esegui il login, ritenta!');
            this.router.navigateByUrl('/login');
        }
    }
    ngOnInit() {
        if (this.idLoggedUser) {
            this.authService.onlineUsers(this.idLoggedUser).update({
                online: true
            });
        }
        else {
            this.router.navigateByUrl('/login');
        }
    }
    ionViewDidEnter() {
        if (this.idLoggedUser) {
            this.authService.onlineUsers(this.idLoggedUser).update({
                online: true
            });
        }
        else {
            this.router.navigateByUrl('/login');
        }
    }
    ionViewWillEnter() {
        // this.authService.onlineUsers(this.idLoggedUser).update({
        //   online: true
        // })
        this.getChatsList();
    }
    getChatsList() {
        this.chatService.getChatsList(this.idLoggedUser).subscribe(res => {
            this.chatsList = res;
        });
    }
    openChat(idFriend, firstnameFriend, lastnameFriend, photoFriend) {
        this.chatService.getClickedUserData(idFriend, firstnameFriend, lastnameFriend, photoFriend);
        this.sendMessageService.newMessages(this.idLoggedUser, idFriend).update({
            newMess: false
        });
        this.router.navigate(['user-chat']);
    }
    openPhoto(url) {
        this.presentModal(url);
    }
    presentModal(url) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _photo_modal_photo_modal_page__WEBPACK_IMPORTED_MODULE_3__["PhotoModalPage"],
                componentProps: { url: url }
            });
            return yield modal.present();
        });
    }
    swipeLeft() {
        this.router.navigateByUrl('/home/stato');
    }
    options() {
        console.log('ciao');
        alert('ciao');
    }
};
ChatPage.ctorParameters = () => [
    { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_8__["ChatService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
    { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: src_app_services_send_message_service__WEBPACK_IMPORTED_MODULE_11__["SendMessageService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _services_profile_photo_service__WEBPACK_IMPORTED_MODULE_4__["ProfilePhotoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _services_fcm_service__WEBPACK_IMPORTED_MODULE_1__["FcmService"] }
];
ChatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"])({
        selector: 'app-chat',
        template: __webpack_require__(/*! raw-loader!./chat.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/chat/chat.page.html"),
        styles: [__webpack_require__(/*! ./chat.page.scss */ "./src/app/pages/chat/chat.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_8__["ChatService"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"],
        src_app_services_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
        src_app_services_send_message_service__WEBPACK_IMPORTED_MODULE_11__["SendMessageService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        _services_profile_photo_service__WEBPACK_IMPORTED_MODULE_4__["ProfilePhotoService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _services_fcm_service__WEBPACK_IMPORTED_MODULE_1__["FcmService"]])
], ChatPage);



/***/ }),

/***/ "./src/app/services/profile-photo.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/profile-photo.service.ts ***!
  \***************************************************/
/*! exports provided: ProfilePhotoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePhotoService", function() { return ProfilePhotoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let ProfilePhotoService = class ProfilePhotoService {
    constructor(storage, db) {
        this.storage = storage;
        this.db = db;
    }
    upLoad(idLogged, fileName) {
        return this.storage.storage.ref(`fotoProfilo/${idLogged}/${fileName}`);
    }
    savePhotoProfile(idLogged) {
        return this.db.database.ref(`/users/${idLogged}/`);
    }
};
ProfilePhotoService.ctorParameters = () => [
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] }
];
ProfilePhotoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"],
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
], ProfilePhotoService);



/***/ })

}]);
//# sourceMappingURL=pages-chat-chat-module-es2015.js.map