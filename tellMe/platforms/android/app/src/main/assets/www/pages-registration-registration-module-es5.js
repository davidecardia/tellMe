(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-registration-registration-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/registration/registration.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/registration/registration.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"cont-registr\">\n  <form [formGroup]=\"form\" (ngSubmit)=\"register()\">\n    <ion-item class=\"cont-registr--item\" text-center>\n      <ion-title class=\"cont-registr--title\">Registrazione</ion-title>\n    </ion-item>\n\n    <div class=\"cont-input\">\n      <ion-item text-center class=\"cont-input--item\">\n        <ion-label class=\"cont-input--label\" position=\"floating\">*Nome</ion-label>\n        <ion-input formControlName=\"firstname\"></ion-input>\n      </ion-item>\n      <ion-item text-center class=\"cont-input--item\">\n        <ion-label class=\"cont-input--label\" position=\"floating\">*Cognome</ion-label>\n        <ion-input formControlName=\"lastname\"></ion-input>\n      </ion-item>\n      <ion-item text-center class=\"cont-input--item\">\n        <ion-label class=\"cont-input--label\" position=\"floating\">*Email</ion-label>\n        <ion-input formControlName=\"email\"></ion-input>\n      </ion-item>\n      <ion-item text-center class=\"cont-input--item\">\n        <ion-label class=\"cont-input--label\" position=\"floating\">*Password</ion-label>\n        <ion-input formControlName=\"password\"></ion-input>\n      </ion-item>\n      <ion-item text-center class=\"cont-input--item\">\n        <ion-label class=\"cont-input--label\" position=\"floating\">*Conferma password</ion-label>\n        <ion-input formControlName=\"cpassword\"></ion-input>\n      </ion-item>\n      <ion-item text-center class=\"cont-input--item\">\n        <div class=\"fileUpload\">\n          <span class=\"cont-input--label\">Foto profilo  </span>\n          <span *ngIf=\"!file\" class=\"cont-input--label\">+</span>\n          <ion-icon color=\"success\" *ngIf=\"file\" class=\"cont-input--label\" name=\"checkmark\"></ion-icon>\n          <input class=\"upload\" (change)=\"getPhoto($event)\" type=\"file\" formControlName=\"photo\">\n        </div>\n      </ion-item>\n    </div>\n    <div class=\"cont-btn\">\n      <ion-button expand=\"full\" fill=\"clear\" class=\"cont-btn--btn\" id=\"login\" type=\"submit\"> Registrati</ion-button>\n      <ion-button expand=\"full\" fill=\"clear\" class=\"cont-btn--btn\" id=\"registr\" [routerLink]=\"[ '/login']\"> Login\n      </ion-button>\n    </div>\n\n\n  </form>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/registration/registration.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/registration/registration.module.ts ***!
  \***********************************************************/
/*! exports provided: RegistrationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageModule", function() { return RegistrationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _registration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registration.page */ "./src/app/pages/registration/registration.page.ts");







var routes = [
    {
        path: '',
        component: _registration_page__WEBPACK_IMPORTED_MODULE_6__["RegistrationPage"]
    }
];
var RegistrationPageModule = /** @class */ (function () {
    function RegistrationPageModule() {
    }
    RegistrationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_registration_page__WEBPACK_IMPORTED_MODULE_6__["RegistrationPage"]]
        })
    ], RegistrationPageModule);
    return RegistrationPageModule;
}());



/***/ }),

/***/ "./src/app/pages/registration/registration.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/registration/registration.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cont-registr {\n  --background: #000000;\n}\n.cont-registr--title {\n  font-size: 20px;\n  letter-spacing: 6px;\n  color: #000000;\n  font-weight: bold;\n}\n.cont-registr--item {\n  font-size: 18px;\n  color: #ffffff;\n  --border-color: transparent;\n}\n.cont-input {\n  margin-top: 10%;\n}\n.cont-input--item {\n  font-size: 18px;\n  color: #ffffff;\n  --background: transparent;\n}\n.cont-input--label {\n  color: rgba(255, 255, 255, 0.6);\n}\n.cont-btn {\n  margin-top: 14%;\n}\n.cont-btn--btn {\n  text-align: center !important;\n}\n.cont-btn #login {\n  letter-spacing: 8px;\n  color: #fff;\n  margin-bottom: 40px;\n  font-size: 30px;\n}\n.cont-btn #registr {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.6);\n  letter-spacing: 4px;\n}\n.fileUpload {\n  position: relative;\n  overflow: hidden;\n  margin: 10px;\n  left: 35%;\n}\n.fileUpload input.upload {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  font-size: 20px;\n  cursor: pointer;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhdmlkZS9TY3JpdmFuaWEvbnVvdmlQcm9nZXR0aS90ZWxsbWUvdGVsbE1lL3NyYy9hcHAvcGFnZXMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSjtBRENJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQ1I7QURHSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7QUNEUjtBRE1BO0VBQ0ksZUFBQTtBQ0hKO0FES0k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDSFI7QURNSTtFQUNJLCtCQUFBO0FDSlI7QURXQTtFQUNJLGVBQUE7QUNSSjtBRFVJO0VBQ0ksNkJBQUE7QUNSUjtBRFdJO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDVFI7QURZSTtFQUNJLGVBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0FDVlI7QURnQkE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUNiSjtBRGdCQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0FDYkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250LXJlZ2lzdHIge1xuICAgIC0tYmFja2dyb3VuZDogIzAwMDAwMDtcblxuICAgICYtLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogNnB4O1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICB9XG5cbiAgICAmLS1pdGVtIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cblxufVxuXG4uY29udC1pbnB1dCB7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuXG4gICAgJi0taXRlbSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgJi0tbGFiZWwge1xuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNik7XG4gICAgfVxuXG5cbn1cblxuXG4uY29udC1idG4ge1xuICAgIG1hcmdpbi10b3A6IDE0JTtcblxuICAgICYtLWJ0biB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgICNsb2dpbiB7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiA4cHg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuXG4gICAgI3JlZ2lzdHIge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC42KTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcblxuICAgIH1cbn1cblxuXG4uZmlsZVVwbG9hZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGxlZnQ6IDM1JTtcbn1cblxuLmZpbGVVcGxvYWQgaW5wdXQudXBsb2FkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3BhY2l0eTogMDtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG59IiwiLmNvbnQtcmVnaXN0ciB7XG4gIC0tYmFja2dyb3VuZDogIzAwMDAwMDtcbn1cbi5jb250LXJlZ2lzdHItLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogNnB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udC1yZWdpc3RyLS1pdGVtIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uY29udC1pbnB1dCB7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn1cbi5jb250LWlucHV0LS1pdGVtIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5jb250LWlucHV0LS1sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG59XG5cbi5jb250LWJ0biB7XG4gIG1hcmdpbi10b3A6IDE0JTtcbn1cbi5jb250LWJ0bi0tYnRuIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG4uY29udC1idG4gI2xvZ2luIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDhweDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5jb250LWJ0biAjcmVnaXN0ciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbn1cblxuLmZpbGVVcGxvYWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMTBweDtcbiAgbGVmdDogMzUlO1xufVxuXG4uZmlsZVVwbG9hZCBpbnB1dC51cGxvYWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDA7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/registration/registration.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/registration/registration.page.ts ***!
  \*********************************************************/
/*! exports provided: RegistrationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPage", function() { return RegistrationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");





var RegistrationPage = /** @class */ (function () {
    function RegistrationPage(authService, usersService, formBuilder) {
        this.authService = authService;
        this.usersService = usersService;
        this.formBuilder = formBuilder;
        this.form = this.formBuilder.group({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            cpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])),
            photo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    RegistrationPage.prototype.ngOnInit = function () {
    };
    RegistrationPage.prototype.getPhoto = function (event) {
        this.file = event.target.files[0];
    };
    RegistrationPage.prototype.register = function () {
        if (this.form.valid) {
            try {
                this.authService.register(this.form.value.email, this.form.value.password, this.form.value.cpassword, this.form.value.firstname, this.form.value.lastname, this.file);
                // localStorage.setItem('nome', this.form.value.firstname);
                // localStorage.setItem('cognome', this.form.value.lastname);
                // localStorage.setItem('email', this.form.value.email);
            }
            catch (error) {
                console.log(error);
            }
        }
    };
    RegistrationPage.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
        { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    RegistrationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! raw-loader!./registration.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/registration/registration.page.html"),
            styles: [__webpack_require__(/*! ./registration.page.scss */ "./src/app/pages/registration/registration.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            src_app_services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], RegistrationPage);
    return RegistrationPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-registration-registration-module-es5.js.map