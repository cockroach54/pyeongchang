webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main2.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_app_module__ = __webpack_require__("../../../../../src/news/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__news_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/news/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/news/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='row'>\n  <div class=\"col s12 m10 offset-m1 l8 offset-l2\">\n    <!-- BUTTONS -->\n    <app-other-link></app-other-link>\n    <br/>\n\n    <!-- ROUTER -->\n    <article>\n      <router-outlet></router-outlet>\n    </article>\n    <br/>\n\n    <!-- SURVEY -->\n    <app-survey></app-survey>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/news/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'news';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/news/app.component.html"),
            styles: [__webpack_require__("../../../../../src/news/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/news/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/news/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__text_detail_text_detail_component__ = __webpack_require__("../../../../../src/news/text-detail/text-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__card_detail_card_detail_component__ = __webpack_require__("../../../../../src/news/card-detail/card-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__movie_detail_movie_detail_component__ = __webpack_require__("../../../../../src/news/movie-detail/movie-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__other_link_other_link_component__ = __webpack_require__("../../../../../src/news/other-link/other-link.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__survey_survey_component__ = __webpack_require__("../../../../../src/news/survey/survey.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



 //for ngModel







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__text_detail_text_detail_component__["a" /* TextDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_7__card_detail_card_detail_component__["a" /* CardDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_8__movie_detail_movie_detail_component__["a" /* MovieDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_9__other_link_other_link_component__["a" /* OtherLinkComponent */],
                __WEBPACK_IMPORTED_MODULE_10__survey_survey_component__["a" /* SurveyComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot([
                    {
                        path: 'contents/text',
                        redirectTo: '/contents/text',
                        pathMatch: 'full'
                    },
                    {
                        path: 'contents/card',
                        redirectTo: '/contents/card',
                        pathMatch: 'full'
                    },
                    {
                        path: 'contents/movie',
                        redirectTo: '/contents/movie',
                        pathMatch: 'full'
                    },
                    {
                        path: 'contents/',
                        redirectTo: '/contents/text',
                        pathMatch: 'full'
                    },
                    {
                        path: '',
                        redirectTo: '/contents/text',
                        pathMatch: 'full'
                    },
                    {
                        path: 'contents/text',
                        component: __WEBPACK_IMPORTED_MODULE_6__text_detail_text_detail_component__["a" /* TextDetailComponent */]
                    },
                    {
                        path: 'contents/card',
                        component: __WEBPACK_IMPORTED_MODULE_7__card_detail_card_detail_component__["a" /* CardDetailComponent */]
                    },
                    {
                        path: 'contents/movie',
                        component: __WEBPACK_IMPORTED_MODULE_8__movie_detail_movie_detail_component__["a" /* MovieDetailComponent */]
                    },
                ])
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/news/card-detail/card-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/news/card-detail/card-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n<!-- <div class='row'>\n  <div class=\"col s12 m10 offset-m1 l8 offset-l2\"> -->\n    <div class=\"bxslider\">\n      <!-- <div><img src=\"/assets/bg_blue_basic.png\"></div>\n      <div><img src=\"/assets/bg_blue_headline.png\"></div>\n      <div><img src=\"/assets/bg_gold_basic.png\"></div>\n      <div><img src=\"/assets/bg_gold_headline.png\"></div> -->\n      <div><img src='/assets/ex1.jpg'></div>\n      <div><img src='/assets/ex2.jpg'></div>\n      <div><img src='/assets/ex3.jpg'></div>\n    </div>\n  <!-- </div>\n</div> -->\n\n</div>"

/***/ }),

/***/ "../../../../../src/news/card-detail/card-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardDetailComponent = /** @class */ (function () {
    function CardDetailComponent() {
    }
    CardDetailComponent.prototype.ngOnInit = function () {
        console.log($('.bxslider'));
        $('.bxslider').bxSlider({
            auto: true,
            autoStart: false,
            autoControls: true,
            stopAutoOnClick: true,
            pager: true,
        });
    };
    CardDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-card-detail',
            template: __webpack_require__("../../../../../src/news/card-detail/card-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/news/card-detail/card-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CardDetailComponent);
    return CardDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/news/movie-detail/movie-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/news/movie-detail/movie-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n<video class=\"responsive-video\" controls>\n  <source src=\"assets/mv_sample.mp4\" type=\"video/mp4\">\n</video>\n\n</div>"

/***/ }),

/***/ "../../../../../src/news/movie-detail/movie-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MovieDetailComponent = /** @class */ (function () {
    function MovieDetailComponent() {
    }
    MovieDetailComponent.prototype.ngOnInit = function () {
    };
    MovieDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-movie-detail',
            template: __webpack_require__("../../../../../src/news/movie-detail/movie-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/news/movie-detail/movie-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MovieDetailComponent);
    return MovieDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/news/other-link/other-link.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#btnWrapper{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  padding: 0.5rem 0;\r\n}\r\n\r\n.btn{\r\n  padding: 0 1rem;\r\n}\r\n\r\ni{\r\n  color: #fff;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/news/other-link/other-link.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='btnWrapper' class=\"col s12 m10 offset-m1 l8 offset-l2\">\n  <ul class=\"tabs\">\n    <li class=\"tab col s4\"><a class=\"active\" routerLink=\"/contents/text\">텍스트뉴스</a></li>\n    <li class=\"tab col s4\"><a routerLink=\"/contents/card\">카드뉴스</a></li>\n    <li class=\"tab col s4\"><a routerLink=\"/contents/movie\">동영상</a></li>\n  </ul>\n</div>\n<div style=\"clear:both\"></div>"

/***/ }),

/***/ "../../../../../src/news/other-link/other-link.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherLinkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OtherLinkComponent = /** @class */ (function () {
    function OtherLinkComponent() {
    }
    OtherLinkComponent.prototype.ngOnInit = function () {
    };
    OtherLinkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-other-link',
            template: __webpack_require__("../../../../../src/news/other-link/other-link.component.html"),
            styles: [__webpack_require__("../../../../../src/news/other-link/other-link.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OtherLinkComponent);
    return OtherLinkComponent;
}());



/***/ }),

/***/ "../../../../../src/news/survey/survey.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".qst{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/news/survey/survey.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Modal Structure -->\n<!-- <div class=\"container\">\n<form ngNoForm action=\"http://10.0.1.16:5000/survey\" method=\"post\">\n  <div class=\"row\">\n  \n    <div class=\"col s12\">\n      <p>1. 이 뉴스는 신뢰감을 준다.</p>\n      <div class=\"qst\">\n        <span *ngFor=\"let idx of [1,2,3,4,5]\">\n          <input class=\"with-gap\" name=\"q1\" type=\"radio\" id=\"test1-{{idx}}\" value=\"{{idx}}\"/>\n          <label for=\"test1-{{idx}}\">{{idx}}</label>\n        </span>\n      </div>\n    </div>\n    <div class=\"col s12\">\n      <p>2. 이 뉴스는 재미있다.</p>\n      <div class=\"qst\">      \n        <span *ngFor=\"let idx of [1,2,3,4,5]\">\n          <input class=\"with-gap\" name=\"q2\" type=\"radio\" id=\"test2-{{idx}}\" value=\"{{idx}}\"/>\n          <label for=\"test2-{{idx}}\">{{idx}}</label>\n        </span>\n      </div>\n    </div>\n    <div class=\"col s12\">\n      <p>3. 이 뉴스는 흥미롭다.</p>\n      <div class=\"qst\">      \n        <span *ngFor=\"let idx of [1,2,3,4,5]\">\n          <input class=\"with-gap\" name=\"q3\" type=\"radio\" id=\"test3-{{idx}}\" value=\"{{idx}}\"/>\n          <label for=\"test3-{{idx}}\">{{idx}}</label>\n        </span>\n      </div>\n    </div>\n    <div class=\"col s12\">\n      <p>4. 이 뉴스는 부정적이다.</p>\n      <div class=\"qst\">\n        <span *ngFor=\"let idx of [1,2,3,4,5]\">\n          <input class=\"with-gap\" name=\"q4\" type=\"radio\" id=\"test4-{{idx}}\" value=\"{{idx}}\"/>\n          <label for=\"test4-{{idx}}\">{{idx}}</label>\n        </span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"input-field col s12\">\n      <input id=\"s1\" type=\"text\" class=\"validate\" name=\"s1\">\n      <label for=\"s1\">5. 어떤 뉴스가 가장 인상이 깊었습니까?</label>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"input-field col s12\">\n      <textarea id='s2' name=\"s2\" class=\"materialize-textarea\" data-length=\"100\"></textarea>\n      <label for=\"s2\">6. 자유롭게 의견을 적어주세요</label>\n    </div>\n  </div>\n\n  <div style=\"text-align:center\">\n    <button class=\"btn waves-effect waves-light\" type=\"submit\">제출하기\n      <i class=\"material-icons right\">send</i>\n    </button>\n  </div>\n\n</form>\n</div> -->\n<iframe name='ifrm' width='0' height='0' frameborder='0'></iframe>\n\n<div id=\"modal1\" class=\"modal modal-fixed-footer\">\n  <div class=\"modal-content\">\n    <form ngNoForm name=\"survey\" method=\"post\">\n    <!-- <form ngNoForm name=\"survey\" action=\"http://10.0.1.16:5000/survey\" method=\"post\" target=\"ifrm\"> -->\n      <div class=\"row\">\n      \n        <div class=\"col s12\">\n          <p>1. 이 뉴스는 신뢰감을 준다.</p>\n          <div class=\"qst\">\n            <span *ngFor=\"let idx of [1,2,3,4,5]\">\n              <input class=\"with-gap\" name=\"q1\" type=\"radio\" id=\"test1-{{idx}}\" value=\"{{idx}}\"/>\n              <label for=\"test1-{{idx}}\">{{idx}}</label>\n            </span>\n          </div>\n        </div>\n        <div class=\"col s12\">\n          <p>2. 이 뉴스는 재미있다.</p>\n          <div class=\"qst\">      \n            <span *ngFor=\"let idx of [1,2,3,4,5]\">\n              <input class=\"with-gap\" name=\"q2\" type=\"radio\" id=\"test2-{{idx}}\" value=\"{{idx}}\"/>\n              <label for=\"test2-{{idx}}\">{{idx}}</label>\n            </span>\n          </div>\n        </div>\n        <div class=\"col s12\">\n          <p>3. 이 뉴스는 흥미롭다.</p>\n          <div class=\"qst\">      \n            <span *ngFor=\"let idx of [1,2,3,4,5]\">\n              <input class=\"with-gap\" name=\"q3\" type=\"radio\" id=\"test3-{{idx}}\" value=\"{{idx}}\"/>\n              <label for=\"test3-{{idx}}\">{{idx}}</label>\n            </span>\n          </div>\n        </div>\n        <div class=\"col s12\">\n          <p>4. 이 뉴스는 부정적이다.</p>\n          <div class=\"qst\">\n            <span *ngFor=\"let idx of [1,2,3,4,5]\">\n              <input class=\"with-gap\" name=\"q4\" type=\"radio\" id=\"test4-{{idx}}\" value=\"{{idx}}\"/>\n              <label for=\"test4-{{idx}}\">{{idx}}</label>\n            </span>\n          </div>\n        </div>\n      </div>\n    \n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <input id=\"s1\" type=\"text\" class=\"validate\" name=\"s1\">\n          <label for=\"s1\">5. 어떤 뉴스가 가장 인상이 깊었습니까?</label>\n        </div>\n      </div>\n    \n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <textarea id='s2' name=\"s2\" class=\"materialize-textarea\" data-length=\"100\"></textarea>\n          <label for=\"s2\">6. 자유롭게 의견을 적어주세요</label>\n        </div>\n      </div>\n    \n      <!-- <div style=\"text-align:center\">\n        <button class=\"btn waves-effect waves-light\" type=\"submit\">제출하기\n          <i class=\"material-icons right\">send</i>\n        </button>\n      </div> -->\n    \n    </form>\n  </div>\n\n\n  <div class=\"modal-footer\">\n    <a class=\"modal-action modal-close waves-effect waves-green btn-flat \"\n    (click)=\"submitSurvey()\" >제출하기</a>\n  </div>\n</div>\n\n<!-- Modal Trigger -->\n<div style=\"text-align:center\">\n  <a class=\"waves-effect waves-light btn\" (click)=\"gotoWeb()\">다른 뉴스 보기</a>\n  <a class=\"waves-effect waves-light btn modal-trigger\" href=\"#modal1\">설문 참여하기</a>\n  <a id=\"kakao-link-btn\" href=\"javascript:;\">\n    <img style=\"width:36px; vertical-align:bottom\" src=\"//developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png\"/>\n  </a>\n</div>"

/***/ }),

/***/ "../../../../../src/news/survey/survey.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SurveyComponent = /** @class */ (function () {
    function SurveyComponent() {
    }
    SurveyComponent.prototype.ngOnInit = function () {
        Kakao.init('2c753f4f522f7fbbbad08e5568d9822a');
        // // 카카오링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다.
        Kakao.Link.createDefaultButton({
            container: '#kakao-link-btn',
            objectType: 'feed',
            content: {
                title: '평창 동계올림픽 로봇 뉴스',
                description: '#평창 #동계 #로봇 #HCCLab #AI #ROBOT',
                imageUrl: 'http://koreabizwire.com/wp/wp-content/uploads/2017/01/12695156865_f899306b17_z.jpg',
                // imageUrl: 'http://10.0.1.16:5000/assets/ex3.jpg',
                link: {
                    mobileWebUrl: 'http://10.0.1.16:5000/contents/card',
                    webUrl: 'http://10.0.1.16:5000/contents/card'
                }
            },
            social: {
                likeCount: 286,
                commentCount: 45,
                sharedCount: 845
            },
            buttons: [
                {
                    title: '뉴스 보기',
                    link: {
                        mobileWebUrl: 'http://10.0.1.16:5000/contents/text',
                        webUrl: 'http://10.0.1.16:5000/contents/text'
                    }
                },
            ]
        });
    };
    SurveyComponent.prototype.submitSurvey = function () {
        // var port = window.location.port;
        // var host = (port=='4200')? 'http://10.0.1.16:5000' : 'http://'+window.location.host;
        // document.forms['survey'].submit();
        var queryString = $("form[name=survey]").serialize();
        $.ajax({
            type: 'post',
            url: 'http://10.0.1.16:5000/survey',
            data: queryString,
            dataType: 'json',
            success: function (data) {
                $("form[name=survey]").trigger('reset');
                // Materialize.toast(message, displayLength, className, completeCallback);
                Materialize.toast('설문이 제출되었습니다.', 4000); // 4000 is the duration of the toast
            }
        });
        // http://fruitdev.tistory.com/174
    };
    SurveyComponent.prototype.gotoWeb = function () {
        var port = window.location.port;
        var host = (port == '4200') ? 'http://10.0.1.16:5000' : 'http://' + window.location.host;
        // window.location.href = host+'/textNews';
        var p = window.location.pathname;
        if (p.indexOf('text'))
            p = '/textNews';
        else if (p.indexOf('card'))
            p = '/cardNews';
        else
            p = '/movieNews';
        window.location.href = host + p;
    };
    SurveyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-survey',
            template: __webpack_require__("../../../../../src/news/survey/survey.component.html"),
            styles: [__webpack_require__("../../../../../src/news/survey/survey.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SurveyComponent);
    return SurveyComponent;
}());



/***/ }),

/***/ "../../../../../src/news/text-detail/text-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/news/text-detail/text-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <p>\n    이상화 금메달, 빙속여제의 올림픽 3연패 \n    기사입력 2014. 02. 10 오전 10:33\n    이상화 선수가 조금전 강릉 아이스아레나에서 열린 스피드스케이팅 여자 500M 경기에서 1, 2차전 종합 74.70초를 기록하며 1위를 차지해 금메달을 목에 걸었습니다. \n    1차전에서 37.42초의 성적으로 1위를 기록한 이상화 선수는, 2차전에서 마지막 조인 17번 조의 인라인에 섰습니다. 이상화 선수는 우승을 위해 2차전에서 37.64초의 기록이 필요했습니다.\n    100M 지점에서 이상화 선수는 10.17초를 기록하며 전체 선수 중 가장 빠른 기록으로 이 지점을 통과했습니다.\n    이 기세를 몰아 이상화 선수는 결승선을 37.28초로 통과하며 2차전 1위를 차지했습니다. 2차전 2위와의 점수차는 0.21초 였습니다. 이상화 선수는 최종 순위를 결정하는 종합 기록에서 74.70초로 1위를 차지했습니다. 종합 2위와의 점수차는 0.36초 였습니다. 이상화 선수의 2차전 기록 37.28초와 종합 기록 74.70초는 각각 올림픽 신기록으로 기록되었습니다.\n    이로써 이상화 선수는 올림픽에서 스피드스케이팅 500M 종목 3연패라는 쾌거를 달성했습니다. 소셜미디어에도 경기에 대한 폭발적인 반응이 이어졌습니다. 트위터 ID ‘iamohchanghoon’은 ‘이상화 선수 최고에요’라는 트윗을 남겼습니다. \n    한편, 2위는 러시아의 올가 파쿨리나, 3위는 네덜란드의 마르고 보어 선수가 차지했습니다. \n    newsrobothcc@gmail.com  / 기사제공 NEWS ROBOT\n  </p>\n</div>"

/***/ }),

/***/ "../../../../../src/news/text-detail/text-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TextDetailComponent = /** @class */ (function () {
    function TextDetailComponent() {
    }
    TextDetailComponent.prototype.ngOnInit = function () {
    };
    TextDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-text-detail',
            template: __webpack_require__("../../../../../src/news/text-detail/text-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/news/text-detail/text-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TextDetailComponent);
    return TextDetailComponent;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main2.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map