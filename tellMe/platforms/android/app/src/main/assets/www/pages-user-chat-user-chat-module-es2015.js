(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-chat-user-chat-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/user-chat/user-chat.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/user-chat/user-chat.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"head-chat\">\n    <ion-row>\n      <ion-col size=\"1\">\n        <ion-icon class=\"icons\" (click)=\"backToChat()\" name=\"arrow-round-back\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"11\">\n        <ion-item class=\"avatar\">\n          <ion-avatar slot=\"start\">\n            <img src=\"{{photo}}\">\n          </ion-avatar>\n          <ion-icon class=\"avatar--icon-online\" name=\"radio-button-on\" color=\"success\" *ngIf=\"online\"></ion-icon>\n          <ion-text class=\"avatar--date\" *ngIf=\"date\">{{date}}</ion-text>\n          <ion-title>{{firstname}} {{lastname}}</ion-title>\n        </ion-item>\n\n        <!-- <ion-title>{{friendFirstName}} {{friendLastName}}</ion-title> -->\n      </ion-col>\n      <!-- <ion-col size=\"1\">\n        <ion-icon class=\"icons\" name=\"more\"></ion-icon>\n      </ion-col> -->\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen scrollEvents=\"true\" #content class=\"message-container\" id=\"contenitore\">\n  <ion-item-group class=\"message-container--item-group-container\" *ngFor=\"let message of messages\">\n    <ion-item class=\"message-container--message \"\n      [ngClass]=\"{'message-container--message-received': message.uid != idLoggedUser, 'message-container--message-send': message.uid == idLoggedUser}\">\n      <span class=\"message-container--hour message-container--hour-received\"\n        [ngClass]=\"{'message-container--hour-received': message.uid != idLoggedUser, 'message-container--hour-send': message.uid == idLoggedUser}\">{{message.date}}</span>\n      <p *ngIf=\"message.text !== ''\">{{message.text}}</p>\n      <div *ngIf=\"message.photo !== ''\" class=\"contenitore-photo\">\n        <img (click)=\"openPhoto(message.photo);\" src=\"{{message.photo}}\">\n      </div>\n      <div *ngIf=\"message.audio !== ''\" class=\"contenitore-audio\">\n        <audio src=\"{{message.audio}}\" controls></audio>\n      </div>\n    </ion-item>\n  </ion-item-group>\n\n\n</ion-content>\n\n<ion-footer translucent>\n  <ion-toolbar id=\"footerBack\">\n    <form [formGroup]=\"form\" (ngSubmit)=\"sendMessage()\">\n      <ion-item class=\"send-message\">\n        <ion-textarea #textarea class=\"send-message--textarea\" id=\"valText\" formControlName=\"message\" autoGrow=\"true\"\n          rows=\"2\" cols=\"1\" class=\"send-message--textarea\">\n        </ion-textarea>\n        <ion-button [disabled]=\"!textarea.value ? 'false' : 'true'\" (click)=\"addAudio();\" fill=\"clear\"\n          class=\"send-message--button\">\n          <ion-icon class=\"send-message--icon\" name=\"mic\"></ion-icon>\n        </ion-button>\n        <ion-button [disabled]=\"!textarea.value ? 'false' : 'true'\" (click)=\"addCameraPhoto();\" fill=\"clear\"\n          class=\"send-message--button\">\n          <ion-icon class=\"send-message--icon\" name=\"camera\"></ion-icon>\n        </ion-button>\n        <ion-button [disabled]=\"textarea.value ? 'false' : 'true'\" type=\"submit\" fill=\"clear\"\n          class=\"send-message--button\">\n          <ion-icon class=\"send-message--icon\" name=\"send\"></ion-icon>\n        </ion-button>\n      </ion-item>\n    </form>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/user-chat/user-chat.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/user-chat/user-chat.module.ts ***!
  \*****************************************************/
/*! exports provided: UserChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserChatPageModule", function() { return UserChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-chat.page */ "./src/app/pages/user-chat/user-chat.page.ts");
/* harmony import */ var src_app_pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/sort.pipe */ "./src/app/pipes/sort.pipe.ts");








const routes = [
    {
        path: '',
        component: _user_chat_page__WEBPACK_IMPORTED_MODULE_6__["UserChatPage"]
    }
];
let UserChatPageModule = class UserChatPageModule {
};
UserChatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_user_chat_page__WEBPACK_IMPORTED_MODULE_6__["UserChatPage"], src_app_pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_7__["SortPipe"]]
    })
], UserChatPageModule);



/***/ }),

/***/ "./src/app/pages/user-chat/user-chat.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/user-chat/user-chat.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icons {\n  font-size: 24px;\n  margin-top: 16px;\n}\n\n.avatar {\n  --border-color: #fff;\n}\n\n.avatar--date {\n  font-size: 12px;\n}\n\n.avatar--icon-online {\n  font-size: 14px;\n}\n\n.avatar--title {\n  font-size: 17px;\n}\n\n.message-container {\n  padding-bottom: 0px;\n  margin-bottom: 0px;\n  --background: url(\"https://i.pinimg.com/originals/79/5c/ab/795cabc4647f73b365e2e6eabd0f34dc.png\");\n  background-repeat: no-repeat;\n  background-image: cover !important;\n  background-size: cover !important;\n  background-position: center;\n  display: block !important;\n}\n\n.message-container--message {\n  --border-color: transparent;\n  word-wrap: break-word;\n}\n\n.message-container--item-group-container:last-of-type {\n  margin-bottom: 20px;\n}\n\n.message-container--message-received {\n  --background: linear-gradient(to bottom, #c9d6ff, #e2e2e2);\n  margin-top: 20px;\n  margin-left: 10px;\n  width: 80%;\n  -webkit-clip-path: polygon(11% 100%, 100% 100%, 100% 28%, 100% 0, 100% 0, 0 0, 11% 28%);\n          clip-path: polygon(11% 100%, 100% 100%, 100% 28%, 100% 0, 100% 0, 0 0, 11% 28%);\n  --inner-padding-start: 15%;\n  --inner-padding-end: 5%;\n}\n\n.message-container--message-send {\n  --background: linear-gradient(to right, #43c6ac, #f8ffae);\n  margin-top: 20px;\n  margin-right: 10px;\n  padding-left: 20%;\n  -webkit-clip-path: polygon(0 100%, 89% 100%, 89% 28%, 100% 0, 100% 0, 0 0, 0 28%);\n          clip-path: polygon(0 100%, 89% 100%, 89% 28%, 100% 0, 100% 0, 0 0, 0 28%);\n  --inner-padding-start: 5%;\n  --inner-padding-end: 17%;\n}\n\n.message-container--hour {\n  position: absolute;\n  font-size: 9px;\n  padding: 5px;\n  color: rgba(0, 0, 0, 0.6);\n}\n\n.message-container--hour-send {\n  top: 0%;\n  right: 12%;\n}\n\n.message-container--hour-received {\n  top: 0%;\n  left: 5%;\n}\n\n.item-interactive.ion-invalid {\n  --highlight-background: transparent;\n}\n\n.item-interactive.ion-valid {\n  --highlight-background: transparent;\n}\n\n.send-message {\n  position: relative;\n  bottom: 2px;\n  width: 100%;\n  --highlight-color-focused: transparent !important;\n  --border-radius: 30px;\n  --background: #fff;\n}\n\n.send-message--textarea {\n  --highlight-color-focused: transparent !important;\n  word-wrap: break-word;\n}\n\n.send-message--icon {\n  font-size: 27px;\n  color: #43c6ac;\n}\n\n#footerBack {\n  --background: url(\"https://i.pinimg.com/originals/79/5c/ab/795cabc4647f73b365e2e6eabd0f34dc.png\");\n  padding-bottom: 0px;\n  margin-bottom: 0px;\n  --padding: 3px;\n}\n\n.footer-md:before {\n  top: 0px;\n}\n\n.contenitore-photo {\n  padding: 20px 0px;\n}\n\n.contenitore-photo img {\n  border-radius: 5px;\n  width: 150px;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhdmlkZS9TY3JpdmFuaWEvbnVvdmlQcm9nZXR0aS90ZWxsbWUvdGVsbE1lL3NyYy9hcHAvcGFnZXMvdXNlci1jaGF0L3VzZXItY2hhdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3VzZXItY2hhdC91c2VyLWNoYXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtBQ0NKOztBRENJO0VBQ0ksZUFBQTtBQ0NSOztBREVJO0VBQ0ksZUFBQTtBQ0FSOztBREdJO0VBQ0ksZUFBQTtBQ0RSOztBRE1BO0VBR0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlHQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsMkJBQUE7RUFHQSx5QkFBQTtBQ1BKOztBRFNJO0VBRUksMkJBQUE7RUFDQSxxQkFBQTtBQ1JSOztBRFlJO0VBQ0ksbUJBQUE7QUNWUjs7QURhSTtFQUVJLDBEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSx1RkFBQTtVQUFBLCtFQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtBQ1pSOztBRGtCSTtFQUVJLHlEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUZBQUE7VUFBQSx5RUFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7QUNqQlI7O0FEb0JJO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDbEJSOztBRHFCSTtFQUNJLE9BQUE7RUFDQSxVQUFBO0FDbkJSOztBRHNCSTtFQUNJLE9BQUE7RUFDQSxRQUFBO0FDcEJSOztBRDBCQTtFQUNJLG1DQUFBO0FDdkJKOztBRDBCQTtFQUNJLG1DQUFBO0FDdkJKOztBRDJCQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFFQSxpREFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUN6Qko7O0FENEJJO0VBQ0ksaURBQUE7RUFFQSxxQkFBQTtBQzNCUjs7QUQ4Qkk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQzVCUjs7QURnQ0E7RUFDSSxpR0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDN0JKOztBRGdDQTtFQUNJLFFBQUE7QUM3Qko7O0FEZ0NBO0VBQ0ksaUJBQUE7QUM3Qko7O0FEZ0NBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQzdCSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItY2hhdC91c2VyLWNoYXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb25zIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLmF2YXRhciB7XG4gICAgLS1ib3JkZXItY29sb3I6ICNmZmY7XG5cbiAgICAmLS1kYXRlIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cblxuICAgICYtLWljb24tb25saW5lIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgICYtLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgIH1cblxufVxuXG4ubWVzc2FnZS1jb250YWluZXIge1xuXG5cbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9pLnBpbmltZy5jb20vb3JpZ2luYWxzLzc5LzVjL2FiLzc5NWNhYmM0NjQ3ZjczYjM2NWUyZTZlYWJkMGYzNGRjLnBuZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogY292ZXIgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXG5cbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuXG4gICAgJi0tbWVzc2FnZSB7XG5cbiAgICAgICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG5cbiAgICB9XG5cbiAgICAmLS1pdGVtLWdyb3VwLWNvbnRhaW5lcjpsYXN0LW9mLXR5cGUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cblxuICAgICYtLW1lc3NhZ2UtcmVjZWl2ZWQge1xuICAgICAgICAvLyBzZSByaWNldnV0byxxdWluZGkgaWQgZGl2ZXJzbyBkYSBxdWVsbG8gbG9nZ2F0b1xuICAgICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNjOWQ2ZmYsICNlMmUyZTIpO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDExJSAxMDAlLCAxMDAlIDEwMCUsIDEwMCUgMjglLCAxMDAlIDAsIDEwMCUgMCwgMCAwLCAxMSUgMjglKTtcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAxNSU7XG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDUlO1xuXG5cblxuICAgIH1cblxuICAgICYtLW1lc3NhZ2Utc2VuZCB7XG4gICAgICAgIC8vIHNlIGludmlhdG8scXVpbmRpIGlkIHVhZ3VhbGUgYSBxdWVsbG8gbG9nZ2F0b1xuICAgICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzQzYzZhYywgI2Y4ZmZhZSk7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMCU7XG4gICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDEwMCUsIDg5JSAxMDAlLCA4OSUgMjglLCAxMDAlIDAsIDEwMCUgMCwgMCAwLCAwIDI4JSk7XG4gICAgICAgIC0taW5uZXItcGFkZGluZy1zdGFydDogNSU7XG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDE3JTtcbiAgICB9XG5cbiAgICAmLS1ob3VyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBjb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTouNik7XG4gICAgfVxuXG4gICAgJi0taG91ci1zZW5kIHtcbiAgICAgICAgdG9wOiAwJTtcbiAgICAgICAgcmlnaHQ6IDEyJTtcbiAgICB9XG5cbiAgICAmLS1ob3VyLXJlY2VpdmVkIHtcbiAgICAgICAgdG9wOiAwJTtcbiAgICAgICAgbGVmdDogNSU7XG4gICAgfVxuXG59XG5cbi8vIHBlciBuYXNjb25kZXJlIGJvcmRvIGNvbG9yYXRvIGRpIHZhbGlkYXppb25lXG4uaXRlbS1pbnRlcmFjdGl2ZS5pb24taW52YWxpZCB7XG4gICAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5pdGVtLWludGVyYWN0aXZlLmlvbi12YWxpZCB7XG4gICAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cblxuLnNlbmQtbWVzc2FnZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogMnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuXG5cbiAgICAmLS10ZXh0YXJlYSB7XG4gICAgICAgIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIH1cblxuICAgICYtLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDI3cHg7XG4gICAgICAgIGNvbG9yOiAjNDNjNmFjO1xuICAgIH1cbn1cblxuI2Zvb3RlckJhY2sge1xuICAgIC0tYmFja2dyb3VuZDogdXJsKCdodHRwczovL2kucGluaW1nLmNvbS9vcmlnaW5hbHMvNzkvNWMvYWIvNzk1Y2FiYzQ2NDdmNzNiMzY1ZTJlNmVhYmQwZjM0ZGMucG5nJyk7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgLS1wYWRkaW5nOiAzcHg7XG59XG5cbi5mb290ZXItbWQ6YmVmb3JlIHtcbiAgICB0b3A6IDBweDtcbn1cblxuLmNvbnRlbml0b3JlLXBob3RvIHtcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcbn1cblxuLmNvbnRlbml0b3JlLXBob3RvIGltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG59IiwiLmljb25zIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4uYXZhdGFyIHtcbiAgLS1ib3JkZXItY29sb3I6ICNmZmY7XG59XG4uYXZhdGFyLS1kYXRlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmF2YXRhci0taWNvbi1vbmxpbmUge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uYXZhdGFyLS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLm1lc3NhZ2UtY29udGFpbmVyIHtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAtLWJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vaS5waW5pbWcuY29tL29yaWdpbmFscy83OS81Yy9hYi83OTVjYWJjNDY0N2Y3M2IzNjVlMmU2ZWFiZDBmMzRkYy5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuLm1lc3NhZ2UtY29udGFpbmVyLS1tZXNzYWdlIHtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG4ubWVzc2FnZS1jb250YWluZXItLWl0ZW0tZ3JvdXAtY29udGFpbmVyOmxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubWVzc2FnZS1jb250YWluZXItLW1lc3NhZ2UtcmVjZWl2ZWQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNjOWQ2ZmYsICNlMmUyZTIpO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2lkdGg6IDgwJTtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDExJSAxMDAlLCAxMDAlIDEwMCUsIDEwMCUgMjglLCAxMDAlIDAsIDEwMCUgMCwgMCAwLCAxMSUgMjglKTtcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAxNSU7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDUlO1xufVxuLm1lc3NhZ2UtY29udGFpbmVyLS1tZXNzYWdlLXNlbmQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzQzYzZhYywgI2Y4ZmZhZSk7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMCU7XG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDEwMCUsIDg5JSAxMDAlLCA4OSUgMjglLCAxMDAlIDAsIDEwMCUgMCwgMCAwLCAwIDI4JSk7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogNSU7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDE3JTtcbn1cbi5tZXNzYWdlLWNvbnRhaW5lci0taG91ciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiA5cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cbi5tZXNzYWdlLWNvbnRhaW5lci0taG91ci1zZW5kIHtcbiAgdG9wOiAwJTtcbiAgcmlnaHQ6IDEyJTtcbn1cbi5tZXNzYWdlLWNvbnRhaW5lci0taG91ci1yZWNlaXZlZCB7XG4gIHRvcDogMCU7XG4gIGxlZnQ6IDUlO1xufVxuXG4uaXRlbS1pbnRlcmFjdGl2ZS5pb24taW52YWxpZCB7XG4gIC0taGlnaGxpZ2h0LWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uaXRlbS1pbnRlcmFjdGl2ZS5pb24tdmFsaWQge1xuICAtLWhpZ2hsaWdodC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLnNlbmQtbWVzc2FnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAycHg7XG4gIHdpZHRoOiAxMDAlO1xuICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5zZW5kLW1lc3NhZ2UtLXRleHRhcmVhIHtcbiAgLS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuLnNlbmQtbWVzc2FnZS0taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjdweDtcbiAgY29sb3I6ICM0M2M2YWM7XG59XG5cbiNmb290ZXJCYWNrIHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL2kucGluaW1nLmNvbS9vcmlnaW5hbHMvNzkvNWMvYWIvNzk1Y2FiYzQ2NDdmNzNiMzY1ZTJlNmVhYmQwZjM0ZGMucG5nXCIpO1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIC0tcGFkZGluZzogM3B4O1xufVxuXG4uZm9vdGVyLW1kOmJlZm9yZSB7XG4gIHRvcDogMHB4O1xufVxuXG4uY29udGVuaXRvcmUtcGhvdG8ge1xuICBwYWRkaW5nOiAyMHB4IDBweDtcbn1cblxuLmNvbnRlbml0b3JlLXBob3RvIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/user-chat/user-chat.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/user-chat/user-chat.page.ts ***!
  \***************************************************/
/*! exports provided: UserChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserChatPage", function() { return UserChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/media/ngx */ "./node_modules/@ionic-native/media/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _services_audio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/audio.service */ "./src/app/services/audio.service.ts");
/* harmony import */ var _services_fcm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/fcm.service */ "./src/app/services/fcm.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _photo_modal_photo_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../photo-modal/photo-modal.page */ "./src/app/pages/photo-modal/photo-modal.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _services_chat_photo_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../services/chat-photo.service */ "./src/app/services/chat-photo.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var src_app_services_send_message_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/services/send-message.service */ "./src/app/services/send-message.service.ts");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "./node_modules/@ionic-native/media-capture/ngx/index.js");


















let UserChatPage = class UserChatPage {
    constructor(route, router, usersService, db, formBuilder, sendMessageService, chatService, authService, camera, chatPhotoService, modalController, fcm, mediaCapture, audioService, file, media) {
        this.route = route;
        this.router = router;
        this.usersService = usersService;
        this.db = db;
        this.formBuilder = formBuilder;
        this.sendMessageService = sendMessageService;
        this.chatService = chatService;
        this.authService = authService;
        this.camera = camera;
        this.chatPhotoService = chatPhotoService;
        this.modalController = modalController;
        this.fcm = fcm;
        this.mediaCapture = mediaCapture;
        this.audioService = audioService;
        this.file = file;
        this.media = media;
        this.messages = [];
        this.friendData = {
            friendFirstname: '',
            friendLastname: '',
            friendPhoto: '',
            friendId: ''
        };
        this.idLoggedUser = this.authService.getIdLoggedUser();
        this.friendData = this.chatService.getFriendData();
        this.uid = this.friendData.friendId;
        this.firstname = this.friendData.friendFirstname;
        this.lastname = this.friendData.friendLastname;
        this.photo = this.friendData.friendPhoto;
        this.form = this.formBuilder.group({
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required)
        });
        this.getMessages();
        this.getStatus();
    }
    ngOnInit() {
        setTimeout(() => { this.content.scrollToBottom(); }, 100);
    }
    getStatus() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.usersService.getUserStatus(this.friendData.friendId).subscribe(res => {
                this.online = res[1];
                this.date = res[0];
            });
        });
    }
    ionViewDidEnter() {
        setTimeout(() => { this.content.scrollToBottom(); }, 100);
    }
    ionViewWillEnter() {
        this.idLoggedUser = this.authService.getIdLoggedUser();
    }
    // getFriendMess() {
    //   this.usersService.getFriendMess(this.idLoggedUser, this.friendData.friendId)
    //     .subscribe(user => {
    //       this.messages = user;
    //     })
    // }
    getMessages() {
        this.usersService.getCurrentUserMess(this.friendData.friendId, this.idLoggedUser).subscribe(mess => {
            this.usersService.getFriendMess(this.idLoggedUser, this.friendData.friendId).subscribe(mes => {
                this.messages = mes.concat(mess);
                this.messages = this.messages.sort((a, b) => a.createdAt - b.createdAt);
            });
        });
    }
    sendMessage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let testo = this.form.value.message.trim();
            if (testo !== '') {
                let data = new Date;
                let minutes = data.getMinutes();
                let zero = false;
                if (minutes < 10) {
                    zero = true;
                }
                let date = data.getHours() + ':' + (zero ? '0' : '') + minutes;
                this.sendMessageService.send(this.idLoggedUser, this.friendData.friendId).push({
                    createdAt: Date.now(),
                    uid: this.idLoggedUser,
                    text: testo,
                    photo: '',
                    audio: '',
                    date: date
                }).then(() => {
                    document.getElementById('valText').setAttribute('value', '');
                    this.sendMessageService.newMessages(this.friendData.friendId, this.idLoggedUser).update({
                        newMess: true
                    });
                    this.usersService.getLogUserData(this.idLoggedUser).subscribe(res => {
                        this.fcm.createNotification(res[1], res[2], this.friendData.friendId, testo); //da inserire token recuperato dalla lista di token registrati corrispondente a quell 'id dell'amico
                    });
                    setTimeout(() => { this.content.scrollToBottom(); }, 100);
                });
            }
        });
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
            this.sendPhotoMessage(base64Image);
        }, (err) => {
            alert(err);
        });
    }
    sendPhotoMessage(image) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.fileName = Date.now();
            let data = new Date;
            let minutes = data.getMinutes();
            let zero = false;
            if (minutes < 10) {
                zero = true;
            }
            let date = data.getHours() + ':' + (zero ? '0' : '') + minutes;
            this.task = this.chatPhotoService.upLoad(this.idLoggedUser, this.fileName).putString(image, 'data_url');
            this.task.then(() => {
                this.chatPhotoService.upLoad(this.idLoggedUser, this.fileName).getDownloadURL().then(url => {
                    this.urlPhoto = url;
                    setTimeout(() => { this.content.scrollToBottom(); }, 200);
                    this.usersService.getLogUserData(this.idLoggedUser).subscribe(res => {
                        this.chatPhotoService.savePhoto(this.idLoggedUser, this.friendData.friendId).push({
                            createdAt: Date.now(),
                            uid: this.idLoggedUser,
                            text: '',
                            photo: this.urlPhoto,
                            audio: '',
                            date: date
                        });
                    });
                });
            });
            document.getElementById('valText').setAttribute('value', '');
            this.sendMessageService.newMessages(this.friendData.friendId, this.idLoggedUser).update({
                newMess: true
            });
        });
    }
    backToChat() {
        this.sendMessageService.newMessages(this.idLoggedUser, this.friendData.friendId).update({
            newMess: false
        });
        this.router.navigateByUrl('home/chat');
    }
    openPhoto(url) {
        this.presentModal(url);
    }
    presentModal(url) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _photo_modal_photo_modal_page__WEBPACK_IMPORTED_MODULE_6__["PhotoModalPage"],
                componentProps: { url: url }
            });
            return yield modal.present();
        });
    }
    addAudio() {
        this.mediaCapture.captureAudio().then(audio => {
            console.log(audio);
            this.file.checkFile(audio[0].fullPath, audio[0].name).then(res => {
                console.log(res);
            });
            let aud = 'data:audio/mpeg;base64url,' + audio[0].fullPath.toString();
            this.sendAudioMessage(aud);
        });
        ////
        // this.mediaCapture.captureAudio().then(audio => {
        //   // let n = audio[0].fullPath.lastIndexOf("/");
        //   // let x = audio[0].fullPath.lastIndexOf("g");
        //   // let nameFile = audio[0].fullPath.substring(n + 1, x + 1);
        //   // let directory = audio[0].fullPath.substring(0, n);
        //   this.file.readAsArrayBuffer(audio[0].fullPath.toString(), audio[0].fullPath).then((res) => {
        //     let blob = new Blob([res], { type: "audio/mpeg" });
        //     this.sendAudioMessage(blob)
        //   })
        // })
    }
    sendAudioMessage(audio) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.fileName = Date.now();
            let data = new Date;
            let minutes = data.getMinutes();
            let zero = false;
            if (minutes < 10) {
                zero = true;
            }
            let date = data.getHours() + ':' + (zero ? '0' : '') + minutes;
            let metadata = {
                contentType: 'audio/mpeg'
            };
            this.task = this.audioService.upLoadAudio(this.idLoggedUser, this.fileName).putString(audio, 'base64url');
            this.task.then(() => {
                this.audioService.upLoadAudio(this.idLoggedUser, this.fileName).getDownloadURL().then(url => {
                    this.urlAudio = url;
                    setTimeout(() => { this.content.scrollToBottom(); }, 200);
                    this.usersService.getLogUserData(this.idLoggedUser).subscribe(res => {
                        this.audioService.saveAudio(this.idLoggedUser, this.friendData.friendId).push({
                            createdAt: Date.now(),
                            uid: this.idLoggedUser,
                            text: '',
                            photo: '',
                            audio: this.urlAudio,
                            date: date
                        });
                    });
                });
            });
            document.getElementById('valText').setAttribute('value', '');
            this.sendMessageService.newMessages(this.friendData.friendId, this.idLoggedUser).update({
                newMess: true
            });
        });
    }
};
UserChatPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"] },
    { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_15__["UsersService"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"] },
    { type: src_app_services_send_message_service__WEBPACK_IMPORTED_MODULE_16__["SendMessageService"] },
    { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_11__["ChatService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"] },
    { type: _services_chat_photo_service__WEBPACK_IMPORTED_MODULE_9__["ChatPhotoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _services_fcm_service__WEBPACK_IMPORTED_MODULE_4__["FcmService"] },
    { type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_17__["MediaCapture"] },
    { type: _services_audio_service__WEBPACK_IMPORTED_MODULE_3__["AudioService"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__["File"] },
    { type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_1__["Media"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ViewChild"])('content', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UserChatPage.prototype, "content", void 0);
UserChatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Component"])({
        selector: 'app-user-chat',
        template: __webpack_require__(/*! raw-loader!./user-chat.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/user-chat/user-chat.page.html"),
        styles: [__webpack_require__(/*! ./user-chat.page.scss */ "./src/app/pages/user-chat/user-chat.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"],
        src_app_services_users_service__WEBPACK_IMPORTED_MODULE_15__["UsersService"],
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"],
        src_app_services_send_message_service__WEBPACK_IMPORTED_MODULE_16__["SendMessageService"],
        _services_chat_service__WEBPACK_IMPORTED_MODULE_11__["ChatService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"],
        _services_chat_photo_service__WEBPACK_IMPORTED_MODULE_9__["ChatPhotoService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"],
        _services_fcm_service__WEBPACK_IMPORTED_MODULE_4__["FcmService"],
        _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_17__["MediaCapture"],
        _services_audio_service__WEBPACK_IMPORTED_MODULE_3__["AudioService"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__["File"],
        _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_1__["Media"]])
], UserChatPage);



/***/ }),

/***/ "./src/app/pipes/sort.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/sort.pipe.ts ***!
  \************************************/
/*! exports provided: SortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortPipe", function() { return SortPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SortPipe = class SortPipe {
    transform(array, field) {
        if (!Array.isArray(array)) {
            return;
        }
        array.sort((a, b) => {
            return a.createdAt - b.createdAt;
        });
        return array;
    }
};
SortPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: "sort"
    })
], SortPipe);



/***/ }),

/***/ "./src/app/services/audio.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/audio.service.ts ***!
  \*******************************************/
/*! exports provided: AudioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioService", function() { return AudioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let AudioService = class AudioService {
    constructor(storage, db) {
        this.storage = storage;
        this.db = db;
    }
    upLoadAudio(idLogged, fileName) {
        return this.storage.storage.ref(`messages/${idLogged}/${fileName}.mpeg`);
    }
    saveAudio(idLogged, idFriend) {
        return this.db.database.ref(`/chat/${idLogged}/${idFriend}/messages/`);
    }
};
AudioService.ctorParameters = () => [
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] }
];
AudioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"],
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
], AudioService);



/***/ }),

/***/ "./src/app/services/chat-photo.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/chat-photo.service.ts ***!
  \************************************************/
/*! exports provided: ChatPhotoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPhotoService", function() { return ChatPhotoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let ChatPhotoService = class ChatPhotoService {
    constructor(storage, db) {
        this.storage = storage;
        this.db = db;
    }
    upLoad(idLogged, fileName) {
        return this.storage.storage.ref(`messages/${idLogged}/${fileName}.jpg`);
    }
    savePhoto(idLogged, idFriend) {
        return this.db.database.ref(`/chat/${idLogged}/${idFriend}/messages/`);
    }
};
ChatPhotoService.ctorParameters = () => [
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] }
];
ChatPhotoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"],
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
], ChatPhotoService);



/***/ })

}]);
//# sourceMappingURL=pages-user-chat-user-chat-module-es2015.js.map