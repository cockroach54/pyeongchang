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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#home_bg{\r\n  width: 100%;\r\n  opacity: 0.7;\r\n}\r\n\r\nnav, footer{\r\n  background-color: #00897b ;\r\n}\r\n\r\n#disqus{\r\n  background-color: #ccc;\r\n  height: 120px;\r\n}\r\n\r\n.hamburger{\r\n  color: #fff;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"nav nav-tabs\" id=\"navTab\" role=\"tablist\" style=\"z-index:999\">\n  <div class='tabWrapper'>\n    <a id=\"dashboard\" class=\"nav-item nav-link active\" data-toggle=\"tab\" role=\"tab\" aria-controls=\"nav-home\" aria-expanded=\"true\" routerLink=\"/dashboard\">Dashboard</a>\n    <a id=\"textNews\" class=\"nav-item nav-link\" data-toggle=\"tab\" role=\"tab\" aria-controls=\"nav-home\" aria-expanded=\"true\" routerLink=\"/textNews\">텍스트뉴스</a>\n    <a id=\"cardNews\" class=\"nav-item nav-link\" data-toggle=\"tab\" role=\"tab\" aria-controls=\"nav-profile\" routerLink=\"/cardNews\">카드뉴스</a>\n    <a id=\"movieNews\" class=\"nav-item nav-link\" data-toggle=\"tab\" role=\"tab\" aria-controls=\"nav-profile\" routerLink=\"/movieNews\">동영상</a>\n  </div>\n</nav> -->\n\n<nav>\n  <div class=\"nav-wrapper\">\n    <a href=\"#dashboard\" class=\"brand-logo\">&nbsp;&nbsp;HCCLab</a>\n    <a href=\"#\" data-activates=\"mobile-demo\" class=\"button-collapse\"><i class=\"material-icons hamburger\">menu</i></a>\n    <ul class=\"right hide-on-med-and-down\">\n      <li><a id=\"dashboard\" routerLink=\"/dashboard\">홈</a></li>\n      <li><a id=\"textNews\" routerLink=\"/textNews\">텍스트뉴스</a></li>\n      <li><a id=\"cardNews\" routerLink=\"/cardNews\">카드뉴스</a></li>\n      <li><a id=\"movieNews\" routerLink=\"/movieNews\">동영상</a></li>    \n    </ul>\n    <ul class=\"side-nav\" id=\"mobile-demo\">\n      <li><a id=\"dashboard_m\" class=\"mobile_ui\" (click)=\"closeHamburger()\" routerLink=\"/dashboard\">홈</a></li>\n      <li><a id=\"textNews_m\" class=\"mobile_ui\" (click)=\"closeHamburger()\" routerLink=\"/textNews\">텍스트뉴스</a></li>\n      <li><a id=\"cardNews_m\" class=\"mobile_ui\" (click)=\"closeHamburger()\" routerLink=\"/cardNews\">카드뉴스</a></li>\n      <li><a id=\"movieNews_m\" class=\"mobile_ui\" (click)=\"closeHamburger()\" routerLink=\"/movieNews\">동영상</a></li>\n    </ul>    \n  </div>\n</nav>\n<!-- 나중에 슬라이더 하나 컴포넌트로 빼자 -->\n<div id=\"home\">\n  <img id='home_bg' src=\"assets/home2.jpg\">\n</div>\n  \n<!-- ROUTER -->\n<div class=\"row\">\n  <article class=\"col s12 m8 offset-m2\">\n    <router-outlet></router-outlet>\n  </article>\n</div>\n\n<!-- FOOTER -->\n<footer class=\"page-footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col l6 s12\">\n        <h5 class=\"white-text\">Footer Content</h5>\n        <p class=\"grey-text text-lighten-4\">You can use rows and columns here to organize your footer content.</p>\n      </div>\n      <div class=\"col l4 offset-l2 s12\">\n        <h5 class=\"white-text\">Links</h5>\n        <ul>\n          <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 1</a></li>\n          <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 2</a></li>\n          <!-- <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 3</a></li>\n          <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 4</a></li> -->\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer-copyright\">\n    <div class=\"container\">\n    © 2018 Copyright Text\n    <a class=\"grey-text text-lighten-4 right\" href=\"#!\">More Links</a>\n    </div>\n  </div>\n</footer>\n      "

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
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
        this.title = 'app';
        // ngOnInit(): void{
        //   console.log('-----dashboardComp loaded');
        // }
    }
    // 메뉴 누르면 사이드내비 닫기
    AppComponent.prototype.closeHamburger = function () {
        var event = document.createEvent("HTMLEvents");
        event.initEvent("click", true, false);
        document.querySelector('#sidenav-overlay').dispatchEvent(event);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_disqus__ = __webpack_require__("../../../../ngx-disqus/esm5/ngx-disqus.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__textNews_textNews_component__ = __webpack_require__("../../../../../src/app/textNews/textNews.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cardNews_cardNews_component__ = __webpack_require__("../../../../../src/app/cardNews/cardNews.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__movieNews_movieNews_component__ = __webpack_require__("../../../../../src/app/movieNews/movieNews.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__disqus_text_component__ = __webpack_require__("../../../../../src/app/disqus-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__disqus_card_component__ = __webpack_require__("../../../../../src/app/disqus-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__disqus_movie_component__ = __webpack_require__("../../../../../src/app/disqus-movie.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__textNews_textNews_component__["a" /* TextNewsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__cardNews_cardNews_component__["a" /* CardNewsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__movieNews_movieNews_component__["a" /* MovieNewsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__disqus_text_component__["a" /* DisqusTextComponent */],
                __WEBPACK_IMPORTED_MODULE_12__disqus_card_component__["a" /* DisqusCardComponent */],
                __WEBPACK_IMPORTED_MODULE_13__disqus_movie_component__["a" /* DisqusMovieComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5_ngx_disqus__["a" /* DisqusModule */].forRoot('pyeongchang'),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                    {
                        path: '',
                        redirectTo: '/dashboard',
                        pathMatch: 'full'
                    },
                    {
                        path: 'dashboard',
                        redirectTo: '/dashboard',
                        pathMatch: 'full'
                    },
                    {
                        path: 'textNews',
                        redirectTo: '/textNews',
                        pathMatch: 'full'
                    },
                    {
                        path: 'cardNews',
                        redirectTo: '/cardNews',
                        pathMatch: 'full'
                    },
                    {
                        path: 'movieNews',
                        redirectTo: '/movieNews',
                        pathMatch: 'full'
                    },
                    {
                        path: 'dashboard',
                        component: __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */]
                    },
                    {
                        path: 'textNews',
                        component: __WEBPACK_IMPORTED_MODULE_8__textNews_textNews_component__["a" /* TextNewsComponent */]
                    },
                    {
                        path: 'cardNews',
                        component: __WEBPACK_IMPORTED_MODULE_9__cardNews_cardNews_component__["a" /* CardNewsComponent */]
                    },
                    {
                        path: 'movieNews',
                        component: __WEBPACK_IMPORTED_MODULE_10__movieNews_movieNews_component__["a" /* MovieNewsComponent */]
                    },
                ])
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/cardNews/cardNews.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cardNews/cardNews.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>{{title}}</h2>\r\n<h5>이곳은 카드 뉴스를 올리는 페이지 입니다.</h5>\r\n\r\n<div class=\"row\" *ngFor=\"let idx of [1,2,3]\">\r\n  <div class=\"col s12 m8 offset-m2\">\r\n    <div class=\"card\">\r\n      <div class=\"card-image\">\r\n        <img src=\"assets/ex{{idx}}.jpg\">\r\n        <span class=\"card-title\">Card Title</span>\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <p>I am a very simple card. I am good at containing small bits of information.\r\n        I am convenient because I require little markup to use effectively.</p>\r\n      </div>\r\n      <div class=\"card-action\">\r\n        <a (click)=\"gotoCard()\">Show this article</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- REPLY -->\r\n<div class=\"row\">\r\n  <reply-card class=\"col s12 m8 offset-m2\"></reply-card>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/cardNews/cardNews.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardNewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CardNewsComponent = /** @class */ (function () {
    function CardNewsComponent() {
        this.title = 'cardNews';
    }
    CardNewsComponent.prototype.gotoCard = function () {
        var port = window.location.port;
        var host = (port == '4200') ? 'http://10.0.1.16:5000' : 'http://' + window.location.host;
        window.location.href = host + '/contents/card';
    };
    CardNewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'cardNews',
            template: __webpack_require__("../../../../../src/app/cardNews/cardNews.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cardNews/cardNews.component.css")]
        })
    ], CardNewsComponent);
    return CardNewsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p{\r\n  text-align: left;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>{{title}}</h2>\r\n<h5>이곳은 홈 페이지 입니다.</h5>\r\n\r\n<div class='row'>\r\n  <p class='col s10 offset-s1 m8 offset-m2'>\r\n    We are very interested in interdisciplinary areas of Human Computer Interaction (HCI), the Internet of Things (IoT), and Big Data. Our goal is to help people communicate and interact with one another easily and without limits by supporting them with software and hardware tools designed in human-centered ways.\r\n    Tremendous opportunities are emerging in the intersection of these fields. Human Computer Interaction (HCI) principles can provide methodologies and experimental frameworks as well as human behavior modeling techniques. The theories and tools can improve understanding on human nature and behaviors.\r\n  </p>\r\n  \r\n  <p class='col s10 offset-s1 m8 offset-m2'>  \r\n    The proper understanding of human’s information behavior can be crucial for designing tools for supporting people’s everyday life. Our second focus to the design of novel devices for supporting human’s daily activities.\r\n    With a plethora of personal digital devices for ordinary people, it becomes reality that computers could track and count the vast amount of information using data they gathered without any help from us. Big Data technologies enable researcher to collect and analyze massive amount of data that are generated by such systems. The Big Data technology can be an indispensable asset to tackle large-scale data problems, which can play a very important role in understanding users’ behavior.\r\n  </p>\r\n  \r\n  <p class='col s10 offset-s1 m8 offset-m2'>\r\n      Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.\r\n  </p>\r\n  \r\n  <img src=\"assets/hcc.jpeg\" class='col s10 offset-s1 m8 offset-m2 l6 offset-l3'/>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.title = 'homePage';
    }
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/disqus-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisqusCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DisqusCardComponent = /** @class */ (function () {
    function DisqusCardComponent() {
        this.pageId = '/cardNews';
    }
    DisqusCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'reply-card',
            template: "<disqus [identifier]=\"pageId\"></disqus>"
        })
    ], DisqusCardComponent);
    return DisqusCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/disqus-movie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisqusMovieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DisqusMovieComponent = /** @class */ (function () {
    function DisqusMovieComponent() {
        this.pageId = '/movieNews';
    }
    DisqusMovieComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'reply-movie',
            template: "<disqus [identifier]=\"pageId\"></disqus>"
        })
    ], DisqusMovieComponent);
    return DisqusMovieComponent;
}());



/***/ }),

/***/ "../../../../../src/app/disqus-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisqusTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DisqusTextComponent = /** @class */ (function () {
    function DisqusTextComponent() {
        this.pageId = '/textNews';
    }
    DisqusTextComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'reply-text',
            template: "<disqus [identifier]=\"pageId\"></disqus>"
        })
    ], DisqusTextComponent);
    return DisqusTextComponent;
}());



/***/ }),

/***/ "../../../../../src/app/movieNews/movieNews.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".videoWrapper {\r\n  width: 60%;\r\n  margin: auto;\r\n}\r\n\r\n@media screen and (max-width: 768px){\r\n  .videoWrapper {\r\n    width: 100%;\r\n    margin: auto;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/movieNews/movieNews.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>{{title}}</h2>\r\n<h5>이곳은 동영상 뉴스를 올리는 페이지 입니다.</h5>\r\n\r\n<br/><br/>\r\n<!-- <div class=\"col s12 m8 offset-m2\"> 여기는 이걸로 하면 안먹음-->\r\n<div class=\"videoWrapper\">\r\n  <div class=\"video-container\">\r\n      <iframe src=\"//www.youtube.com/embed/QIN5_tJRiyY?rel=0\" frameborder=\"0\" allowfullscreen></iframe>\r\n  </div>\r\n</div>\r\n<a (click)=\"gotoMovie()\">Show me other styles of this news</a>\r\n<br/><br/>\r\n\r\n<!-- REPLY -->\r\n<div class=\"row\">\r\n  <reply-movie class=\"col s12 m8 offset-m2\"></reply-movie>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/movieNews/movieNews.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieNewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MovieNewsComponent = /** @class */ (function () {
    function MovieNewsComponent() {
        this.title = 'movieNews';
    }
    MovieNewsComponent.prototype.gotoMovie = function () {
        var port = window.location.port;
        var host = (port == '4200') ? 'http://10.0.1.16:5000' : 'http://' + window.location.host;
        window.location.href = host + '/contents/movie';
    };
    MovieNewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'movieNews',
            template: __webpack_require__("../../../../../src/app/movieNews/movieNews.component.html"),
            styles: [__webpack_require__("../../../../../src/app/movieNews/movieNews.component.css")]
        })
    ], MovieNewsComponent);
    return MovieNewsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/textNews/textNews.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/textNews/textNews.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>{{title}}</h2>\r\n<h5>이곳은 텍스트 뉴스를 올리는 페이지 입니다.</h5>\r\n\r\n<div class=\"row\">\r\n  \r\n<div *ngFor=\"let idx of [0,1,2,2,0,4,5,0,7,8,3,2]\">\r\n  <div *ngIf=!idx class=\"row\">\r\n    <div class=\"col s12\" style=\"height:40px\"></div>\r\n    <div class=\"col s5\"><hr/></div>\r\n    <a class=\"col s2\">02/19/2018</a>\r\n    <div class=\"col s5\"><hr/></div>      \r\n  </div>\r\n\r\n  <div class=\"col s12 m6\" style=\"padding:0 15px\">\r\n    <div class=\"card horizontal\">\r\n      <div class=\"card-image\">\r\n        <img src=\"assets/ex{{idx%3+1}}.jpg\" style=\"\">\r\n      </div>\r\n      <div class=\"card-stacked\">\r\n        <div class=\"card-content\">\r\n          <p>I am a very simple card. I am good at containing small bits of information.</p>\r\n        </div>\r\n        <div class=\"card-action\">\r\n          <a (click)=\"gotoText()\">Show this article</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n        \r\n</div>\r\n\r\n<!-- REPLY -->\r\n<div class=\"row\">\r\n  <reply-text class=\"col s12\"></reply-text>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/textNews/textNews.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextNewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TextNewsComponent = /** @class */ (function () {
    function TextNewsComponent() {
        this.title = 'textNews';
    }
    TextNewsComponent.prototype.gotoText = function () {
        var port = window.location.port;
        var host = (port == '4200') ? 'http://10.0.1.16:5000' : 'http://' + window.location.host;
        window.location.href = host + '/contents/text';
    };
    TextNewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'textNews',
            template: __webpack_require__("../../../../../src/app/textNews/textNews.component.html"),
            styles: [__webpack_require__("../../../../../src/app/textNews/textNews.component.css")]
        })
    ], TextNewsComponent);
    return TextNewsComponent;
}());



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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map