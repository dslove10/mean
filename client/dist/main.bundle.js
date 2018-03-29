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

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var movie_home_component_1 = __webpack_require__("./src/app/movie-home/movie-home.component.ts");
var movie_show_component_1 = __webpack_require__("./src/app/movie-show/movie-show.component.ts");
var movie_review_component_1 = __webpack_require__("./src/app/movie-review/movie-review.component.ts");
var movie_new_component_1 = __webpack_require__("./src/app/movie-new/movie-new.component.ts");
var routes = [
    { path: '', pathMatch: 'full', component: movie_home_component_1.MovieHomeComponent },
    { path: 'movies', component: movie_home_component_1.MovieHomeComponent },
    { path: 'movies/new', component: movie_new_component_1.MovieNewComponent },
    { path: 'movies/:id', component: movie_show_component_1.MovieShowComponent },
    { path: 'movies/review/:id', component: movie_review_component_1.MovieReviewComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\nh1 {\r\n    font-family: 'Arial', Helvetica, sans-serif;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div id=\"wrapper\">\n  <h1>Squishy Tomatoes</h1>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var movie_home_component_1 = __webpack_require__("./src/app/movie-home/movie-home.component.ts");
var movie_show_component_1 = __webpack_require__("./src/app/movie-show/movie-show.component.ts");
var movie_review_component_1 = __webpack_require__("./src/app/movie-review/movie-review.component.ts");
var movie_new_component_1 = __webpack_require__("./src/app/movie-new/movie-new.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                movie_home_component_1.MovieHomeComponent,
                movie_show_component_1.MovieShowComponent,
                movie_review_component_1.MovieReviewComponent,
                movie_new_component_1.MovieNewComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule
            ],
            providers: [http_service_1.HttpService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/http.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getMovies = function () {
        return this._http.get('/movies');
    };
    HttpService.prototype.createMovie = function (newMovie) {
        return this._http.post('/movies', newMovie);
    };
    HttpService.prototype.createReview = function (newMovie) {
        return this._http.post('/movies/new/' + newMovie._id, newMovie.reviews);
    };
    HttpService.prototype.getOneMovie = function (id) {
        return this._http.get('/movies/' + id);
    };
    HttpService.prototype.destroyMovie = function (id) {
        return this._http.delete('/movies/' + id);
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;


/***/ }),

/***/ "./src/app/movie-home/movie-home.component.css":
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\n#wrapper {\r\n    width: 800 px;\r\n    font-family: 'Arial', Helvetica, sans-serif;\r\n    border: 1px solid black;\r\n}\r\n\r\nh3 {\r\n    display: inline-block;\r\n    margin: 10px;\r\n\r\n}\r\n\r\n.add{\r\n    display: inline-block;\r\n    margin-left: 470px;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    margin-right: 5px;\r\n    vertical-align: top;\r\n    width: 150px;\r\n    height: 30px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    color: white;\r\n    background: -webkit-gradient(linear, left top, left bottom, from(#b1c5b9), to(#4a626f));\r\n    background: linear-gradient(#b1c5b9, #4a626f); \r\n}\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    width: 90%;\r\n    margin: auto;\r\n}\r\n\r\ntable, th, td {\r\n    border: 2px solid black;\r\n}\r\n\r\nth {\r\n    text-align: left;\r\n    color: white;\r\n    background-color: #c2c1c1;\r\n}\r\n\r\ntr:nth-child(even) {\r\n    background-color: #c2c1c1;\r\n}\r\n\r\n.show {\r\n    margin: 10px 20px 10px 30px;\r\n    width: 150px;\r\n    height: 40px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    color: white;\r\n    background: -webkit-gradient(linear, left top, left bottom, from(#e7ea83), to(black));\r\n    background: linear-gradient(#e7ea83, black); \r\n}\r\n\r\n.review {\r\n    margin-left: 20px;\r\n    width: 150px;\r\n    height: 40px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    color: white;\r\n    background: -webkit-gradient(linear, left top, left bottom, from(#b1c5b9), to(#4a626f));\r\n    background: linear-gradient(#b1c5b9, #4a626f); \r\n}"

/***/ }),

/***/ "./src/app/movie-home/movie-home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <div id=\"header\">\n    <h3>Movie List</h3>\n    <button class=\"add\" [routerLink]=\"['movies/new']\">Add a new movie</button>\n  </div>\n\n  <table>\n    <thead>\n      <tr>\n        <th>Movie title</th>\n        <th>Available Actions</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let movie of movies\">\n        <td>{{ movie.title }}</td>\n        <td>\n          <button class=\"show\" [routerLink]=\"['movies', movie._id]\">Read reviews</button>\n          <button class=\"review\" [routerLink]=\"['movies/review', movie._id]\">Write review</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/movie-home/movie-home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var MovieHomeComponent = /** @class */ (function () {
    function MovieHomeComponent(_httpService) {
        this._httpService = _httpService;
    }
    MovieHomeComponent.prototype.ngOnInit = function () {
        this.getMovies();
    };
    MovieHomeComponent.prototype.getMovies = function () {
        var _this = this;
        var observable = this._httpService.getMovies();
        observable.subscribe(function (res) {
            console.log(res);
            _this.movies = res;
        });
    };
    MovieHomeComponent = __decorate([
        core_1.Component({
            selector: 'app-movie-home',
            template: __webpack_require__("./src/app/movie-home/movie-home.component.html"),
            styles: [__webpack_require__("./src/app/movie-home/movie-home.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], MovieHomeComponent);
    return MovieHomeComponent;
}());
exports.MovieHomeComponent = MovieHomeComponent;


/***/ }),

/***/ "./src/app/movie-new/movie-new.component.css":
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\n#wrapper {\r\n    width: 800 px;\r\n    font-family: 'Arial', Helvetica, sans-serif;\r\n    border: 1px solid black;\r\n}\r\n\r\ninput {\r\n    display: block;\r\n    border: 1px solid black;\r\n    margin: 5px 300px;\r\n}\r\n\r\nselect {\r\n    display: block;\r\n    border: 1px solid black;\r\n    border-radius: 5px;\r\n    width: 200px;\r\n    margin: 5px 300px;\r\n}\r\n\r\ntextarea {\r\n    display: block;\r\n    border: 1px solid black;\r\n    margin: 5px 300px;\r\n}\r\n\r\nlabel {\r\n    font-weight: bold;\r\n    margin: 300px;\r\n}\r\n\r\n.add {\r\n    margin: 10px 10px 10px 250px;\r\n    width: 150px;\r\n    height: 30px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    color: white;\r\n    background: -webkit-gradient(linear, left top, left bottom, from(#adc6de), to(#5f7789));\r\n    background: linear-gradient(#adc6de, #5f7789);\r\n}\r\n\r\n.cancel {\r\n    width: 150px;\r\n    height: 30px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    color: white;\r\n    background: -webkit-gradient(linear, left top, left bottom, from(#f1c395), to(#506169));\r\n    background: linear-gradient(#f1c395, #506169);\r\n}\r\n\r\nsmall {\r\n    color: red;\r\n}\r\n"

/***/ }),

/***/ "./src/app/movie-new/movie-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <h3>Submit a movie and your review</h3>\n\n  <small *ngIf=\"errors.title\">\n    {{ errors.title.message }}\n  </small>\n\n  <small *ngIf=\"errors.name\">\n    {{ errors.name.message }}\n  </small>\n  \n  <small *ngIf=\"errors.stars\">\n    {{ errors.stars.message }}\n  </small>\n  \n  <small *ngIf=\"errors.content\">\n    {{ errors.content.message }}\n  </small>\n\n  <form (submit)=\"onSubmitCreate($event)\" #form=\"ngForm\">\n    <label>Movie Title</label>\n    <small class=\"errors\" [hidden]=\"title.valid || (title.untouched && !form.submitted)\">\n      Title is required (Minimum of 3 characters)\n    </small>\n    <input \n      type=\"text\"\n      name=\"newMovie.title\"\n      required\n      minlength=\"3\"\n      [(ngModel)]=\"newMovie.title\"\n      #title=\"ngModel\"\n    />\n    <label>Your Name</label>\n    <small class=\"errors\" [hidden]=\"name.valid || (name.untouched && !form.submitted)\">\n      Name is required (Minimum of 3 characters)\n    </small>\n    <input\n      type=\"text\"\n      name=\"newMovie.name\"\n      required\n      minlength=\"3\"\n      [(ngModel)]=\"newMovie.name\"\n      #name=\"ngModel\"\n    />\n    <label>Stars</label>\n    <small class=\"errors\" [hidden]=\"stars.valid || (stars.untouched && !form.submitted)\">\n      Must give a rating\n    </small>\n    <select\n      name=\"newMovie.stars\"\n      [(ngModel)]=\"newMovie.stars\"\n      #stars=\"ngModel\"\n    >\n      <option value=\"1\">1</option>\n      <option value=\"2\">2</option>\n      <option value=\"3\" selected>3</option>\n      <option value=\"4\">4</option>\n      <option value=\"5\">5</option>\n    </select>\n    <label>Your Review</label>\n    <small class=\"errors\" [hidden]=\"content.valid || (content.untouched && !form.submitted)\">\n      Review is required (Minimum of 3 characters)\n    </small>\n    <textarea\n      name=\"newMovie.content\"\n      required\n      minlength=\"3\"\n      [(ngModel)]=\"newMovie.content\"\n      #content=\"ngModel\"\n      cols=\"30\" \n      rows=\"10\"\n    ></textarea>\n    <div id=\"buttons\">\n      <button class=\"add\" type=\"submit\" name=\"submit\">Submit</button>\n      <button class=\"cancel\" [routerLink]=\"['/']\">Cancel</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/movie-new/movie-new.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var MovieNewComponent = /** @class */ (function () {
    function MovieNewComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.newMovie = {};
    }
    MovieNewComponent.prototype.ngOnInit = function () {
        this.newMovie = { title: '', reviews: [] };
        this.errors = { title: '', reviews: [] };
    };
    MovieNewComponent.prototype.onSubmitCreate = function (event) {
        var _this = this;
        event.preventDefault();
        var observable = this._httpService.createMovie(this.newMovie);
        observable.subscribe(function (res) {
            console.log('New movie:', res);
            _this._router.navigate(['/']);
        }, function (err) {
            _this.errors = err.error;
            console.log(_this.errors);
        });
    };
    MovieNewComponent = __decorate([
        core_1.Component({
            selector: 'app-movie-new',
            template: __webpack_require__("./src/app/movie-new/movie-new.component.html"),
            styles: [__webpack_require__("./src/app/movie-new/movie-new.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.Router])
    ], MovieNewComponent);
    return MovieNewComponent;
}());
exports.MovieNewComponent = MovieNewComponent;


/***/ }),

/***/ "./src/app/movie-review/movie-review.component.css":
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\n#wrapper {\r\n    width: 800 px;\r\n    font-family: 'Arial', Helvetica, sans-serif;\r\n    border: 1px solid black;\r\n}\r\n\r\ninput {\r\n    display: block;\r\n    border: 1px solid black;\r\n    margin: 5px 300px;\r\n}\r\n\r\nselect {\r\n    display: block;\r\n    border: 1px solid black;\r\n    border-radius: 5px;\r\n    width: 200px;\r\n    margin: 5px 300px;\r\n}\r\n\r\ntextarea {\r\n    display: block;\r\n    border: 1px solid black;\r\n    margin: 5px 300px;\r\n}\r\n\r\nlabel {\r\n    font-weight: bold;\r\n    margin: 300px;\r\n}\r\n\r\n.add {\r\n    margin: 10px 10px 10px 250px;\r\n    width: 150px;\r\n    height: 30px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    color: white;\r\n    background: -webkit-gradient(linear, left top, left bottom, from(#adc6de), to(#5f7789));\r\n    background: linear-gradient(#adc6de, #5f7789);\r\n}\r\n\r\n.cancel {\r\n    width: 150px;\r\n    height: 30px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    color: white;\r\n    background: -webkit-gradient(linear, left top, left bottom, from(#f1c395), to(#506169));\r\n    background: linear-gradient(#f1c395, #506169);\r\n}\r\n\r\nsmall {\r\n    color: red;\r\n}"

/***/ }),

/***/ "./src/app/movie-review/movie-review.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <h3>Add a review for {{ movie.title }}</h3>\n\n  <small *ngIf=\"errors.name\">\n    {{ errors.name.message }}\n  </small>\n\n  <small *ngIf=\"errors.stars\">\n    {{ errors.stars.message }}\n  </small>\n  \n  <small *ngIf=\"errors.content\">\n    {{ errors.content.message }}\n  </small>\n\n  <form (submit)=\"onSubmitCreate($event)\" #form=\"ngForm\">\n    <label>Your Name</label>\n    <small \n      class=\"errors\" \n      [hidden]=\"name.valid || (name.untouched && !form.submitted)\"\n    >\n      Name is required (Minimum of 3 characters)\n    </small>\n    <input \n      type=\"text\" \n      name=\"newReview.name\" \n      required minlength=\"3\" \n      [(ngModel)]=\"newReview.name\" \n      #name=\"ngModel\" \n    />\n    <label>Stars</label>\n    <small \n      class=\"errors\" \n      [hidden]=\"stars.valid || (stars.untouched && !form.submitted)\"\n    >\n      Must give a rating\n    </small>\n    <select \n      name=\"newReview.stars\" \n      [(ngModel)]=\"newReview.stars\" \n      #stars=\"ngModel\"\n    >\n      <option value=\"1\">1</option>\n      <option value=\"2\">2</option>\n      <option value=\"3\" selected>3</option>\n      <option value=\"4\">4</option>\n      <option value=\"5\">5</option>\n    </select>\n    <label>Your Review</label>\n    <small \n      class=\"errors\" \n      [hidden]=\"content.valid || (content.untouched && !form.submitted)\"\n    >\n      Review is required (Minimum of 3 characters)\n    </small>\n    <textarea \n      name=\"newReview.content\" \n      required minlength=\"3\" \n      [(ngModel)]=\"newReview.content\" \n      #content=\"ngModel\" \n      cols=\"30\" \n      rows=\"10\"\n    ></textarea>\n    <button class=\"add\" type=\"submit\" name=\"submit\">Submit</button>\n    <button class=\"cancel\" [routerLink]=\"['/']\">Cancel</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/movie-review/movie-review.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var MovieReviewComponent = /** @class */ (function () {
    function MovieReviewComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.movie = {};
        this.newReview = {};
    }
    MovieReviewComponent.prototype.ngOnInit = function () {
        this.newReview = { name: '', content: '' };
        this.errors = { name: '', content: '' };
        this.getMovie();
    };
    MovieReviewComponent.prototype.getMovie = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            var id = params['id'];
            var observable = _this._httpService.getOneMovie(id);
            observable.subscribe(function (data) {
                console.log(data);
                _this.movie = data;
            });
        });
    };
    MovieReviewComponent.prototype.onSubmitCreate = function (event) {
        var _this = this;
        event.preventDefault();
        var observable = this._httpService.createReview(this.movie);
        observable.subscribe(function (res) {
            console.log('New movie:', res);
            _this._router.navigate(['/']);
        }, function (err) {
            _this.errors = err.error;
            console.log(_this.errors);
        });
    };
    MovieReviewComponent = __decorate([
        core_1.Component({
            selector: 'app-movie-review',
            template: __webpack_require__("./src/app/movie-review/movie-review.component.html"),
            styles: [__webpack_require__("./src/app/movie-review/movie-review.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], MovieReviewComponent);
    return MovieReviewComponent;
}());
exports.MovieReviewComponent = MovieReviewComponent;


/***/ }),

/***/ "./src/app/movie-show/movie-show.component.css":
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\n#wrapper {\r\n    width: 800 px;\r\n    font-family: 'Arial', Helvetica, sans-serif;\r\n    border: 1px solid black;\r\n}\r\n\r\nbutton {\r\n    background-color: red;\r\n    width: 150px;\r\n    height: 40px;\r\n    color: white;\r\n    border: none;\r\n    border-radius: 5px;\r\n    margin-bottom: 5px;\r\n    margin-left: 10px;\r\n}\r\n\r\na {\r\n    margin-left: 500px;\r\n}\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    width: 90%;\r\n    margin: auto;\r\n    font-size: 20px;\r\n}\r\n\r\ntable, th, td {\r\n    border: 2px solid black;\r\n    padding: 5px;\r\n}\r\n\r\nth {\r\n    text-align: left;\r\n    color: white;\r\n    background-color: #c2c1c1;\r\n}\r\n\r\ntr:nth-child(even) {\r\n    background-color: #c2c1c1;\r\n}"

/***/ }),

/***/ "./src/app/movie-show/movie-show.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"header\">\n  <button (click)=\"deleteMovie(reviews._id)\">DELETE MOVIE</button>\n  <a [routerLink]=\"['/']\">Home</a>\n</div>\n<div id=\"wrapper\">\n  <div id=\"reviews\">\n    <h3>Reviews for {{ reviews.title }}</h3>\n\n    <table>\n      <thead>\n        <tr>\n          <th>Reviewer</th>\n          <th>Stars</th>\n          <th>Reviews</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let review of reviews['reviews']\">\n          <td>{{ review.name }}</td>\n          <td>{{ review.stars }}</td>\n          <td>{{ review.content }}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/movie-show/movie-show.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var MovieShowComponent = /** @class */ (function () {
    function MovieShowComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.reviews = {};
    }
    MovieShowComponent.prototype.ngOnInit = function () {
        this.getReviews();
    };
    MovieShowComponent.prototype.getReviews = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            var id = params['id'];
            var observable = _this._httpService.getOneMovie(id);
            observable.subscribe(function (data) {
                console.log(data['reviews']);
                _this.reviews = data;
            });
        });
    };
    MovieShowComponent.prototype.deleteMovie = function (id) {
        var _this = this;
        var observable = this._httpService.destroyMovie(id);
        observable.subscribe(function (res) {
            _this._router.navigate(['/']);
        });
    };
    MovieShowComponent = __decorate([
        core_1.Component({
            selector: 'app-movie-show',
            template: __webpack_require__("./src/app/movie-show/movie-show.component.html"),
            styles: [__webpack_require__("./src/app/movie-show/movie-show.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], MovieShowComponent);
    return MovieShowComponent;
}());
exports.MovieShowComponent = MovieShowComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map