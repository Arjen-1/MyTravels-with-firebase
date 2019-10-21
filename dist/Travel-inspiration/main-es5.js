function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<app-navigation-bar></app-navigation-bar>\n<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section>\n        <form [formGroup]=\"loginForm\" class=\"signup__form\" (ngSubmit)=\"onSubmit()\">\n            <h3>Log in</h3>\n            <mat-form-field>\n                <mat-label>Email:</mat-label>\n                <input matInput type=\"text\" placeholder=\"email\" formControlName=\"email\">\n                <mat-error *ngIf=\"loginForm.controls.email.invalid && (loginForm.controls.email.dirty || loginForm.controls.email.touched )\"\n                class=\"\">\n                <span *ngIf=\"loginForm.controls.email.errors.required\">\n                    email is required.\n                </span>\n                <span *ngIf=\"loginForm.controls.email.errors.minlength\">\n                    email must be at least 4 characters long.\n                </span>\n                <span *ngIf=\"loginForm.controls.email.errors.minlength\">\n                    email must be at least 4 characters long.\n                </span>\n                <span *ngIf=\"loginForm.controls.email.errors.email\">\n                    You must enter a valid email\n                </span>\n                </mat-error>\n            </mat-form-field>\n            <mat-form-field>\n                <mat-label>Password:</mat-label>\n                <input matInput type=\"text\" placeholder=\"password\" formControlName=\"password\">\n                <mat-error *ngIf=\"loginForm.controls.password.invalid && (loginForm.controls.password.dirty || loginForm.controls.password.touched )\"\n                    class=\"\">\n                    <span *ngIf=\"loginForm.controls.password.errors.required\">\n                        Password is required.\n                    </span>\n                    <span *ngIf=\"loginForm.controls.password.errors.minlength\">\n                        Password must be at least 1 characters long.\n                    </span>\n                </mat-error>\n            </mat-form-field>\n    \n            <button *ngIf=\"!isLoading\" mat-raised-button type=\"submit\" color=\"primary\" [disabled]=\"!loginForm.valid\">Sign me up</button>\n            <mat-spinner style=\"margin:0 auto;\" *ngIf=\"isLoading\"></mat-spinner>\n        </form>\n    </section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section>\n    <form [formGroup]=\"signupForm\" class=\"signup__form\" (ngSubmit)=\"onSubmit()\">\n        <h3>Sign up</h3>\n        <mat-form-field>\n            <mat-label>Fist name:</mat-label>\n            <input matInput type=\"text\" placeholder=\"First name\" formControlName=\"firstName\">\n            <mat-error *ngIf=\"signupForm.controls.firstName.invalid && (signupForm.controls.firstName.dirty || signupForm.controls.firstName.touched )\"\n                class=\"\">\n                <span *ngIf=\"signupForm.controls.firstName.errors.required\">\n                    first name is required.\n                </span>\n                <span *ngIf=\"signupForm.controls.firstName.errors.minlength\">\n                    first name must be at least 1 characters long.\n                </span>\n            </mat-error>\n        </mat-form-field>\n        <mat-form-field>\n            <mat-label>Last name:</mat-label>\n            <input matInput type=\"text\" placeholder=\"Last name\" formControlName=\"lastName\">\n            <mat-error *ngIf=\"signupForm.controls.lastName.invalid && (signupForm.controls.lastName.dirty || signupForm.controls.lastName.touched )\"\n                class=\"\">\n                <span *ngIf=\"signupForm.controls.lastName.errors.required\">\n                    Last name is required.\n                </span>\n                <span *ngIf=\"signupForm.controls.lastName.errors.minlength\">\n                    Last name must be at least 1 characters long.\n                </span>\n            </mat-error>\n        </mat-form-field>\n        <mat-form-field>\n            <mat-label>Email:</mat-label>\n            <input matInput type=\"text\" placeholder=\"email\" formControlName=\"email\">\n            <mat-error *ngIf=\"signupForm.controls.email.invalid && (signupForm.controls.email.dirty || signupForm.controls.email.touched )\"\n            class=\"\">\n            <span *ngIf=\"signupForm.controls.email.errors.required\">\n                email is required.\n            </span>\n            <span *ngIf=\"signupForm.controls.email.errors.minlength\">\n                email must be at least 4 characters long.\n            </span>\n            <span *ngIf=\"signupForm.controls.email.errors.minlength\">\n                email must be at least 4 characters long.\n            </span>\n            <span *ngIf=\"signupForm.controls.email.errors.email\">\n                You must enter a valid email\n            </span>\n            </mat-error>\n        </mat-form-field>\n        <mat-form-field>\n            <mat-label>Password:</mat-label>\n            <input matInput type=\"text\" placeholder=\"password\" formControlName=\"password\">\n            <mat-error *ngIf=\"signupForm.controls.password.invalid && (signupForm.controls.password.dirty || signupForm.controls.password.touched )\"\n                class=\"\">\n                <span *ngIf=\"signupForm.controls.password.errors.required\">\n                    Password is required.\n                </span>\n                <span *ngIf=\"signupForm.controls.password.errors.minlength\">\n                    Password must be at least 1 characters long.\n                </span>\n            </mat-error>\n        </mat-form-field>\n\n        <button mat-raised-button type=\"submit\" color=\"primary\" [disabled]=\"!signupForm.valid\">Sign me up</button>\n    </form>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/inspiration/activity-form/activity-form.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inspiration/activity-form/activity-form.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInspirationActivityFormActivityFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"inspirationForm\" class=\"editingForm\" >\n        <mat-form-field>  \n                <mat-label>Name of activity</mat-label>\n                <input type=\"text\" matInput placeholder=\"describe activity\" formControlName=\"activity\">\n        </mat-form-field>\n        <mat-form-field> \n                <mat-label>Tripadvisor link</mat-label>\n                <input type=\"text\" matInput placeholder=\"insert tripadvisor url\" formControlName=\"link\">\n        </mat-form-field> \n        <div class=\"form__actions\">\n                        <button mat-raised-button color=\"primary\" (click)=\"emitFormValues()\">Edit</button> \n                        <button mat-raised-button  (click)=\"cancel()\">Cancel</button> \n        </div>\n                \n        \n     \n \n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/inspiration/count-down/count-down.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inspiration/count-down/count-down.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInspirationCountDownCountDownComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card class=\"spinner_card\">\n    <mat-progress-spinner mode=\"determinate\" [value]=\"spinnerValue\"></mat-progress-spinner>\n    <h4 class=\"spinner__text\" *ngIf=\"spinnerValue <= 99\">Calculating days until {{travelData.travelDestination}}</h4>\n\n    <div class=\"loader\" *ngIf=\"spinnerValue >= 100\">\n            <h4>Count down until {{travelData.travelDestination}}</h4>\n            <mat-progress-bar mode=\"determinate\" [value]=\"loaderValue\"></mat-progress-bar>\n            <mat-card-content *ngIf=\"loaderValue >= maxLoaderValue\"> {{daysBetween}} days remaining until {{travelData.travelDestination}}!</mat-card-content>\n    </div>\n</mat-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/inspiration/inspiration.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inspiration/inspiration.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInspirationInspirationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"journey__container\"  *ngFor=\"let country of userSelectedCountry_data | async\">\r\n     <div class=\"filtered__journey\" > \r\n            \r\n                    \r\n            <section class=\"main__section\">  \r\n\r\n                    <div class=\"title__container\" >  \r\n                            <h5 class=\"top__title\">Your travels in</h5>\r\n                            <h1 class=\"top__title-country\">{{country.name}} </h1>\r\n                    </div>\r\n\r\n                    \r\n                    <h3 class=\"secondary__title\">Your activities</h3>\r\n                    <h5 class=\"title--faded\">sorted by the region or location</h5>\r\n                    <mat-tab-group (selectedTabChange)=\"onSwitchTab($event)\">\r\n                            <mat-tab   label=\"{{ place.name }}\" *ngFor=\"let place of all_places_whitin_userSel_country | async\"  > \r\n                                <mat-card class=\"tabgroup__card\"> \r\n                                    <mat-card-title > \r\n                                        {{place.name }}\r\n                                    </mat-card-title>\r\n                                    <mat-card-content> \r\n                                         <div  *ngFor=\"let ac of activities_userSelectedCountry_ | async \" > \r\n                                             <mat-card *ngIf=\"ac.placewithincountry == place.id\"> \r\n                                                    <mat-card-title>{{ac.name}} </mat-card-title>\r\n                                                    <a class=\"advisor__button\" mat-raised-button color=\"primary\" *ngIf=\"ac?.url \" href=\"{{ac?.url}} \">Check on tripadvisor</a> \r\n                                                    <br>\r\n                                                    <br>\r\n                                                    <button class=\"critical__button\" mat-raised-button  (click)=\"editActivity(ac.id, ac.name, ac.url )\">Edit </button>\r\n                                                    <button class=\"critical__button\" mat-raised-button (click)=\"deletingCheck(ac.id, ac.name, ac.url)\">Delete</button>\r\n                                             </mat-card>\r\n                                        </div> \r\n                                    \r\n                                    </mat-card-content> \r\n                                    <mat-card-actions >\r\n                                        \r\n                                        <form [formGroup]=\"inspirationForm\" class=\"inspirationForm\" >\r\n                                                <h5>Adding a new activity</h5>\r\n                                                <mat-form-field> \r\n                                                        <mat-label>Name of activity</mat-label>\r\n                                                        <input type=\"text\" matInput placeholder=\"describe activity\" formControlName=\"activity\">\r\n                                                </mat-form-field>\r\n                                                <mat-form-field> \r\n                                                        <mat-label>Tripadvisor link</mat-label>\r\n                                                        <input type=\"text\" matInput placeholder=\"insert tripadvisor url\" formControlName=\"link\">\r\n                                                </mat-form-field> \r\n                        \r\n                                                \r\n                                                <button mat-raised-button (click)=\"addNewActivity()\">Add new activity</button>\r\n                                        </form>\r\n                                        \r\n                                    </mat-card-actions>\r\n                                </mat-card>  \r\n                            </mat-tab>\r\n                    </mat-tab-group>\r\n                </section>\r\n\r\n     </div>\r\n        \r\n\r\n\r\n </div>\r\n \r\n \r\n\r\n\r\n<!-- \r\n<mat-card> \r\n        <mat-card-title>\r\n            Bangkok\r\n        </mat-card-title>\r\n        <mat-card-content>\r\n            <mat-card *ngFor=\"let item of trip.bangkok\">Activity: {{item.activity}}  | <a href=\"{{item.link}}\">Check on tripadvisor</a> </mat-card>\r\n        </mat-card-content>\r\n        <mat-card-actions >\r\n            \r\n            <form [formGroup]=\"inspirationForm\" class=\"inspirationForm\" >\r\n                    <h5>Adding a new activity</h5>\r\n                    <mat-form-field> \r\n                            <mat-label>Name of activity</mat-label>\r\n                            <input type=\"text\" matInput placeholder=\"describe activity\" formControlName=\"activity\">\r\n                    </mat-form-field>\r\n                    <mat-form-field> \r\n                            <mat-label>Tripadvisor link</mat-label>\r\n                            <input type=\"text\" matInput placeholder=\"insert tripadvisor url\" formControlName=\"link\">\r\n                    </mat-form-field>\r\n\r\n                    \r\n                    <button mat-raised-button (click)=\"addNewActivity()\">Add new activity</button>\r\n            </form>\r\n            \r\n        </mat-card-actions>\r\n    </mat-card>   -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation-bar/navigation-bar.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation-bar/navigation-bar.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavigationNavigationBarNavigationBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar color=\"primary\" class=\"navigation__bar\">\n        <div class=\"logo\" [routerLink]=\"['/inspiration']\">MyTravels</div>\n        <div class=\"mobile\">\n                        <div *ngIf=\"isAuth\" class=\"link__container\" (click)=\"toggleMenu()\"><mat-icon  aria-label=\"Example home icon\">menu</mat-icon></div>\n                        \n        </div>\n        <div class=\"large\">\n                        <div *ngIf=\"isAuth\" class=\"link__container\"><a [routerLink]=\"['/inspiration']\"  class=\"link__anchor\">Inspiration</a></div>\n                        <div *ngIf=\"isAuth\" class=\"link__container\"><a [routerLink]=\"['/count-down']\"  class=\"link__anchor\">Count Down</a></div>\n                        <div *ngIf=\"!isAuth\" class=\"link__container\"><a [routerLink]=\"['/login']\"  class=\"link__anchor\">Log in</a></div>\n                        <div *ngIf=\"!isAuth\" class=\"link__container\"><a [routerLink]=\"['/signup']\"  class=\"link__anchor\">Sign up</a></div>\n                        <div *ngIf=\"isAuth\" class=\"link__container\"><a [routerLink]=\"['/login']\" class=\"link__anchor\"  (click)=\"onLogout()\">Log out</a></div>\n        </div>\n        \n</mat-toolbar>\n<mat-toolbar *ngIf=\"mobileMenuToggled\" class=\"mobile__toolbar\" color=\"primary\">\n                <div (click)=\"closeMenu()\" *ngIf=\"isAuth\" class=\"link__container\"><a [routerLink]=\"['/inspiration']\"  class=\"link__anchor\">Inspiration</a></div>\n                <div (click)=\"closeMenu()\" *ngIf=\"isAuth\" class=\"link__container\"><a [routerLink]=\"['/count-down']\"  class=\"link__anchor\">Count Down</a></div>\n                <div (click)=\"closeMenu()\" *ngIf=\"!isAuth\" class=\"link__container\"><a [routerLink]=\"['/login']\"  class=\"link__anchor\">Log in</a></div>\n                <div (click)=\"closeMenu()\" *ngIf=\"!isAuth\" class=\"link__container\"><a [routerLink]=\"['/signup']\"  class=\"link__anchor\">Sign up</a></div>\n                <div (click)=\"closeMenu()\" *ngIf=\"isAuth\" class=\"link__container\"><a [routerLink]=\"['/login']\" class=\"link__anchor\"  (click)=\"onLogout()\">Log out</a></div>\n</mat-toolbar>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _inspiration_inspiration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./inspiration/inspiration.component */
    "./src/app/inspiration/inspiration.component.ts");
    /* harmony import */


    var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth/signup/signup.component */
    "./src/app/auth/signup/signup.component.ts");
    /* harmony import */


    var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auth/login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _inspiration_count_down_count_down_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./inspiration/count-down/count-down.component */
    "./src/app/inspiration/count-down/count-down.component.ts");
    /* harmony import */


    var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./auth/auth.guard */
    "./src/app/auth/auth.guard.ts");

    var routes = [{
      path: '',
      component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    }, {
      path: 'inspiration',
      component: _inspiration_inspiration_component__WEBPACK_IMPORTED_MODULE_3__["InspirationComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }, {
      path: 'signup',
      component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]
    }, {
      path: 'login',
      component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    }, {
      path: 'count-down',
      component: _inspiration_count_down_count_down_component__WEBPACK_IMPORTED_MODULE_6__["CountDownComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hcHAuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth/auth.service */
    "./src/app/auth/auth.service.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(authService) {
        _classCallCheck(this, AppComponent);

        this.authService = authService;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.authSubscription = this.authService.authChange.subscribe(function (authStatus) {
            _this.isAuth = authStatus;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.authSubscription.unsubscribe();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./material.module */
    "./src/app/material.module.ts");
    /* harmony import */


    var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./auth/signup/signup.component */
    "./src/app/auth/signup/signup.component.ts");
    /* harmony import */


    var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./auth/login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _inspiration_inspiration_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./inspiration/inspiration.component */
    "./src/app/inspiration/inspiration.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _inspiration_checking_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./inspiration/checking-dialog.component */
    "./src/app/inspiration/checking-dialog.component.ts");
    /* harmony import */


    var _inspiration_count_down_count_down_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./inspiration/count-down/count-down.component */
    "./src/app/inspiration/count-down/count-down.component.ts");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _inspiration_travel_data_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./inspiration/travel-data.service */
    "./src/app/inspiration/travel-data.service.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _shared_ui_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./shared/ui.service */
    "./src/app/shared/ui.service.ts");
    /* harmony import */


    var _navigation_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./navigation/navigation-bar/navigation-bar.component */
    "./src/app/navigation/navigation-bar/navigation-bar.component.ts");
    /* harmony import */


    var _inspiration_form_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./inspiration/form-dialog.component */
    "./src/app/inspiration/form-dialog.component.ts");
    /* harmony import */


    var _inspiration_activity_form_activity_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./inspiration/activity-form/activity-form.component */
    "./src/app/inspiration/activity-form/activity-form.component.ts");
    /* harmony import */


    var _inspiration_deleting_dialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./inspiration/deleting-dialog.component */
    "./src/app/inspiration/deleting-dialog.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"], _auth_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _inspiration_inspiration_component__WEBPACK_IMPORTED_MODULE_9__["InspirationComponent"], _inspiration_checking_dialog_component__WEBPACK_IMPORTED_MODULE_11__["CheckDialogComponent"], _inspiration_form_dialog_component__WEBPACK_IMPORTED_MODULE_21__["FormDialogComponent"], _inspiration_deleting_dialog_component__WEBPACK_IMPORTED_MODULE_23__["DeletingDialogComponent"], _inspiration_count_down_count_down_component__WEBPACK_IMPORTED_MODULE_12__["CountDownComponent"], _navigation_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_20__["NavigationBarComponent"], _inspiration_activity_form_activity_form_component__WEBPACK_IMPORTED_MODULE_22__["ActivityFormComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].firebase), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__["AngularFireAuthModule"]],
      providers: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"], _inspiration_travel_data_service__WEBPACK_IMPORTED_MODULE_14__["TravelDataService"], _shared_ui_service__WEBPACK_IMPORTED_MODULE_19__["UIService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      entryComponents: [_inspiration_checking_dialog_component__WEBPACK_IMPORTED_MODULE_11__["CheckDialogComponent"], _inspiration_form_dialog_component__WEBPACK_IMPORTED_MODULE_21__["FormDialogComponent"], _inspiration_deleting_dialog_component__WEBPACK_IMPORTED_MODULE_23__["DeletingDialogComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth/auth.guard.ts":
  /*!************************************!*\
    !*** ./src/app/auth/auth.guard.ts ***!
    \************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth/auth.service.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (this.authService.isAuth()) {
            return true;
          } else {
            this.authService.authUnsuccesfull();
            this.router.navigate(['/login']);
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthGuard);
    /***/
  },

  /***/
  "./src/app/auth/auth.service.ts":
  /*!**************************************!*\
    !*** ./src/app/auth/auth.service.ts ***!
    \**************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _shared_ui_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/ui.service */
    "./src/app/shared/ui.service.ts");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(router, afAuth, snackBar, uiservice) {
        var _this2 = this;

        _classCallCheck(this, AuthService);

        this.router = router;
        this.afAuth = afAuth;
        this.snackBar = snackBar;
        this.uiservice = uiservice;
        this.authChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.afAuth.authState.subscribe(function (auth) {
          if (auth != null) {
            _this2.authSuccesfully();
          } else {
            _this2.isAuthenticated = false;

            _this2.authChange.next(_this2.isAuthenticated);
          }
        });
      }

      _createClass(AuthService, [{
        key: "registerUser",
        value: function registerUser(authData) {
          var _this3 = this;

          // this.user = {
          //     email: authData.email,
          //     userId: Math.round(Math.random()*10000).toString()
          // };
          this.uiservice.loadingStateChange.next(true);
          this.afAuth.auth.createUserWithEmailAndPassword(authData.email, authData.password).then(function (result) {
            _this3.authSuccesfully();

            _this3.uiservice.loadingStateChange.next(false);
          }).catch(function (error) {
            _this3.uiservice.snackBarFn(error, null, 3000);

            _this3.uiservice.loadingStateChange.next(false);
          });
        }
      }, {
        key: "login",
        value: function login(authData) {
          var _this4 = this;

          // this.user = {
          //     email: authData.email,
          //     userId: Math.round(Math.random()*10000).toString()
          // };
          this.uiservice.loadingStateChange.next(true);
          this.afAuth.auth.signInWithEmailAndPassword(authData.email, authData.password).then(function (result) {
            _this4.authSuccesfully();

            _this4.uiservice.loadingStateChange.next(false);
          }).catch(function (error) {
            _this4.uiservice.snackBarFn(error, null, 3000);

            _this4.uiservice.loadingStateChange.next(false);
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          //this.isAuthenticated = false;
          this.afAuth.auth.signOut(); // this.authChange.next(false);

          this.router.navigate(['/login']);
          this.uiservice.snackBarFn('Logged out succesfully', null, 3000);
        }
      }, {
        key: "isAuth",
        value: function isAuth() {
          // return this.user != null;
          //uncomment above to reset authentication
          return this.isAuthenticated;
        }
      }, {
        key: "authUnsuccesfull",
        value: function authUnsuccesfull() {
          this.isAuthenticated = false;
        }
      }, {
        key: "authSuccesfully",
        value: function authSuccesfully() {
          this.uiservice.snackBarFn('Authenticated succesfully', null, 3000);
          this.isAuthenticated = true;
          this.authChange.next(true);
          this.router.navigate(['/inspiration']);
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
      }, {
        type: _shared_ui_service__WEBPACK_IMPORTED_MODULE_6__["UIService"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], AuthService);
    /***/
  },

  /***/
  "./src/app/auth/login/login.component.scss":
  /*!*************************************************!*\
    !*** ./src/app/auth/login/login.component.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".signup__form {\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n  margin: 3rem auto;\n  max-width: 320px;\n}\n\nbutton:disabled {\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2F1dGgvbG9naW4vQzpcXFVzZXJzXFxhcmplblxcRG9jdW1lbnRzXFxfIEdpdCBGb2xkZXJzXFxUcmF2ZWwgaW5zcGlyYXRpb24gYXBwXFxUcmF2ZWwtaW5zcGlyYXRpb25cXHNyY1xcYXBwXFxpbnNwaXJhdGlvbi8uLlxcYXV0aFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwiLi4vYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKIiwiZmlsZSI6Ii4uL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbnVwX19mb3Jte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgbWFyZ2luOiAzcmVtIGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDMyMHB4O1xyXG59XHJcblxyXG5idXR0b246ZGlzYWJsZWR7XHJcbiAgICBjdXJzb3I6bm90LWFsbG93ZWQ7XHJcbn0iLCIuc2lnbnVwX19mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luOiAzcmVtIGF1dG87XG4gIG1heC13aWR0aDogMzIwcHg7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/auth/login/login.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/auth/login/login.component.ts ***!
    \***********************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_ui_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/ui.service */
    "./src/app/shared/ui.service.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(authService, uiservice) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.uiservice = uiservice;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)])
        });
        this.isLoading = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.loadingSubs = this.uiservice.loadingStateChange.subscribe(function (data) {
            _this5.isLoading = data;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.loadingSubs.unsubscribe();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.authService.login({
            email: this.loginForm.value.email,
            password: this.loginForm.value.password
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: src_app_shared_ui_service__WEBPACK_IMPORTED_MODULE_4__["UIService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/auth/login/login.component.scss")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/auth/signup/signup.component.scss":
  /*!***************************************************!*\
    !*** ./src/app/auth/signup/signup.component.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthSignupSignupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".signup__form {\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n  margin: 3rem auto;\n  max-width: 320px;\n}\n\nbutton:disabled {\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2F1dGgvc2lnbnVwL0M6XFxVc2Vyc1xcYXJqZW5cXERvY3VtZW50c1xcXyBHaXQgRm9sZGVyc1xcVHJhdmVsIGluc3BpcmF0aW9uIGFwcFxcVHJhdmVsLWluc3BpcmF0aW9uXFxzcmNcXGFwcFxcaW5zcGlyYXRpb24vLi5cXGF1dGhcXHNpZ251cFxcc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwiLi4vYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0oiLCJmaWxlIjoiLi4vYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZ251cF9fZm9ybXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIG1hcmdpbjogM3JlbSBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAzMjBweDtcclxufVxyXG5cclxuYnV0dG9uOmRpc2FibGVke1xyXG4gICAgY3Vyc29yOm5vdC1hbGxvd2VkO1xyXG59IiwiLnNpZ251cF9fZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbjogM3JlbSBhdXRvO1xuICBtYXgtd2lkdGg6IDMyMHB4O1xufVxuXG5idXR0b246ZGlzYWJsZWQge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/auth/signup/signup.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/auth/signup/signup.component.ts ***!
    \*************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppAuthSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth/auth.service.ts");

    var SignupComponent =
    /*#__PURE__*/
    function () {
      function SignupComponent(authService) {
        _classCallCheck(this, SignupComponent);

        this.authService = authService;
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]),
          lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)])
        });
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.authService.registerUser({
            email: this.signupForm.value.email,
            password: this.signupForm.value.password
          });
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.component.scss */
      "./src/app/auth/signup/signup.component.scss")).default]
    })], SignupComponent);
    /***/
  },

  /***/
  "./src/app/inspiration/activity-form/activity-form.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/inspiration/activity-form/activity-form.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInspirationActivityFormActivityFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".editingForm {\n  display: flex;\n  flex-direction: column;\n}\n\n.form__actions button:first-child {\n  margin-right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2aXR5LWZvcm0vQzpcXFVzZXJzXFxhcmplblxcRG9jdW1lbnRzXFxfIEdpdCBGb2xkZXJzXFxUcmF2ZWwgaW5zcGlyYXRpb24gYXBwXFxUcmF2ZWwtaW5zcGlyYXRpb25cXHNyY1xcYXBwXFxpbnNwaXJhdGlvbi9hY3Rpdml0eS1mb3JtXFxhY3Rpdml0eS1mb3JtLmNvbXBvbmVudC5zY3NzIiwiYWN0aXZpdHktZm9ybS9hY3Rpdml0eS1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKIiwiZmlsZSI6ImFjdGl2aXR5LWZvcm0vYWN0aXZpdHktZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0aW5nRm9ybXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZm9ybV9fYWN0aW9ucyBidXR0b246Zmlyc3QtY2hpbGR7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn0iLCIuZWRpdGluZ0Zvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZm9ybV9fYWN0aW9ucyBidXR0b246Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/inspiration/activity-form/activity-form.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/inspiration/activity-form/activity-form.component.ts ***!
    \**********************************************************************/

  /*! exports provided: ActivityFormComponent */

  /***/
  function srcAppInspirationActivityFormActivityFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActivityFormComponent", function () {
      return ActivityFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ActivityFormComponent =
    /*#__PURE__*/
    function () {
      function ActivityFormComponent() {
        _classCallCheck(this, ActivityFormComponent);

        this.FormSubmission = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cancelSubmission = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.inspirationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          link: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.currentLink, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]),
          activity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.currentLink, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)])
        });
      }

      _createClass(ActivityFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.currentLink = this.passedData.url;
          this.currentId = this.passedData.id;
          this.currentName = this.passedData.name;
          this.inspirationForm.patchValue({
            link: this.currentLink,
            activity: this.currentName
          });
        }
      }, {
        key: "emitFormValues",
        value: function emitFormValues() {
          console.log('form value:', this.inspirationForm.value);
          this.FormSubmission.emit(this.inspirationForm.value);
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.cancelSubmission.emit('cancelled');
        }
      }]);

      return ActivityFormComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ActivityFormComponent.prototype, "passedData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ActivityFormComponent.prototype, "FormSubmission", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ActivityFormComponent.prototype, "cancelSubmission", void 0);
    ActivityFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-activity-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./activity-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/inspiration/activity-form/activity-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./activity-form.component.scss */
      "./src/app/inspiration/activity-form/activity-form.component.scss")).default]
    })], ActivityFormComponent);
    /***/
  },

  /***/
  "./src/app/inspiration/checking-dialog.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/inspiration/checking-dialog.component.ts ***!
    \**********************************************************/

  /*! exports provided: CheckDialogComponent */

  /***/
  function srcAppInspirationCheckingDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckDialogComponent", function () {
      return CheckDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var CheckDialogComponent = function CheckDialogComponent(dialogRef, passedData) {
      _classCallCheck(this, CheckDialogComponent);

      this.dialogRef = dialogRef;
      this.passedData = passedData;
    };

    CheckDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    CheckDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-check-dialog',
      template: "\n    <h1 mat-dialog-title>Are you sure?</h1>\n    <mat-dialog-content>\n        You are about to add {{ passedData.formActivity }}\n    </mat-dialog-content>\n    <mat-dialog-actions>\n        <button mat-button mat-dialog-close=\"Yes\">Yes</button>\n        <button mat-button mat-dialog-close=\"No\">No</button> \n\n    </mat-dialog-actions>\n    "
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], CheckDialogComponent);
    /***/
  },

  /***/
  "./src/app/inspiration/count-down/count-down.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/inspiration/count-down/count-down.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInspirationCountDownCountDownComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-card {\n  max-width: 400px;\n  margin: 3rem auto;\n  text-align: center;\n}\n\nmat-progress-spinner {\n  margin: 0 auto;\n}\n\nmat-card-content {\n  margin-top: 0.25rem;\n}\n\n.loader {\n  margin-top: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50LWRvd24vQzpcXFVzZXJzXFxhcmplblxcRG9jdW1lbnRzXFxfIEdpdCBGb2xkZXJzXFxUcmF2ZWwgaW5zcGlyYXRpb24gYXBwXFxUcmF2ZWwtaW5zcGlyYXRpb25cXHNyY1xcYXBwXFxpbnNwaXJhdGlvbi9jb3VudC1kb3duXFxjb3VudC1kb3duLmNvbXBvbmVudC5zY3NzIiwiY291bnQtZG93bi9jb3VudC1kb3duLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREdBO0VBQ0ksZ0JBQUE7QUNBSiIsImZpbGUiOiJjb3VudC1kb3duL2NvdW50LWRvd24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZHtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICBtYXJnaW46IDNyZW0gYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxubWF0LXByb2dyZXNzLXNwaW5uZXJ7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxubWF0LWNhcmQtY29udGVudHsgXHJcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xyXG59XHJcblxyXG5cclxuLmxvYWRlcntcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbn0iLCJtYXQtY2FyZCB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogM3JlbSBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbm1hdC1wcm9ncmVzcy1zcGlubmVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbm1hdC1jYXJkLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xufVxuXG4ubG9hZGVyIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/inspiration/count-down/count-down.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/inspiration/count-down/count-down.component.ts ***!
    \****************************************************************/

  /*! exports provided: CountDownComponent */

  /***/
  function srcAppInspirationCountDownCountDownComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountDownComponent", function () {
      return CountDownComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _travel_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../travel-data.service */
    "./src/app/inspiration/travel-data.service.ts");

    var CountDownComponent =
    /*#__PURE__*/
    function () {
      function CountDownComponent(travelDataService) {
        _classCallCheck(this, CountDownComponent);

        this.travelDataService = travelDataService;
        this.spinnerValue = 0;
        this.loaderValue = 0;
        this.travelData = this.travelDataService.availableTravelData[0];
      }

      _createClass(CountDownComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.calculateRemainingDays();
          var countDownInt = setInterval(function () {
            _this6.spinnerValue = _this6.spinnerValue + 4;

            if (_this6.spinnerValue >= 100) {
              clearInterval(countDownInt);

              _this6.startLoader();
            }
          }, 100);
        }
      }, {
        key: "calculateRemainingDays",
        value: function calculateRemainingDays() {
          var today = new Date(); //const vacationData = new Date("November 7 , 2019 00:00:00")

          var vacationData = this.travelData.travelDepartureDay;
          var miliSecondsDiff = Math.abs(vacationData.getTime() - today.getTime());
          this.daysBetween = Math.round(miliSecondsDiff / 1000 / 60 / 60 / 24);
          var month = 31;
          var percentage = this.daysBetween / month;
          var percentageDecimal = (1 - percentage) * 100;
          this.maxLoaderValue = parseFloat(percentageDecimal.toFixed(2));
        }
      }, {
        key: "startLoader",
        value: function startLoader() {
          var _this7 = this;

          var loaderInt = setInterval(function () {
            _this7.loaderValue = _this7.loaderValue + 4;

            if (_this7.loaderValue >= _this7.maxLoaderValue) {
              clearInterval(loaderInt);
            }
          }, 100);
        }
      }]);

      return CountDownComponent;
    }();

    CountDownComponent.ctorParameters = function () {
      return [{
        type: _travel_data_service__WEBPACK_IMPORTED_MODULE_2__["TravelDataService"]
      }];
    };

    CountDownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-count-down',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./count-down.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/inspiration/count-down/count-down.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./count-down.component.scss */
      "./src/app/inspiration/count-down/count-down.component.scss")).default]
    })], CountDownComponent);
    /***/
  },

  /***/
  "./src/app/inspiration/deleting-dialog.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/inspiration/deleting-dialog.component.ts ***!
    \**********************************************************/

  /*! exports provided: DeletingDialogComponent */

  /***/
  function srcAppInspirationDeletingDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeletingDialogComponent", function () {
      return DeletingDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var DeletingDialogComponent = function DeletingDialogComponent(dialogRef, passedData) {
      _classCallCheck(this, DeletingDialogComponent);

      this.dialogRef = dialogRef;
      this.passedData = passedData;
    };

    DeletingDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    DeletingDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-deleting-dialog',
      template: "\n    <h1 mat-dialog-title>Are you sure?</h1>\n    <mat-dialog-content>\n        You are about to delete {{ passedData.name }}\n    </mat-dialog-content>\n    <mat-dialog-actions>\n        <button mat-button mat-dialog-close=\"Yes\">Yes</button>\n        <button mat-button mat-dialog-close=\"No\">Cancel</button> \n\n    </mat-dialog-actions>\n    "
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], DeletingDialogComponent);
    /***/
  },

  /***/
  "./src/app/inspiration/form-dialog.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/inspiration/form-dialog.component.ts ***!
    \******************************************************/

  /*! exports provided: FormDialogComponent */

  /***/
  function srcAppInspirationFormDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormDialogComponent", function () {
      return FormDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var FormDialogComponent =
    /*#__PURE__*/
    function () {
      function FormDialogComponent(formDialogRef, passedData) {
        _classCallCheck(this, FormDialogComponent);

        this.formDialogRef = formDialogRef;
        this.passedData = passedData;
        this.activityData = this.passedData;
      }

      _createClass(FormDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getFormValues",
        value: function getFormValues(data) {
          this.newActivityData = {
            id: this.passedData.id,
            name: data.activity,
            url: data.link
          };
          this.formDialogRef.close({
            event: 'close',
            data: this.newActivityData
          });
        }
      }, {
        key: "cancelSubmission",
        value: function cancelSubmission(data) {
          this.formDialogRef.close();
        }
      }]);

      return FormDialogComponent;
    }();

    FormDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    FormDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-form-dialog',
      template: "\n    <h1 mat-dialog-title>You're editing: {{this.activityDataName }} </h1> \n    <mat-dialog-content style=\"padding-bottom:0.5rem;\">\n        <app-activity-form [passedData]=\"activityData\" (FormSubmission)='getFormValues($event)' (cancelSubmission)='cancelSubmission($event)'></app-activity-form>\n    </mat-dialog-content>\n    "
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], FormDialogComponent);
    /***/
  },

  /***/
  "./src/app/inspiration/inspiration.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/inspiration/inspiration.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInspirationInspirationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main__section {\n  margin-left: 2rem;\n  margin-right: 2rem;\n}\n@media screen and (max-width: 640px) {\n  .main__section {\n    margin-left: 1rem;\n    margin-right: 1rem;\n  }\n}\n.inspirationForm {\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n  background-color: #3f51b52c;\n}\nmat-card {\n  padding: 2rem;\n  margin-bottom: 1rem;\n  background-color: rgba(0, 0, 0, 0.027);\n}\n.critical__button {\n  margin-right: 1rem;\n}\n.title__container {\n  border-bottom: 1px solid #00000030;\n}\n.top__title {\n  margin-bottom: 0;\n  opacity: 0.4;\n}\n.top__title-country {\n  margin-top: 0;\n}\n.secondary__title {\n  margin-bottom: 0;\n}\n.title--faded {\n  margin-top: 0;\n  opacity: 0.4;\n}\n@media screen and (max-width: 640px) {\n  .tabgroup__card {\n    padding: 1rem;\n  }\n\n  .critical__button, .advisor__button {\n    margin-right: 0;\n    width: 100%;\n    margin-bottom: 0.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYXJqZW5cXERvY3VtZW50c1xcXyBHaXQgRm9sZGVyc1xcVHJhdmVsIGluc3BpcmF0aW9uIGFwcFxcVHJhdmVsLWluc3BpcmF0aW9uXFxzcmNcXGFwcFxcaW5zcGlyYXRpb24vaW5zcGlyYXRpb24uY29tcG9uZW50LnNjc3MiLCJpbnNwaXJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBRENJO0VBSko7SUFLUSxpQkFBQTtJQUNKLGtCQUFBO0VDRUY7QUFDRjtBRENBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0FDRUo7QURDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNDQUFBO0FDRUo7QURDQTtFQUNJLGtCQUFBO0FDRUo7QURDQTtFQUNJLGtDQUFBO0FDRUo7QURDQTtFQUNJLGdCQUFBO0VBRUEsWUFBQTtBQ0NKO0FERUE7RUFDSSxhQUFBO0FDQ0o7QURFQTtFQUNJLGdCQUFBO0FDQ0o7QURFQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FDQ0o7QURJQTtFQUNJO0lBQ0ksYUFBQTtFQ0ROOztFRElFO0lBQ0ksZUFBQTtJQUNBLFdBQUE7SUFDQSxxQkFBQTtFQ0ROO0FBQ0YiLCJmaWxlIjoiaW5zcGlyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9fc2VjdGlvbntcclxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjQwcHgpe1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaW5zcGlyYXRpb25Gb3Jte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTJjO1xyXG59XHJcblxyXG5tYXQtY2FyZHtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjAyNyk7XHJcbn1cclxuXHJcbi5jcml0aWNhbF9fYnV0dG9ue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4udGl0bGVfX2NvbnRhaW5lciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDAwMDMwO1xyXG59XHJcblxyXG4udG9wX190aXRsZXtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBcclxuICAgIG9wYWNpdHk6IDAuNDtcclxufVxyXG5cclxuLnRvcF9fdGl0bGUtY291bnRyeXtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbi5zZWNvbmRhcnlfX3RpdGxle1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLnRpdGxlLS1mYWRlZHsgXHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjQwcHgpIHtcclxuICAgIC50YWJncm91cF9fY2FyZHtcclxuICAgICAgICBwYWRkaW5nOjFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmNyaXRpY2FsX19idXR0b24sIC5hZHZpc29yX19idXR0b257XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuYWR2aXNvcl9fYnV0dG9ueyBcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIFxyXG59IFxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NjQxcHgpIHtcclxuXHJcblxyXG59IiwiLm1haW5fX3NlY3Rpb24ge1xuICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgLm1haW5fX3NlY3Rpb24ge1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgfVxufVxuXG4uaW5zcGlyYXRpb25Gb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTJjO1xufVxuXG5tYXQtY2FyZCB7XG4gIHBhZGRpbmc6IDJyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wMjcpO1xufVxuXG4uY3JpdGljYWxfX2J1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuLnRpdGxlX19jb250YWluZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDAwMDMwO1xufVxuXG4udG9wX190aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG9wYWNpdHk6IDAuNDtcbn1cblxuLnRvcF9fdGl0bGUtY291bnRyeSB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5zZWNvbmRhcnlfX3RpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnRpdGxlLS1mYWRlZCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG9wYWNpdHk6IDAuNDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgLnRhYmdyb3VwX19jYXJkIHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG5cbiAgLmNyaXRpY2FsX19idXR0b24sIC5hZHZpc29yX19idXR0b24ge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/inspiration/inspiration.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/inspiration/inspiration.component.ts ***!
    \******************************************************/

  /*! exports provided: InspirationComponent */

  /***/
  function srcAppInspirationInspirationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InspirationComponent", function () {
      return InspirationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _checking_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./checking-dialog.component */
    "./src/app/inspiration/checking-dialog.component.ts");
    /* harmony import */


    var _travel_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./travel-data.service */
    "./src/app/inspiration/travel-data.service.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _form_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./form-dialog.component */
    "./src/app/inspiration/form-dialog.component.ts");
    /* harmony import */


    var _deleting_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./deleting-dialog.component */
    "./src/app/inspiration/deleting-dialog.component.ts");

    var InspirationComponent =
    /*#__PURE__*/
    function () {
      function InspirationComponent(dialog, travelDataService, db) {
        _classCallCheck(this, InspirationComponent);

        this.dialog = dialog;
        this.travelDataService = travelDataService;
        this.db = db;
        this.userSelectedCountry = 'thailand';
        this.inspirationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          link: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]),
          activity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)])
        });
      }

      _createClass(InspirationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.userSelectedCountry_data = this.db.collection('countries', function (ref) {
            return ref.where('id', '==', _this8.userSelectedCountry);
          }).valueChanges(); // this.activities_userSelectedCountry = this.db.collection('activities', ref => ref.where('country', '==', this.userSelectedCountry)).valueChanges()
          // .subscribe(result =>{
          //   console.log(result)
          // }, error => {
          //   console.log(error)
          // })

          this.activities_userSelectedCountry_ = this.db.collection('activities', function (ref) {
            return ref.where('country', '==', _this8.userSelectedCountry);
          }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (mappingData) {
            return mappingData.map(function (mapArray) {
              return Object.assign({
                id: mapArray.payload.doc.id
              }, mapArray.payload.doc.data());
            });
          })); // This pipe is made to catch the error of the observable above.
          // .pipe(
          //   catchError((error) => {
          //     // it's important that we log an error here.
          //     // Otherwise you won't see an error in the console.
          //     console.error('error: ', error);
          //     return null;
          //   })
          // )

          this.all_places_whitin_userSel_country = this.db.collection('places', function (ref) {
            return ref.where('country', '==', _this8.userSelectedCountry);
          }).valueChanges();
        }
      }, {
        key: "onSwitchTab",
        value: function onSwitchTab(event) {
          var alteredlabel = event.tab.textLabel.trim().toLowerCase().replace(/ /g, ''); // console.log(alteredlabel) 

          this.openedTab = alteredlabel;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          //this pushes data to the array / db
          this.tripItem = {
            "name": this.inspirationForm.value.activity,
            "url": this.inspirationForm.value.link,
            "country": this.userSelectedCountry,
            "placewithincountry": this.openedTab
          };
          this.addDataToDatabase(this.tripItem);
        }
      }, {
        key: "addDataToDatabase",
        value: function addDataToDatabase(activity) {
          //add to database collection
          this.db.collection('activities').add(activity);
        }
      }, {
        key: "updateDataToDatabase",
        value: function updateDataToDatabase(id, name, url) {
          console.log(id); //get clicked document

          this.itemDoc = this.db.doc("activities/".concat(id));
          this.item = this.itemDoc.valueChanges();
          this.tripItem = {
            "id": id,
            "name": name,
            "url": url,
            "country": this.userSelectedCountry,
            "placewithincountry": this.openedTab
          };
          console.log('item to be updated:', this.tripItem); //Delete from database collection

          this.itemDoc.update(this.tripItem);
        }
      }, {
        key: "addNewActivity",
        value: function addNewActivity() {
          var _this9 = this;

          var dialogRef = this.dialog.open(_checking_dialog_component__WEBPACK_IMPORTED_MODULE_4__["CheckDialogComponent"], {
            data: {
              formLink: this.inspirationForm.value.link,
              formActivity: this.inspirationForm.value.activity
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            // console.log(`Dialog result: ${result}`); // Pizza!
            if (result === 'Yes') {
              _this9.onSubmit();
            }
          });
        }
      }, {
        key: "editActivity",
        value: function editActivity(id, name, url) {
          var _this10 = this;

          var dialogRef = this.dialog.open(_form_dialog_component__WEBPACK_IMPORTED_MODULE_8__["FormDialogComponent"], {
            data: {
              id: id,
              name: name,
              url: url
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              console.log('afterClose result: ', result.data.id, result.data.name, result.data.url);

              _this10.updateDataToDatabase(result.data.id, result.data.name, result.data.url);
            } else {//console.log(result)
            }
          });
        }
      }, {
        key: "deletingCheck",
        value: function deletingCheck(id, name, url) {
          var _this11 = this;

          var dialogRef = this.dialog.open(_deleting_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DeletingDialogComponent"], {
            data: {
              id: id,
              name: name,
              url: url
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result == 'Yes') {
              //get clicked document's id
              _this11.itemDoc = _this11.db.doc("activities/".concat(id)); //Delete from database collection

              _this11.itemDoc.delete();
            } else {//console.log(result)
            }
          });
        }
      }]);

      return InspirationComponent;
    }();

    InspirationComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }, {
        type: _travel_data_service__WEBPACK_IMPORTED_MODULE_5__["TravelDataService"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]
      }];
    };

    InspirationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inspiration',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./inspiration.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/inspiration/inspiration.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./inspiration.component.scss */
      "./src/app/inspiration/inspiration.component.scss")).default]
    })], InspirationComponent);
    /***/
  },

  /***/
  "./src/app/inspiration/travel-data.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/inspiration/travel-data.service.ts ***!
    \****************************************************/

  /*! exports provided: TravelDataService */

  /***/
  function srcAppInspirationTravelDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TravelDataService", function () {
      return TravelDataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var TravelDataService = function TravelDataService() {
      _classCallCheck(this, TravelDataService);

      this.availableTravelData = [{
        id: 'thailandId',
        travelDestination: 'Thailand',
        travelDepartureDay: new Date("November 7 , 2019 00:00:00"),
        placeToVisit: [{
          'place': {
            'name': 'Chiang Mai',
            'activities': [{
              'name': 'Extreme Canoïng',
              'url': "https://www.arjenholleman.nl"
            }, {
              'name': 'Elephant Sanctuary',
              'url': "https://www.arjenholleman.nl/elephant"
            }]
          }
        }, {
          'place': {
            'name': 'Pai',
            'activities': [{
              'name': 'Normal Canoïng',
              'url': "https://www.arjenholleman.nl"
            }, {
              'name': 'Tiger Sanctuary',
              'url': "https://www.arjenholleman.nl/elephant"
            }]
          }
        }]
      }];
    };
    /***/

  },

  /***/
  "./src/app/material.module.ts":
  /*!************************************!*\
    !*** ./src/app/material.module.ts ***!
    \************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"]],
      exports: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"]],
      providers: []
    })], MaterialModule);
    /***/
  },

  /***/
  "./src/app/navigation/navigation-bar/navigation-bar.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/navigation/navigation-bar/navigation-bar.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavigationNavigationBarNavigationBarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".navigation__bar .logo {\n  margin-right: auto;\n}\n\n.navigation__bar .mobile {\n  display: none;\n}\n\n@media screen and (max-width: 640px) {\n  .navigation__bar .mobile {\n    display: flex;\n    flex-direction: column;\n  }\n}\n\n.navigation__bar .large {\n  display: none;\n}\n\n@media screen and (min-width: 641px) {\n  .navigation__bar .large {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n  }\n  .navigation__bar .large .link__container {\n    margin-left: 1rem;\n  }\n}\n\nmat-toolbar a {\n  text-decoration: none;\n  color: white;\n}\n\nmat-toolbar a:active, mat-toolbar a:hover {\n  color: rgba(255, 255, 255, 0.479);\n}\n\n.mobile__toolbar {\n  display: flex;\n  flex-direction: column;\n  opacity: 0.9;\n  height: auto;\n}\n\n.mobile__toolbar div {\n  margin: 0.5rem auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25hdmlnYXRpb24vbmF2aWdhdGlvbi1iYXIvQzpcXFVzZXJzXFxhcmplblxcRG9jdW1lbnRzXFxfIEdpdCBGb2xkZXJzXFxUcmF2ZWwgaW5zcGlyYXRpb24gYXBwXFxUcmF2ZWwtaW5zcGlyYXRpb25cXHNyY1xcYXBwXFxpbnNwaXJhdGlvbi8uLlxcbmF2aWdhdGlvblxcbmF2aWdhdGlvbi1iYXJcXG5hdmlnYXRpb24tYmFyLmNvbXBvbmVudC5zY3NzIiwiLi4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLWJhci9uYXZpZ2F0aW9uLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNRLGtCQUFBO0FDQ1I7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FERUk7RUFKSjtJQUtRLGFBQUE7SUFDQSxzQkFBQTtFQ0NOO0FBQ0Y7O0FESUE7RUFDSSxhQUFBO0FDREo7O0FERUk7RUFGSjtJQUlRLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHlCQUFBO0VDQU47RURFTTtJQUNJLGlCQUFBO0VDQVY7QUFDRjs7QURNQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQ0hKOztBRE9BO0VBQ0ksaUNBQUE7QUNKSjs7QURRQTtFQUNRLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDTFI7O0FEU0E7RUFDSSxtQkFBQTtBQ05KIiwiZmlsZSI6Ii4uL25hdmlnYXRpb24vbmF2aWdhdGlvbi1iYXIvbmF2aWdhdGlvbi1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2aWdhdGlvbl9fYmFyIC5sb2dve1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLm5hdmlnYXRpb25fX2JhciAubW9iaWxle1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgICBcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjQwcHgpIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG4ubmF2aWdhdGlvbl9fYmFyIC5sYXJnZXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjY0MXB4KSB7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7XHJcblxyXG4gICAgICAgIC5saW5rX19jb250YWluZXIge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn0gXHJcblxyXG5tYXQtdG9vbGJhciBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcblxyXG59XHJcblxyXG5tYXQtdG9vbGJhciBhOmFjdGl2ZSwgbWF0LXRvb2xiYXIgYTpob3ZlcnsgXHJcbiAgICBjb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDc5KTtcclxuXHJcbn1cclxuXHJcbi5tb2JpbGVfX3Rvb2xiYXJ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcclxuICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG5cclxufVxyXG5cclxuLm1vYmlsZV9fdG9vbGJhciBkaXZ7XHJcbiAgICBtYXJnaW46IDAuNXJlbSBhdXRvO1xyXG59IiwiLm5hdmlnYXRpb25fX2JhciAubG9nbyB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLm5hdmlnYXRpb25fX2JhciAubW9iaWxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5uYXZpZ2F0aW9uX19iYXIgLm1vYmlsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG5cbi5uYXZpZ2F0aW9uX19iYXIgLmxhcmdlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MXB4KSB7XG4gIC5uYXZpZ2F0aW9uX19iYXIgLmxhcmdlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuICAubmF2aWdhdGlvbl9fYmFyIC5sYXJnZSAubGlua19fY29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgfVxufVxuXG5tYXQtdG9vbGJhciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbm1hdC10b29sYmFyIGE6YWN0aXZlLCBtYXQtdG9vbGJhciBhOmhvdmVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NzkpO1xufVxuXG4ubW9iaWxlX190b29sYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3BhY2l0eTogMC45O1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5tb2JpbGVfX3Rvb2xiYXIgZGl2IHtcbiAgbWFyZ2luOiAwLjVyZW0gYXV0bztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/navigation/navigation-bar/navigation-bar.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/navigation/navigation-bar/navigation-bar.component.ts ***!
    \***********************************************************************/

  /*! exports provided: NavigationBarComponent */

  /***/
  function srcAppNavigationNavigationBarNavigationBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationBarComponent", function () {
      return NavigationBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/auth/auth.service */
    "./src/app/auth/auth.service.ts");

    var NavigationBarComponent =
    /*#__PURE__*/
    function () {
      function NavigationBarComponent(authService) {
        _classCallCheck(this, NavigationBarComponent);

        this.authService = authService;
        this.mobileMenuToggled = false;
      }

      _createClass(NavigationBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.authSubscription = this.authService.authChange.subscribe(function (authStatus) {
            _this12.isAuth = authStatus;
          });
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          this.authService.logout();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.authSubscription.unsubscribe();
        }
      }, {
        key: "toggleMenu",
        value: function toggleMenu() {
          this.mobileMenuToggled = !this.mobileMenuToggled;
        }
      }, {
        key: "closeMenu",
        value: function closeMenu() {
          this.mobileMenuToggled = false;
        }
      }]);

      return NavigationBarComponent;
    }();

    NavigationBarComponent.ctorParameters = function () {
      return [{
        type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    NavigationBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navigation-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navigation-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation-bar/navigation-bar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navigation-bar.component.scss */
      "./src/app/navigation/navigation-bar/navigation-bar.component.scss")).default]
    })], NavigationBarComponent);
    /***/
  },

  /***/
  "./src/app/shared/ui.service.ts":
  /*!**************************************!*\
    !*** ./src/app/shared/ui.service.ts ***!
    \**************************************/

  /*! exports provided: UIService */

  /***/
  function srcAppSharedUiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UIService", function () {
      return UIService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var UIService =
    /*#__PURE__*/
    function () {
      function UIService(snackBar) {
        _classCallCheck(this, UIService);

        this.snackBar = snackBar;
        this.loadingStateChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(UIService, [{
        key: "snackBarFn",
        value: function snackBarFn(message, actions, duration) {
          this.snackBar.open(message, actions, {
            duration: duration
          });
        }
      }]);

      return UIService;
    }();

    UIService.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
      }];
    };

    UIService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], UIService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebase: {
        apiKey: "AIzaSyDE8OGILt1Dn5FCfNhstWGRWGrmyn-HbZk",
        authDomain: "travel-inspiration-51021.firebaseapp.com",
        databaseURL: "https://travel-inspiration-51021.firebaseio.com",
        projectId: "travel-inspiration-51021",
        storageBucket: "travel-inspiration-51021.appspot.com",
        messagingSenderId: "780015490983"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\arjen\Documents\_ Git Folders\Travel inspiration app\Travel-inspiration\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]); //# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map