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

module.exports = "<app-nav-bar></app-nav-bar>\n<router-outlet></router-outlet>"

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
/* harmony import */ var materialize_css_dist_css_materialize_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! materialize-css/dist/css/materialize.min.css */ "./node_modules/materialize-css/dist/css/materialize.min.css");
/* harmony import */ var materialize_css_dist_css_materialize_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(materialize_css_dist_css_materialize_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var materialize_css_dist_js_materialize_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! materialize-css/dist/js/materialize.min.js */ "./node_modules/materialize-css/dist/js/materialize.min.js");
/* harmony import */ var materialize_css_dist_js_materialize_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(materialize_css_dist_js_materialize_min_js__WEBPACK_IMPORTED_MODULE_2__);
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
/* harmony import */ var _components_topic_detail_topic_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/topic-detail/topic-detail.component */ "./src/app/components/topic-detail/topic-detail.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _components_new_topic_new_topic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/new-topic/new-topic.component */ "./src/app/components/new-topic/new-topic.component.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/search.pipe */ "./src/app/pipes/search.pipe.ts");
/* harmony import */ var _components_topic_editor_topic_editor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/topic-editor/topic-editor.component */ "./src/app/components/topic-editor/topic-editor.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_most_popular_topic_most_popular_topic_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/most-popular-topic/most-popular-topic.component */ "./src/app/components/most-popular-topic/most-popular-topic.component.ts");
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
                _components_topic_detail_topic_detail_component__WEBPACK_IMPORTED_MODULE_5__["TopicDetailComponent"],
                _components_new_topic_new_topic_component__WEBPACK_IMPORTED_MODULE_7__["NewTopicComponent"],
                _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__["NavBarComponent"],
                _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_10__["SearchPipe"],
                _components_topic_editor_topic_editor_component__WEBPACK_IMPORTED_MODULE_11__["TopicEditorComponent"],
                _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _components_most_popular_topic_most_popular_topic_component__WEBPACK_IMPORTED_MODULE_14__["MostPopularTopicComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_6__["routing"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
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
/* harmony import */ var _components_topic_detail_topic_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/topic-detail/topic-detail.component */ "./src/app/components/topic-detail/topic-detail.component.ts");
/* harmony import */ var _components_new_topic_new_topic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/new-topic/new-topic.component */ "./src/app/components/new-topic/new-topic.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_topic_editor_topic_editor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/topic-editor/topic-editor.component */ "./src/app/components/topic-editor/topic-editor.component.ts");
/* harmony import */ var _components_most_popular_topic_most_popular_topic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components//most-popular-topic/most-popular-topic.component */ "./src/app/components/most-popular-topic/most-popular-topic.component.ts");








var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _components_most_popular_topic_most_popular_topic_component__WEBPACK_IMPORTED_MODULE_7__["MostPopularTopicComponent"] },
    { path: 'topics', component: _components_topic_list_topic_list_component__WEBPACK_IMPORTED_MODULE_1__["TopicListComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'signup', component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'topic/:id', component: _components_topic_detail_topic_detail_component__WEBPACK_IMPORTED_MODULE_2__["TopicDetailComponent"] },
    { path: 'topic_ditor/:id', component: _components_topic_editor_topic_editor_component__WEBPACK_IMPORTED_MODULE_6__["TopicEditorComponent"] },
    { path: 'new_topic', component: _components_new_topic_new_topic_component__WEBPACK_IMPORTED_MODULE_3__["NewTopicComponent"] },
    { path: '**', redirectTo: 'problems' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin: auto;\n\n}\n.login-panel {\n  margin: auto;\n  width: 40%;\n}\n.error-message {\n  padding-left: 20px;\n  color: red;\n}"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input type=\"text\" class=\"form-control\" id=\"email\"\n      required\n      [(ngModel)]=\"user.email\" name=\"email\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input type=\"text\" class=\"form-control\" id=\"password\"\n      required\n      [(ngModel)]=\"user.password\" name=\"password\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-success\" (click)=\"checkUser()\">Submit</button>\n    <div class=\"form-group\"> Not a member?<a [routerLink]=\"['/signup']\">Sign up</a></div>\n  </form>\n</div>"

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
        var url = 'http://' + window.location.hostname + ':3000/auth/login';
        var request = new Request(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        fetch(request).then(function (response) {
            if (response.status === 200) {
                _this.errors = {};
                response.json().then(function (json) {
                    _this.auth.authenticateUser(json.token, email);
                });
                location.reload();
                _this.router.navigateByUrl('/');
            }
            else {
                console.log('Login failed');
                response.json().then(function (json) {
                    console.log(json);
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

module.exports = ".category, button{\n  min-width: 100px;\n  margin-right: 10px;\n}\n.badge.category {\n  padding: 0.6em;\n  color: #fbfdfa;\n  font-size: 12px;\n}\n.title {\n  font-size: 1.2em;\n}\n.diff-life {\n  background-color: #42ebf4;\n}\n.diff-tv {\n  background-color: #42eb76;\n}\n.diff-globalization {\n  background-color: #f232e3;\n}\n.diff-study {\n  background-color: #f5dd3e;\n}\n.container {\n  margin-top: 10px;\n}\nh2 {\n  color: saddlebrown;\n}"

/***/ }),

/***/ "./src/app/components/most-popular-topic/most-popular-topic.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/most-popular-topic/most-popular-topic.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Most popular topics</h2>\n  <div class=\"list-group\">\n    <a class=\"list-group-item\" *ngFor=\"let topic of (topics | search: searchTerm)\" [routerLink]=\"['/topic', topic.id]\">\n      <span class=\"{{'pull-left badge category diff-' + topic.category.toLocaleLowerCase()}}\">\n        {{topic.category}}\n      </span>\n      <strong class=\"title\"> {{topic.name}}</strong>\n    </a>\n  </div>\n</div>"

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

module.exports = "nav a {\n  justify-content: flex-start;\n  padding: 5px 10px;;\n  text-decoration: none;\n  margin: 10px 5px;;\n  display: inline-block;\n\n  border-radius: 4px;\n  \n}\n\n.navbar {\n  justify-content: flex-start;\n  margin-bottom: -1px;\n  padding:0px;\n}\n\n.bg-light {\n  background-color: #563d7c !important;\n\n}\n\n.navbar-brand {\n  color: white;\n}\n\n.nav-link {\n  color: #cbbde2 !important;\n  font-size: 1.25rem;\n}\n\ncontainer {\n  margin-bottom: 10px;\n}"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"nav-link\" [routerLink]=\"['/home']\">Home</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/topics']\">All Topics</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" *ngIf=\"autherized\" [routerLink]=\"['/new_topic']\">Add New topic</a>\n        </li>\n      </ul>\n      <div>\n        <ul class=\"navbar-nav mr-auto\">\n          <form class=\"form-inline my-2 my-lg-0\">\n              <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\" [formControl]=\"searchBox\">\n              <!-- <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\"(click)=\"searchTopic()\">Search</button> -->\n            </form>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" *ngIf=\"!autherized\" [routerLink]=\"['/login']\">Login</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" *ngIf=\"!autherized\" [routerLink]=\"['/signup']\">Signup</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" *ngIf=\"user\">{{user}}</a>\n          </li>\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" *ngIf=\"autherized\" (click)=\"logout()\" [routerLink]=\"['/home']\">Logout</a>\n            </li>\n        </ul>\n        </div>\n    </div>\n  </nav>\n</div>\n"

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
        var subscription = this.auth.isUserAuthenticated()
            .subscribe((function (res) {
            _this.autherized = res;
        }));
        this.subscription.add(subscription);
        // or simplely 
        //this.autherized = this.auth.isUserAuthenticated();
    };
    NavBarComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    // searchTopic(): void {
    //   this.router.navigate(['/topics']);
    // }
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

module.exports = ".container {\n  margin-top: 10px;\n}\n#resetBtn {\n  margin-left: 5px;\n  margin-right: 5px;\n}"

/***/ }),

/***/ "./src/app/components/new-topic/new-topic.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/new-topic/new-topic.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form #topicForm=\"ngForm\">\n    <div [hidden]=\"topicForm.submitted\">\n      <div class=\"form-group\">\n        <label for=\"topicName\">Name</label>\n        <input id=\"topicName\" name=\"topicName\" class=\"form-control\" required\n          minlength=\"4\" [(ngModel)]=\"newTopic.name\" #name=\"ngModel\"\n          placeholder=\"Input name here\">\n        <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert alert-danger\">\n          <div *ngIf=\"name.errors.required\">\n            Name is required.\n          </div>\n          <div *ngIf=\"name.errors.minlength\">\n            Name must be at least 4 characters long.\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"topicDesc\">Topic description</label>\n        <textarea name = \"topicDesc\" id=\"topicDesc\" class=\"form-control\"\n          placeholder=\"Input topic description\" \n          [(ngModel)] = \"newTopic.desc\" rows=\"3\">\n        </textarea>\n      </div>\n      <div class=\"form-group\">\n          <label for=\"topicCategory\">Category</label> \n          <select class=\"form-control\" id=\"topicCategory\" name=\"topicCategory\"\n          [(ngModel)] = \"newTopic.category\">\n            <option *ngFor = \"let category of categories\" [value] = \"category\">\n              {{category}}\n            </option>\n          </select>\n      </div>  \n      <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"topicForm.invalid\" (click)=\"addTopic()\">Submit</button>\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"resetForm()\">Reset</button>\n    </div>\n\n    <div class=\"submitted-message\" *ngIf=\"topicForm.submitted\">\n      <p>You've submitted your topic!</p>\n      <button [routerLink]=\"['/topics']\">Check list</button>\n    </div>\n  </form>\n</div>\n  "

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
    author: ''
};
var NewTopicComponent = /** @class */ (function () {
    function NewTopicComponent(dataService, auth) {
        this.dataService = dataService;
        this.auth = auth;
        this.newTopic = Object.assign({}, DEFAULT_TOPIC);
        this.categories = ['tv', 'life', 'study', 'globalization'];
    }
    NewTopicComponent.prototype.ngOnInit = function () {
        this.newTopic.author = this.auth.getEmail();
    };
    NewTopicComponent.prototype.addTopic = function () {
        this.dataService.addTopic(this.newTopic);
    };
    NewTopicComponent.prototype.resetForm = function () {
        this.newTopic = Object.assign({}, DEFAULT_TOPIC);
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

/***/ "./src/app/components/signup/signup.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signup/signup.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/signup/signup.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/signup/signup.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    {{diagnostic}}\n    <form>\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input type=\"text\" class=\"form-control\" id=\"email\"\n        required\n        [(ngModel)]=\"newUser.email\" name=\"email\">\n        <!-- <p *ngIf=\"errors['password']\">Email is not correct!</p> -->\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"text\" class=\"form-control\" id=\"password\"\n        required\n        [(ngModel)]=\"newUser.password\" name=\"password\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"password\">Confirm Password</label>\n          <input type=\"text\" class=\"form-control\" id=\"password\"\n          required\n          [(ngModel)]=\"newUser.comfirmedPassword\" name=\"password\">\n        </div>\n      <button type=\"submit\" class=\"btn btn-success\" (click)=\"registerUser()\">Submit</button>\n      <div class=\"form-group\"> Already a member?<a [routerLink]=\"['/login']\">Login</a></div>\n      <a href=\"/auth/google\">Sign In with Google</a>\n    </form>\n  </div>"

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
        var url = 'http://' + window.location.hostname + ':3000/auth/signup';
        var request = new Request(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        fetch(request).then(function (response) {
            if (response.status === 200) {
                _this.errors = {};
                _this.router.navigateByUrl('/login');
            }
            else {
                response.json().then(function (json) {
                    //console.log(json);
                    _this.errors = json.errors ? json.errors : {};
                    _this.errors['summary'] = json.message;
                    console.log(_this.errors);
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

module.exports = ""

/***/ }),

/***/ "./src/app/components/topic-detail/topic-detail.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/topic-detail/topic-detail.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"topic\">\n  <div class=\"col-sm-8 col-md-12\">\n    <div>\n      <h2>\n        {{ topic.id}}. {{topic.name}}\n      </h2>\n      <p>\n        {{topic.desc}}\n        {{topic.likes}}\n      </p>\n        \n      <button class=\"btn btn-outline-success my-2 my-sm-0\" *ngIf=\"author===topic.author\"[routerLink]=\"['/topic_ditor', topic.id]\">Edit this problem</button>\n    </div>\n    <div class=\"hidden-xs clo-sm-12 col-md-8\"></div>\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
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
    function TopicDetailComponent(dataService, route, auth) {
        this.dataService = dataService;
        this.route = route;
        this.auth = auth;
    }
    TopicDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.dataService.getTopic(+params['id'])
                .then(function (topic) { return _this.topic = topic; });
        });
        this.author = this.auth.getEmail();
    };
    TopicDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topic-detail',
            template: __webpack_require__(/*! ./topic-detail.component.html */ "./src/app/components/topic-detail/topic-detail.component.html"),
            styles: [__webpack_require__(/*! ./topic-detail.component.css */ "./src/app/components/topic-detail/topic-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], TopicDetailComponent);
    return TopicDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/topic-editor/topic-editor.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/topic-editor/topic-editor.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/topic-editor/topic-editor.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/topic-editor/topic-editor.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form #topicForm=\"ngForm\">\n    <div [hidden]=\"topicForm.submitted\">\n      <div class=\"form-group\">\n        <label for=\"topicName\">Name</label>\n        <input id=\"topicName\" name=\"topicName\" class=\"form-control\" required\n          minlength=\"4\" [(ngModel)]=\"newTopic.name\" #name=\"ngModel\"\n          value = {{newTopic.name}}>\n        <div *ngIf=\"name.invalid && name.dirty\" class=\"alert alert-danger\">\n          <div *ngIf=\"name.errors.required\">\n            Name is required.\n          </div>\n          <div *ngIf=\"name.errors.minlength\">\n            Name must be at least 4 characters long.\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"topicDesc\">topic description</label>\n        <textarea name = \"topicDesc\" id=\"topicDesc\" class=\"form-control\"\n          [(ngModel)] = \"newTopic.desc\" rows=\"3\" value = {{newTopic.desc}}>\n        </textarea>\n      </div>\n      <div class=\"form-group\">\n          <label for=\"topicCategory\">Category</label> \n          <select class=\"form-control\" id=\"category\" name=\"category\"\n          [(ngModel)] = \"newTopic.category\">\n            <option *ngFor = \"let category of categories\" [value] = \"category\">\n              {{category}}\n            </option>\n          </select>\n      </div>  \n      <button type=\"submit\" class=\"btn btn-default\"  (click)=\"updatetopic()\">Submit</button>\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"resetForm()\">Reset</button>\n    </div>\n\n    <div class=\"submitted-message\" *ngIf=\"topicForm.submitted\">\n      <button [routerLink]=\"['/topics']\">Check list</button>\n    </div>\n  </form>\n</div>\n  "

/***/ }),

/***/ "./src/app/components/topic-editor/topic-editor.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/topic-editor/topic-editor.component.ts ***!
  \*******************************************************************/
/*! exports provided: TopicEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicEditorComponent", function() { return TopicEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
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



var DEFAULT_TOPIC = {
    id: 0,
    name: '',
    desc: '',
    likes: 0,
    author: ''
};
var TopicEditorComponent = /** @class */ (function () {
    function TopicEditorComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
        this.newTopic = Object.assign({}, DEFAULT_TOPIC);
        this.categories = ['life', 'tv', 'globalization', 'study'];
    }
    TopicEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.dataService.getTopic(+params['id'])
                .then(function (topic) {
                return _this.newTopic = topic;
            });
        });
    };
    TopicEditorComponent.prototype.updatetopic = function () {
        this.dataService.updateTopic(this.newTopic);
    };
    TopicEditorComponent.prototype.resetForm = function () {
        this.newTopic = Object.assign({}, DEFAULT_TOPIC);
    };
    TopicEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topic-editor',
            template: __webpack_require__(/*! ./topic-editor.component.html */ "./src/app/components/topic-editor/topic-editor.component.html"),
            styles: [__webpack_require__(/*! ./topic-editor.component.css */ "./src/app/components/topic-editor/topic-editor.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], TopicEditorComponent);
    return TopicEditorComponent;
}());



/***/ }),

/***/ "./src/app/components/topic-list/topic-list.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/topic-list/topic-list.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".category, button{\n  min-width: 100px;\n  margin-right: 10px;\n}\n.badge.category {\n  padding: 0.6em;\n  color: #fbfdfa;\n  font-size: 12px;\n}\n.title {\n  font-size: 1.2em;\n}\n.cate-life {\n  background-color: #42ebf4;\n}\n.cate-tv {\n  background-color: #42eb76;\n}\n.cate-globalization {\n  background-color: #f232e3;\n}\n.cate-study {\n  background-color: #f5dd3e;\n}\n.container {\n  margin-top: 10px;\n}"

/***/ }),

/***/ "./src/app/components/topic-list/topic-list.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/topic-list/topic-list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"list-group\">\n    <a class=\"list-group-item\" *ngFor=\"let topic of (topics | search: searchTerm)\" [routerLink]=\"['/topic', topic.id]\">\n      <span class=\"{{'pull-left badge category cate-' + topic.category.toLocaleLowerCase()}}\">\n        {{topic.category}}\n      </span>\n      <strong class=\"title\"> {{topic.name}}</strong>\n    </a>\n  </div>\n</div>"

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
        this.searchTerm = '';
    }
    TopicListComponent.prototype.ngOnInit = function () {
        this.getTopics();
        this.getSearchTerm();
    };
    TopicListComponent.prototype.ngOnDestroy = function () {
        this.subscriptionTopic.unsubscribe();
    };
    TopicListComponent.prototype.getTopics = function () {
        var _this = this;
        this.subscriptionTopic = this.dataService.getTopics()
            .subscribe(function (topics) {
            _this.topics = topics;
        });
    };
    TopicListComponent.prototype.getSearchTerm = function () {
        var _this = this;
        this.subscriptionInput = this.inputService.getInput()
            .subscribe(function (inputTerm) { return _this.searchTerm = inputTerm; });
    };
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
    DataService.prototype.getTopics = function () {
        var _this = this;
        this.httpClient.get('api/v1/topics')
            .toPromise()
            .then(function (res) {
            _this._topicSource.next(res);
        })
            .catch(this.handleError);
        return this._topicSource.asObservable();
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
    DataService.prototype.getTopic = function (id) {
        return this.httpClient.get("api/v1/topics/" + id)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    DataService.prototype.addTopic = function (topic) {
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'constent-type': 'application/json',
                'Authorization': 'bearer ' + this.auth.getToken()
            })
        };
        return this.httpClient.post('editor/topics', topic, options)
            .toPromise()
            .then(function (res) {
            return res;
        })
            .catch(this.handleError);
    };
    DataService.prototype.updateTopic = function (topic) {
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'constent-type': 'application/json',
                'Authorization': 'bearer ' + this.auth.getToken()
            })
        };
        return this.httpClient.put('editor/topics', topic, options)
            .toPromise()
            .then(function (res) {
            return res;
        })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (err) {
        return Promise.reject(err.body || err);
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

module.exports = __webpack_require__(/*! /Users/Yanbin/bittiger/show-me-a-table-topic/client-side/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map