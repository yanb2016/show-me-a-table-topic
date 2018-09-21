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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_topic_list_topic_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/topic-list/topic-list.component */ "./src/app/components/topic-list/topic-list.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _components_new_topic_new_topic_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/new-topic/new-topic.component */ "./src/app/components/new-topic/new-topic.component.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/search.pipe */ "./src/app/pipes/search.pipe.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_most_popular_topic_most_popular_topic_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/most-popular-topic/most-popular-topic.component */ "./src/app/components/most-popular-topic/most-popular-topic.component.ts");
/* harmony import */ var _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/search-results/search-results.component */ "./src/app/components/search-results/search-results.component.ts");
/* harmony import */ var _components_ideas_ideas_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/ideas/ideas.component */ "./src/app/components/ideas/ideas.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_topic_detail_topic_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/topic-detail/topic-detail.component */ "./src/app/components/topic-detail/topic-detail.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_topic_list_topic_list_component__WEBPACK_IMPORTED_MODULE_4__["TopicListComponent"],
                _components_new_topic_new_topic_component__WEBPACK_IMPORTED_MODULE_6__["NewTopicComponent"],
                _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__["NavBarComponent"],
                _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_9__["SearchPipe"],
                _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _components_most_popular_topic_most_popular_topic_component__WEBPACK_IMPORTED_MODULE_12__["MostPopularTopicComponent"],
                _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_13__["SearchResultsComponent"],
                _components_ideas_ideas_component__WEBPACK_IMPORTED_MODULE_14__["IdeasComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                _components_topic_detail_topic_detail_component__WEBPACK_IMPORTED_MODULE_16__["TopicDetailComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_17__["AboutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_5__["routing"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_topic_list_topic_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/topic-list/topic-list.component */ "./src/app/components/topic-list/topic-list.component.ts");
/* harmony import */ var _components_new_topic_new_topic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/new-topic/new-topic.component */ "./src/app/components/new-topic/new-topic.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_most_popular_topic_most_popular_topic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components//most-popular-topic/most-popular-topic.component */ "./src/app/components/most-popular-topic/most-popular-topic.component.ts");
/* harmony import */ var _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/search-results/search-results.component */ "./src/app/components/search-results/search-results.component.ts");
/* harmony import */ var _components_ideas_ideas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ideas/ideas.component */ "./src/app/components/ideas/ideas.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");









var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _components_most_popular_topic_most_popular_topic_component__WEBPACK_IMPORTED_MODULE_5__["MostPopularTopicComponent"] },
    { path: 'ideas', component: _components_ideas_ideas_component__WEBPACK_IMPORTED_MODULE_7__["IdeasComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"] },
    { path: 'topics', component: _components_topic_list_topic_list_component__WEBPACK_IMPORTED_MODULE_1__["TopicListComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'signup', component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: 'topics/:category', component: _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_6__["SearchResultsComponent"] },
    { path: 'new_topic', component: _components_new_topic_new_topic_component__WEBPACK_IMPORTED_MODULE_2__["NewTopicComponent"] },
    { path: '**', redirectTo: 'problems' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-body {\n    min-height: 400px;\n}\n.container {\n    margin-top: 20px;\n}\np {\n    font-size: 16px;\n}"

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">About Me & This Website</h5>\n    <p class=\"card-text\">Two years ago, I joined Toastmasters. I was excited and a little nervous about this new journey, because English is not my first language. Everyone in my club was very kind and encouraging, before long, I felt comfortable speaking in front of the group, and got very actively involved in the meetings, taking roles from Timer, Ah-counter, to Table Topics Master and Toastmasters.</p>\n    <p class=\"card-text\">Table Topics was one of my favorite meeting sections. It puts speakers on the spot, and forces them to talk about whatever comes to their minds. It’s not easy. I haven’t mastered it and often afraid of being called to stage. However, I enjoyed it every time the Table Topics Master offered good topics, and speakers responded to them with excellent short speeches.</p>\n    <p class=\"card-text\">I was Table Topics Master quite a few times. I wanted to use good topics to inspire speakers. But, it’s hard to think of good ones. Sometimes, I ended up spending a lot of time searching online, hoping to find one that works well for our meeting theme, or simply for that particular day.</p>\n    <p>I built this website to gather good Table Topics ideas from all Toastmasters. I hope these topics will give you some inspirations for hosting the next Table Topics.</p>\n    <br>\n    <p><strong>Have feedback?</strong></p>\n    <p>I’d love your feedback to make this website better. Please send them to me via topics@yanbinjin.com.</p>\n  </div>\n </div>"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n    margin-top: 2em;\n}"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <footer class=\"page-footer font-small blue pt-4\">\n    <div class=\"footer-copyright text-center py-3\">© 2018 Copyright\n      <span href=\"https://www.yanbinjin.com/\"></span>\n    </div>\n  </footer>\n</div>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/ideas/ideas.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/ideas/ideas.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    margin-top: 25px;\n}\n.panel {\n    margin-top: 5px;\n    margin-bottom: 5px;\n    padding: 5px;\n}\n.card {\n    margin-top: 5px;\n}\n.info {\n    text-align:center;\n    margin-top: 10px;\n}\nh3 {\n color:#666;\n}\n.test {\n    text-align: center;\n}"

/***/ }),

/***/ "./src/app/components/ideas/ideas.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/ideas/ideas.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>Tips for Table Topic Masters</h3>\n  <div class=\"card\" *ngFor=\"let idea of ideas\">\n    <h5 class=\"card-header\">{{idea.idea}}</h5>\n    <div class=\"card-body\">\n      <p class=\"card-text\">{{idea.description}}</p>\n    </div>\n  </div>\n  <div class=\"info\" *ngIf=\"msg; else elseBlock\">{{msg}}</div>\n  <ng-template class=\"test\" #elseBlock><div class=\"info\">Scroll down to load more</div></ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/components/ideas/ideas.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/ideas/ideas.component.ts ***!
  \*****************************************************/
/*! exports provided: IdeasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdeasComponent", function() { return IdeasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IdeasComponent = /** @class */ (function () {
    function IdeasComponent(dataService) {
        this.dataService = dataService;
        this.pageNumber = 0;
        this.msg = '';
    }
    IdeasComponent.prototype.scroll = function () {
        this.handleScroll();
    };
    IdeasComponent.prototype.ngOnInit = function () {
        this.loadMoreIdeas();
        this.scroll = lodash__WEBPACK_IMPORTED_MODULE_2__["debounce"](this.scroll, 1000);
    };
    IdeasComponent.prototype.handleScroll = function () {
        var scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        if ((window.innerHeight + scrollY) >= (document.body.offsetHeight - 50)) {
            this.loadMoreIdeas();
        }
    };
    IdeasComponent.prototype.getIdeas = function () {
        var _this = this;
        this.dataService.getIdeas(this.pageNumber)
            .then(function (ideas) {
            if (_this.pageNumber === 0) {
                _this.ideas = ideas;
            }
            else {
                _this.ideas = lodash__WEBPACK_IMPORTED_MODULE_2__["union"](_this.ideas.concat(ideas));
            }
            _this.pageNumber += 1;
        })
            .catch(function (err) {
            _this.msg = 'No More ideas';
        });
    };
    IdeasComponent.prototype.loadMoreIdeas = function () {
        this.getIdeas();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], IdeasComponent.prototype, "scroll", null);
    IdeasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ideas',
            template: __webpack_require__(/*! ./ideas.component.html */ "./src/app/components/ideas/ideas.component.html"),
            styles: [__webpack_require__(/*! ./ideas.component.css */ "./src/app/components/ideas/ideas.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], IdeasComponent);
    return IdeasComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin: auto;\n  height: 500px;\n  margin-top: 25px;\n\n}\n.login-panel {\n  margin: auto;\n  width: 40%;\n}\n.error-message {\n  padding-left: 20px;\n  color: red;\n}\n.btn-success {\n  color:white;\n  background-color: #4688BC;\n  border:none;\n}"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input type=\"text\" class=\"form-control\" id=\"email\"\n      required\n      [(ngModel)]=\"user.email\" name=\"email\">\n      <p *ngIf=\"errors\">{{errors.summary}}</p>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input type=\"text\" class=\"form-control\" id=\"password\"\n      required\n      [(ngModel)]=\"user.password\" name=\"password\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-success\" (click)=\"checkUser()\">Submit</button>\n    <div class=\"form-group\"> Not a member?<a [routerLink]=\"['/signup']\">Sign up</a></div>\n    <!-- <a href=\"/auth/twitter\">Sign in with Twitter</a> -->\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.user = {
            email: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.checkUser = function () {
        var _this = this;
        var email = this.user.email;
        var password = this.user.password;
        var request = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        };
        fetch('/auth/login', request).then(function (response) {
            if (response.status === 200) {
                _this.errors = {};
                response.json().then(function (json) {
                    _this.auth.authenticateUser(json.token, email);
                });
                location.reload();
                _this.router.navigateByUrl('/');
            }
            else {
                response.json().then(function (json) {
                    _this.errors = json.errors ? json.error : {};
                    _this.errors['summary'] = json.message;
                });
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/most-popular-topic/most-popular-topic.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/most-popular-topic/most-popular-topic.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  text-decoration: none;\n}\n\n.badge-secondary {\n  margin-left:16px;\n}\n\n.btn-link {\n  font-size: 1.1em;\n  color: #4688BC;\n  white-space: normal;\n  text-align: left;\n}\n\n.container {\n  margin-top: 15px;\n}\n\nh5 {\n  display: flex;\n  justify-content: space-between;\n}\n\nh3 {\n  color: #666;\n}\n\n.btn-link {\n  text-decoration: none;\n}"

/***/ }),

/***/ "./src/app/components/most-popular-topic/most-popular-topic.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/most-popular-topic/most-popular-topic.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>Top 10 Most Popular Topics</h3>\n  <div class=\"accordion\" id=\"accordionExample\">\n    <div class=\"card\"  *ngFor=\"let topic of (topics | search: searchTerm)\" >\n      <app-topic-detail [topic]=topic></app-topic-detail>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/most-popular-topic/most-popular-topic.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/most-popular-topic/most-popular-topic.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MostPopularTopicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostPopularTopicComponent", function() { return MostPopularTopicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_input_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/input.service */ "./src/app/services/input.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MostPopularTopicComponent = /** @class */ (function () {
    function MostPopularTopicComponent(dataService, inputService) {
        this.dataService = dataService;
        this.inputService = inputService;
        this.searchTerm = '';
    }
    MostPopularTopicComponent.prototype.ngOnInit = function () {
        this.getPopularTopics();
        this.getSearchTerm();
    };
    MostPopularTopicComponent.prototype.ngOnDestroy = function () {
        this.subscriptionTopic.unsubscribe();
    };
    MostPopularTopicComponent.prototype.getPopularTopics = function () {
        var _this = this;
        this.subscriptionTopic = this.dataService.getPopularTopics()
            .subscribe(function (Topics) { return _this.topics = Topics; });
    };
    MostPopularTopicComponent.prototype.getSearchTerm = function () {
        var _this = this;
        this.subscriptionInput = this.inputService.getInput()
            .subscribe(function (inputTerm) { return _this.searchTerm = inputTerm; });
    };
    MostPopularTopicComponent.prototype.handleLikes = function (e, action) {
        this.dataService.handlLikes(e, action);
    };
    MostPopularTopicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-most-popular-topic',
            template: __webpack_require__(/*! ./most-popular-topic.component.html */ "./src/app/components/most-popular-topic/most-popular-topic.component.html"),
            styles: [__webpack_require__(/*! ./most-popular-topic.component.css */ "./src/app/components/most-popular-topic/most-popular-topic.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _services_input_service__WEBPACK_IMPORTED_MODULE_2__["InputService"]])
    ], MostPopularTopicComponent);
    return MostPopularTopicComponent;
}());



/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav a {\n  justify-content: flex-start;\n  padding: 5px 10px;\n  text-decoration: none;\n  margin: 10px 5px;;\n  display: inline-block;\n  border-radius: 4px;\n  \n}\n\n.navbar {\n  justify-content: flex-start;\n  margin-bottom: -1px;\n  padding:0px;\n}\n\n.bg-light {\n  background-color: #4688BC !important;\n\n}\n\n.navbar-brand {\n  color: white;\n}\n\n.nav-link {\n  color: white !important;\n  font-size: 1.25rem;\n}\n\ncontainer {\n  margin-bottom: 10px;\n  padding: 0px;\n}\n\n.btn-outline-success {\n  color:white;\n  background-color: #4688BC;\n  border:none;\n}\n\n.active-link {\n  background-color:#325f82;\n}\n\n.form-inline {\n  margin-left: 5px;\n  padding:5px 10px;\n}"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\"> -->\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <div class=\"container\">\n    <a class=\"nav-link\" routerLinkActive=\"active-link\" [routerLink]=\"['/home']\">Home</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLinkActive=\"active-link\" [routerLink]=\"['/topics']\">All Topics</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLinkActive=\"active-link\" [routerLink]=\"['/new_topic']\">Add Topic</a>\n        </li>\n        <form  class=\"form-inline my-2 my-lg-0\">\n            <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\" [formControl]=\"searchBox\">\n            <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\"(click)=\"searchTopic()\">Search</button>\n        </form>\n      </ul>\n      <div>\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLinkActive=\"active-link\" [routerLink]=\"['/ideas']\">Tips for TT Masters</a>\n          </li>\n          <li class=\"nav-item\">\n              <a class=\"nav-link\"  routerLinkActive=\"active-link\" [routerLink]=\"['/about']\">About</a>\n          </li>\n          <!-- <li class=\"nav-item\">\n            <a class=\"nav-link\" *ngIf=\"!autherized\" [routerLink]=\"['/login']\">Login</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" *ngIf=\"!autherized\" [routerLink]=\"['/signup']\">Signup</a>\n          </li> -->\n          <!-- <li class=\"nav-item\">\n            <a class=\"nav-link\" *ngIf=\"user\">{{user}}</a>\n          </li> -->\n          <!-- <li class=\"nav-item\">\n              <a class=\"nav-link\" *ngIf=\"autherized\" (click)=\"logout()\" [routerLink]=\"['/home']\">Logout</a>\n            </li> -->\n        </ul>\n        </div>\n    </div>\n    </div>\n  </nav>\n  \n\n"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_input_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/input.service */ "./src/app/services/input.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(input, router, auth) {
        this.input = input;
        this.router = router;
        this.auth = auth;
        this.searchBox = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    NavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.auth.getEmail();
        this.subscription = this.searchBox
            .valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200))
            .subscribe(function (term) {
            _this.input.changeInput(term);
        });
        // add child subscription practice
        // const subscription = this.auth.isUserAuthenticated()
        // .subscribe(
        //   (res => {
        //     this.autherized = res;
        //   })
        // )
        // this.subscription.add(subscription);
        // or simplely 
        //this.autherized = this.auth.isUserAuthenticated();
    };
    NavBarComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    NavBarComponent.prototype.searchTopic = function () {
        this.router.navigate(['/topics']);
    };
    NavBarComponent.prototype.logout = function () {
        this.autherized = !this.autherized;
        this.user = '';
        this.auth.deauthenticateUser();
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/components/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/components/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_input_service__WEBPACK_IMPORTED_MODULE_4__["InputService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/components/new-topic/new-topic.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/new-topic/new-topic.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 10px;\n  height: 500px;\n}\n#resetBtn {\n  margin-left: 5px;\n  margin-right: 5px;\n}\n.mb-0 {\n cursor: pointer;\n}\n.btn-default {\n  background-color: #4688BC;\n  color: white;\n}"

/***/ }),

/***/ "./src/app/components/new-topic/new-topic.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/new-topic/new-topic.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form #topicForm=\"ngForm\">\n    <div [hidden]=\"submitted\">\n      <div class=\"form-group\">\n        <label for=\"topicName\"><strong>Title</strong></label>\n        <input id=\"topicName\" name=\"topicName\" class=\"form-control\" required\n          minlength=\"4\" [(ngModel)]=\"newTopic.name\" #name=\"ngModel\"\n          placeholder=\"Input Title\">\n        <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert alert-danger\">\n          <div *ngIf=\"name.errors.required\">\n            Title is required.\n          </div>\n          <div *ngIf=\"name.errors.minlength\">\n            Title must be at least 4 characters long.\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"topicDesc\"><strong>Further description</strong></label>\n        <textarea name = \"topicDesc\" id=\"topicDesc\" class=\"form-control\"\n          placeholder=\"Further description or tips\" \n          [(ngModel)] = \"newTopic.desc\" rows=\"3\">\n        </textarea>\n      </div>\n\n\n      <div class=\"form-group\">\n        <label for=\"topicCategory\"><strong>Category</strong></label> \n        <input id=\"topicCategory\" name=\"topicCategory\" class=\"form-control\" required\n          minlength=\"2\" [(ngModel)]=\"newTopic.category\" #category=\"ngModel\"\n          placeholder=\"E.g. travel, music, movie, pets ...  \">\n        <div *ngIf=\"category.invalid && (category.dirty || category.touched)\" class=\"alert alert-danger\">\n          <div *ngIf=\"category.errors.required\">\n            Category is required.\n          </div>\n          <div *ngIf=\"category.errors.minlength\">\n            Category must be at least 2 characters long.\n          </div>\n        </div>  \n      </div>\n      <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"topicForm.invalid\" (click)=\"addTopic()\">Submit</button>\n    </div>\n    <div class=\"submitted-message\" *ngIf=\"submitted\">\n        <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"displayInfo\">\n            <h4 class=\"alert-heading\">{{displayInfo.info}}</h4>\n            <p>{{displayInfo.instruction}}</p>\n            <hr>\n            <p class=\"mb-0\"><a (click)=\"submitted = false\">{{displayInfo.link}}</a></p>\n        </div>\n    </div> \n  </form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/new-topic/new-topic.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/new-topic/new-topic.component.ts ***!
  \*************************************************************/
/*! exports provided: NewTopicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTopicComponent", function() { return NewTopicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DEFAULT_TOPIC = {
    id: 0,
    name: '',
    desc: '',
    likes: 0,
    author: '',
    category: ''
};
var NewTopicComponent = /** @class */ (function () {
    function NewTopicComponent(dataService, auth) {
        this.dataService = dataService;
        this.auth = auth;
        this.submitted = false;
        this.newTopic = Object.assign({}, DEFAULT_TOPIC);
    }
    NewTopicComponent.prototype.ngOnInit = function () {
        this.newTopic.author = this.auth.getEmail();
    };
    NewTopicComponent.prototype.addTopic = function () {
        var _this = this;
        this.submitted = true;
        console.log(this.submitted);
        this.newTopic.category = this.newTopic.category.toLowerCase();
        this.dataService.addTopic(this.newTopic)
            .then(function (res) {
            _this.displayInfo = res;
        })
            .catch(function (error) {
            _this.displayInfo = error;
        });
    };
    NewTopicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-topic',
            template: __webpack_require__(/*! ./new-topic.component.html */ "./src/app/components/new-topic/new-topic.component.html"),
            styles: [__webpack_require__(/*! ./new-topic.component.css */ "./src/app/components/new-topic/new-topic.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], NewTopicComponent);
    return NewTopicComponent;
}());



/***/ }),

/***/ "./src/app/components/search-results/search-results.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/search-results/search-results.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n#filteredResults {\n  margin-bottom: 10px;\n}\n.category {\n  font-size: 15px;\n}\n.container {\n  margin-top: 10px;\n  min-height:600px;\n}\n.info {\n  text-align:center;\n  margin-top: 10px;\n}"

/***/ }),

/***/ "./src/app/components/search-results/search-results.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/search-results/search-results.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"topics\">\n  <div id=\"filteredResults\">\n     Filtered by \n     <span class=\"pull-left badge category\">{{ topics[0].category }}</span>\n     <button type=\"button\" class=\"btn btn-info btn-sm\" (click)=\"goBack()\">Clear Filter</button>\n  </div>\n  <div class=\"card\"  *ngFor=\"let topic of topics\">\n      <app-topic-detail [topic]=topic></app-topic-detail>\n  </div>\n  <div class=\"info\" *ngIf=\"msg; else elseBlock\">{{msg}}</div>\n  <ng-template class=\"test\" #elseBlock><div class=\"info\">Scroll down to load more</div></ng-template>\n</div>"

/***/ }),

/***/ "./src/app/components/search-results/search-results.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/search-results/search-results.component.ts ***!
  \***********************************************************************/
/*! exports provided: SearchResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsComponent", function() { return SearchResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchResultsComponent = /** @class */ (function () {
    function SearchResultsComponent(dataService, location, route) {
        this.dataService = dataService;
        this.location = location;
        this.route = route;
        this.pageNumber = 0;
        this.category = '';
    }
    SearchResultsComponent.prototype.scroll = function () {
        this.handleScroll();
    };
    SearchResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.category = params['category'];
            _this.getTopics(_this.category, _this.pageNumber);
        });
        this.scroll = lodash__WEBPACK_IMPORTED_MODULE_4__["debounce"](this.scroll, 1000);
    };
    SearchResultsComponent.prototype.getTopics = function (category, pageNumber) {
        var _this = this;
        this.dataService.getSearchedTopics(category, pageNumber)
            .then(function (topics) {
            if (topics.length < 8) {
                _this.msg = 'No More Topics';
            }
            if (_this.pageNumber === 0) {
                _this.topics = topics;
            }
            else {
                _this.topics = lodash__WEBPACK_IMPORTED_MODULE_4__["union"](_this.topics.concat(topics));
            }
            _this.pageNumber += 1;
        })
            .catch(function (err) {
            _this.msg = 'No More Topics';
        });
    };
    SearchResultsComponent.prototype.goBack = function () {
        this.location.back();
    };
    SearchResultsComponent.prototype.handleScroll = function () {
        var scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        if ((window.innerHeight + scrollY) >= (document.body.offsetHeight - 50)) {
            this.loadMoreTopics();
        }
    };
    SearchResultsComponent.prototype.loadMoreTopics = function () {
        this.getTopics(this.category, this.pageNumber);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SearchResultsComponent.prototype, "scroll", null);
    SearchResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-results',
            template: __webpack_require__(/*! ./search-results.component.html */ "./src/app/components/search-results/search-results.component.html"),
            styles: [__webpack_require__(/*! ./search-results.component.css */ "./src/app/components/search-results/search-results.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SearchResultsComponent);
    return SearchResultsComponent;
}());



/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signup/signup.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    margin-top: 25px;\n    height: 500px;\n}\n.btn-success {\n    color:white;\n    background-color: #4688BC;\n    border:none;\n  }"

/***/ }),

/***/ "./src/app/components/signup/signup.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/signup/signup.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    {{diagnostic}}\n    <form>\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input type=\"text\" class=\"form-control\" id=\"email\"\n        required\n        [(ngModel)]=\"newUser.email\" name=\"email\">\n        <!-- <p *ngIf=\"errors['password']\">Email is not correct!</p> -->\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"text\" class=\"form-control\" id=\"password\"\n        required\n        [(ngModel)]=\"newUser.password\" name=\"password\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"password\">Confirm Password</label>\n          <input type=\"text\" class=\"form-control\" id=\"password\"\n          required\n          [(ngModel)]=\"newUser.comfirmedPassword\" name=\"password\">\n        </div>\n      <button type=\"submit\" class=\"btn btn-success\" (click)=\"registerUser()\">Submit</button>\n      <div class=\"form-group\"> Already a member?<a [routerLink]=\"['/login']\">Login</a></div>\n      <!-- <a href=\"/auth/google\">Sign In with Google</a> -->\n    </form>\n  </div>"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupComponent = /** @class */ (function () {
    function SignupComponent(router) {
        this.router = router;
        this.newUser = {
            email: '',
            password: '',
            comfirmedPassword: ''
        };
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.registerUser = function () {
        var _this = this;
        var email = this.newUser.email;
        var password = this.newUser.password;
        var confirm_password = this.newUser.comfirmedPassword;
        if (password !== confirm_password) {
            return;
        }
        var options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        };
        fetch('auth/signup', options).then(function (response) {
            if (response.status === 200) {
                _this.errors = {};
                _this.router.navigateByUrl('/login');
            }
            else {
                response.json().then(function (json) {
                    _this.errors = json.errors ? json.errors : {};
                    _this.errors['summary'] = json.message;
                });
            }
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/components/topic-detail/topic-detail.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/topic-detail/topic-detail.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n    text-decoration: none;\n  }\n.badge-secondary {\n  margin-left:13px;\n}\n.btn-link {\n  font-size: 1.1em;\n  color: #4688BC;\n  white-space: normal;\n  text-align: left;\n  text-decoration: none;\n}\nh5 {\n  display: flex;\n  justify-content: space-between;\n}\n.like {\n  background-color: #4688BC;\n  color: white;\n}\n.card-body {\n  padding-left: 33px;\n}"

/***/ }),

/***/ "./src/app/components/topic-detail/topic-detail.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/topic-detail/topic-detail.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-header\" id=\"{{topic._id}}\">\n    <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" attr.data-target=\"#collapse{{topic.id}}\" aria-expanded=\"false\" attr.aria-controls=\"collapse{{topic.id}}\">\n      {{topic.name}}\n    </button>\n  <h5>\n    <a class=\"badge badge-secondary\" [routerLink]=\"['/topics', topic.category]\">{{topic.category}}</a>\n    <button class=\"btn-right badge navbar-right like\" (click)=\"handleLikes(topic.id, 1)\" *ngIf=\"!isLiked\">Like</button>\n    <button class=\"btn-right badge navbar-right liked\" (click)=\"handleLikes(topic.id, -1)\" *ngIf=\"isLiked\">Liked</button>\n  </h5>\n</div>\n<div id=\"collapse{{topic.id}}\" class=\"collapse\" attr.aria-labelledby=\"{{topic._id}}\" data-parent=\"#accordionExample\">\n  <div class=\"card-body\">\n    {{topic.desc || \"No description\"}}\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/topic-detail/topic-detail.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/topic-detail/topic-detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: TopicDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicDetailComponent", function() { return TopicDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopicDetailComponent = /** @class */ (function () {
    function TopicDetailComponent(dataService) {
        this.dataService = dataService;
        this.isLiked = false;
    }
    TopicDetailComponent.prototype.ngOnInit = function () {
    };
    TopicDetailComponent.prototype.handleLikes = function (e, action) {
        this.isLiked = !this.isLiked;
        this.dataService.handlLikes(e, action);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TopicDetailComponent.prototype, "topic", void 0);
    TopicDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topic-detail',
            template: __webpack_require__(/*! ./topic-detail.component.html */ "./src/app/components/topic-detail/topic-detail.component.html"),
            styles: [__webpack_require__(/*! ./topic-detail.component.css */ "./src/app/components/topic-detail/topic-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], TopicDetailComponent);
    return TopicDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/topic-list/topic-list.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/topic-list/topic-list.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  text-decoration: none;\n}\n.badge-secondary {\n  margin-left:16px;\n}\n.btn-link {\n  font-size: 1.1em;\n  color: #4688BC;\n  white-space: normal;\n  text-align: left;\n}\n.container {\n  margin-top: 15px;\n}\nh2 {\n  color: saddlebrown;\n}\nh5 {\n  display: flex;\n  justify-content: space-between;\n}\n.info {\n  text-align:center;\n  margin-top: 10px;\n}"

/***/ }),

/***/ "./src/app/components/topic-list/topic-list.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/topic-list/topic-list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"accordion\" id=\"accordionExample\"  *ngIf=\"topics\">\n    <div class=\"card\"  *ngFor=\"let topic of (topics | search: searchTerm)\" >\n      <app-topic-detail [topic]=topic></app-topic-detail>\n    </div>\n    <div class=\"info\" *ngIf=\"msg; else elseBlock\">{{msg}}</div>\n    <ng-template class=\"test\" #elseBlock><div class=\"info\">Scroll down to load more</div></ng-template>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/topic-list/topic-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/topic-list/topic-list.component.ts ***!
  \***************************************************************/
/*! exports provided: TopicListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicListComponent", function() { return TopicListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_input_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/input.service */ "./src/app/services/input.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TopicListComponent = /** @class */ (function () {
    function TopicListComponent(dataService, inputService) {
        this.dataService = dataService;
        this.inputService = inputService;
        this.pageNumber = 0;
        this.searchTerm = '';
        this.msg = '';
    }
    TopicListComponent.prototype.scroll = function () {
        this.handleScroll();
    };
    TopicListComponent.prototype.ngOnInit = function () {
        this.loadMoreTopics();
        this.getSearchTerm();
        this.scroll = lodash__WEBPACK_IMPORTED_MODULE_3__["debounce"](this.scroll, 1000);
    };
    TopicListComponent.prototype.handleScroll = function () {
        var scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        if ((window.innerHeight + scrollY) >= (document.body.offsetHeight - 50)) {
            this.loadMoreTopics();
        }
    };
    TopicListComponent.prototype.getTopics = function () {
        var _this = this;
        this.dataService.getTopics(this.pageNumber)
            .then(function (topics) {
            if (_this.pageNumber === 0) {
                _this.topics = topics;
            }
            else {
                _this.topics = lodash__WEBPACK_IMPORTED_MODULE_3__["union"](_this.topics.concat(topics));
            }
            _this.pageNumber += 1;
        })
            .catch(function (err) {
            _this.msg = 'No More Topics';
        });
    };
    TopicListComponent.prototype.getSearchTerm = function () {
        var _this = this;
        this.subscriptionInput = this.inputService.getInput()
            .subscribe(function (inputTerm) { return _this.searchTerm = inputTerm; });
    };
    TopicListComponent.prototype.loadMoreTopics = function () {
        this.getTopics();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TopicListComponent.prototype, "scroll", null);
    TopicListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topic-list',
            template: __webpack_require__(/*! ./topic-list.component.html */ "./src/app/components/topic-list/topic-list.component.html"),
            styles: [__webpack_require__(/*! ./topic-list.component.css */ "./src/app/components/topic-list/topic-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _services_input_service__WEBPACK_IMPORTED_MODULE_2__["InputService"]])
    ], TopicListComponent);
    return TopicListComponent;
}());



/***/ }),

/***/ "./src/app/pipes/search.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/search.pipe.ts ***!
  \**************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (topics, term) {
        return topics.filter(function (topic) { return topic.name.toLowerCase().includes(term); });
    };
    SearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.authenticateUser = function (token, email) {
        localStorage.setItem('token', token);
        localStorage.setItem('email', email);
    };
    AuthService.prototype.isUserAuthenticated = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(localStorage.getItem('token') !== null);
    };
    AuthService.prototype.deauthenticateUser = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService.prototype.getEmail = function () {
        return localStorage.getItem('email');
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = /** @class */ (function () {
    function DataService(httpClient, auth) {
        this.httpClient = httpClient;
        this.auth = auth;
        this._topicSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
    }
    DataService.prototype.getTopics = function (pageNumber) {
        return this.httpClient.get("api/v1/topics/pagenumber/" + pageNumber)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    DataService.prototype.getPopularTopics = function () {
        var _this = this;
        this.httpClient.get('api/v1/popularTopics')
            .toPromise()
            .then(function (res) {
            _this._topicSource.next(res);
        })
            .catch(this.handleError);
        return this._topicSource.asObservable();
    };
    DataService.prototype.getSearchedTopics = function (category, pagenumber) {
        return this.httpClient.get("api/v1/topics/" + category + "/" + pagenumber)
            .toPromise()
            .then(function (res) {
            console.log(res);
            return res;
        })
            .catch(this.handleError);
    };
    DataService.prototype.getIdeas = function (pageNumber) {
        return this.httpClient.get("api/v1/ideas/pagenumber/" + pageNumber)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    DataService.prototype.addTopic = function (topic) {
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'constent-type': 'application/json'
            })
        };
        return this.httpClient.post('editor/topics', topic, options)
            .toPromise()
            .then(function (res) {
            return res;
        })
            .catch(this.handleError);
    };
    DataService.prototype.handlLikes = function (id, action) {
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'constent-type': 'application/json',
            })
        };
        return this.httpClient.put("editor/topics/" + id + "/" + action, options)
            .toPromise()
            .then(function (res) {
            return res;
        })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (err) {
        console.log(err);
        return Promise.reject(err.error || err);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/input.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/input.service.ts ***!
  \*******************************************/
/*! exports provided: InputService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputService", function() { return InputService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputService = /** @class */ (function () {
    function InputService() {
        this.inputSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
    }
    InputService.prototype.changeInput = function (term) {
        this.inputSubject$.next(term);
    };
    InputService.prototype.getInput = function () {
        return this.inputSubject$.asObservable();
    };
    InputService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], InputService);
    return InputService;
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
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yanbinjin/coding/full-stack-projects/show-me-a-table-topic/client-side/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map