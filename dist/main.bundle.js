webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* unused harmony export routing */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_auth_gaurd_service__ = __webpack_require__("./src/app/service/auth-gaurd.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forget_forget_component__ = __webpack_require__("./src/app/forget/forget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__resetpassword_resetpassword_component__ = __webpack_require__("./src/app/resetpassword/resetpassword.component.ts");







var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__service_auth_gaurd_service__["a" /* AuthGaurdService */]]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'forget',
        component: __WEBPACK_IMPORTED_MODULE_5__forget_forget_component__["a" /* ForgetComponent */]
    },
    {
        path: 'reset-password/:token',
        component: __WEBPACK_IMPORTED_MODULE_6__resetpassword_resetpassword_component__["a" /* ResetpasswordComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { useHash: true });


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes__ = __webpack_require__("./src/app/app-routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_text_mask__ = __webpack_require__("./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__service_auth_gaurd_service__ = __webpack_require__("./src/app/service/auth-gaurd.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__forget_forget_component__ = __webpack_require__("./src/app/forget/forget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__resetpassword_resetpassword_component__ = __webpack_require__("./src/app/resetpassword/resetpassword.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__forget_forget_component__["a" /* ForgetComponent */],
                __WEBPACK_IMPORTED_MODULE_15__resetpassword_resetpassword_component__["a" /* ResetpasswordComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9_angular2_text_mask__["TextMaskModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_routes__["a" /* appRoutes */]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__service_auth_gaurd_service__["a" /* AuthGaurdService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_14__angular_common__["g" /* LocationStrategy */],
                    useClass: __WEBPACK_IMPORTED_MODULE_14__angular_common__["d" /* HashLocationStrategy */]
                }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/common.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return validateEmail; });
/* unused harmony export validatePhoneNum */
/* unused harmony export validateFirstName */
/* unused harmony export validatePassword */
/* unused harmony export matchingPasswords */
/* unused harmony export validateSlug */
/* unused harmony export validateMinVal */
/* unused harmony export validateMaxVal */
/* unused harmony export validatePassportNum */
var validateEmail = function (c) {
    if (isEmptyInputValue(c.value)) {
        return null; // don't validate empty values to allow optional controls
    }
    var EMAIL_REGEXP = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;
    return EMAIL_REGEXP.test(c.value) ? null : {
        validateEmail: {
            valid: false
        }
    };
};
var validatePhoneNum = function (c) {
    if (isEmptyInputValue(c.value)) {
        return null; // don't validate empty values to allow optional controls
    }
    var REGEXP = /^\+?[0-9\(\)\-\.\ ]{7,20}[0-9]{3}$/;
    return REGEXP.test(c.value) ? null : {
        validatePhoneNum: {
            valid: false
        }
    };
};
var validateFirstName = function (c) {
    if (isEmptyInputValue(c.value)) {
        return null; // don't validate empty values to allow optional controls
    }
    var REGEXP = /^[a-zA-Z\.]{2,}[a-zA-Z ]{0,30}$/;
    return REGEXP.test(c.value) ? null : {
        validateFirstName: {
            valid: false
        }
    };
};
var validatePassword = function (c) {
    if (isEmptyInputValue(c.value)) {
        return null; // don't validate empty values to allow optional controls
    }
    var REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\(\)\-\_\=\+\{\}\[\]\;\:\'\"\,\.\<\>\/\\\|\?])(?=.{8,})/;
    return REGEXP.test(c.value) ? null : {
        validatePassword: {
            valid: false
        }
    };
};
function matchingPasswords(passwordKey, confirmPasswordKey) {
    return function (group) {
        var password = group.controls[passwordKey];
        var confirmPassword = group.controls[confirmPasswordKey];
        if (password.value !== confirmPassword.value) {
            return {
                mismatchedPasswords: true
            };
        }
    };
}
var validateSlug = function (c) {
    if (isEmptyInputValue(c.value)) {
        return null; // don't validate empty values to allow optional controls
    }
    var REGEXP = /^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/;
    return REGEXP.test(c.value) ? null : {
        validateSlug: {
            valid: false
        }
    };
};
var validateMinVal = function (min) {
    return function (c) {
        if (isEmptyInputValue(c.value)) {
            return null; // don't validate empty values to allow optional controls
        }
        var num = +c.value;
        if (isNaN(num) || num < min) {
            return {
                validateMinVal: {
                    valid: false
                }
            };
        }
        return null;
    };
};
var validateMaxVal = function (max) {
    return function (c) {
        if (isEmptyInputValue(c.value)) {
            return null; // don't validate empty values to allow optional controls
        }
        var num = +c.value;
        if (isNaN(num) || num > max) {
            return {
                validateMaxVal: {
                    valid: false
                }
            };
        }
        return null;
    };
};
var validatePassportNum = function (c) {
    if (isEmptyInputValue(c.value)) {
        return null; // don't validate empty values to allow optional controls
    }
    var REGEXP = /[a-zA-Z]{2}[0-9]{7}/;
    return REGEXP.test(c.value) ? null : {
        validatePassportNum: {
            valid: false
        }
    };
};
function isEmptyInputValue(value) {
    return value == null || typeof value === 'string' && value.length === 0;
}


/***/ }),

/***/ "./src/app/common/password.validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordValidation; });
var PasswordValidation = /** @class */ (function () {
    function PasswordValidation() {
    }
    PasswordValidation.MatchPassword = function (AC) {
        var password = AC.get('password').value; // to get value in input tag
        var confirm_password = AC.get('cpassword').value; // to get value in input tag
        if (password != confirm_password) {
            AC.get('cpassword').setErrors({ MatchPassword: true });
        }
        else {
            return null;
        }
    };
    return PasswordValidation;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\">TestApp</a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li (click)=\"logout()\"><a href=\"#\">Logout</a></li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_router) {
        this._router = _router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.logout = function () {
        localStorage.removeItem('token');
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/forget/forget.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forget/forget.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row top\">\n    <div class=\"col-sm-12\">\n        <h2 >Login Form</h2>\n    </div>\n    <form [formGroup]=\"resetForm\" class=\"col-sm-8\">\n      <div class=\"form-group col-sm-6\">\n          <label>Email*</label>\n        <input type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"Email\">\n        <div *ngIf=\"resetForm.controls['email'].errors && resetForm.controls['email'].touched\" class=\"error-msg\">\n          <div [hidden]=\"!resetForm.controls['email'].errors.required\">You have to fill in email to reset password.</div>\n        </div>\n      </div>\n      <div class=\"form-group col-sm-6\">\n        <input type=\"submit\" class=\"col-sm-5 btn btn-primary\" (click)=\"reset()\" value=\"Reset Password\" [disabled]=\"!resetForm.valid\"/>\n      </div>\n    </form>\n    <div class=\"col-sm-12\">\n      <label>Remember password?</label><a routerLink=\"/login\">Login</a>\n    </div>\n  </div>\n  <div class=\"col-sm-12\" *ngIf=\"sentEmail\">\n    <h3>We have sent you a mail on your registered email. Please check the link to reset password.</h3>\n  </div>\n  <div class=\"col-sm-12\" *ngIf=\"msg\">\n    <h3>{{message}}</h3>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/forget/forget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forget_service__ = __webpack_require__("./src/app/forget/forget.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgetComponent = /** @class */ (function () {
    function ForgetComponent(formBuilder, service, _router) {
        this.formBuilder = formBuilder;
        this.service = service;
        this._router = _router;
        this.sentEmail = false;
        this.msg = false;
    }
    ForgetComponent.prototype.ngOnInit = function () {
        this.resetForm = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])]
        });
    };
    ForgetComponent.prototype.reset = function () {
        var _this = this;
        var email = this.resetForm.value.email;
        this.resetService = this.service.forget(email).then(function (res) {
            if (res.status == 200) {
                _this.sentEmail = true;
                setTimeout(function () {
                    _this._router.navigate(['login']);
                }, 3000);
            }
            else {
                _this.msg = true;
                _this.message = res.msg;
                setTimeout(function () {
                    _this.message = res.msg;
                }, 2000);
            }
        });
    };
    ForgetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forget',
            template: __webpack_require__("./src/app/forget/forget.component.html"),
            styles: [__webpack_require__("./src/app/forget/forget.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__forget_service__["a" /* ForgetService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_2__forget_service__["a" /* ForgetService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ForgetComponent);
    return ForgetComponent;
}());



/***/ }),

/***/ "./src/app/forget/forget.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgetService = /** @class */ (function () {
    function ForgetService(_router, http) {
        this._router = _router;
        this.http = http;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].config.BASE_URL;
    }
    ForgetService.prototype.forget = function (email) {
        return this.http.post(this.BASE_URL + "user/reset-password", { email: email }).
            toPromise().then(function (res) { return res.json(); });
    };
    ForgetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], ForgetService);
    return ForgetService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row top\">\n    <div class=\"col-sm-12\">\n        <h2 >Login Form</h2>\n    </div>\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"login(loginForm.value)\" class=\"col-sm-8\">\n      <div class=\"form-group col-sm-6\">\n          <label>Email*</label>\n        <input type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"Email\">\n        <div *ngIf=\"loginForm.controls['email'].errors && loginForm.controls['email'].touched\" class=\"error-msg\">\n          <div [hidden]=\"!loginForm.controls['email'].errors.required\">You have to fill in email to login.</div>\n        </div>\n      </div>\n      <div class=\"form-group col-sm-6\">\n          <label>Password*</label>\n        <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\">\n        <div *ngIf=\"loginForm.controls['password'].errors && loginForm.controls['password'].touched\" class=\"error-msg\">\n          <div [hidden]=\"!loginForm.controls['password'].errors.required\">You have to fill in password to login.</div>\n        </div>\n      </div>\n      <div class=\"form-group col-sm-6\">\n        <input type=\"submit\" class=\"col-sm-2 btn btn-primary\" value=\"Login\" [disabled]=\"!loginForm.valid\"/>\n        <label class=\"\">\n          Not a user? <a routerLink=\"/\">Sign up</a>\n        </label> \n      </div>\n    </form>\n    <div class=\"col-sm-12\" *ngIf=\"invalidLogin\">\n      <h2 class=\"error-msg\">Invalid Email/password.</h2>\n    </div>\n    <div class=\"col-sm-12\">\n      <a routerLink=\"/forget\">Forgot your password?</a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("./src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, service, _router) {
        this.formBuilder = formBuilder;
        this.service = service;
        this._router = _router;
        this.invalidLogin = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])]
        });
    };
    LoginComponent.prototype.login = function (value) {
        var _this = this;
        this.loginService = this.service.login(value).then(function (res) {
            if (res.status == 200) {
                localStorage.setItem('token', res.data.token);
                _this._router.navigate(['/dashboard']);
            }
            else {
                _this.invalidLogin = true;
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = /** @class */ (function () {
    function LoginService(_router, http) {
        this._router = _router;
        this.http = http;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].config.BASE_URL;
    }
    LoginService.prototype.login = function (userData) {
        return this.http.post(this.BASE_URL + "user/login", { userData: userData }).
            toPromise().then(function (res) { return res.json(); });
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row top\">\n    <div class=\"col-sm-12\">\n        <h2 class=\"align-center\">Register Form</h2>\n    </div>\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"signup(registerForm.value)\" class=\"col-sm-8\">\n      <div class=\"row\">\n          <div class=\"form-group col-sm-6\">\n              <label>First Name*</label>\n            <input type=\"text\" formControlName= \"fname\" class=\"form-control\" placeholder=\"First Name\">\n            <div class=\"error-msg\" *ngIf=\"registerForm.controls['fname'].errors && registerForm.controls['fname'].touched\">\n              <div [hidden]=\"!registerForm.controls['fname'].errors.required\">You have to fill in first name to register.</div>\n              <div [hidden]=\"!registerForm.controls['fname'].errors.minlength\">Min 3 characters required.</div>\n              <div [hidden]=\"!registerForm.controls['fname'].errors.maxlength\">Max 10 characters allowed.</div>\n            </div>\n          </div>\n          <div class=\"form-group col-sm-6\">\n              <label>Last Name*</label>\n            <input type=\"text\" formControlName= \"lname\" class=\"form-control\" placeholder=\"Last Name\">\n            <div *ngIf=\"registerForm.controls['lname'].errors && registerForm.controls['lname'].touched\" class=\"error-msg\">\n              <div [hidden]=\"!registerForm.controls['lname'].errors.required\">You have to fill in last name to register.</div>\n              <div [hidden]=\"!registerForm.controls['lname'].errors.minlength\">Min 3 characters required.</div>\n              <div [hidden]=\"!registerForm.controls['lname'].errors.maxlength\">Max 10 characters allowed.</div>\n            </div>\n          </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group col-sm-6\">\n            <label>Email*</label>\n          <input type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"Email\">\n          <div *ngIf=\"registerForm.controls['email'].errors && registerForm.controls['email'].touched\" class=\"error-msg\">\n            <div [hidden]=\"!registerForm.controls['email'].errors.required\">You have to fill in email to register.</div>\n            <div [hidden]=\"!registerForm.controls['email'].errors.minlength\">Min 5 characters required.</div>\n            <div [hidden]=\"!registerForm.controls['email'].errors.maxlength\">Max 30 characters allowed.</div>\n            <div [hidden]=\"!registerForm.controls['email'].errors.validateEmail\">Invalid email address.</div>\n          </div>\n        </div>\n        <div class=\"form-group col-sm-6\">\n            <label>Password*</label>\n          <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\">\n          <div *ngIf=\"registerForm.controls['password'].errors && registerForm.controls['password'].touched\" class=\"error-msg\">\n            <div [hidden]=\"!registerForm.controls['password'].errors.required\">You have to fill in password to register.</div>\n            <div [hidden]=\"!registerForm.controls['password'].errors.minlength\">Min 6 characters required.</div>\n            <div [hidden]=\"!registerForm.controls['password'].errors.maxlength\">Max 10 characters allowed.</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n          <div class=\"form-group col-sm-6\">\n              <label>Confirm Password*</label>\n            <input type=\"password\" class=\"form-control\" formControlName=\"cpassword\" placeholder=\"Confirm Password\">\n            <div *ngIf=\"registerForm.controls['cpassword'].errors && registerForm.controls['cpassword'].touched\" class=\"error-msg\">\n              <div [hidden]=\"!registerForm.controls['cpassword'].errors.required\">You have to fill in confirm password to register.</div>\n              <div [hidden]=\"!registerForm.controls['cpassword'].errors.MatchPassword\">Password mismatch.</div>\n            </div>\n          </div>\n          <div class=\"form-group col-sm-6\">\n              <label>Company Name*</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"cname\" placeholder=\"Company Name\">\n            <div *ngIf=\"registerForm.controls['cname'].errors && registerForm.controls['cname'].touched\" class=\"error-msg\">\n              <div [hidden]=\"!registerForm.controls['cname'].errors.required\">You have to fill in password to register.</div>\n              <div [hidden]=\"!registerForm.controls['cname'].errors.minlength\">Min 3 characters required.</div>\n              <div [hidden]=\"!registerForm.controls['cname'].errors.maxlength\">Max 10 characters allowed.</div>\n            </div>\n          </div>\n      </div>\n      <div class=\"row\">\n          <div class=\"form-group col-sm-6\">\n            <label>Address</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"address\" placeholder=\"Address\">\n            <div *ngIf=\"registerForm.controls['address'].errors && registerForm.controls['address'].touched\" class=\"error-msg\">\n              <div [hidden]=\"!registerForm.controls['address'].errors.minlength\">Min 5 characters required.</div>\n              <div [hidden]=\"!registerForm.controls['address'].errors.maxlength\">Max 20 characters allowed.</div>\n            </div>\n          </div>\n          <div class=\"form-group col-sm-6\">\n            <label>Phone No.*</label>\n            <input type=\"text\" [textMask]=\"{mask: mask}\" pattern=\"[0-9- ()+]*\" class=\"form-control\" formControlName=\"phone\" placeholder=\"Phone Number\">\n            <div *ngIf=\"registerForm.controls['phone'].errors && registerForm.controls['phone'].touched\" class=\"error-msg\">\n              <div [hidden]=\"!registerForm.controls['phone'].errors.required\">You have to fill in phone to register.</div>\n              <div [hidden]=\"!registerForm.controls['phone'].errors.minlength\">Min 10 characters required.</div>\n              <div [hidden]=\"!registerForm.controls['phone'].errors.maxlength\">Max 15 characters allowed.</div>\n              <div [hidden]=\"!registerForm.controls['phone'].errors.pattern\">Only numbers are allowed.</div>\n            </div>\n          </div>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"submit\" class=\"col-sm-3 btn btn-primary\" value=\"Register\" [disabled]=\"!registerForm.valid\"/>\n        Already a user? <a routerLink=\"/login\">Login</a>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_common__ = __webpack_require__("./src/app/common/common.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_password_validator__ = __webpack_require__("./src/app/common/password.validator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_service__ = __webpack_require__("./src/app/register/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, service, zone, _router) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.zone = zone;
        this._router = _router;
        this.mask = ['+', '9', '1', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            fname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(10)])],
            lname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(10)])],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__common_common__["a" /* validateEmail */]])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(6), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(10)])],
            cname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(10)])],
            cpassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            address: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(5), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(20)])],
            phone: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(18)])]
        }, {
            validator: __WEBPACK_IMPORTED_MODULE_3__common_password_validator__["a" /* PasswordValidation */].MatchPassword
        });
    };
    RegisterComponent.prototype.signup = function (value) {
        var _this = this;
        var userDetails = this.registerForm.value;
        this.register = this.service.register(userDetails).then(function (res) {
            if (res.status == '200') {
                localStorage.setItem('token', res.data.token);
                _this._router.navigate(['/dashboard']);
            }
            else {
                alert('Email already exist');
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__register_service__["a" /* RegisterService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4__register_service__["a" /* RegisterService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/register/register.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterService = /** @class */ (function () {
    function RegisterService(_router, http) {
        this._router = _router;
        this.http = http;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].config.BASE_URL;
    }
    RegisterService.prototype.register = function (userData) {
        return this.http.post(this.BASE_URL + "user/signup", { userData: userData }).
            toPromise().then(function (res) { return res.json(); });
    };
    RegisterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/app/resetpassword/reset-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetServiceService = /** @class */ (function () {
    function ResetServiceService(_router, http) {
        this._router = _router;
        this.http = http;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].config.BASE_URL;
    }
    ResetServiceService.prototype.resetPassword = function (userData) {
        return this.http.post(this.BASE_URL + "user/resetpassword", { userData: userData }).
            toPromise().then(function (res) { return res.json(); });
    };
    ResetServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], ResetServiceService);
    return ResetServiceService;
}());



/***/ }),

/***/ "./src/app/resetpassword/resetpassword.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/resetpassword/resetpassword.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row top\">\n    <div class=\"col-sm-12\">\n        <h2 >Reset Password</h2>\n    </div>\n    <form [formGroup]=\"passForm\" (ngSubmit)=\"changePassword(passForm.value)\" class=\"col-sm-8\">\n      <div class=\"form-group col-sm-6\">\n          <label>Password*</label>\n        <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Email\">\n        <div *ngIf=\"passForm.controls['password'].errors && passForm.controls['password'].touched\" class=\"error-msg\">\n          <div [hidden]=\"!passForm.controls['password'].errors.required\">You have to fill in password to login.</div>\n        </div>\n      </div>\n      <div class=\"form-group col-sm-6\">\n          <label>Confirm Password*</label>\n        <input type=\"password\" class=\"form-control\" formControlName=\"cpassword\" placeholder=\"Password\">\n        <div *ngIf=\"passForm.controls['cpassword'].errors && passForm.controls['cpassword'].touched\" class=\"error-msg\">\n          <div [hidden]=\"!passForm.controls['cpassword'].errors.required\">You have to fill in confirm password to login.</div>\n          <div [hidden]=\"!passForm.controls['cpassword'].errors.MatchPassword\">Password mismatch.</div>\n        </div>\n      </div>\n      <div class=\"form-group col-sm-6\">\n        <input type=\"submit\" class=\"col-sm-4 btn btn-primary\" value=\"Change Password\" [disabled]=\"!passForm.valid\"/>\n        <label class=\"\">\n          Remember password? <a routerLink=\"/login\">Sign in</a>\n        </label> \n      </div>\n    </form>\n    <div class=\"col-sm-12\" *ngIf=\"msg\">\n      <h3>Password changed successfully. Please Login now with new password</h3>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/resetpassword/resetpassword.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetpasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_password_validator__ = __webpack_require__("./src/app/common/password.validator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reset_service_service__ = __webpack_require__("./src/app/resetpassword/reset-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResetpasswordComponent = /** @class */ (function () {
    function ResetpasswordComponent(formBuilder, _router, service, activatedRoute) {
        this.formBuilder = formBuilder;
        this._router = _router;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.msg = false;
    }
    ResetpasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.passForm = this.formBuilder.group({
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            cpassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
        }, {
            validator: __WEBPACK_IMPORTED_MODULE_3__common_password_validator__["a" /* PasswordValidation */].MatchPassword
        });
        this.activatedRoute.params.subscribe(function (params) {
            _this.paramdata = params.token;
        });
    };
    ResetpasswordComponent.prototype.changePassword = function (formValue) {
        var _this = this;
        var data = {
            password: formValue.password,
            token: this.paramdata
        };
        this.passService = this.service.resetPassword(data).then(function (res) {
            if (res.status == 200) {
                _this.msg = true;
                setTimeout(function () {
                    _this._router.navigate(['/login']);
                });
            }
        });
    };
    ResetpasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-resetpassword',
            template: __webpack_require__("./src/app/resetpassword/resetpassword.component.html"),
            styles: [__webpack_require__("./src/app/resetpassword/resetpassword.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__reset_service_service__["a" /* ResetServiceService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__reset_service_service__["a" /* ResetServiceService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ResetpasswordComponent);
    return ResetpasswordComponent;
}());



/***/ }),

/***/ "./src/app/service/auth-gaurd.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGaurdService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGaurdService = /** @class */ (function () {
    function AuthGaurdService(router) {
        this.router = router;
    }
    AuthGaurdService.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('token')) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    AuthGaurdService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGaurdService);
    return AuthGaurdService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    config: {
        BASE_URL: 'http://localhost:3000/'
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map