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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Allergen/pop-up/pop-up.component.css":
/*!******************************************************!*\
  !*** ./src/app/Allergen/pop-up/pop-up.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.PopUpContainer{\r\n  z-index: 1000;\r\n  position: absolute;\r\n  min-height: 100vh;\r\n  min-width: 100vh;\r\n  background-color: rgba(246,246,246, .8);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n}\r\n#close{\r\n  font-size: 20px;\r\n  z-index: 69;\r\n  text-align: right;\r\n  margin: 6px 10px 0 0;\r\n}\r\n#close:hover{\r\n  cursor: pointer;\r\n}\r\n.Message{\r\n  background-color: #f9ce32;\r\n }\r\n.Sentence{\r\n  font-size: 30px;\r\n  margin: 70px;\r\n  text-decoration: underline;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWxsZXJnZW4vcG9wLXVwL3BvcC11cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix3Q0FBd0M7RUFDeEMsY0FBYztFQUNkLG9CQUFvQjtFQUNwQix3QkFBd0I7RUFDeEIsT0FBTztFQUNQLFNBQVM7RUFDVCxRQUFRO0NBQ1Q7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtDQUN0QjtBQUNEO0VBQ0UsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSwwQkFBMEI7RUFDMUI7QUFDRjtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsMkJBQTJCO0NBQzVCIiwiZmlsZSI6InNyYy9hcHAvQWxsZXJnZW4vcG9wLXVwL3BvcC11cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5Qb3BVcENvbnRhaW5lcntcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBtaW4td2lkdGg6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ2LDI0NiwyNDYsIC44KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuI2Nsb3Nle1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB6LWluZGV4OiA2OTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBtYXJnaW46IDZweCAxMHB4IDAgMDtcclxufVxyXG4jY2xvc2U6aG92ZXJ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5NZXNzYWdle1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWNlMzI7XHJcbiB9XHJcbi5TZW50ZW5jZXtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgbWFyZ2luOiA3MHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/Allergen/pop-up/pop-up.component.html":
/*!*******************************************************!*\
  !*** ./src/app/Allergen/pop-up/pop-up.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"PopUpContainer\" class=\"PopUpContainer\">\r\n  <div class=\"Message\">\r\n    <div id=\"close\" (click)=\"close()\">X</div>\r\n  <div class=\"Sentence\">It may contain chicken.</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Allergen/pop-up/pop-up.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Allergen/pop-up/pop-up.component.ts ***!
  \*****************************************************/
/*! exports provided: PopUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopUpComponent", function() { return PopUpComponent; });
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

var PopUpComponent = /** @class */ (function () {
    function PopUpComponent() {
    }
    PopUpComponent.prototype.ngOnInit = function () {
    };
    PopUpComponent.prototype.close = function () {
        var dropBTN = document.getElementById('PopUpWindow').style.display = 'none';
    };
    PopUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pop-up',
            template: __webpack_require__(/*! ./pop-up.component.html */ "./src/app/Allergen/pop-up/pop-up.component.html"),
            styles: [__webpack_require__(/*! ./pop-up.component.css */ "./src/app/Allergen/pop-up/pop-up.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PopUpComponent);
    return PopUpComponent;
}());



/***/ }),

/***/ "./src/app/Menues/add-menu/add-menu.component.css":
/*!********************************************************!*\
  !*** ./src/app/Menues/add-menu/add-menu.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-custom\r\n{\r\n  position: relative;\r\n  margin-top: 13px;\r\n  padding: 10px;\r\n  color: #fff;\r\n  border-radius: 4px;\r\n  background-color: #e13b2b;\r\n  bottom: -12px;\r\n  margin-left: 12px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTWVudWVzL2FkZC1tZW51L2FkZC1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLGtCQUFrQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL01lbnVlcy9hZGQtbWVudS9hZGQtbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1jdXN0b21cclxue1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wOiAxM3B4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMTNiMmI7XHJcbiAgYm90dG9tOiAtMTJweDtcclxuICBtYXJnaW4tbGVmdDogMTJweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/Menues/add-menu/add-menu.component.html":
/*!*********************************************************!*\
  !*** ./src/app/Menues/add-menu/add-menu.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"menuForm\" (ngSubmit)=\"save()\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-2 pl-4 mt-3\">\r\n        <label>\r\n          Name:\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"mainFoodName\">\r\n        </label>\r\n\r\n        <label>\r\n          Ingredients:\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"recipeLines\">\r\n        </label>\r\n\r\n        <label>\r\n          Allergens:\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"allergensTypeId\">\r\n        </label>\r\n\r\n        <label>\r\n          Icon:\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"foodIconId\">\r\n        </label>\r\n\r\n        <button class=\"btn-sucess btn-sm\" type=\"submit\">Save</button>\r\n        <button class=\"btn-dark btn-sm\" routerLink=\"/\">Back</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/Menues/add-menu/add-menu.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Menues/add-menu/add-menu.component.ts ***!
  \*******************************************************/
/*! exports provided: AddMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMenuComponent", function() { return AddMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_Service_main_food_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/Service/main-food.service */ "./src/app/shared/Service/main-food.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddMenuComponent = /** @class */ (function () {
    function AddMenuComponent(menuService) {
        this.menuService = menuService;
        this.menuForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            mainFoodName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            recipeLines: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            allergensTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            foodIconId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    AddMenuComponent.prototype.ngOnInit = function () {
    };
    AddMenuComponent.prototype.save = function () {
        var menu = this.menuForm.value;
        console.log(menu);
        this.menuService.addMainFood(menu)
            .subscribe(function () {
        });
    };
    AddMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-menu',
            template: __webpack_require__(/*! ./add-menu.component.html */ "./src/app/Menues/add-menu/add-menu.component.html"),
            styles: [__webpack_require__(/*! ./add-menu.component.css */ "./src/app/Menues/add-menu/add-menu.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_Service_main_food_service__WEBPACK_IMPORTED_MODULE_2__["MainFoodService"]])
    ], AddMenuComponent);
    return AddMenuComponent;
}());



/***/ }),

/***/ "./src/app/Shared/Service/speciel-offers.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/Shared/Service/speciel-offers.service.ts ***!
  \**********************************************************/
/*! exports provided: SpecielOffersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecielOffersService", function() { return SpecielOffersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpecielOffersService = /** @class */ (function () {
    function SpecielOffersService(http) {
        this.http = http;
        this.apiUrl = 'https://cantinaappdatabase.azurewebsites.net/api/SpecialOffers';
    }
    SpecielOffersService.prototype.getSpecielFood = function () {
        return this.http.get(this.apiUrl);
    };
    SpecielOffersService.prototype.addpecielOffers = function (specielOffers) {
        return this.http.post(this.apiUrl, specielOffers);
    };
    SpecielOffersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SpecielOffersService);
    return SpecielOffersService;
}());



/***/ }),

/***/ "./src/app/Workers/add-worker/add-worker.component.css":
/*!*************************************************************!*\
  !*** ./src/app/Workers/add-worker/add-worker.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form{\r\n  margin-top: 0.5%;\r\n}\r\nlabel{\r\n  font-size: 20px;\r\n  margin-right: 0.5%;\r\n}\r\nbutton{\r\n  font-size: 15px;\r\n  border-radius: 15%;\r\n}\r\nbutton:hover{\r\n  cursor: pointer;\r\n}\r\n#BackButton{\r\n  margin-top: 0.5%;\r\n}\r\n.btn-logout\r\n{\r\n  background-color: black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvV29ya2Vycy9hZGQtd29ya2VyL2FkZC13b3JrZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFFRDs7RUFFRSx3QkFBd0I7Q0FDekIiLCJmaWxlIjoic3JjL2FwcC9Xb3JrZXJzL2FkZC13b3JrZXIvYWRkLXdvcmtlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybXtcclxuICBtYXJnaW4tdG9wOiAwLjUlO1xyXG59XHJcbmxhYmVse1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNSU7XHJcbn1cclxuYnV0dG9ue1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAxNSU7XHJcbn1cclxuYnV0dG9uOmhvdmVye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4jQmFja0J1dHRvbntcclxuICBtYXJnaW4tdG9wOiAwLjUlO1xyXG59XHJcblxyXG4uYnRuLWxvZ291dFxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/Workers/add-worker/add-worker.component.html":
/*!**************************************************************!*\
  !*** ./src/app/Workers/add-worker/add-worker.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button id=\"BackButton\" routerLink=\"/adminview\">Back</button>\r\n<form [formGroup]=\"workerForm\" (ngSubmit)=\"addWorker()\">\r\n  <label>\r\n    Worker's Name\r\n    <input type=\"text\" formControlName=\"Name\">\r\n  </label>\r\n  <label>\r\n    Account\r\n    <input type=\"text\" formControlName=\"Account\">\r\n  </label>\r\n  <label>\r\n  Password\r\n  <input type=\"text\" formControlName=\"Password\">\r\n</label>\r\n  <button type=\"submit\">Save</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/Workers/add-worker/add-worker.component.ts":
/*!************************************************************!*\
  !*** ./src/app/Workers/add-worker/add-worker.component.ts ***!
  \************************************************************/
/*! exports provided: AddWorkerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddWorkerComponent", function() { return AddWorkerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_Service_worker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/Service/worker.service */ "./src/app/shared/Service/worker.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddWorkerComponent = /** @class */ (function () {
    function AddWorkerComponent(workerService, router) {
        this.workerService = workerService;
        this.router = router;
        this.workerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Account: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    AddWorkerComponent.prototype.ngOnInit = function () {
    };
    AddWorkerComponent.prototype.addWorker = function () {
        var worker = this.workerForm.value;
        this.workerService.addWorker(worker);
        this.workerForm.reset();
        this.router.navigateByUrl('/adminview');
    };
    AddWorkerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-worker',
            template: __webpack_require__(/*! ./add-worker.component.html */ "./src/app/Workers/add-worker/add-worker.component.html"),
            styles: [__webpack_require__(/*! ./add-worker.component.css */ "./src/app/Workers/add-worker/add-worker.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_Service_worker_service__WEBPACK_IMPORTED_MODULE_1__["WorkerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddWorkerComponent);
    return AddWorkerComponent;
}());



/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_Service_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/Service/authentication.service */ "./src/app/shared/Service/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.getToken()) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _shared_Service_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/add-motd/add-motd.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-motd/add-motd.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1tb3RkL2FkZC1tb3RkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/add-motd/add-motd.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-motd/add-motd.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  add-motd works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/add-motd/add-motd.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-motd/add-motd.component.ts ***!
  \************************************************/
/*! exports provided: AddMotdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMotdComponent", function() { return AddMotdComponent; });
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

var AddMotdComponent = /** @class */ (function () {
    function AddMotdComponent() {
    }
    AddMotdComponent.prototype.ngOnInit = function () {
    };
    AddMotdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-motd',
            template: __webpack_require__(/*! ./add-motd.component.html */ "./src/app/add-motd/add-motd.component.html"),
            styles: [__webpack_require__(/*! ./add-motd.component.css */ "./src/app/add-motd/add-motd.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddMotdComponent);
    return AddMotdComponent;
}());



/***/ }),

/***/ "./src/app/add-specieloffers/add-specieloffers.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/add-specieloffers/add-specieloffers.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1zcGVjaWVsb2ZmZXJzL2FkZC1zcGVjaWVsb2ZmZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/add-specieloffers/add-specieloffers.component.html":
/*!********************************************************************!*\
  !*** ./src/app/add-specieloffers/add-specieloffers.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"specielOfferForm\" (ngSubmit)=\"save()\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-2 pl-4 mt-3\">\r\n        <label>\r\n          Name:\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"specialOfferName\">\r\n        </label>\r\n\r\n        <label>\r\n          price:\r\n          <input type=\"number\" class=\"form-control\" type=\"text\" formControlName=\"price\">\r\n        </label>\r\n\r\n\r\n        <button class=\"btn-sucess btn-sm\" type=\"submit\">Save</button>\r\n        <button class=\"btn-dark btn-sm\" routerLink=\"/\">Back</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n\r\n"

/***/ }),

/***/ "./src/app/add-specieloffers/add-specieloffers.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/add-specieloffers/add-specieloffers.component.ts ***!
  \******************************************************************/
/*! exports provided: AddSpecieloffersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSpecieloffersComponent", function() { return AddSpecieloffersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Shared_Service_speciel_offers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Shared/Service/speciel-offers.service */ "./src/app/Shared/Service/speciel-offers.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddSpecieloffersComponent = /** @class */ (function () {
    function AddSpecieloffersComponent(specielOffersService, router) {
        this.specielOffersService = specielOffersService;
        this.router = router;
        this.specielOfferForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            specialOfferName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    AddSpecieloffersComponent.prototype.ngOnInit = function () {
    };
    AddSpecieloffersComponent.prototype.save = function () {
        var _this = this;
        // data static for now, later we add forms!! ;D
        var specielOffers = this.specielOfferForm.value;
        this.specielOffersService.addpecielOffers(specielOffers)
            .subscribe(function () {
            _this.router.navigateByUrl('/');
        });
    };
    AddSpecieloffersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-specieloffers',
            template: __webpack_require__(/*! ./add-specieloffers.component.html */ "./src/app/add-specieloffers/add-specieloffers.component.html"),
            styles: [__webpack_require__(/*! ./add-specieloffers.component.css */ "./src/app/add-specieloffers/add-specieloffers.component.css")]
        }),
        __metadata("design:paramtypes", [_Shared_Service_speciel_offers_service__WEBPACK_IMPORTED_MODULE_2__["SpecielOffersService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddSpecieloffersComponent);
    return AddSpecieloffersComponent;
}());



/***/ }),

/***/ "./src/app/admin-view/admin-view.component.css":
/*!*****************************************************!*\
  !*** ./src/app/admin-view/admin-view.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXZpZXcvYWRtaW4tdmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin-view/admin-view.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin-view/admin-view.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!doctype html>\r\n<html lang=\"en\">\r\n\r\n\r\n\r\n<head>\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\r\n  <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.5.0/css/all.css\" integrity=\"sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU\" crossorigin=\"anonymous\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n\r\n  <script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js\" integrity=\"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q\" crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\" integrity=\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\" crossorigin=\"anonymous\"></script>\r\n\r\n\r\n  <!-- FONTS -->\r\n  <link href=\"https://fonts.googleapis.com/css?family=Rancho\" rel=\"stylesheet\">\r\n  <link href=\"https://fonts.googleapis.com/css?family=Dancing+Script\" rel=\"stylesheet\">\r\n\r\n\r\n</head>\r\n\r\n\r\n\r\n<body>\r\n\r\n<div class=\"jumbotron\">\r\n  <div class=\"mainHeader\">\r\n    <p></p>\r\n  </div>\r\n  <div class=\"top\">\r\n    <ul>\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-4\">\r\n            <i class=\"fa fa-cutlery\" aria-hidden=\"true\"></i><h3>New Recipe</h3>\r\n            <div class=\"box clearfix\">\r\n\r\n              <button class=\"submit-click\" routerLink=\"/submit-food\" >Create new Recipe</button>\r\n\r\n\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <i class=\"fa fa-cutlery\" aria-hidden=\"true\"></i><h3>Pick Todays Menu</h3>\r\n            <div class=\"box clearfix\">\r\n\r\n              <button class=\"submit-click\" routerLink=\"/app-choose-main-page-items\"  type=\"submit\">Pick Todays menu</button>\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <i class=\"fa fa-cutlery\" aria-hidden=\"true\"></i> <h3></h3>\r\n            <div class=\"box clearfix\">\r\n              <h3></h3>\r\n\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ul>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n</body>\r\n\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/admin-view/admin-view.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin-view/admin-view.component.ts ***!
  \****************************************************/
/*! exports provided: AdminViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminViewComponent", function() { return AdminViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_Service_worker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/Service/worker.service */ "./src/app/shared/Service/worker.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminViewComponent = /** @class */ (function () {
    function AdminViewComponent(workerService) {
        this.workerService = workerService;
    }
    AdminViewComponent.prototype.ngOnInit = function () {
        this.workers = this.workerService.getWorkers();
    };
    AdminViewComponent.prototype.deleteWorker = function (id) {
        this.workerService.deleteWorker(id);
        this.ngOnInit();
    };
    AdminViewComponent.prototype.AddWorker = function () {
    };
    AdminViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-view',
            template: __webpack_require__(/*! ./admin-view.component.html */ "./src/app/admin-view/admin-view.component.html"),
            styles: [__webpack_require__(/*! ./admin-view.component.css */ "./src/app/admin-view/admin-view.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_Service_worker_service__WEBPACK_IMPORTED_MODULE_1__["WorkerService"]])
    ], AdminViewComponent);
    return AdminViewComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _Menues_add_menu_add_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menues/add-menu/add-menu.component */ "./src/app/Menues/add-menu/add-menu.component.ts");
/* harmony import */ var _Allergen_pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Allergen/pop-up/pop-up.component */ "./src/app/Allergen/pop-up/pop-up.component.ts");
/* harmony import */ var _admin_view_admin_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-view/admin-view.component */ "./src/app/admin-view/admin-view.component.ts");
/* harmony import */ var _Workers_add_worker_add_worker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Workers/add-worker/add-worker.component */ "./src/app/Workers/add-worker/add-worker.component.ts");
/* harmony import */ var _submit_food_submit_food_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./submit-food/submit-food.component */ "./src/app/submit-food/submit-food.component.ts");
/* harmony import */ var _choose_main_page_items_choose_main_page_items_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./choose-main-page-items/choose-main-page-items.component */ "./src/app/choose-main-page-items/choose-main-page-items.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _search_box_search_box_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search-box/search-box.component */ "./src/app/search-box/search-box.component.ts");
/* harmony import */ var _add_specieloffers_add_specieloffers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-specieloffers/add-specieloffers.component */ "./src/app/add-specieloffers/add-specieloffers.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_1__["WelcomeComponent"] },
    { path: 'menu-add', component: _Menues_add_menu_add_menu_component__WEBPACK_IMPORTED_MODULE_2__["AddMenuComponent"] },
    { path: 'adminview', component: _admin_view_admin_view_component__WEBPACK_IMPORTED_MODULE_4__["AdminViewComponent"] },
    { path: 'search', component: _search_box_search_box_component__WEBPACK_IMPORTED_MODULE_10__["SearchBoxComponent"] },
    { path: 'add-specielOffers', component: _add_specieloffers_add_specieloffers_component__WEBPACK_IMPORTED_MODULE_11__["AddSpecieloffersComponent"] },
    { path: 'adminview/addworker', component: _Workers_add_worker_add_worker_component__WEBPACK_IMPORTED_MODULE_5__["AddWorkerComponent"] },
    { path: 'allergen', component: _Allergen_pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_3__["PopUpComponent"] },
    { path: 'submit-food', component: _submit_food_submit_food_component__WEBPACK_IMPORTED_MODULE_6__["SubmitFoodComponent"] },
    { path: 'app-choose-main-page-items', component: _choose_main_page_items_choose_main_page_items_component__WEBPACK_IMPORTED_MODULE_7__["ChooseMainPageItemsComponent"] },
    { path: '**', redirectTo: '' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <app-nvbar></app-nvbar>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

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
        this.title = 'CantinaAngular';
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _nvbar_nvbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nvbar/nvbar.component */ "./src/app/nvbar/nvbar.component.ts");
/* harmony import */ var _Menues_add_menu_add_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Menues/add-menu/add-menu.component */ "./src/app/Menues/add-menu/add-menu.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _shared_Service_authentication_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/Service/authentication.service */ "./src/app/shared/Service/authentication.service.ts");
/* harmony import */ var _admin_view_admin_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin-view/admin-view.component */ "./src/app/admin-view/admin-view.component.ts");
/* harmony import */ var _Allergen_pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Allergen/pop-up/pop-up.component */ "./src/app/Allergen/pop-up/pop-up.component.ts");
/* harmony import */ var _shared_Service_worker_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/Service/worker.service */ "./src/app/shared/Service/worker.service.ts");
/* harmony import */ var _Workers_add_worker_add_worker_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Workers/add-worker/add-worker.component */ "./src/app/Workers/add-worker/add-worker.component.ts");
/* harmony import */ var _submit_food_submit_food_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./submit-food/submit-food.component */ "./src/app/submit-food/submit-food.component.ts");
/* harmony import */ var _choose_main_page_items_choose_main_page_items_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./choose-main-page-items/choose-main-page-items.component */ "./src/app/choose-main-page-items/choose-main-page-items.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _search_box_search_box_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./search-box/search-box.component */ "./src/app/search-box/search-box.component.ts");
/* harmony import */ var _add_motd_add_motd_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./add-motd/add-motd.component */ "./src/app/add-motd/add-motd.component.ts");
/* harmony import */ var _add_specieloffers_add_specieloffers_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./add-specieloffers/add-specieloffers.component */ "./src/app/add-specieloffers/add-specieloffers.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"],
                _nvbar_nvbar_component__WEBPACK_IMPORTED_MODULE_5__["NvbarComponent"],
                _Menues_add_menu_add_menu_component__WEBPACK_IMPORTED_MODULE_6__["AddMenuComponent"],
                _submit_food_submit_food_component__WEBPACK_IMPORTED_MODULE_15__["SubmitFoodComponent"],
                _choose_main_page_items_choose_main_page_items_component__WEBPACK_IMPORTED_MODULE_16__["ChooseMainPageItemsComponent"],
                _admin_view_admin_view_component__WEBPACK_IMPORTED_MODULE_11__["AdminViewComponent"],
                _Allergen_pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_12__["PopUpComponent"],
                _Workers_add_worker_add_worker_component__WEBPACK_IMPORTED_MODULE_14__["AddWorkerComponent"],
                _submit_food_submit_food_component__WEBPACK_IMPORTED_MODULE_15__["SubmitFoodComponent"],
                _search_box_search_box_component__WEBPACK_IMPORTED_MODULE_18__["SearchBoxComponent"],
                _add_motd_add_motd_component__WEBPACK_IMPORTED_MODULE_19__["AddMotdComponent"],
                _add_specieloffers_add_specieloffers_component__WEBPACK_IMPORTED_MODULE_20__["AddSpecieloffersComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatNativeDateModule"]
            ],
            providers: [
                _shared_Service_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"],
                _shared_Service_worker_service__WEBPACK_IMPORTED_MODULE_13__["WorkerService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/choose-main-page-items/choose-main-page-items.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/choose-main-page-items/choose-main-page-items.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-submit {\r\n  position: relative;\r\n  margin-top: 13px;\r\n  padding: 10px;\r\n  color: #fff;\r\n  border-radius: 4px;\r\n  background-color: #e13b2b;\r\n  bottom: -12px;\r\n  margin-left: 12px;\r\n  align-self: center;\r\n\r\n}\r\n\r\n.btn-newIng {\r\n  position: relative;\r\n  margin-top: 13px;\r\n  margin-bottom: 13px;\r\n  padding: 10px;\r\n  color: #fff;\r\n  border-radius: 4px;\r\n  background-color: black;\r\n  bottom: 0px;\r\n\r\n}\r\n\r\n.btn-IngFromList {\r\n  position: relative;\r\n  margin-top: 13px;\r\n  padding: 10px;\r\n  color: #fff;\r\n  border-radius: 4px;\r\n  background-color: black;\r\n  bottom: -12px;\r\n}\r\n\r\n.btn-custom\r\n{\r\n  position: relative;\r\n  margin-top: 13px;\r\n  padding: 10px;\r\n  color: #fff;\r\n  border-radius: 4px;\r\n  background-color: #e13b2b;\r\n  bottom: -12px;\r\n  margin-left: 12px;\r\n\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hvb3NlLW1haW4tcGFnZS1pdGVtcy9jaG9vc2UtbWFpbi1wYWdlLWl0ZW1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjs7Q0FFcEI7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsWUFBWTs7Q0FFYjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLGNBQWM7Q0FDZjs7QUFHRDs7RUFFRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2Qsa0JBQWtCOztDQUVuQiIsImZpbGUiOiJzcmMvYXBwL2Nob29zZS1tYWluLXBhZ2UtaXRlbXMvY2hvb3NlLW1haW4tcGFnZS1pdGVtcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1zdWJtaXQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wOiAxM3B4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMTNiMmI7XHJcbiAgYm90dG9tOiAtMTJweDtcclxuICBtYXJnaW4tbGVmdDogMTJweDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4uYnRuLW5ld0luZyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IDEzcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTNweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBib3R0b206IDBweDtcclxuXHJcbn1cclxuXHJcbi5idG4tSW5nRnJvbUxpc3Qge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wOiAxM3B4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGJvdHRvbTogLTEycHg7XHJcbn1cclxuXHJcblxyXG4uYnRuLWN1c3RvbVxyXG57XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IDEzcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxM2IyYjtcclxuICBib3R0b206IC0xMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG5cclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/choose-main-page-items/choose-main-page-items.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/choose-main-page-items/choose-main-page-items.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n  <meta charset=\"utf-8\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\r\n  <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.5.0/css/all.css\" integrity=\"sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU\" crossorigin=\"anonymous\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n\r\n  <script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js\" integrity=\"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q\" crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\" integrity=\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\" crossorigin=\"anonymous\"></script>\r\n\r\n\r\n\r\n</head>\r\n\r\n<body>\r\n\r\n\r\n\r\n\r\n<!-- Submit NewMainFood-->\r\n<div class=\"submit\">\r\n  <div class=\"title\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n          <h2>Submit Recipe</h2>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"content\">\r\n\r\n      <div class=\"row\" formGroup=\"dF1\">\r\n        <div class=\"container\" *ngIf=mainfoods>\r\n\r\n        <div class=\"col-lg-12\">\r\n\r\n          <div class=\"form-group\">\r\n            <label>Choose Daily Food 1</label>\r\n\r\n            <select class=\"js-search-category form-control\" name=\"category\" data-placeholder=\"Choose Category\"\r\n                    [(ngModel)]=\"selected1\">\r\n\r\n              <ng-container *ngFor=\"let main of mainfoods\">\r\n              <option [ngValue]=\"main\">{{main.mainFoodName}}</option>\r\n\r\n\r\n              </ng-container>\r\n            </select>\r\n        </div>\r\n        </div>\r\n\r\n          <div class=\"col-lg-12\">\r\n\r\n            <div class=\"form-group\">\r\n              <label>Choose Daily Food 2</label>\r\n              <select class=\"js-search-category form-control\" name=\"category\"\r\n                      data-placeholder=\"Choose Category\" [(ngModel)]=\"selected2\" >\r\n\r\n                <ng-container *ngFor=\"let main of mainfoods\">\r\n\r\n                  <option [ngValue]=\"main\">{{main.mainFoodName}}</option>\r\n\r\n\r\n                </ng-container>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"col-lg-12\">\r\n\r\n            <div class=\"form-group\">\r\n              <label>Choose Daily Food 3</label>\r\n              <select class=\"js-search-category form-control\" name=\"category\" data-placeholder=\"Choose Category\"\r\n                      [(ngModel)]=\"selected3\">\r\n\r\n                <ng-container *ngFor=\"let main of mainfoods\">\r\n\r\n                  <option [ngValue]=\"main\">{{main.mainFoodName}}</option>\r\n\r\n\r\n                </ng-container>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-lg-12\">\r\n\r\n            <div class=\"form-group\">\r\n              <label>Choose Tip of the day</label>\r\n              <select class=\"js-search-category form-control\" name=\"category\" data-placeholder=\"Choose Category\"\r\n                      [(ngModel)]=\"selected4\">\r\n\r\n                <ng-container *ngFor=\"let main of motd\">\r\n                  <option [ngValue]=\"main\">{{main.tipOfTheDay}}</option>\r\n\r\n                </ng-container>\r\n              </select>\r\n            </div>\r\n          </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n<button (click)=\"hey()\" type=\"submit\" class=\"btn btn-submit\">Submit Food</button>\r\n\r\n<button class=\"btn btn-custom\" routerLink=\"/adminview\">Back</button>\r\n\r\n</body>\r\n\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/choose-main-page-items/choose-main-page-items.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/choose-main-page-items/choose-main-page-items.component.ts ***!
  \****************************************************************************/
/*! exports provided: ChooseMainPageItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseMainPageItemsComponent", function() { return ChooseMainPageItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_Service_motd_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/Service/motd.service */ "./src/app/shared/Service/motd.service.ts");
/* harmony import */ var _shared_Service_main_food_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/Service/main-food.service */ "./src/app/shared/Service/main-food.service.ts");
/* harmony import */ var _shared_Service_speciel_offers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/Service/speciel-offers.service */ "./src/app/shared/Service/speciel-offers.service.ts");
/* harmony import */ var _shared_Service_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/Service/authentication.service */ "./src/app/shared/Service/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChooseMainPageItemsComponent = /** @class */ (function () {
    function ChooseMainPageItemsComponent(motdService, mainFoodService, specielOfferService, authenticationService) {
        this.motdService = motdService;
        this.mainFoodService = mainFoodService;
        this.specielOfferService = specielOfferService;
        this.authenticationService = authenticationService;
    }
    ChooseMainPageItemsComponent.prototype.ngOnInit = function () {
        this.authenticationService.logout();
        this.refresh();
    };
    ChooseMainPageItemsComponent.prototype.refresh = function () {
        var _this = this;
        this.mainFoodService.getMainFood().subscribe(function (listOfMenues) {
            _this.mainfoods = listOfMenues;
        });
        this.specielOfferService.getSpecielFood().subscribe(function (listOfOffers) {
            _this.specielOffers = listOfOffers;
        });
        this.motdService.getMOTDAll().subscribe(function (listOfMotd) {
            _this.motd = listOfMotd;
        });
    };
    ChooseMainPageItemsComponent.prototype.hey = function () {
    };
    ChooseMainPageItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-choose-main-page-items',
            template: __webpack_require__(/*! ./choose-main-page-items.component.html */ "./src/app/choose-main-page-items/choose-main-page-items.component.html"),
            styles: [__webpack_require__(/*! ./choose-main-page-items.component.css */ "./src/app/choose-main-page-items/choose-main-page-items.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_Service_motd_service__WEBPACK_IMPORTED_MODULE_1__["MotdService"], _shared_Service_main_food_service__WEBPACK_IMPORTED_MODULE_2__["MainFoodService"], _shared_Service_speciel_offers_service__WEBPACK_IMPORTED_MODULE_3__["SpecielOffersService"], _shared_Service_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], ChooseMainPageItemsComponent);
    return ChooseMainPageItemsComponent;
}());



/***/ }),

/***/ "./src/app/nvbar/nvbar.component.css":
/*!*******************************************!*\
  !*** ./src/app/nvbar/nvbar.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  top: 0;\r\n}\r\n\r\nli a, .dropbtn {\r\n  float: left;\r\n  display: inline-block;\r\n  color: white;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n\r\n}\r\n\r\nli a:hover, .dropdown:hover .dropbtn {\r\n}\r\n\r\n.dropbtn {\r\n  float: right;\r\n}\r\n\r\n.dropdown-content {\r\n  display: none;\r\n\r\n  position: absolute;\r\n  margin-left: 82%;\r\n  margin-top: 50px;\r\n  color: #fff;\r\n  min-width: 10%;\r\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n  z-index: 1;\r\n  align-self: center;\r\n\r\n\r\n\r\n}\r\n\r\n.sticky {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n}\r\n\r\n.dropdown-content a:hover {background-color: #fff}\r\n\r\n.navbar {\r\n  background-color: #fff;\r\n}\r\n\r\n.navbar-brand{\r\n  font-family: 'Dancing Script', Georgia, Times, serif;\r\n  font-size: 100%;\r\n  color: white;\r\n}\r\n\r\n.navbar .navbar-nav .btn-submit-recipe {\r\n  position: absolute;\r\n  right: 30px;\r\n  top: 0px;\r\n}\r\n\r\n.navbar .navbar-nav .btn-submit-recipe a {\r\n  margin-top: 13px;\r\n  padding: 10px;\r\n  color: #fff;\r\n  border-radius: 4px;\r\n  background-color: #e13b2b;\r\n}\r\n\r\n.navbar .navbar-nav .btn-submit-recipe a i {\r\n  margin-right: 5px;\r\n  margin-bottom: -5px;\r\n}\r\n\r\n.navbar .navbar-nav .btn-submit-recipe a:hover {\r\n  -webkit-text-decoration-color: #e13b2b;\r\n          text-decoration-color: #e13b2b;\r\n}\r\n\r\n.btn-submit-recipe{\r\n  background-color: #e13b2b;\r\n}\r\n\r\nh4\r\n{\r\n  position: relative;\r\n  top: -10px;\r\n  margin-bottom: -10px;\r\n  margin-top: -15px;\r\n  color: #e13b2b;\r\n  font-size: 20px;\r\n  font-family: 'Dancing Script', Georgia, Times, serif;\r\n\r\n}\r\n\r\n.nav-link\r\n{\r\n  position: center;\r\n  align-self: center;\r\n}\r\n\r\n.nav-item\r\n{\r\n position: center;\r\n}\r\n\r\n/* Full-width input fields */\r\n\r\ninput[type=text], input[type=password] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Set a style for all buttons */\r\n\r\nbutton {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 100%;\r\n}\r\n\r\nbutton:hover {\r\n  opacity: 0.8;\r\n}\r\n\r\n/* Extra styles for the cancel button */\r\n\r\n.cancelbtn {\r\n  width: auto;\r\n  padding: 10px 18px;\r\n  background-color: #f44336;\r\n}\r\n\r\n/* Center the image and position the close button */\r\n\r\n.imgcontainer {\r\n  text-align: center;\r\n  margin: 24px 0 12px 0;\r\n  position: relative;\r\n}\r\n\r\nimg.avatar {\r\n  width: 40%;\r\n  border-radius: 50%;\r\n}\r\n\r\n.container {\r\n  padding: 16px;\r\n}\r\n\r\nspan.psw {\r\n  float: right;\r\n  padding-top: 16px;\r\n}\r\n\r\n/* The Modal (background) */\r\n\r\n.modal {\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 1; /* Sit on top */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n  padding-top: 60px;\r\n}\r\n\r\n/* Modal Content/Box */\r\n\r\n.modal-content {\r\n  background-color: #fefefe;\r\n  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\r\n  border: 1px solid #888;\r\n  width: 20%; /* Could be more or less, depending on screen size */\r\n}\r\n\r\n/* The Close Button (x) */\r\n\r\n.close {\r\n  position: absolute;\r\n  right: 25px;\r\n  top: 0;\r\n  color: #000;\r\n  font-size: 35px;\r\n  font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n  color: red;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Add Zoom Animation */\r\n\r\n.animate {\r\n  -webkit-animation: animatezoom 0.6s;\r\n  animation: animatezoom 0.6s\r\n}\r\n\r\n@-webkit-keyframes animatezoom {\r\n  from {-webkit-transform: scale(0)}\r\n  to {-webkit-transform: scale(1)}\r\n}\r\n\r\n@keyframes animatezoom {\r\n  from {-webkit-transform: scale(0);transform: scale(0)}\r\n  to {-webkit-transform: scale(1);transform: scale(1)}\r\n}\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n\r\n@media screen and (max-width: 300px) {\r\n  span.psw {\r\n    display: block;\r\n    float: none;\r\n  }\r\n  .cancelbtn {\r\n    width: 100%;\r\n\r\n  }\r\n}\r\n\r\n.btn-logout\r\n{\r\n  background-color: black;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbnZiYXIvbnZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixPQUFPO0NBQ1I7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHNCQUFzQjs7Q0FFdkI7O0FBRUQ7Q0FDQzs7QUFFRDtFQUNFLGFBQWE7Q0FDZDs7QUFHRDtFQUNFLGNBQWM7O0VBRWQsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWU7RUFDZiw2Q0FBNkM7RUFDN0MsV0FBVztFQUNYLG1CQUFtQjs7OztDQUlwQjs7QUFDRDtFQUNFLHlCQUFpQjtFQUFqQixpQkFBaUI7Q0FDbEI7O0FBRUQsMkJBQTJCLHNCQUFzQixDQUFDOztBQUVsRDtFQUNFLHVCQUF1QjtDQUN4Qjs7QUFHRDtFQUNFLHFEQUFxRDtFQUNyRCxnQkFBZ0I7RUFDaEIsYUFBYTtDQUNkOztBQUdEO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixTQUFTO0NBQ1Y7O0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsMEJBQTBCO0NBQzNCOztBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtDQUNyQjs7QUFDRDtFQUNFLHVDQUErQjtVQUEvQiwrQkFBK0I7Q0FDaEM7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0I7O0FBRUQ7O0VBRUUsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscURBQXFEOztDQUV0RDs7QUFFRDs7RUFFRSxpQkFBaUI7RUFDakIsbUJBQW1CO0NBQ3BCOztBQUVEOztDQUVDLGlCQUFpQjtDQUNqQjs7QUFJRCw2QkFBNkI7O0FBQzdCO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qix1QkFBdUI7Q0FDeEI7O0FBRUQsaUNBQWlDOztBQUNqQztFQUNFLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLGFBQWE7Q0FDZDs7QUFFRCx3Q0FBd0M7O0FBQ3hDO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiwwQkFBMEI7Q0FDM0I7O0FBRUQsb0RBQW9EOztBQUNwRDtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLGFBQWE7RUFDYixrQkFBa0I7Q0FDbkI7O0FBRUQsNEJBQTRCOztBQUM1QjtFQUNFLGNBQWMsQ0FBQyx1QkFBdUI7RUFDdEMsZ0JBQWdCLENBQUMsbUJBQW1CO0VBQ3BDLFdBQVcsQ0FBQyxnQkFBZ0I7RUFDNUIsUUFBUTtFQUNSLE9BQU87RUFDUCxZQUFZLENBQUMsZ0JBQWdCO0VBQzdCLGFBQWEsQ0FBQyxpQkFBaUI7RUFDL0IsZUFBZSxDQUFDLDZCQUE2QjtFQUM3Qyw2QkFBNkIsQ0FBQyxvQkFBb0I7RUFDbEQsa0NBQWtDLENBQUMsc0JBQXNCO0VBQ3pELGtCQUFrQjtDQUNuQjs7QUFFRCx1QkFBdUI7O0FBQ3ZCO0VBQ0UsMEJBQTBCO0VBQzFCLHlCQUF5QixDQUFDLHVEQUF1RDtFQUNqRix1QkFBdUI7RUFDdkIsV0FBVyxDQUFDLHFEQUFxRDtDQUNsRTs7QUFFRCwwQkFBMEI7O0FBQzFCO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixPQUFPO0VBQ1AsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7Q0FDbkI7O0FBRUQ7O0VBRUUsV0FBVztFQUNYLGdCQUFnQjtDQUNqQjs7QUFFRCx3QkFBd0I7O0FBQ3hCO0VBQ0Usb0NBQW9DO0VBQ3BDLDJCQUEyQjtDQUM1Qjs7QUFFRDtFQUNFLE1BQU0sMkJBQTJCLENBQUM7RUFDbEMsSUFBSSwyQkFBMkIsQ0FBQztDQUNqQzs7QUFFRDtFQUNFLE1BQU0sNEJBQW1CLEFBQW5CLG1CQUFtQixDQUFDO0VBQzFCLElBQUksNEJBQW1CLEFBQW5CLG1CQUFtQixDQUFDO0NBQ3pCOztBQUVELHFFQUFxRTs7QUFDckU7RUFDRTtJQUNFLGVBQWU7SUFDZixZQUFZO0dBQ2I7RUFDRDtJQUNFLFlBQVk7O0dBRWI7Q0FDRjs7QUFFRDs7RUFFRSx3QkFBd0I7Q0FDekIiLCJmaWxlIjoic3JjL2FwcC9udmJhci9udmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRvcDogMDtcclxufVxyXG5cclxubGkgYSwgLmRyb3BidG4ge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG59XHJcblxyXG5saSBhOmhvdmVyLCAuZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge1xyXG59XHJcblxyXG4uZHJvcGJ0biB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tbGVmdDogODIlO1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWluLXdpZHRoOiAxMCU7XHJcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgei1pbmRleDogMTtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcblxyXG5cclxuXHJcbn1cclxuLnN0aWNreSB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2ZmZn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcblxyXG4ubmF2YmFyLWJyYW5ke1xyXG4gIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBHZW9yZ2lhLCBUaW1lcywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMDAlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbi5uYXZiYXIgLm5hdmJhci1uYXYgLmJ0bi1zdWJtaXQtcmVjaXBlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDMwcHg7XHJcbiAgdG9wOiAwcHg7XHJcbn1cclxuLm5hdmJhciAubmF2YmFyLW5hdiAuYnRuLXN1Ym1pdC1yZWNpcGUgYSB7XHJcbiAgbWFyZ2luLXRvcDogMTNweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTEzYjJiO1xyXG59XHJcbi5uYXZiYXIgLm5hdmJhci1uYXYgLmJ0bi1zdWJtaXQtcmVjaXBlIGEgaSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTVweDtcclxufVxyXG4ubmF2YmFyIC5uYXZiYXItbmF2IC5idG4tc3VibWl0LXJlY2lwZSBhOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICNlMTNiMmI7XHJcbn1cclxuXHJcbi5idG4tc3VibWl0LXJlY2lwZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTEzYjJiO1xyXG59XHJcblxyXG5oNFxyXG57XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgY29sb3I6ICNlMTNiMmI7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBHZW9yZ2lhLCBUaW1lcywgc2VyaWY7XHJcblxyXG59XHJcblxyXG4ubmF2LWxpbmtcclxue1xyXG4gIHBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4ubmF2LWl0ZW1cclxue1xyXG4gcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG4vKiBGdWxsLXdpZHRoIGlucHV0IGZpZWxkcyAqL1xyXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLyogU2V0IGEgc3R5bGUgZm9yIGFsbCBidXR0b25zICovXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi8qIEV4dHJhIHN0eWxlcyBmb3IgdGhlIGNhbmNlbCBidXR0b24gKi9cclxuLmNhbmNlbGJ0biB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgcGFkZGluZzogMTBweCAxOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XHJcbn1cclxuXHJcbi8qIENlbnRlciB0aGUgaW1hZ2UgYW5kIHBvc2l0aW9uIHRoZSBjbG9zZSBidXR0b24gKi9cclxuLmltZ2NvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMjRweCAwIDEycHggMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbmltZy5hdmF0YXIge1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG5zcGFuLnBzdyB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xyXG59XHJcblxyXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXHJcbi5tb2RhbCB7XHJcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cclxuICBwYWRkaW5nLXRvcDogNjBweDtcclxufVxyXG5cclxuLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgbWFyZ2luOiA1JSBhdXRvIDE1JSBhdXRvOyAvKiA1JSBmcm9tIHRoZSB0b3AsIDE1JSBmcm9tIHRoZSBib3R0b20gYW5kIGNlbnRlcmVkICovXHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICB3aWR0aDogMjAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xyXG59XHJcblxyXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICh4KSAqL1xyXG4uY2xvc2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMjVweDtcclxuICB0b3A6IDA7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY2xvc2U6aG92ZXIsXHJcbi5jbG9zZTpmb2N1cyB7XHJcbiAgY29sb3I6IHJlZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIEFkZCBab29tIEFuaW1hdGlvbiAqL1xyXG4uYW5pbWF0ZSB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGFuaW1hdGV6b29tIDAuNnM7XHJcbiAgYW5pbWF0aW9uOiBhbmltYXRlem9vbSAwLjZzXHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlem9vbSB7XHJcbiAgZnJvbSB7LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApfVxyXG4gIHRvIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSl9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYW5pbWF0ZXpvb20ge1xyXG4gIGZyb20ge3RyYW5zZm9ybTogc2NhbGUoMCl9XHJcbiAgdG8ge3RyYW5zZm9ybTogc2NhbGUoMSl9XHJcbn1cclxuXHJcbi8qIENoYW5nZSBzdHlsZXMgZm9yIHNwYW4gYW5kIGNhbmNlbCBidXR0b24gb24gZXh0cmEgc21hbGwgc2NyZWVucyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xyXG4gIHNwYW4ucHN3IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgfVxyXG4gIC5jYW5jZWxidG4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIH1cclxufVxyXG5cclxuLmJ0bi1sb2dvdXRcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/nvbar/nvbar.component.html":
/*!********************************************!*\
  !*** ./src/app/nvbar/nvbar.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\r\n  <link href=\"https://fonts.googleapis.com/css?family=Dancing+Script\" rel=\"stylesheet\">\r\n\r\n</head>\r\n\r\n\r\n\r\n<body>\r\n\r\n<div id=\"id01\" class=\"modal\">\r\n\r\n  <form class=\"modal-content animate\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n\r\n    <div class=\"container\">\r\n      <label><b>Username</b></label>\r\n      <input type=\"text\" placeholder=\"Enter Username\" formControlName=\"username\" required>\r\n      <div *ngIf=\"username.invalid && submitted\" class=\"alert-danger\">\r\n      <div *ngIf=\"username.errors.required\">Username is required</div>\r\n    </div>\r\n\r\n      <label><b>Password</b></label>\r\n      <input type=\"password\" placeholder=\"Enter Password\" formControlName=\"password\" required>\r\n      <div *ngIf=\"password.invalid && submitted\" class=\"alert-danger\">\r\n        <div *ngIf=\"password.errors.required\">Username is required</div>\r\n      </div>\r\n\r\n      <button class=\"submit-click\">Login</button>\r\n      <label>\r\n        <input type=\"checkbox\" checked=\"checked\" name=\"remember\"> Remember me\r\n      </label>\r\n    </div>\r\n\r\n    <div class=\"container\" style=\"background-color:#f1f1f1\">\r\n      <button type=\"button\" onclick=\"document.getElementById('id01').style.display='none'\" class=\"cancelbtn\">Cancel</button>\r\n      <span class=\"psw\">Forgot <a href=\"#\">password?</a></span>\r\n    </div>\r\n    <div *ngIf=\"errormessage\" class=\"alert-danger\">{{errormessage}}</div>\r\n  </form>\r\n\r\n</div>\r\n\r\n\r\n<script>\r\n  // Get the modal\r\n  var modal = document.getElementById('id01');\r\n\r\n  // When the user clicks anywhere outside of the modal, close it\r\n  window.onclick = function(event) {\r\n    if (event.target == modal) {\r\n      modal.style.display = \"none\";\r\n    }\r\n\r\n\r\n  }\r\n</script>\r\n\r\n\r\n<nav class=\"navbar navbar-expand-lg navbar-light fixed-top\">\r\n  <div class=\"container-fluid justify-content-center\">\r\n    <a class=\"navbar-brand\" href=\"index.html\"><i class=\"fa fa-cutlery\" aria-hidden=\"true\"></i><h4> Erhvervsakademi <br>Healthy Café </h4></a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse justify-content-center\" id=\"navbarNavDropdown\">\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"index.html\">Home</a>\r\n        </li>\r\n\r\n\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            Recipes\r\n          </a>\r\n          <div class=\"dropdown-menu\">\r\n            <a class=\"dropdown-item\" href=\"browse-recipes.html\">Browse Food</a>\r\n            <a class=\"dropdown-item\" href=\"recipe-detail.html\">Recipe Detail</a>\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle\" href=\"#\"  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            About Us\r\n          </a>\r\n          <div class=\"dropdown-menu\">\r\n            <a class=\"dropdown-item\" href=\"typography.html\">Typography</a>\r\n            <a class=\"dropdown-item\" href=\"contact.html\">Contact</a>\r\n          </div>\r\n        </li>\r\n        <li class=\"btn btn-logout\"  *ngIf=\"usernames\"><div><a  [routerLink]=\"['']\">logout {{usernames}}</a></div></li>\r\n        <li class=\"nav-item btn-submit-recipe\">\r\n          <button class=\"fa fa-upload\" class=\"btn btn-submit-recipe\" onclick=\"document.getElementById('id01').style.display='block'\" style=\"width:auto;\">Login</button>        </li>\r\n\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/nvbar/nvbar.component.ts":
/*!******************************************!*\
  !*** ./src/app/nvbar/nvbar.component.ts ***!
  \******************************************/
/*! exports provided: NvbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NvbarComponent", function() { return NvbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_Service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/Service/authentication.service */ "./src/app/shared/Service/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NvbarComponent = /** @class */ (function () {
    function NvbarComponent(formBuilder, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.submitted = false;
        this.loading = false;
        this.errormessage = '';
        this.usernames = authenticationService.getUsername();
    }
    NvbarComponent.prototype.ngOnInit = function () {
        var navbar = document.getElementById('navbar');
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    NvbarComponent.prototype.dropContentFunction = function () {
        if (document.getElementById('dropbtn').style.display == '') {
            var dropBTN = document.getElementById('dropbtn').style.display = 'block';
        }
        else {
            var dropBTN = document.getElementById('dropbtn').style.display = '';
        }
    };
    NvbarComponent.prototype.Scroll = function () {
        window.scrollTo({
            top: document.getElementById('MenuList').offsetTop,
            left: document.getElementById('MenuList').offsetLeft,
            behavior: 'smooth'
        });
    };
    NvbarComponent.prototype.Scroll2 = function () {
        window.scrollTo({
            top: document.getElementById('OfferList').offsetTop,
            left: document.getElementById('OfferList').offsetLeft,
            behavior: 'smooth'
        });
    };
    NvbarComponent.prototype.Scroll3 = function () {
        window.scrollTo({
            top: 0,
            left: 1,
            behavior: 'smooth'
        });
    };
    Object.defineProperty(NvbarComponent.prototype, "username", {
        get: function () { return this.loginForm.get('username'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NvbarComponent.prototype, "password", {
        get: function () { return this.loginForm.get('password'); },
        enumerable: true,
        configurable: true
    });
    NvbarComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.username.value, this.password.value)
            .subscribe(function (success) {
            _this.router.navigate(['adminview']);
            document.getElementById('id01').style.display = 'none';
        }, function (error) {
            _this.errormessage = error.message;
            _this.loading = false;
        });
    };
    NvbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nvbar',
            template: __webpack_require__(/*! ./nvbar.component.html */ "./src/app/nvbar/nvbar.component.html"),
            styles: [__webpack_require__(/*! ./nvbar.component.css */ "./src/app/nvbar/nvbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_Service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], NvbarComponent);
    return NvbarComponent;
}());



/***/ }),

/***/ "./src/app/search-box/search-box.component.css":
/*!*****************************************************!*\
  !*** ./src/app/search-box/search-box.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/search-box/search-box.component.html":
/*!******************************************************!*\
  !*** ./src/app/search-box/search-box.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\r\n  <mat-form-field class=\"example-full-width\">\r\n   <input type=\"text\" placeholder=\"Search Ingredients\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\" />\r\n   <mat-autocomplete #auto=\"matAutocomplete\">\r\n      <mat-option *ngFor=\"let ingredient of ingredients\" [value]=\"option\">\r\n        {{ingredient.ingredientName}}\r\n      </mat-option>\r\n    </mat-autocomplete>\r\n  </mat-form-field>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/search-box/search-box.component.ts":
/*!****************************************************!*\
  !*** ./src/app/search-box/search-box.component.ts ***!
  \****************************************************/
/*! exports provided: SearchBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBoxComponent", function() { return SearchBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_Service_ingredient_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/Service/ingredient.service */ "./src/app/shared/Service/ingredient.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchBoxComponent = /** @class */ (function () {
    function SearchBoxComponent(ingredientService) {
        this.ingredientService = ingredientService;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
    }
    SearchBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ingredientService.getIngredients().subscribe(function (ingList) {
            _this.ingredients = ingList;
        });
    };
    SearchBoxComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.ingredients.filter(function (option) { return option.ingredientName.toLowerCase().includes(filterValue); });
    };
    SearchBoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-box',
            template: __webpack_require__(/*! ./search-box.component.html */ "./src/app/search-box/search-box.component.html"),
            styles: [__webpack_require__(/*! ./search-box.component.css */ "./src/app/search-box/search-box.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_Service_ingredient_service__WEBPACK_IMPORTED_MODULE_1__["IngredientService"]])
    ], SearchBoxComponent);
    return SearchBoxComponent;
}());



/***/ }),

/***/ "./src/app/shared/Service/authentication.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/Service/authentication.service.ts ***!
  \**********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.loginUrl = String('https://cantinaappdatabase.azurewebsites.net/api/authentication');
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post(this.loginUrl, { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            var token = response.token;
            // login successful if there's a jwt token in the response
            if (token) {
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        }));
    };
    AuthenticationService.prototype.getToken = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        return currentUser && currentUser.token;
    };
    AuthenticationService.prototype.getUsername = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        return currentUser && currentUser.username;
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/shared/Service/ingredient.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/Service/ingredient.service.ts ***!
  \******************************************************/
/*! exports provided: IngredientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientService", function() { return IngredientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IngredientService = /** @class */ (function () {
    function IngredientService(http) {
        this.http = http;
        this.id = 0;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'api/ingredients';
    }
    IngredientService.prototype.getIngredients = function () {
        return this.http.get(this.apiUrl);
    };
    IngredientService.prototype.addIngredient = function (ingredients) {
        ingredients.id = this.id++;
        this.ingredients.push(ingredients);
    };
    IngredientService.prototype.upgradeIngredient = function (ingredient) {
        var ingToUpdate = this.ingredients.find(function (ing) { return ing.id === ingredient.id; });
        var index = this.ingredients.indexOf(ingToUpdate);
        this.ingredients[index] = ingredient;
    };
    IngredientService.prototype.deleteIngredient = function (id) {
        this.ingredients = this.ingredients.filter(function (ing) { return ing.id !== id; });
    };
    IngredientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], IngredientService);
    return IngredientService;
}());



/***/ }),

/***/ "./src/app/shared/Service/main-food.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/Service/main-food.service.ts ***!
  \*****************************************************/
/*! exports provided: MainFoodService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainFoodService", function() { return MainFoodService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainFoodService = /** @class */ (function () {
    function MainFoodService(http) {
        this.http = http;
        this.apiUrl = 'https://cantinaappdatabase.azurewebsites.net/api/mainFood';
    }
    MainFoodService.prototype.getMainFood = function () {
        return this.http.get(this.apiUrl);
    };
    MainFoodService.prototype.chooseDailyFood = function (dailyFood) {
        // @ts-ignore
        this.dailyFoodList().push(dailyFood);
    };
    MainFoodService.prototype.addMainFood = function (mainFood) {
        return this.http.post(this.apiUrl, mainFood);
    }; /*
    upgradeMainFood(mainFood:MainFood){
      const foodToUpdate = this.mainFood.find(mf => mf.id === mainFood.id);
      const index = this.mainFood.indexOf(foodToUpdate);
      this.mainFood[index] = mainFood;
    }
    deleteMainFood(id: number) {
      this.mainFood = this.mainFood.filter(mf => mf.id !== id);
    }*/
    MainFoodService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MainFoodService);
    return MainFoodService;
}());



/***/ }),

/***/ "./src/app/shared/Service/motd.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/Service/motd.service.ts ***!
  \************************************************/
/*! exports provided: MotdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotdService", function() { return MotdService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MotdService = /** @class */ (function () {
    function MotdService(http) {
        this.http = http;
        this.apiUrl = 'https://cantinaappdatabase.azurewebsites.net/api/motd';
    }
    MotdService.prototype.getMOTDById = function (id) {
        return this.http.get(this.apiUrl + '/' + id);
    };
    MotdService.prototype.getMOTDAll = function () {
        return this.http.get(this.apiUrl);
    };
    MotdService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MotdService);
    return MotdService;
}());



/***/ }),

/***/ "./src/app/shared/Service/speciel-offers.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/Service/speciel-offers.service.ts ***!
  \**********************************************************/
/*! exports provided: SpecielOffersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecielOffersService", function() { return SpecielOffersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpecielOffersService = /** @class */ (function () {
    function SpecielOffersService(http) {
        this.http = http;
        this.apiUrl = 'https://cantinaappdatabase.azurewebsites.net/api/SpecialOffers';
    }
    SpecielOffersService.prototype.getSpecielFood = function () {
        return this.http.get(this.apiUrl);
    };
    SpecielOffersService.prototype.addpecielOffers = function (specielOffers) {
        return this.http.post(this.apiUrl, specielOffers);
    };
    SpecielOffersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SpecielOffersService);
    return SpecielOffersService;
}());



/***/ }),

/***/ "./src/app/shared/Service/worker.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/Service/worker.service.ts ***!
  \**************************************************/
/*! exports provided: WorkerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerService", function() { return WorkerService; });
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

var WorkerService = /** @class */ (function () {
    function WorkerService() {
        this.id = 0;
        this.workers = [
            { id: this.id++, Name: 'NoName', Account: 'Worker501', Password: 'EXECUTEORDER66' },
            { id: this.id++, Name: 'NoName', Account: 'Worker501', Password: 'EXECUTEORDER66' },
            { id: this.id++, Name: 'NoName', Account: 'Worker501', Password: 'EXECUTEORDER66' },
            { id: this.id++, Name: 'NoName', Account: 'Worker501', Password: 'EXECUTEORDER66' },
            { id: this.id++, Name: 'NoName', Account: 'Worker501', Password: 'EXECUTEORDER66' },
            { id: this.id++, Name: 'NoName', Account: 'Worker501', Password: 'EXECUTEORDER66' },
            { id: this.id++, Name: 'NoName', Account: 'Worker501', Password: 'EXECUTEORDER66' },
            { id: this.id++, Name: 'NoName', Account: 'Worker501', Password: 'EXECUTEORDER66' },
            { id: this.id++, Name: 'NoName', Account: 'Worker501', Password: 'EXECUTEORDER66' },
            { id: this.id++, Name: 'NoName', Account: 'Worker501', Password: 'EXECUTEORDER66' },
            { id: this.id++, Name: 'NoName', Account: 'Worker501', Password: 'EXECUTEORDER66' },
            { id: this.id++, Name: 'NoName', Account: 'Worker501', Password: 'EXECUTEORDER66' },
            { id: this.id++, Name: 'NoName', Account: 'Worker501', Password: 'EXECUTEORDER66' },
            { id: this.id++, Name: 'NoName', Account: 'Worker501', Password: 'EXECUTEORDER66' },
            { id: this.id++, Name: 'NoName', Account: 'Worker501', Password: 'EXECUTEORDER66' },
            { id: this.id++, Name: 'NoName', Account: 'Worker501', Password: 'EXECUTEORDER66' },
            { id: this.id++, Name: 'YesName', Account: 'Worker502', Password: '12345asdfSafe' }
        ];
    }
    WorkerService.prototype.getWorkers = function () {
        return this.workers;
    };
    WorkerService.prototype.addWorker = function (worker) {
        worker.id = this.id++;
        this.workers.push(worker);
    };
    WorkerService.prototype.deleteWorker = function (id) {
        this.workers = this.workers.filter(function (work) { return work.id !== id; });
    };
    WorkerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], WorkerService);
    return WorkerService;
}());



/***/ }),

/***/ "./src/app/submit-food/submit-food.component.css":
/*!*******************************************************!*\
  !*** ./src/app/submit-food/submit-food.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-submit {\r\n  position: relative;\r\n  margin-top: 13px;\r\n  padding: 10px;\r\n  color: #fff;\r\n  border-radius: 4px;\r\n  background-color: #e13b2b;\r\n  bottom: -12px;\r\n\r\n}\r\n\r\n.btn-newIng {\r\n  position: relative;\r\n  margin-top: 13px;\r\n  margin-bottom: 13px;\r\n  padding: 10px;\r\n  color: #fff;\r\n  border-radius: 4px;\r\n  background-color: black;\r\n  bottom: 0px;\r\n\r\n}\r\n\r\n.btn-IngFromList\r\n{\r\n  position: relative;\r\n  margin-top: 13px;\r\n  padding: 10px;\r\n  color: #fff;\r\n  border-radius: 4px;\r\n  background-color: black;\r\n  bottom: -12px;\r\n\r\n\r\n}\r\n\r\n.btn-custom\r\n{\r\n  position: relative;\r\n  margin-top: 13px;\r\n  padding: 10px;\r\n  color: #fff;\r\n  border-radius: 4px;\r\n  background-color: #e13b2b;\r\n  bottom: -12px;\r\n  margin-left: 12px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VibWl0LWZvb2Qvc3VibWl0LWZvb2QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLGNBQWM7O0NBRWY7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsWUFBWTs7Q0FFYjs7QUFFRDs7RUFFRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixjQUFjOzs7Q0FHZjs7QUFFRDs7RUFFRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2Qsa0JBQWtCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvc3VibWl0LWZvb2Qvc3VibWl0LWZvb2QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tc3VibWl0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogMTNweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTEzYjJiO1xyXG4gIGJvdHRvbTogLTEycHg7XHJcblxyXG59XHJcblxyXG4uYnRuLW5ld0luZyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IDEzcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTNweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBib3R0b206IDBweDtcclxuXHJcbn1cclxuXHJcbi5idG4tSW5nRnJvbUxpc3Rcclxue1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wOiAxM3B4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGJvdHRvbTogLTEycHg7XHJcblxyXG5cclxufVxyXG5cclxuLmJ0bi1jdXN0b21cclxue1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wOiAxM3B4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMTNiMmI7XHJcbiAgYm90dG9tOiAtMTJweDtcclxuICBtYXJnaW4tbGVmdDogMTJweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/submit-food/submit-food.component.html":
/*!********************************************************!*\
  !*** ./src/app/submit-food/submit-food.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n  <meta charset=\"utf-8\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\r\n  <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.5.0/css/all.css\" integrity=\"sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU\" crossorigin=\"anonymous\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n\r\n  <script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js\" integrity=\"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q\" crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\" integrity=\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\" crossorigin=\"anonymous\"></script>\r\n\r\n\r\n\r\n</head>\r\n\r\n<body>\r\n\r\n\r\n\r\n\r\n<!-- Submit NewMainFood-->\r\n<div class=\"submit\">\r\n  <div class=\"title\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n          <h2>Submit Recipe</h2>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"content\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n\r\n          <div class=\"form-group\">\r\n            <label>Recipe Title</label>\r\n            <input type=\"text\" class=\"form-control\"  placeholder=\"Recipe Name\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Recipe Title</label>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Ingredients\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Recipe Title</label>\r\n            <input type=\"text\" class=\"form-control\"   placeholder=\"Known allergens in the recipe\">\r\n          </div>\r\n\r\n          <div id=\"sortable\">\r\n            <div class=\"box ui-sortable-handle\">\r\n              <div class=\"row\">\r\n\r\n\r\n                <div class=\"col-lg-1 col-sm-1\">\r\n                  <i class=\"fa fa-times-circle-o minusbtn\" aria-hidden=\"true\"></i>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n\r\n\r\n\r\n          <button type=\"submit\" class=\"btn btn-submit\">Submit Food</button>\r\n          <button class=\"btn btn-custom\" routerLink=\"/adminview\">Back</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n</body>\r\n\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/submit-food/submit-food.component.ts":
/*!******************************************************!*\
  !*** ./src/app/submit-food/submit-food.component.ts ***!
  \******************************************************/
/*! exports provided: SubmitFoodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitFoodComponent", function() { return SubmitFoodComponent; });
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

var SubmitFoodComponent = /** @class */ (function () {
    function SubmitFoodComponent() {
    }
    SubmitFoodComponent.prototype.ngOnInit = function () {
    };
    SubmitFoodComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-submit-food',
            template: __webpack_require__(/*! ./submit-food.component.html */ "./src/app/submit-food/submit-food.component.html"),
            styles: [__webpack_require__(/*! ./submit-food.component.css */ "./src/app/submit-food/submit-food.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SubmitFoodComponent);
    return SubmitFoodComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nbody {\r\n  background-color: whitesmoke;\r\n}\r\n\r\n.mainHeader {\r\n  margin-top: -65px;\r\n  text-align: center;\r\n  font-family: 'Dancing Script', Georgia, Times, serif;\r\n  font-size: 125px;\r\n  text-shadow: 1px 1px 1px #ccc;\r\n  color: #e13b2b;\r\n\r\n\r\n\r\n}\r\n\r\n.mainHeaderOotd {\r\n\r\n  text-align: center;\r\n  font-family: 'Dancing Script', Georgia, Times, serif;\r\n  font-size: 125px;\r\n  text-shadow: 1px 1px 1px #ccc;\r\n  color: #e13b2b;\r\n  margin-top: -85px;\r\n\r\n\r\n}\r\n\r\n/* changes the totd stuff */\r\n\r\n.box.grid.recipes .by {\r\n  padding: 10px 15px;\r\n  text-align: center;\r\n  color: #e13b2b;\r\n  background-color: whitesmoke;\r\n  align-content: center;\r\n\r\n}\r\n\r\n.totd {\r\n  text-align: center;\r\n  font-size: 50px;\r\n  color: #e13b2b;\r\n  font-family: 'Dancing Script', Georgia, Times, serif;\r\n}\r\n\r\n.jumbotron {\r\n  background-color: whitesmoke;\r\n  font-family: 'Nobile';\r\n\r\n\r\n}\r\n\r\n.recipe-detail .col-lg-4 {\r\n  margin-bottom: 2px;\r\n}\r\n\r\n.col\r\n{\r\n  font-size: 30px;\r\n  text-shadow: 1px 1px 1px #f1f1f1;\r\n  justify-content:center;\r\n\r\n}\r\n\r\n.btn-custom {\r\n  background-color: hsl(181, 20%, 1%) !important;\r\n  background-repeat: repeat-x;\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#537c7d\", endColorstr=\"#020303\");\r\n  background-image: -khtml-gradient(linear, left top, left bottom, from(#537c7d), to(#020303));\r\n  background-image: linear-gradient(#537c7d, #020303);\r\n  border-color: #020303 #020303 hsl(181, 20%, -9%);\r\n  color: #f1f1f1 !important;\r\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.66);\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n.top {\r\n  padding: 60px 0;\r\n  background-color: white;\r\n}\r\n\r\n.top h5 {\r\n  font-size: 1.2rem;\r\n  margin-bottom: 20px;\r\n  color: #dadada;\r\n}\r\n\r\n.top .box {\r\n  padding: 25px;\r\n  background-color: white;\r\n  box-shadow: 0 6px 15px rgba(36, 37, 38, 0.08);\r\n}\r\n\r\n.top .box h3 {\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n  padding-left: 0px;\r\n}\r\n\r\n.top .box h3 a {\r\n  color: #333;\r\n}\r\n\r\n.top .box p {\r\n  line-height: 22px;\r\n  margin-bottom: 0;\r\n  padding-left: 0px;\r\n}\r\n\r\n.top .box img {\r\n  float: left;\r\n  width: 0px;\r\n  height: 0px;\r\n  border-radius: 6px;\r\n\r\n}\r\n\r\n.recipe-detail {\r\n  padding: 60px 0;\r\n}\r\n\r\n.recipe-detail h1 {\r\n  font-size: 1.8rem;\r\n}\r\n\r\n.recipe-detail .col-lg-4 {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.recipe-detail .nutrition-facts {\r\n  margin-top: 30px;\r\n}\r\n\r\n.recipe-detail .nutrition-facts div {\r\n  width: 50%;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.col-lg-4\r\n{\r\n  width: 380px;\r\n  max-width: none;\r\n}\r\n\r\nbody {\r\n  padding-top: 40px;\r\n}\r\n\r\n.box.list.recipes img {\r\n  width: 0px;\r\n  height: 0px;\r\n}\r\n\r\n.box.list.recipes h2,\r\n.box.list.recipes .tag,\r\n.box.list.recipes p {\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n}\r\n\r\nh5 {\r\n  color: #e13b2b;\r\n}\r\n\r\nfooter {\r\n  margin-top: 40px;\r\n  padding: 50px 0;\r\n  background-color: #333;\r\n}\r\n\r\nfooter h5 {\r\n  margin-bottom: 20px;\r\n  padding-bottom: 10px;\r\n  color: #fff;\r\n  border-bottom: 1px dashed #484848;\r\n}\r\n\r\nfooter p {\r\n  color: #858585;\r\n}\r\n\r\nfooter ul {\r\n  padding-left: 0;\r\n}\r\n\r\nfooter ul li {\r\n  list-style: none;\r\n}\r\n\r\nfooter ul li a {\r\n  color: #858585;\r\n}\r\n\r\nfooter ul li a:hover {\r\n  color: #858585;\r\n}\r\n\r\nfooter .btn {\r\n  background-color: #e13b2b;\r\n  color: #fff;\r\n}\r\n\r\n.copyright {\r\n  font-size: .9rem;\r\n  padding: 15px 0;\r\n  background-color: #212121;\r\n}\r\n\r\n.copyright a {\r\n  color: #858585;\r\n}\r\n\r\n.copyright i {\r\n  color: #f44336;\r\n}\r\n\r\nh3\r\n{\r\n  font-size: 20px;\r\n  color: #e13b2b;\r\n  font-family: 'Rancho', Georgia, Times, serif;\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsNkJBQTZCO0NBQzlCOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixxREFBcUQ7RUFDckQsaUJBQWlCO0VBQ2pCLDhCQUE4QjtFQUM5QixlQUFlOzs7O0NBSWhCOztBQUlEOztFQUVFLG1CQUFtQjtFQUNuQixxREFBcUQ7RUFDckQsaUJBQWlCO0VBQ2pCLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2Ysa0JBQWtCOzs7Q0FHbkI7O0FBRUQsNEJBQTRCOztBQUU1QjtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixzQkFBc0I7O0NBRXZCOztBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YscURBQXFEO0NBQ3REOztBQU1EO0VBQ0UsNkJBQTZCO0VBQzdCLHNCQUFzQjs7O0NBR3ZCOztBQUNEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEOztFQUVFLGdCQUFnQjtFQUNoQixpQ0FBaUM7RUFDakMsdUJBQXVCOztDQUV4Qjs7QUFFRDtFQUNFLCtDQUErQztFQUMvQyw0QkFBNEI7RUFDNUIsbUdBQW1HO0VBQ25HLDZGQUE2RjtFQU03RixvREFBb0Q7RUFDcEQsaURBQWlEO0VBQ2pELDBCQUEwQjtFQUMxQiwwQ0FBMEM7RUFDMUMsb0NBQW9DO0NBQ3JDOztBQUlEO0VBQ0UsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtDQUN6Qjs7QUFDRDtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsZUFBZTtDQUNoQjs7QUFDRDtFQUNFLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsOENBQThDO0NBQy9DOztBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7Q0FDbkI7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtDQUNuQjs7QUFDRDtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjs7Q0FFcEI7O0FBRUQ7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBQ0Q7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBQ0Q7RUFDRSxvQkFBb0I7Q0FDckI7O0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsb0JBQW9CO0NBQ3JCOztBQUNEOztFQUVFLGFBQWE7RUFDYixnQkFBZ0I7Q0FDakI7O0FBQ0Q7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsWUFBWTtDQUNiOztBQUNEOzs7RUFHRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsZUFBZTtDQUNoQjs7QUFHRDtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0NBQ3hCOztBQUNEO0VBQ0Usb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osa0NBQWtDO0NBQ25DOztBQUNEO0VBQ0UsZUFBZTtDQUNoQjs7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFDRDtFQUNFLGVBQWU7Q0FDaEI7O0FBQ0Q7RUFDRSxlQUFlO0NBQ2hCOztBQUNEO0VBQ0UsMEJBQTBCO0VBQzFCLFlBQVk7Q0FDYjs7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsMEJBQTBCO0NBQzNCOztBQUNEO0VBQ0UsZUFBZTtDQUNoQjs7QUFDRDtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7O0VBRUUsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiw2Q0FBNkM7RUFDN0MsbUJBQW1CO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuLm1haW5IZWFkZXIge1xyXG4gIG1hcmdpbi10b3A6IC02NXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgR2VvcmdpYSwgVGltZXMsIHNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTI1cHg7XHJcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICNjY2M7XHJcbiAgY29sb3I6ICNlMTNiMmI7XHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuLm1haW5IZWFkZXJPb3RkIHtcclxuXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBHZW9yZ2lhLCBUaW1lcywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMjVweDtcclxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggI2NjYztcclxuICBjb2xvcjogI2UxM2IyYjtcclxuICBtYXJnaW4tdG9wOiAtODVweDtcclxuXHJcblxyXG59XHJcblxyXG4vKiBjaGFuZ2VzIHRoZSB0b3RkIHN0dWZmICovXHJcblxyXG4uYm94LmdyaWQucmVjaXBlcyAuYnkge1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNlMTNiMmI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcblxyXG59XHJcbi50b3RkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIGNvbG9yOiAjZTEzYjJiO1xyXG4gIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBHZW9yZ2lhLCBUaW1lcywgc2VyaWY7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4uanVtYm90cm9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIGZvbnQtZmFtaWx5OiAnTm9iaWxlJztcclxuXHJcblxyXG59XHJcbi5yZWNpcGUtZGV0YWlsIC5jb2wtbGctNCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG59XHJcblxyXG4uY29sXHJcbntcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICNmMWYxZjE7XHJcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi5idG4tY3VzdG9tIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTgxLCAyMCUsIDElKSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPVwiIzUzN2M3ZFwiLCBlbmRDb2xvcnN0cj1cIiMwMjAzMDNcIik7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLWtodG1sLWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCM1MzdjN2QpLCB0bygjMDIwMzAzKSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjNTM3YzdkLCAjMDIwMzAzKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgIzUzN2M3ZCwgIzAyMDMwMyk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSwgIzUzN2M3ZCksIGNvbG9yLXN0b3AoMTAwJSwgIzAyMDMwMykpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzUzN2M3ZCwgIzAyMDMwMyk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgIzUzN2M3ZCwgIzAyMDMwMyk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCM1MzdjN2QsICMwMjAzMDMpO1xyXG4gIGJvcmRlci1jb2xvcjogIzAyMDMwMyAjMDIwMzAzIGhzbCgxODEsIDIwJSwgLTklKTtcclxuICBjb2xvcjogI2YxZjFmMSAhaW1wb3J0YW50O1xyXG4gIHRleHQtc2hhZG93OiAwIC0xcHggMCByZ2JhKDAsIDAsIDAsIDAuNjYpO1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG59XHJcblxyXG5cclxuXHJcbi50b3Age1xyXG4gIHBhZGRpbmc6IDYwcHggMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4udG9wIGg1IHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGNvbG9yOiAjZGFkYWRhO1xyXG59XHJcbi50b3AgLmJveCB7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwIDZweCAxNXB4IHJnYmEoMzYsIDM3LCAzOCwgMC4wOCk7XHJcbn1cclxuLnRvcCAuYm94IGgzIHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG4udG9wIC5ib3ggaDMgYSB7XHJcbiAgY29sb3I6ICMzMzM7XHJcbn1cclxuLnRvcCAuYm94IHAge1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbn1cclxuLnRvcCAuYm94IGltZyB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDBweDtcclxuICBoZWlnaHQ6IDBweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcblxyXG59XHJcblxyXG4ucmVjaXBlLWRldGFpbCB7XHJcbiAgcGFkZGluZzogNjBweCAwO1xyXG59XHJcbi5yZWNpcGUtZGV0YWlsIGgxIHtcclxuICBmb250LXNpemU6IDEuOHJlbTtcclxufVxyXG4ucmVjaXBlLWRldGFpbCAuY29sLWxnLTQge1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuLnJlY2lwZS1kZXRhaWwgLm51dHJpdGlvbi1mYWN0cyB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4ucmVjaXBlLWRldGFpbCAubnV0cml0aW9uLWZhY3RzIGRpdiB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5jb2wtbGctNFxyXG57XHJcbiAgd2lkdGg6IDM4MHB4O1xyXG4gIG1heC13aWR0aDogbm9uZTtcclxufVxyXG5ib2R5IHtcclxuICBwYWRkaW5nLXRvcDogNDBweDtcclxufVxyXG4uYm94Lmxpc3QucmVjaXBlcyBpbWcge1xyXG4gIHdpZHRoOiAwcHg7XHJcbiAgaGVpZ2h0OiAwcHg7XHJcbn1cclxuLmJveC5saXN0LnJlY2lwZXMgaDIsXHJcbi5ib3gubGlzdC5yZWNpcGVzIC50YWcsXHJcbi5ib3gubGlzdC5yZWNpcGVzIHAge1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufVxyXG5cclxuaDUge1xyXG4gIGNvbG9yOiAjZTEzYjJiO1xyXG59XHJcblxyXG5cclxuZm9vdGVyIHtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIHBhZGRpbmc6IDUwcHggMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG59XHJcbmZvb3RlciBoNSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICM0ODQ4NDg7XHJcbn1cclxuZm9vdGVyIHAge1xyXG4gIGNvbG9yOiAjODU4NTg1O1xyXG59XHJcbmZvb3RlciB1bCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcbmZvb3RlciB1bCBsaSB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5mb290ZXIgdWwgbGkgYSB7XHJcbiAgY29sb3I6ICM4NTg1ODU7XHJcbn1cclxuZm9vdGVyIHVsIGxpIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjODU4NTg1O1xyXG59XHJcbmZvb3RlciAuYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTEzYjJiO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5jb3B5cmlnaHQge1xyXG4gIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgcGFkZGluZzogMTVweCAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XHJcbn1cclxuLmNvcHlyaWdodCBhIHtcclxuICBjb2xvcjogIzg1ODU4NTtcclxufVxyXG4uY29weXJpZ2h0IGkge1xyXG4gIGNvbG9yOiAjZjQ0MzM2O1xyXG59XHJcblxyXG5oM1xyXG57XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjZTEzYjJiO1xyXG4gIGZvbnQtZmFtaWx5OiAnUmFuY2hvJywgR2VvcmdpYSwgVGltZXMsIHNlcmlmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!doctype html>\r\n<html lang=\"en\">\r\n\r\n\r\n\r\n\r\n<head>\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\r\n  <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.5.0/css/all.css\" integrity=\"sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU\" crossorigin=\"anonymous\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n\r\n  <script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js\" integrity=\"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q\" crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\" integrity=\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\" crossorigin=\"anonymous\"></script>\r\n\r\n\r\n  <!-- FONTS -->\r\n  <link href=\"https://fonts.googleapis.com/css?family=Rancho\" rel=\"stylesheet\">\r\n  <link href=\"https://fonts.googleapis.com/css?family=Dancing+Script\" rel=\"stylesheet\">\r\n\r\n\r\n\r\n\r\n</head>\r\n\r\n<body>\r\n\r\n\r\n<div class=\"list\">\r\n  <div class=\"container\">\r\n\r\n        <h5><i class=\"fa fa-cutlery\" aria-hidden=\"true\"></i></h5>\r\n      </div>\r\n\r\n\r\n        <div class=\"box grid recipes\">\r\n          <div  *ngIf=\"motd\">\r\n          <div class=\"by\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i>{{motd.tipOfTheDay}}</div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n      </div>\r\n\r\n\r\n\r\n\r\n<div class=\"jumbotron\">\r\n  <div class=\"mainHeader\">\r\n    <p>Today's Menu</p>\r\n  </div>\r\n  <div class=\"top\">\r\n    <ul>\r\n      <div class=\"container\" *ngIf=mainfoods>\r\n        <div class=\"row\">\r\n        <div  *ngFor=\"let main of mainfoods\">\r\n          <div class=\"col-lg-4\">\r\n            <i class=\"fa fa-cutlery\" aria-hidden=\"true\"></i><h3>Daily Choice 1</h3>\r\n            <div class=\"box clearfix\">\r\n\r\n              <h3>{{main.mainFoodName}}</h3>\r\n\r\n              <li>\r\n                <h6><p>{{main.recipeLines}}</p></h6>\r\n              </li>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        </div>\r\n      </div>\r\n    </ul>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n<div class=\"jumbotron\">\r\n  <div class=\"mainHeaderOotd\">\r\n    <p>Offers of the day</p>\r\n  </div>\r\n  <div class=\"top\">\r\n          <div class=\"container\" >\r\n\r\n\r\n\r\n              <div *ngIf=\"specielOffers\">\r\n                <div class=\"row\">\r\n          <div *ngFor=\"let offers of specielOffers\">\r\n\r\n        <div class=\"col-lg-4\">\r\n\r\n          <h3><i class=\"fa fa-cutlery\" aria-hidden=\"true\"></i> Daily Choice 1</h3>\r\n          <div class=\"box clearfix\">\r\n            <h3>{{offers.specialOfferName}}</h3>\r\n            <p>{{offers.price  }}DKR</p>\r\n          </div>\r\n\r\n        </div>\r\n          </div></div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n<footer>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3 col-sm-6\">\r\n        <h5>About - Danish</h5>\r\n          <p>\r\n    Vores kantine hedder Café healthy study og her kan du både købe morgenmad, frokost og lidt til den lille sult.\r\n\r\n        </p>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6\">\r\n        <h5>About - English</h5>\r\n<p> Our cantina is called Café Healthy Study, here you're able to buy both breakfast, lunch and something for the sweet tooth.</p>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6\">\r\n      <h5>Contact Information</h5>\r\n        <p>\r\n\r\n          <span style=\"font-size: 15px; color: #e13b2b;\">\r\n            <i class=\"fas fa-home\"></i>\r\n          </span>\r\n          Spangsbjerg Kirkevej 103 <br>\r\n\r\n\r\n          <span style=\"font-size: 15px; color: #e13b2b;\">\r\n            <i class=\"fas fa-city\"></i>\r\n          </span>\r\n          6700 Esbjerg <br>\r\n\r\n\r\n          <span style=\"font-size: 15px; color: #e13b2b;\">\r\n            <i class=\"fas fa-phone\"></i>\r\n          </span>\r\n          +45 7613 3200\r\n        </p>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6\">\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n\r\n\r\n<!-- Copyright -->\r\n<div class=\"copyright\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">Made with <i class=\"fa fa-heart\" aria-hidden=\"true\"></i> &#8212; Copyright &copy; 2018 <a href=\"index.html\">Erhvervsakademi Cantina - All rights reserved</a></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_Service_motd_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/Service/motd.service */ "./src/app/shared/Service/motd.service.ts");
/* harmony import */ var _shared_Service_main_food_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/Service/main-food.service */ "./src/app/shared/Service/main-food.service.ts");
/* harmony import */ var _shared_Service_speciel_offers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/Service/speciel-offers.service */ "./src/app/shared/Service/speciel-offers.service.ts");
/* harmony import */ var _shared_Service_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/Service/authentication.service */ "./src/app/shared/Service/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(motdService, mainFoodService, specielOfferService, authenticationService) {
        this.motdService = motdService;
        this.mainFoodService = mainFoodService;
        this.specielOfferService = specielOfferService;
        this.authenticationService = authenticationService;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        this.authenticationService.logout();
        this.refresh();
    };
    WelcomeComponent.prototype.refresh = function () {
        var _this = this;
        this.motdService.getMOTDById(2)
            .subscribe(function (listOfMessages) {
            _this.motd = listOfMessages;
        });
        this.mainFoodService.getMainFood().subscribe(function (listOfMenues) {
            _this.mainfoods = listOfMenues;
        });
        this.specielOfferService.getSpecielFood().subscribe(function (listOfOffers) {
            _this.specielOffers = listOfOffers;
        });
    };
    WelcomeComponent.prototype.PopUp = function () {
        document.getElementById('PopUpWindow').style.display = 'block';
        window.scrollTo({
            top: 0,
            left: 1,
            behavior: 'smooth'
        });
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_Service_motd_service__WEBPACK_IMPORTED_MODULE_1__["MotdService"],
            _shared_Service_main_food_service__WEBPACK_IMPORTED_MODULE_2__["MainFoodService"],
            _shared_Service_speciel_offers_service__WEBPACK_IMPORTED_MODULE_3__["SpecielOffersService"],
            _shared_Service_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], WelcomeComponent);
    return WelcomeComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'https://cantinaappdatabase.azurewebsites.net/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Samuel\Desktop\AngularWorkSpace\CantinaAngular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map