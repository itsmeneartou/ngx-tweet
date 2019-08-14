(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/components/ngx-tweet.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/ngx-tweet.component.ts ***!
  \***************************************************/
/*! exports provided: NgxTweetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxTweetComponent", function() { return NgxTweetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ngx_tweet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/ngx-tweet.service */ "./src/app/services/ngx-tweet.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgxTweetComponent = /** @class */ (function () {
    function NgxTweetComponent(_elementRef, _ngxTweetService, _changeDetectorRef) {
        this._elementRef = _elementRef;
        this._ngxTweetService = _ngxTweetService;
        this._changeDetectorRef = _changeDetectorRef;
        this.isTwitterScriptLoading = true;
    }
    NgxTweetComponent.prototype.ngOnInit = function () {
        this._loadTwitterScript();
    };
    NgxTweetComponent.prototype._loadTwitterScript = function () {
        var _this = this;
        this._ngxTweetService
            .loadScript()
            .subscribe(function (twitterData) {
            _this._updateTwitterScriptLoadingState();
            twitterData.widgets.createTweet(_this.tweetId, _this._elementRef.nativeElement, {});
        });
    };
    NgxTweetComponent.prototype._updateTwitterScriptLoadingState = function () {
        this.isTwitterScriptLoading = false;
        this._changeDetectorRef.detectChanges();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NgxTweetComponent.prototype, "tweetId", void 0);
    NgxTweetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-tweet',
            template: '<ng-content *ngIf="isTwitterScriptLoading"></ng-content>',
            styles: ['.twitter-tweet { transform: none !important; }'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _services_ngx_tweet_service__WEBPACK_IMPORTED_MODULE_1__["NgxTweetService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], NgxTweetComponent);
    return NgxTweetComponent;
}());



/***/ }),

/***/ "./src/app/ngx-tweet.module.ts":
/*!*************************************!*\
  !*** ./src/app/ngx-tweet.module.ts ***!
  \*************************************/
/*! exports provided: NgxTweetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxTweetModule", function() { return NgxTweetModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_ngx_tweet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ngx-tweet.component */ "./src/app/components/ngx-tweet.component.ts");
/* harmony import */ var _services_ngx_tweet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/ngx-tweet.service */ "./src/app/services/ngx-tweet.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NgxTweetModule = /** @class */ (function () {
    function NgxTweetModule() {
    }
    NgxTweetModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_ngx_tweet_component__WEBPACK_IMPORTED_MODULE_2__["NgxTweetComponent"]
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
            exports: [_components_ngx_tweet_component__WEBPACK_IMPORTED_MODULE_2__["NgxTweetComponent"]],
            providers: [_services_ngx_tweet_service__WEBPACK_IMPORTED_MODULE_3__["NgxTweetService"]]
        })
    ], NgxTweetModule);
    return NgxTweetModule;
}());



/***/ }),

/***/ "./src/app/services/ngx-tweet.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/ngx-tweet.service.ts ***!
  \***********************************************/
/*! exports provided: NgxTweetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxTweetService", function() { return NgxTweetService; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var NgxTweetService = /** @class */ (function () {
    function NgxTweetService(_document) {
        this._document = _document;
        this.TWITTER_OBJECT = 'twttr';
        this.TWITTER_SCRIPT_ID = 'twitter-wjs';
        this.TWITTER_WIDGET_URL = 'https://platform.twitter.com/widgets.js';
    }
    NgxTweetService.prototype.loadScript = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this._startScriptLoad();
            _this._document.defaultView[_this.TWITTER_OBJECT].ready(_this._onTwitterScriptLoadedFactory(observer));
        });
    };
    NgxTweetService.prototype._startScriptLoad = function () {
        var twitterData = this._document.defaultView[this.TWITTER_OBJECT] || {};
        if (this._twitterScriptAlreadyExists()) {
            this._document.defaultView[this.TWITTER_OBJECT] = twitterData;
            return;
        }
        this._appendTwitterScriptToDOM();
        twitterData._e = [];
        twitterData.ready = function (callback) {
            twitterData._e.push(callback);
        };
        this._document.defaultView[this.TWITTER_OBJECT] = twitterData;
    };
    NgxTweetService.prototype._twitterScriptAlreadyExists = function () {
        var twitterScript = this._document.getElementById(this.TWITTER_SCRIPT_ID);
        return (twitterScript !== null || typeof twitterScript !== 'object');
    };
    NgxTweetService.prototype._appendTwitterScriptToDOM = function () {
        var firstJSScript = this._document.getElementsByTagName('script')[0];
        var js = this._document.createElement('script');
        js.id = this.TWITTER_SCRIPT_ID;
        js.src = this.TWITTER_WIDGET_URL;
        firstJSScript.parentNode.insertBefore(js, firstJSScript);
    };
    NgxTweetService.prototype._onTwitterScriptLoadedFactory = function (observer) {
        return function (twitterData) {
            observer.next(twitterData);
            observer.complete();
        };
    };
    NgxTweetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])),
        __metadata("design:paramtypes", [Object])
    ], NgxTweetService);
    return NgxTweetService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_ngx_tweet_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/ngx-tweet.module */ "./src/app/ngx-tweet.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_ngx_tweet_module__WEBPACK_IMPORTED_MODULE_2__["NgxTweetModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/kartik/projects/ngx-tweet/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map