(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-stato-stato-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/stato/stato.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/stato/stato.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content (swipeleft)=\"swipeLeft()\" (swiperight)=\"swipeRight()\">\n  <form [formGroup]=\"form\">\n    <ion-item class=\"stato-personale\">\n      <div class=\"fileUpload\">\n        <span>\n          <ion-button slot=\"start\" fill=\"clear\" class=\"cont-btn--btn\">\n            <ion-icon class=\"icons\" name=\"add\"></ion-icon>\n          </ion-button>\n        </span>\n\n        <input class=\"upload\" (change)=\"getFile($event)\" formControlName=\"foto\" type=\"file\">\n      </div>\n      <ion-button slot=\"end\" fill=\"clear\" class=\"cont-btn--btn\" (click)=\"addCameraPhoto()\">\n        <ion-icon name=\"camera\"></ion-icon>\n      </ion-button>\n    </ion-item>\n  </form>\n\n  <div *ngFor=\"let stato of personalStatus\" class=\"separatore\">\n    <p class=\"separatore--testo\">Il mio stato</p>\n  </div>\n  <div *ngFor=\"let stato of personalStatus\">\n    <ion-item (click)=\"openPhoto(stato.payload.val().status);\" class=\"stato-personalee\">\n      <ion-avatar slot=\"start\">\n        <img src=\"{{stato.payload.val().status}}\">\n      </ion-avatar>\n      <ion-label>\n        <ion-text>{{stato.payload.val().firstname}} {{stato.payload.val().lastname}}</ion-text>\n      </ion-label>\n      <ion-button fill=\"clear\" slot=\"end\" (click)=\"removeStatus();\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n\n    </ion-item>\n\n\n  </div>\n  <div class=\"separatore\">\n    <p class=\"separatore--testo\">Aggiornamenti recenti</p>\n  </div>\n  <ion-item class=\"stato-personalee\" *ngIf=\"statuses.length == 0\">\n    <span>Nessun aggiornamento...</span>\n  </ion-item>\n\n\n  <ion-item *ngFor=\"let stato of statuses\" (click)=\"openPhoto(stato.payload.val().status);\" class=\"stato-personalee\">\n    <ion-avatar slot=\"start\">\n      <img src=\"{{stato.payload.val().status}}\">\n    </ion-avatar>\n    <ion-label>\n      <ion-text>{{stato.payload.val().firstname}} {{stato.payload.val().lastname}}</ion-text>\n    </ion-label>\n  </ion-item>\n\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/stato/stato.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/stato/stato.module.ts ***!
  \*********************************************/
/*! exports provided: StatoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatoPageModule", function() { return StatoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _stato_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stato.page */ "./src/app/pages/stato/stato.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");








const routes = [
    {
        path: '',
        component: _stato_page__WEBPACK_IMPORTED_MODULE_6__["StatoPage"]
    }
];
let StatoPageModule = class StatoPageModule {
};
StatoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_stato_page__WEBPACK_IMPORTED_MODULE_6__["StatoPage"]]
    })
], StatoPageModule);



/***/ }),

/***/ "./src/app/pages/stato/stato.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/stato/stato.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "in-content {\n  --padding-bottom: 20%;\n}\n\n.separatore {\n  width: 100%;\n  height: 27px;\n  background-color: rgba(0, 0, 0, 0.06);\n  margin-top: 10px 0 10px 0;\n}\n\n.separatore--testo {\n  padding: 5px 0 0 15px;\n  font-size: 13px;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.stato-personale {\n  --border-color: transparent;\n  --padding-start: 80px;\n  --padding-end: 80px;\n}\n\n.stato-personalee {\n  --border-color: transparent;\n  --padding-start: 40px;\n  --padding-end: 40px;\n}\n\n#removeStatus {\n  cursor: pointer !important;\n}\n\n.fileUpload {\n  position: relative;\n  overflow: hidden;\n  margin: 10px;\n}\n\n.fileUpload input.upload {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  font-size: 20px;\n  cursor: pointer;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n\n.icons {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhdmlkZS9TY3JpdmFuaWEvbnVvdmlQcm9nZXR0aS90ZWxsbWUvdGVsbE1lL3NyYy9hcHAvcGFnZXMvc3RhdG8vc3RhdG8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zdGF0by9zdGF0by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLHlCQUFBO0FDQ0o7O0FEQ0k7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ0NSOztBREdBO0VBQ0ksMkJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDQUo7O0FER0E7RUFDSSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURLQTtFQUNJLDBCQUFBO0FDRko7O0FETUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0hKOztBRE9BO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7QUNKSjs7QURPQTtFQUNJLGVBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0YXRvL3N0YXRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImluLWNvbnRlbnR7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMjAlO1xufVxuXG4uc2VwYXJhdG9yZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyN3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IC4wNik7XG4gICAgbWFyZ2luLXRvcDogMTBweCAwIDEwcHggMDtcblxuICAgICYtLXRlc3RvIHtcbiAgICAgICAgcGFkZGluZzogNXB4IDAgMCAxNXB4O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGNvbG9yOiByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAuNSk7XG4gICAgfVxufVxuXG4uc3RhdG8tcGVyc29uYWxlIHtcbiAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA4MHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDgwcHg7XG59XG5cbi5zdGF0by1wZXJzb25hbGVlIHtcbiAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0MHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDQwcHg7XG59XG5cblxuXG4jcmVtb3ZlU3RhdHVzIHtcbiAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbn1cblxuXG4uZmlsZVVwbG9hZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIC8vIGxlZnQ6IDE3JTtcbn1cblxuLmZpbGVVcGxvYWQgaW5wdXQudXBsb2FkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3BhY2l0eTogMDtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG59XG5cbi5pY29ucyB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufSIsImluLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyMCU7XG59XG5cbi5zZXBhcmF0b3JlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgbWFyZ2luLXRvcDogMTBweCAwIDEwcHggMDtcbn1cbi5zZXBhcmF0b3JlLS10ZXN0byB7XG4gIHBhZGRpbmc6IDVweCAwIDAgMTVweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uc3RhdG8tcGVyc29uYWxlIHtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDgwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDgwcHg7XG59XG5cbi5zdGF0by1wZXJzb25hbGVlIHtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDQwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDQwcHg7XG59XG5cbiNyZW1vdmVTdGF0dXMge1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmZpbGVVcGxvYWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmZpbGVVcGxvYWQgaW5wdXQudXBsb2FkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG59XG5cbi5pY29ucyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/stato/stato.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/stato/stato.page.ts ***!
  \*******************************************/
/*! exports provided: StatoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatoPage", function() { return StatoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _photo_modal_photo_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../photo-modal/photo-modal.page */ "./src/app/pages/photo-modal/photo-modal.page.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_statuses_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/statuses.service */ "./src/app/services/statuses.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");













let StatoPage = class StatoPage {
    constructor(storage, fb, formBuilder, statusesService, authService, usersService, chatService, camera, loadingController, modalController, router) {
        this.storage = storage;
        this.fb = fb;
        this.formBuilder = formBuilder;
        this.statusesService = statusesService;
        this.authService = authService;
        this.usersService = usersService;
        this.chatService = chatService;
        this.camera = camera;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.router = router;
        this.statuses = [];
        this.personalStatus = [];
        this.friend = [];
        this.idLogged = this.authService.getIdLoggedUser();
        this.chatService.getFriendsList(this.idLogged).subscribe(res => {
            this.friendsList = res.filter(item => {
                return item.payload.key;
            });
        });
        this.getMyStatus();
        this.getListStatuses();
        this.form = this.formBuilder.group({
            foto: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required),
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.getMyStatus();
        this.getListStatuses();
    }
    addCameraPhoto() {
        const options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            saveToPhotoAlbum: false //true in prod,
            // popoverOptions: new CameraPopoverOptions //slider di foto della gallery,ma funge solo con ios
        };
        this.camera.getPicture(options).then((imageData) => {
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            this.add(base64Image);
        }, (err) => {
            alert(err);
        });
    }
    add(image) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.fileName = 'status';
            this.task = this.statusesService.upLoad(this.idLogged, this.fileName).putString(image, 'data_url');
            // let progress = (this.task.snapshot.bytesTransferred / this.task.snapshot.totalBytes) * 100;
            // alert(progress)
            this.task.then(() => {
                this.statusesService.upLoad(this.idLogged, this.fileName).getDownloadURL().then(url => {
                    this.url = url;
                    this.usersService.getLogUserData(this.idLogged).subscribe(res => {
                        this.statusesService.saveStatus(this.idLogged).set({
                            status: this.url,
                            firstname: res[1],
                            lastname: res[2]
                        });
                    });
                });
            });
        });
    }
    getFile(event) {
        this.file = event.target.files[0];
        setTimeout(() => {
            this.addPhoto();
        }, 200);
    }
    addPhoto() {
        if (this.idLogged) {
            this.fileName = 'status';
            // this.presentLoading(timer);
            this.task = this.statusesService.upLoad(this.idLogged, this.fileName).put(this.file);
            this.task.then((p) => {
                console.log(p.task.snapshot.state);
            });
            this.task.then(() => {
                // this.authService.
                this.statusesService.upLoad(this.idLogged, this.fileName).getDownloadURL().then(url => {
                    this.url = url;
                    this.usersService.getLogUserData(this.idLogged).subscribe(res => {
                        this.statusesService.saveStatus(this.idLogged).set({
                            status: this.url,
                            firstname: res[1],
                            lastname: res[2]
                        });
                    });
                });
                setTimeout(() => {
                    this.statusesService.removeStatus(this.idLogged);
                    this.statusesService.removeStatusStorage(this.idLogged, this.fileName);
                }, 86400000);
            });
        }
        else {
            this.authService.logOut();
        }
        // this.task.then(res => {
        //   console.log(res.downloadURL);
        // })
        // percentage.subscribe(res => {
        //   // console.log(res);
        // })
        this.file = null;
    }
    getListStatuses() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.statusesService.getListStatus().snapshotChanges().subscribe(res => {
                this.statuses = res.filter(item => {
                    for (let i = 0; i < this.friendsList.length; i++) {
                        this.friend.push(this.friendsList[i].key);
                    }
                    if (this.friend.includes(item.key)) {
                        return item;
                    }
                });
            });
        });
    }
    getMyStatus() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.statusesService.getMyStatus().snapshotChanges().subscribe(res => {
                this.personalStatus = res.filter(item => {
                    return item.key === this.idLogged;
                });
            });
        });
    }
    removeStatus() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.statusesService.removeStatus(this.idLogged);
            this.statusesService.removeStatusStorage(this.idLogged, this.fileName);
        });
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Caricamento..',
                duration: 5000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    openPhoto(url) {
        this.presentModal(url);
    }
    presentModal(url) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _photo_modal_photo_modal_page__WEBPACK_IMPORTED_MODULE_2__["PhotoModalPage"],
                componentProps: { url: url }
            });
            return yield modal.present();
        });
    }
    swipeLeft() {
        this.router.navigateByUrl('/home/utenti');
    }
    swipeRight() {
        this.router.navigateByUrl('/home/chat');
    }
};
StatoPage.ctorParameters = () => [
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorage"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
    { type: _services_statuses_service__WEBPACK_IMPORTED_MODULE_6__["StatusesService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_11__["UsersService"] },
    { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
StatoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"])({
        selector: 'app-stato',
        template: __webpack_require__(/*! raw-loader!./stato.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/stato/stato.page.html"),
        styles: [__webpack_require__(/*! ./stato.page.scss */ "./src/app/pages/stato/stato.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorage"],
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
        _services_statuses_service__WEBPACK_IMPORTED_MODULE_6__["StatusesService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
        src_app_services_users_service__WEBPACK_IMPORTED_MODULE_11__["UsersService"],
        _services_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], StatoPage);



/***/ }),

/***/ "./src/app/services/statuses.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/statuses.service.ts ***!
  \**********************************************/
/*! exports provided: StatusesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusesService", function() { return StatusesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let StatusesService = class StatusesService {
    constructor(storage, db) {
        this.storage = storage;
        this.db = db;
    }
    upLoad(idLogged, fileName) {
        return this.storage.storage.ref(`statuses/${idLogged}/${fileName}.jpg`);
    }
    saveStatus(idLogged) {
        return this.db.database.ref(`/statuses/${idLogged}/`);
    }
    getListStatus() {
        return this.db.list('/statuses/');
    }
    removeStatus(idLogged) {
        this.db.database.ref(`statuses/${idLogged}`).remove();
    }
    removeStatusStorage(idLogged, filename) {
        this.storage.storage.ref(`statuses/${idLogged}/${filename}`).delete();
    }
    getMyStatus() {
        return this.db.list('/statuses/');
    }
};
StatusesService.ctorParameters = () => [
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] }
];
StatusesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"],
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
], StatusesService);



/***/ })

}]);
//# sourceMappingURL=pages-stato-stato-module-es2015.js.map