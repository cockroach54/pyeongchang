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

module.exports = "<div class='row'>\r\n  <div class=\"col s12 m10 offset-m1 l8 offset-l2\">\r\n    <!-- BUTTONS -->\r\n    <app-other-link></app-other-link>\r\n    <br/>\r\n\r\n    <!-- ROUTER -->\r\n    <article>\r\n      <router-outlet ></router-outlet>\r\n    </article>\r\n    <br/>\r\n\r\n    <!-- SURVEY -->\r\n    <app-survey></app-survey>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/news/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__info_model__ = __webpack_require__("../../../../../src/news/info.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_service__ = __webpack_require__("../../../../../src/news/info.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'news';
        this.info = new __WEBPACK_IMPORTED_MODULE_1__info_model__["a" /* Info */]();
    }
    //array shuffle
    AppComponent.prototype.shuffle = function (a) {
        var j, temp, i;
        for (i = a.length; i; i -= 1) {
            j = Math.floor(Math.random() * i);
            temp = a[i - 1];
            a[i - 1] = a[j];
            a[j] = temp;
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        this.shuffle(__WEBPACK_IMPORTED_MODULE_2__info_service__["a" /* InfoService */].newsList);
        __WEBPACK_IMPORTED_MODULE_2__info_service__["a" /* InfoService */].newsList = ['guide', 'select'].concat(__WEBPACK_IMPORTED_MODULE_2__info_service__["a" /* InfoService */].newsList);
        // url에서 처음 뉴스종류 따오기
        var newsKind = window.location.pathname.split('/')[2].split(';')[0];
        __WEBPACK_IMPORTED_MODULE_2__info_service__["a" /* InfoService */].cursor = __WEBPACK_IMPORTED_MODULE_2__info_service__["a" /* InfoService */].newsList.indexOf(newsKind);
        // game, gameKind parsing
        // this.route.params.toPromise().then((params: Params)=>{
        //   console.log(params['game']);
        // });
        // 나중에 위의 코드식으로 바꾸자
        var params = window.location.pathname.split('/');
        __WEBPACK_IMPORTED_MODULE_2__info_service__["a" /* InfoService */].game = params[3];
        __WEBPACK_IMPORTED_MODULE_2__info_service__["a" /* InfoService */].gameKind = params[4];
        console.log(__WEBPACK_IMPORTED_MODULE_2__info_service__["a" /* InfoService */].game, __WEBPACK_IMPORTED_MODULE_2__info_service__["a" /* InfoService */].gameKind);
    };
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__select_select_component__ = __webpack_require__("../../../../../src/news/select/select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guide_guide_component__ = __webpack_require__("../../../../../src/news/guide/guide.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__end_page_end_page_component__ = __webpack_require__("../../../../../src/news/end-page/end-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__news_service__ = __webpack_require__("../../../../../src/news/news.service.ts");
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
                __WEBPACK_IMPORTED_MODULE_11__select_select_component__["a" /* SelectComponent */],
                __WEBPACK_IMPORTED_MODULE_12__guide_guide_component__["a" /* GuideComponent */],
                __WEBPACK_IMPORTED_MODULE_13__end_page_end_page_component__["a" /* EndPageComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot([
                    // {
                    //   path: 'contents/text',
                    //   redirectTo: '/contents/text/:name',
                    //   pathMatch: 'full'
                    // },
                    // {
                    //   path: 'contents/card',
                    //   redirectTo: '/contents/card/:name',
                    //   pathMatch: 'full'
                    // },
                    // {
                    //   path: 'contents/movie',
                    //   redirectTo: '/contents/movie',
                    //   pathMatch: 'full'
                    // },
                    // {
                    //   path: 'contents/',
                    //   redirectTo: '/contents/text/:name',
                    //   pathMatch: 'full'
                    // },
                    {
                        path: '',
                        redirectTo: '/contents/select',
                        pathMatch: 'full'
                    },
                    {
                        path: 'contents/text/:game/:gameKind',
                        component: __WEBPACK_IMPORTED_MODULE_6__text_detail_text_detail_component__["a" /* TextDetailComponent */]
                    },
                    {
                        path: 'contents/card/:game/:gameKind',
                        component: __WEBPACK_IMPORTED_MODULE_7__card_detail_card_detail_component__["a" /* CardDetailComponent */]
                    },
                    {
                        path: 'contents/movie/:game/:gameKind',
                        component: __WEBPACK_IMPORTED_MODULE_8__movie_detail_movie_detail_component__["a" /* MovieDetailComponent */]
                    },
                    {
                        path: 'contents/text2/:game/:gameKind',
                        component: __WEBPACK_IMPORTED_MODULE_6__text_detail_text_detail_component__["a" /* TextDetailComponent */]
                    },
                    {
                        path: 'contents/card2/:game/:gameKind',
                        component: __WEBPACK_IMPORTED_MODULE_7__card_detail_card_detail_component__["a" /* CardDetailComponent */]
                    },
                    {
                        path: 'contents/movie2/:game/:gameKind',
                        component: __WEBPACK_IMPORTED_MODULE_8__movie_detail_movie_detail_component__["a" /* MovieDetailComponent */]
                    },
                    {
                        path: 'contents/select/:game/:gameKind',
                        component: __WEBPACK_IMPORTED_MODULE_11__select_select_component__["a" /* SelectComponent */]
                    },
                    {
                        path: 'contents/guide/:game/:gameKind',
                        component: __WEBPACK_IMPORTED_MODULE_12__guide_guide_component__["a" /* GuideComponent */]
                    },
                    {
                        path: 'contents/endPage/:game/:gameKind',
                        component: __WEBPACK_IMPORTED_MODULE_13__end_page_end_page_component__["a" /* EndPageComponent */]
                    },
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__news_service__["a" /* NewsService */]],
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

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"bxslider\">\r\n    <div *ngFor=\"let file of filelist\">\r\n      <img [src]=\"file\">\r\n    </div>\r\n    <div><img src='/assets/ex1.jpg'></div>\r\n    <div><img src='/assets/ex2.jpg'></div>\r\n    <div><img src='/assets/ex3.jpg'></div>\r\n  </div>\r\n\r\n<!-- material css 슬라이더 -->\r\n<!-- <div class=\"carousel carousel-slider\">\r\n  <a class=\"carousel-item\" *ngFor=\"let file of filelist\">\r\n      <img [src]=\"file\">\r\n  </a>\r\n  <a class=\"carousel-item\" href=\"#one!\"><img src=\"/assets/ex1.jpg\"></a>\r\n  <a class=\"carousel-item\" href=\"#two!\"><img src=\"/assets/ex2.jpg\"></a>\r\n  <a class=\"carousel-item\" href=\"#three!\"><img src=\"/assets/ex3.jpg\"></a>\r\n</div> -->\r\n        \r\n</div>"

/***/ }),

/***/ "../../../../../src/news/card-detail/card-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__news_service__ = __webpack_require__("../../../../../src/news/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_service__ = __webpack_require__("../../../../../src/news/info.service.ts");
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
    function CardDetailComponent(newsService) {
        this.newsService = newsService;
        this.filelist = [];
    }
    CardDetailComponent.prototype.ngOnInit = function () {
    };
    // db에서 이미지주소 불러와서 슬라이더 돔엘리먼트 만드는 함수 필요
    CardDetailComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.newsService.makeSourceList(__WEBPACK_IMPORTED_MODULE_2__info_service__["a" /* InfoService */].game, __WEBPACK_IMPORTED_MODULE_2__info_service__["a" /* InfoService */].gameKind, __WEBPACK_IMPORTED_MODULE_2__info_service__["a" /* InfoService */].player).then(function (res) {
            console.log(res);
            var templist = res;
            var templist2 = [];
            templist.forEach(function (f, i) {
                templist2[i] = 'newsdata/' + __WEBPACK_IMPORTED_MODULE_2__info_service__["a" /* InfoService */].game + '/' + __WEBPACK_IMPORTED_MODULE_2__info_service__["a" /* InfoService */].gameKind + '/' + __WEBPACK_IMPORTED_MODULE_2__info_service__["a" /* InfoService */].player + '/' + f;
            });
            templist2.sort(function (a, b) {
                return a > b ? 1 : -1;
            }); // 파일명소팅
            _this.filelist = templist2;
            setTimeout(_this.makeCarousel, 500);
        });
    };
    CardDetailComponent.prototype.ngAfterViewChecked = function () {
    };
    CardDetailComponent.prototype.makeCarousel = function () {
        $('.bxslider').bxSlider({
            auto: true,
            autoStart: false,
            autoControls: false,
            stopAutoOnClick: true,
            pager: true,
            infiniteLoop: false,
        });
        // z-index 설문지 뒤로가게 줄이기
        document.querySelector('a.bx-next').style.zIndex = '100';
        document.querySelector('a.bx-prev').style.zIndex = '100';
        //   // material css 용 슬라이더
        // $('.carousel.carousel-slider').carousel({fullWidth: true});
    };
    CardDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-card-detail',
            template: __webpack_require__("../../../../../src/news/card-detail/card-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/news/card-detail/card-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__news_service__["a" /* NewsService */]])
    ], CardDetailComponent);
    return CardDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/news/end-page/end-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/news/end-page/end-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n 설문이 끝났습니다. 참여해 주셔서 감사합니다.\n</p>\n<img src=\"/assets/suhorang.jpg\" style=\"width:80%\">"

/***/ }),

/***/ "../../../../../src/news/end-page/end-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EndPageComponent; });
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

var EndPageComponent = /** @class */ (function () {
    function EndPageComponent() {
    }
    EndPageComponent.prototype.ngOnInit = function () {
    };
    EndPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-end-page',
            template: __webpack_require__("../../../../../src/news/end-page/end-page.component.html"),
            styles: [__webpack_require__("../../../../../src/news/end-page/end-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EndPageComponent);
    return EndPageComponent;
}());



/***/ }),

/***/ "../../../../../src/news/guide/guide.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/news/guide/guide.component.html":
/***/ (function(module, exports) {

module.exports = "<p style=\"font-weight:bold\">\n  뉴스로봇 기사와 설문이 도착했습니다.\n</p>\n<P style=\"text-align:left\">\n  뉴스로봇이 조금 전 끝난 경기에 대한 자동 기사 생성을 준비 중입니다. 뉴스로봇은 “내용”과 “형식”에 따라 다양한 기사를 생성합니다. “내용”의 경우 전체 경기 결과에 대한 “요약 기사” 와 사용자가 관심사에 따라 선택한 선수에 대한 “선택 기사”의 두 가지 종류가 있습니다. “형식”의 경우 “텍스트 뉴스” “카드 뉴스” “동영상 뉴스”의 세 가지 종류가 있습니다. 두 가지 내 용과 세 가지 형식을 조합한 여섯가지 기사가 생성되며 임의의 순서로 제공됩니다.\n</P>\n<br/>\n<img src=\"../guide.png\" style=\"width:100%\">\n<!-- <img src=\"/assets/guide.png\" style=\"width:100%\"> -->\n<button class=\"waves-effect waves-light btn\" (click)=\"goNext()\">다음으로</button>\n"

/***/ }),

/***/ "../../../../../src/news/guide/guide.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__info_service__ = __webpack_require__("../../../../../src/news/info.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GuideComponent = /** @class */ (function () {
    function GuideComponent() {
    }
    GuideComponent.prototype.ngOnInit = function () {
    };
    GuideComponent.prototype.goNext = function () {
        console.log('go to guide page!!');
        __WEBPACK_IMPORTED_MODULE_1__info_service__["a" /* InfoService */].plusCursor();
    };
    GuideComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-guide',
            template: __webpack_require__("../../../../../src/news/guide/guide.component.html"),
            styles: [__webpack_require__("../../../../../src/news/guide/guide.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GuideComponent);
    return GuideComponent;
}());



/***/ }),

/***/ "../../../../../src/news/info.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Info; });
var Info = /** @class */ (function () {
    function Info() {
        this.newsList = ['text', 'card', 'movie', 'text2', 'card2', 'movie2'];
        this.cursor = 0;
    }
    return Info;
}());



/***/ }),

/***/ "../../../../../src/news/info.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoService; });
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

var InfoService = /** @class */ (function () {
    function InfoService() {
    }
    InfoService.show = function () {
        console.log('$$$$$$$', this.cursor);
    };
    InfoService.plusCursor = function () {
        // if(this.cursor == this.newsList.length-1) return;
        this.cursor++;
        console.log('cursor: ', this.cursor);
    };
    InfoService.cursor = 0; // 현재 뉴스 종류 인덱스. 아래 newsList의 index
    InfoService.newsList = ['text', 'card', 'movie', 'text2', 'card2', 'movie2'];
    InfoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], InfoService);
    return InfoService;
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

module.exports = "<div class=\"container\">\r\n\r\n<video class=\"responsive-video\" controls>\r\n  <source src=\"assets/mv_sample.mp4\" type=\"video/mp4\">\r\n</video>\r\n\r\n</div>"

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

/***/ "../../../../../src/news/news.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsService = /** @class */ (function () {
    function NewsService(http) {
        this.http = http;
        this.port = window.location.port;
        this.host = (this.port == '4201') ? 'http://127.0.0.1:5000' : 'http://' + window.location.host;
        this.header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    ;
    // mysql에서 패스 가져오기
    NewsService.prototype.getPath = function (game, gameKind, player) {
        console.log("api/path api call");
        var query = 'player=' + player + '&game=' + game + '&gameKind=' + gameKind;
        var url = this.host + '/api/path?' + query;
        return this.http.get(url)
            .toPromise()
            .then(function (res) {
            // this.res = res.json()[0];
            return res.json();
        })
            .catch(this.handleError);
    };
    ;
    //   getKeywords(): Promise<string[]>{
    //     return this.http
    //               .get(this.host+'/api/keywords')
    //               .toPromise()
    //               .then(res => res.json());
    //   }
    NewsService.prototype.makeSourceList = function (game, gameKind, player) {
        console.log("api/filelist api call");
        var query = 'player=' + player + '&game=' + game + '&gameKind=' + gameKind;
        var url = this.host + '/api/filelist?' + query;
        return this.http.get(url)
            .toPromise()
            .then(function (res) {
            // this.res = res.json()[0];
            return res.json();
        })
            .catch(this.handleError);
    };
    ;
    NewsService.prototype.handleError = function (error) {
        console.error('an error occured', error);
        return Promise.reject(error.message || error);
    };
    ;
    NewsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], NewsService);
    return NewsService;
}());



/***/ }),

/***/ "../../../../../src/news/other-link/other-link.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#btnWrapper{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  padding: 0.5rem 0;\r\n}\r\n\r\n.btn{\r\n  padding: 0 1rem;\r\n}\r\n\r\ni{\r\n  color: #fff;\r\n}\r\n\r\n.temp{\r\n  visibility: hidden;\r\n  height: 0;\r\n}\r\n\r\n.newsInfo{\r\n  text-align: center;\r\n  font-weight: bold;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/news/other-link/other-link.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n<div id='btnWrapper' class=\"col s12 m10 offset-m1 l8 offset-l2\">\r\n  <ul class=\"tabs\">\r\n    <li class=\"tab col s4\" *ngFor=\"let news of newsList; let i=index\">\r\n      <a [href]=\"'#'+news\" (click)='myNavigation($event.target, i)'>{{news}}</a></li>\r\n  </ul>\r\n</div> \r\n<div [id]=\"news\" class=\"col s12 temp\">{{news}}</div>\r\n</div>\r\n\r\n<div style=\"clear:both\"></div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col s12 m10 offset-m1 l8 offset-l2\">\r\n    <div class=\"progress\">\r\n      <div class=\"determinate\" [style.width]=\"progressWidth+'%'\"></div>\r\n      <!-- <div class=\"determinate\" style=\"width: 30%\"></div> -->\r\n    </div>\r\n\r\n    <div class='newsInfo' *ngIf=\"info.cursor>1\">현재 {{newsKind}} 뉴스를 보고 있습니다.</div>\r\n  </div>\r\n</div>\r\n\r\n<!-- <div class=\"row\">\r\n  <p>현재 {{newsKind}} 뉴스를 보고 있습니다.</p>\r\n</div> -->"

/***/ }),

/***/ "../../../../../src/news/other-link/other-link.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherLinkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_model__ = __webpack_require__("../../../../../src/news/info.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__info_service__ = __webpack_require__("../../../../../src/news/info.service.ts");
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
    function OtherLinkComponent(router, route) {
        this.router = router;
        this.route = route;
        this.progressWidth = 0;
        this.oldInfo = new __WEBPACK_IMPORTED_MODULE_2__info_model__["a" /* Info */]();
        this.info = new __WEBPACK_IMPORTED_MODULE_2__info_model__["a" /* Info */]();
    }
    OtherLinkComponent.prototype.setProgressBar = function (i) {
        this.progressWidth = 100 / __WEBPACK_IMPORTED_MODULE_3__info_service__["a" /* InfoService */].newsList.length * (i + 1);
    };
    OtherLinkComponent.prototype.ngOnInit = function () {
        console.log(__WEBPACK_IMPORTED_MODULE_3__info_service__["a" /* InfoService */].newsList);
        this.newsList = __WEBPACK_IMPORTED_MODULE_3__info_service__["a" /* InfoService */].newsList;
    };
    OtherLinkComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // 처음에 중간도메인으로 온경우 탭바 세팅
        setTimeout(function () {
            $('ul.tabs').tabs('select_tab', __WEBPACK_IMPORTED_MODULE_3__info_service__["a" /* InfoService */].newsList[__WEBPACK_IMPORTED_MODULE_3__info_service__["a" /* InfoService */].cursor]);
            _this.setProgressBar(__WEBPACK_IMPORTED_MODULE_3__info_service__["a" /* InfoService */].newsList.indexOf(__WEBPACK_IMPORTED_MODULE_3__info_service__["a" /* InfoService */].newsList[__WEBPACK_IMPORTED_MODULE_3__info_service__["a" /* InfoService */].cursor]));
        }, 300);
    };
    OtherLinkComponent.prototype.myNavigation = function (el, i) {
        __WEBPACK_IMPORTED_MODULE_3__info_service__["a" /* InfoService */].cursor = i;
    };
    // ngOnChanges(changes: SimpleChanges){
    //   let change = changes['info'];
    //   console.log('---------onChanges--------');
    //   console.log(change.previousValue, change.currentValue);
    // }
    OtherLinkComponent.prototype.ngDoCheck = function () {
        // 객체의 경우 내부 프로퍼티만 변하는경우 setter, ngOnChange에서 못잡음  
        if (__WEBPACK_IMPORTED_MODULE_3__info_service__["a" /* InfoService */].cursor !== this.oldInfo.cursor) {
            console.log('---change detected---');
            // InfoService.cursor변하면 여기서 저절로 라우팅
            var i = __WEBPACK_IMPORTED_MODULE_3__info_service__["a" /* InfoService */].cursor;
            this.oldInfo.cursor = __WEBPACK_IMPORTED_MODULE_3__info_service__["a" /* InfoService */].cursor;
            this.info = __WEBPACK_IMPORTED_MODULE_3__info_service__["a" /* InfoService */];
            this.newsKind = this.info.newsList[this.info.cursor];
            if (i >= __WEBPACK_IMPORTED_MODULE_3__info_service__["a" /* InfoService */].newsList.length) {
                this.endNews();
                return;
            }
            var newsKind = __WEBPACK_IMPORTED_MODULE_3__info_service__["a" /* InfoService */].newsList[i];
            $('ul.tabs').tabs('select_tab', newsKind);
            this.setProgressBar(i);
            this.router.navigate(['contents/', newsKind, __WEBPACK_IMPORTED_MODULE_3__info_service__["a" /* InfoService */].game, __WEBPACK_IMPORTED_MODULE_3__info_service__["a" /* InfoService */].gameKind]);
        }
    };
    OtherLinkComponent.prototype.endNews = function () {
        // alert('마지막 뉴스입니다. 감사합니다.');
        this.router.navigate(['contents/endPage']);
    };
    OtherLinkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-other-link',
            template: __webpack_require__("../../../../../src/news/other-link/other-link.component.html"),
            styles: [__webpack_require__("../../../../../src/news/other-link/other-link.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], OtherLinkComponent);
    return OtherLinkComponent;
}());



/***/ }),

/***/ "../../../../../src/news/select/select.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".playerBtn{\r\n    height: 8rem;\r\n    width: 30%;\r\n    background-color: #448aff;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    margin: 5px;\r\n}\r\n\r\n.btnWrapper{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/news/select/select.component.html":
/***/ (function(module, exports) {

module.exports = "<p style=\"font-weight:bold\">\n  관심 선수를 선택해 주십시오.\n</p>\n<P style=\"text-align:left\">\n  조금전 열린 경기에서 다음의 선수들이 경기를 펼쳤습니다. 관심 선수 한명을 선택해 주십시오. 해당 선수의 경기 결과에 대    한 뉴스를 생성해 드리겠습니다.\n</P>\n<!-- <div class=\"row\">\n  <div class=\"col s4\" *ngFor=\"let name of players; let i=index\">\n    <div class=\"playerBtn\">\n      {{name}}\n    </div>\n  </div>\n</div> -->\n<div class=\"btnWrapper\">\n  <div class=\"playerBtn\" *ngFor=\"let name of players; let i=index\" (click)=\"setPlayer($event.target)\">\n    {{name}}\n  </div>\n</div>\n<!-- <button class=\"waves-effect waves-light btn\" (click)=\"setPlayer()\">set player</button>\n<button class=\"waves-effect waves-light btn\" (click)=\"setGame()\">set game</button>\n<button class=\"waves-effect waves-light btn\" (click)=\"setGameKind()\">set gameKind</button> -->\n<button class=\"waves-effect waves-light btn\" (click)=\"goNext()\">뉴스 생성하기</button>\n<button class=\"waves-effect waves-light btn\" (click)=\"getNews()\">api!</button>\n"

/***/ }),

/***/ "../../../../../src/news/select/select.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__info_service__ = __webpack_require__("../../../../../src/news/info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_service__ = __webpack_require__("../../../../../src/news/news.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectComponent = /** @class */ (function () {
    function SelectComponent(newsService) {
        this.newsService = newsService;
        this.players = ['Kim', 'Lee', 'James', 'Park', 'Choi', 'Micky', 'Nakamura', 'Bread', 'Alberto']; // dummy
    }
    SelectComponent.prototype.ngOnInit = function () {
    };
    SelectComponent.prototype.setPlayer = function (el) {
        var playerName = el.innerText;
        __WEBPACK_IMPORTED_MODULE_1__info_service__["a" /* InfoService */].player = playerName;
        console.log('set player:', __WEBPACK_IMPORTED_MODULE_1__info_service__["a" /* InfoService */].player);
        var ment = __WEBPACK_IMPORTED_MODULE_1__info_service__["a" /* InfoService */].player + " 선수를 선택하셨습니다. 곧 뉴스 생성이 완료됩니다. 다음 화면부터 제공되는 뉴스를 보시고 설문에 응답해주시기 바랍니다. 감사합니다.";
        Materialize.toast(ment, 4000); // 4000 is the duration of the toast    
        // this.goNext();
    };
    SelectComponent.prototype.setGame = function () {
        __WEBPACK_IMPORTED_MODULE_1__info_service__["a" /* InfoService */].game = 'ski';
        console.log('set game:', __WEBPACK_IMPORTED_MODULE_1__info_service__["a" /* InfoService */].game);
    };
    SelectComponent.prototype.setGameKind = function () {
        __WEBPACK_IMPORTED_MODULE_1__info_service__["a" /* InfoService */].gameKind = '1000m';
        console.log('set gameKind:', __WEBPACK_IMPORTED_MODULE_1__info_service__["a" /* InfoService */].gameKind);
    };
    SelectComponent.prototype.goNext = function () {
        console.log('go to show news!!');
        __WEBPACK_IMPORTED_MODULE_1__info_service__["a" /* InfoService */].plusCursor();
    };
    SelectComponent.prototype.getNews = function () {
        // this.newsService.getPath(InfoService.player, InfoService.game, InfoService.gameKind).then(path => {
        //   console.log(path);
        // });
    };
    SelectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-select',
            template: __webpack_require__("../../../../../src/news/select/select.component.html"),
            styles: [__webpack_require__("../../../../../src/news/select/select.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__news_service__["a" /* NewsService */]])
    ], SelectComponent);
    return SelectComponent;
}());



/***/ }),

/***/ "../../../../../src/news/survey/survey.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".qst{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n}\r\n\r\n.select{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n}\r\n\r\npre{\r\n  color: #555;\r\n  font-family: GillSans, Calibri, Trebuchet, sans-serif;\r\n  font-size: .6em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/news/survey/survey.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Modal Structure -->\r\n<!-- <div class=\"container\">\r\n<form ngNoForm action=\"http://127.0.0.1:5000/survey\" method=\"post\">\r\n  <div class=\"row\">\r\n  \r\n    <div class=\"col s12\">\r\n      <p>1. 이 뉴스는 신뢰감을 준다.</p>\r\n      <div class=\"qst\">\r\n        <span *ngFor=\"let idx of [1,2,3,4,5,6,7]\">\r\n          <input class=\"with-gap\" name=\"q1\" type=\"radio\" id=\"test1-{{idx}}\" value=\"{{idx}}\"/>\r\n          <label for=\"test1-{{idx}}\">{{idx}}</label>\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"col s12\">\r\n      <p>2. 이 뉴스는 재미있다.</p>\r\n      <div class=\"qst\">      \r\n        <span *ngFor=\"let idx of [1,2,3,4,5,6,7]\">\r\n          <input class=\"with-gap\" name=\"q2\" type=\"radio\" id=\"test2-{{idx}}\" value=\"{{idx}}\"/>\r\n          <label for=\"test2-{{idx}}\">{{idx}}</label>\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"col s12\">\r\n      <p>3. 이 뉴스는 흥미롭다.</p>\r\n      <div class=\"qst\">      \r\n        <span *ngFor=\"let idx of [1,2,3,4,5,6,7]\">\r\n          <input class=\"with-gap\" name=\"q3\" type=\"radio\" id=\"test3-{{idx}}\" value=\"{{idx}}\"/>\r\n          <label for=\"test3-{{idx}}\">{{idx}}</label>\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"col s12\">\r\n      <p>4. 이 뉴스는 부정적이다.</p>\r\n      <div class=\"qst\">\r\n        <span *ngFor=\"let idx of [1,2,3,4,5,6,7]\">\r\n          <input class=\"with-gap\" name=\"q4\" type=\"radio\" id=\"test4-{{idx}}\" value=\"{{idx}}\"/>\r\n          <label for=\"test4-{{idx}}\">{{idx}}</label>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"input-field col s12\">\r\n      <input id=\"s1\" type=\"text\" class=\"validate\" name=\"s1\">\r\n      <label for=\"s1\">5. 어떤 뉴스가 가장 인상이 깊었습니까?</label>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"input-field col s12\">\r\n      <textarea id='s2' name=\"s2\" class=\"materialize-textarea\" data-length=\"100\"></textarea>\r\n      <label for=\"s2\">6. 자유롭게 의견을 적어주세요</label>\r\n    </div>\r\n  </div>\r\n\r\n  <div style=\"text-align:center\">\r\n    <button class=\"btn waves-effect waves-light\" type=\"submit\">제출하기\r\n      <i class=\"material-icons right\">send</i>\r\n    </button>\r\n  </div>\r\n\r\n</form>\r\n</div> -->\r\n<iframe name='ifrm' width='0' height='0' frameborder='0'></iframe>\r\n\r\n<div id=\"modal1\" class=\"modal modal-fixed-footer\">\r\n  <div class=\"modal-content\">\r\n    <form ngNoForm name=\"survey\" method=\"post\">\r\n    <!-- <form ngNoForm name=\"survey\" action=\"http://127.0.0.1:5000/survey\" method=\"post\" target=\"ifrm\"> -->\r\n      <div class=\"row\">\r\n        <div class=\"col s12 select\">\r\n<pre>\r\n전혀 동의하지\r\n않음\r\n</pre>\r\n<pre>뉴스종류: {{newsKind}}, 선수: {{info.player}}, 종목: {{info.game}}, 세부: {{info.gameKind}}</pre>\r\n<pre>\r\n전적으로 \r\n동의\r\n</pre>\r\n        </div>\r\n      \r\n        <div class=\"col s12\">\r\n          <p>1. 이 뉴스는 편향되어 있다(biased)</p>\r\n          <div class=\"qst\">\r\n            <span *ngFor=\"let idx of [1,2,3,4,5,6,7]\">\r\n              <input class=\"with-gap\" name=\"q1\" type=\"radio\" id=\"test1-{{idx}}\" value=\"{{idx}}\"/>\r\n              <label for=\"test1-{{idx}}\">{{idx}}</label>\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col s12\">\r\n          <p>2. 이 뉴스는 공정하다(fair)</p>\r\n          <div class=\"qst\">      \r\n            <span *ngFor=\"let idx of [1,2,3,4,5,6,7]\">\r\n              <input class=\"with-gap\" name=\"q2\" type=\"radio\" id=\"test2-{{idx}}\" value=\"{{idx}}\"/>\r\n              <label for=\"test2-{{idx}}\">{{idx}}</label>\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col s12\">\r\n          <p>3. 이 뉴스는 객관적이다(objective)</p>\r\n          <div class=\"qst\">      \r\n            <span *ngFor=\"let idx of [1,2,3,4,5,6,7]\">\r\n              <input class=\"with-gap\" name=\"q3\" type=\"radio\" id=\"test3-{{idx}}\" value=\"{{idx}}\"/>\r\n              <label for=\"test3-{{idx}}\">{{idx}}</label>\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col s12\">\r\n          <p>4. 이 뉴스는 지루하다(boring)</p>\r\n          <div class=\"qst\">\r\n            <span *ngFor=\"let idx of [1,2,3,4,5,6,7]\">\r\n              <input class=\"with-gap\" name=\"q4\" type=\"radio\" id=\"test4-{{idx}}\" value=\"{{idx}}\"/>\r\n              <label for=\"test4-{{idx}}\">{{idx}}</label>\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col s12\">\r\n          <p>5. 이 뉴스는 즐겁다 (enjoyable)</p>\r\n          <div class=\"qst\">\r\n            <span *ngFor=\"let idx of [1,2,3,4,5,6,7]\">\r\n              <input class=\"with-gap\" name=\"q5\" type=\"radio\" id=\"test5-{{idx}}\" value=\"{{idx}}\"/>\r\n              <label for=\"test5-{{idx}}\">{{idx}}</label>\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col s12\">\r\n          <p>6. 이 뉴스는 생생하다(lively)</p>\r\n          <div class=\"qst\">\r\n            <span *ngFor=\"let idx of [1,2,3,4,5,6,7]\">\r\n              <input class=\"with-gap\" name=\"q6\" type=\"radio\" id=\"test6-{{idx}}\" value=\"{{idx}}\"/>\r\n              <label for=\"test6-{{idx}}\">{{idx}}</label>\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col s12\">\r\n          <p>7. 이 뉴스는 흥미롭다(interesting)</p>\r\n          <div class=\"qst\">\r\n            <span *ngFor=\"let idx of [1,2,3,4,5,6,7]\">\r\n              <input class=\"with-gap\" name=\"q7\" type=\"radio\" id=\"test7-{{idx}}\" value=\"{{idx}}\"/>\r\n              <label for=\"test7-{{idx}}\">{{idx}}</label>\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col s12\">\r\n          <p>8. 이 뉴스는 만족스럽다(pleasing)</p>\r\n          <div class=\"qst\">\r\n            <span *ngFor=\"let idx of [1,2,3,4,5,6,7]\">\r\n              <input class=\"with-gap\" name=\"q8\" type=\"radio\" id=\"test8-{{idx}}\" value=\"{{idx}}\"/>\r\n              <label for=\"test8-{{idx}}\">{{idx}}</label>\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col s12\">\r\n          <p>9. 이 뉴스는 명료하다(clear)</p>\r\n          <div class=\"qst\">\r\n            <span *ngFor=\"let idx of [1,2,3,4,5,6,7]\">\r\n              <input class=\"with-gap\" name=\"q9\" type=\"radio\" id=\"test9-{{idx}}\" value=\"{{idx}}\"/>\r\n              <label for=\"test9-{{idx}}\">{{idx}}</label>\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col s12\">\r\n          <p>10. 이 뉴스는 일관되다(coherent)</p>\r\n          <div class=\"qst\">\r\n            <span *ngFor=\"let idx of [1,2,3,4,5,6,7]\">\r\n              <input class=\"with-gap\" name=\"q10\" type=\"radio\" id=\"test10-{{idx}}\" value=\"{{idx}}\"/>\r\n              <label for=\"test10-{{idx}}\">{{idx}}</label>\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col s12\">\r\n          <p>11. 이 뉴스는 포괄적이다(comprehensive)</p>\r\n          <div class=\"qst\">\r\n            <span *ngFor=\"let idx of [1,2,3,4,5,6,7]\">\r\n              <input class=\"with-gap\" name=\"q11\" type=\"radio\" id=\"test11-{{idx}}\" value=\"{{idx}}\"/>\r\n              <label for=\"test11-{{idx}}\">{{idx}}</label>\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col s12\">\r\n          <p>12. 이 뉴스는 간결하다(concise)</p>\r\n          <div class=\"qst\">\r\n            <span *ngFor=\"let idx of [1,2,3,4,5,6,7]\">\r\n              <input class=\"with-gap\" name=\"q12\" type=\"radio\" id=\"test12-{{idx}}\" value=\"{{idx}}\"/>\r\n              <label for=\"test12-{{idx}}\">{{idx}}</label>\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col s12\">\r\n          <p>13. 이 뉴스는 잘 쓰여졌다(well-written)</p>\r\n          <div class=\"qst\">\r\n            <span *ngFor=\"let idx of [1,2,3,4,5,6,7]\">\r\n              <input class=\"with-gap\" name=\"q13\" type=\"radio\" id=\"test13-{{idx}}\" value=\"{{idx}}\"/>\r\n              <label for=\"test13-{{idx}}\">{{idx}}</label>\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col s12\">\r\n          <p>14. 이 뉴스는 정확하다(accurate)</p>\r\n          <div class=\"qst\">\r\n            <span *ngFor=\"let idx of [1,2,3,4,5,6,7]\">\r\n              <input class=\"with-gap\" name=\"q14\" type=\"radio\" id=\"test14-{{idx}}\" value=\"{{idx}}\"/>\r\n              <label for=\"test14-{{idx}}\">{{idx}}</label>\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col s12\">\r\n          <p>15. 이 뉴스는 그럴듯하다(believable)</p>\r\n          <div class=\"qst\">\r\n            <span *ngFor=\"let idx of [1,2,3,4,5,6,7]\">\r\n              <input class=\"with-gap\" name=\"q15\" type=\"radio\" id=\"test15-{{idx}}\" value=\"{{idx}}\"/>\r\n              <label for=\"test15-{{idx}}\">{{idx}}</label>\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col s12\">\r\n          <p>16. 이 뉴스는 충격적이다(disturbing)</p>\r\n          <div class=\"qst\">\r\n            <span *ngFor=\"let idx of [1,2,3,4,5,6,7]\">\r\n              <input class=\"with-gap\" name=\"q16\" type=\"radio\" id=\"test16-{{idx}}\" value=\"{{idx}}\"/>\r\n              <label for=\"test16-{{idx}}\">{{idx}}</label>\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col s12\">\r\n          <p>17. 이 뉴스는 유익하다(informative)</p>\r\n          <div class=\"qst\">\r\n            <span *ngFor=\"let idx of [1,2,3,4,5,6,7]\">\r\n              <input class=\"with-gap\" name=\"q17\" type=\"radio\" id=\"test17-{{idx}}\" value=\"{{idx}}\"/>\r\n              <label for=\"test17-{{idx}}\">{{idx}}</label>\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col s12\">\r\n          <p>18. 이 뉴스는 선정적이다(sensationalistic)</p>\r\n          <div class=\"qst\">\r\n            <span *ngFor=\"let idx of [1,2,3,4,5,6,7]\">\r\n              <input class=\"with-gap\" name=\"q18\" type=\"radio\" id=\"test18-{{idx}}\" value=\"{{idx}}\"/>\r\n              <label for=\"test18-{{idx}}\">{{idx}}</label>\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    \r\n      <!-- <div class=\"row\">\r\n        <div class=\"input-field col s12\">\r\n          <input id=\"s1\" type=\"text\" class=\"validate\" name=\"s1\">\r\n          <label for=\"s1\">5. 어떤 뉴스가 가장 인상이 깊었습니까?</label>\r\n        </div>\r\n      </div> -->\r\n    \r\n      <div class=\"row\">\r\n        <div class=\"input-field col s12\">\r\n          <textarea id='s1' name=\"s1\" class=\"materialize-textarea\" data-length=\"100\"></textarea>\r\n          <label for=\"s1\">19. ※ 위 뉴스를 읽고 떠오른 생각이나 느낌을 최대한 자세하게 적어주십시오.</label>\r\n        </div>\r\n      </div>\r\n    \r\n      <!-- <div style=\"text-align:center\">\r\n        <button class=\"btn waves-effect waves-light\" type=\"submit\">제출하기\r\n          <i class=\"material-icons right\">send</i>\r\n        </button>\r\n      </div> -->\r\n    \r\n    </form>\r\n  </div>\r\n\r\n\r\n  <div class=\"modal-footer\">\r\n    <a class=\"modal-action waves-effect waves-green btn-flat \"\r\n    (click)=\"submitSurvey()\" >제출하고 다음 뉴스보기</a>\r\n  </div>\r\n</div>\r\n\r\n<!-- Modal Trigger -->\r\n<div style=\"text-align:center\">\r\n  <!-- <a class=\"waves-effect waves-light btn\" (click)=\"gotoWeb()\">다른 뉴스 보기</a> -->\r\n  <a class=\"waves-effect waves-light btn modal-trigger\" href=\"#modal1\" (click)=\"getInfoService()\">설문 참여하기</a>\r\n  <a id=\"kakao-link-btn\" href=\"javascript:;\">\r\n    <img style=\"width:36px; vertical-align:bottom\" src=\"//developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png\"/>\r\n  </a>\r\n</div>"

/***/ }),

/***/ "../../../../../src/news/survey/survey.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_model__ = __webpack_require__("../../../../../src/news/info.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__info_service__ = __webpack_require__("../../../../../src/news/info.service.ts");
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
    function SurveyComponent(route, router) {
        this.route = route;
        this.router = router;
        this.info = new __WEBPACK_IMPORTED_MODULE_2__info_model__["a" /* Info */]();
    }
    SurveyComponent.prototype.ngOnInit = function () {
        // 설문지 모달 선언
        $('.modal').modal();
        // 카카오링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다.
        Kakao.init('2c753f4f522f7fbbbad08e5568d9822a');
        Kakao.Link.createDefaultButton({
            container: '#kakao-link-btn',
            objectType: 'feed',
            content: {
                title: '평창 동계올림픽 로봇 뉴스',
                description: '#평창 #동계 #로봇 #HCCLab #AI #ROBOT',
                imageUrl: 'http://koreabizwire.com/wp/wp-content/uploads/2017/01/12695156865_f899306b17_z.jpg',
                // imageUrl: 'http://127.0.0.1:5000/assets/ex3.jpg',
                link: {
                    mobileWebUrl: 'http://127.0.0.1:5000/contents/card',
                    webUrl: 'http://127.0.0.1:5000/contents/card'
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
                        mobileWebUrl: 'http://127.0.0.1:5000/contents/text',
                        webUrl: 'http://127.0.0.1:5000/contents/text'
                    }
                },
            ]
        });
    };
    SurveyComponent.prototype.getInfoService = function () {
        this.info = __WEBPACK_IMPORTED_MODULE_3__info_service__["a" /* InfoService */];
        this.newsKind = this.info.newsList[this.info.cursor];
    };
    SurveyComponent.prototype.submitSurvey = function () {
        /*
         var port = window.location.port;
         var host = (port=='4200')? 'http://127.0.0.1:5000' : 'http://'+window.location.host;
         document.forms['survey'].submit();
        */
        this.getInfoService(); // info 내용 갱신필요
        var queryString = $("form[name=survey]").serialize();
        // form 유효성검사
        if (queryString.split('&').length != 19) {
            Materialize.toast('설문을 모두 작성해주세요.', 4000); // 4000 is the duration of the toast    
            console.log(queryString);
            return;
        }
        var basicInfo = {
            seq: this.info.newsList,
            newsKind: this.newsKind,
            gameKind: this.info.gameKind,
            game: this.info.game,
            player: this.info.player,
        };
        for (var i in basicInfo) {
            queryString = i + '=' + basicInfo[i] + '&' + queryString;
        }
        console.log(queryString);
        var port = window.location.port;
        var host = (port == '4201') ? 'http://127.0.0.1:5000' : 'http://' + window.location.host;
        $.ajax({
            type: 'post',
            url: host + '/survey',
            data: queryString,
            dataType: 'json',
            success: function (data) {
                $("form[name=survey]").trigger('reset');
                // Materialize.toast(message, displayLength, className, completeCallback);
                Materialize.toast('설문이 제출되었습니다.', 4000); // 4000 is the duration of the toast
            }
        });
        // http://fruitdev.tistory.com/174
        // 설문지 모달 닫기
        $('#modal1').modal('close');
        // 다음 뉴스로 넘어가기
        __WEBPACK_IMPORTED_MODULE_3__info_service__["a" /* InfoService */].plusCursor();
    };
    SurveyComponent.prototype.gotoWeb = function () {
        var port = window.location.port;
        var host = (port == '4200') ? 'http://127.0.0.1:5000' : 'http://' + window.location.host;
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
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

module.exports = "<div class=\"container\">\r\n  <p style=\"font-weight: bold\">{{newsHeadline}}</p>\r\n  <p>{{newsBody}}</p>\r\n</div>"

/***/ }),

/***/ "../../../../../src/news/text-detail/text-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__info_service__ = __webpack_require__("../../../../../src/news/info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_service__ = __webpack_require__("../../../../../src/news/news.service.ts");
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
    function TextDetailComponent(newsService) {
        this.newsService = newsService;
        this.newsHeadline = 'HEADLINE';
        this.newsBody = 'BODY';
    }
    TextDetailComponent.prototype.ngOnInit = function () {
    };
    TextDetailComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.newsService.getPath(__WEBPACK_IMPORTED_MODULE_1__info_service__["a" /* InfoService */].game, __WEBPACK_IMPORTED_MODULE_1__info_service__["a" /* InfoService */].gameKind, __WEBPACK_IMPORTED_MODULE_1__info_service__["a" /* InfoService */].player).then(function (res) {
            console.log(res[0]);
            if (res[0]) {
                _this.newsHeadline = res[0][3];
                _this.newsBody = res[0][4];
            }
        });
        // this.newsService.makeTextNews();
        // this.newsHeadline = this.newsService.newsHeadline;
        // this.newsBody = this.newsService.newsBody;
    };
    TextDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-text-detail',
            template: __webpack_require__("../../../../../src/news/text-detail/text-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/news/text-detail/text-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__news_service__["a" /* NewsService */]])
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