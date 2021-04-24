function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn-bd": "./node_modules/moment/locale/bn-bd.js",
      "./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-mx": "./node_modules/moment/locale/es-mx.js",
      "./es-mx.js": "./node_modules/moment/locale/es-mx.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _item_board_item_board_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./item-board/item-board.component */
    "./src/app/item-board/item-board.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'todo-list-ui';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-item-board");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_item_board_item_board_component__WEBPACK_IMPORTED_MODULE_1__["ItemBoardComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _item_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./item/item.component */
    "./src/app/item/item.component.ts");
    /* harmony import */


    var _item_board_item_board_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./item-board/item-board.component */
    "./src/app/item-board/item-board.component.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _item_save_dialog_item_save_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./item-save-dialog/item-save-dialog.component */
    "./src/app/item-save-dialog/item-save-dialog.component.ts");
    /* harmony import */


    var _interceptor_http_errors_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./interceptor/http-errors-interceptor */
    "./src/app/interceptor/http-errors-interceptor.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _pipe_moment_humanize_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./pipe/moment-humanize.pipe */
    "./src/app/pipe/moment-humanize.pipe.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
        useClass: _interceptor_http_errors_interceptor__WEBPACK_IMPORTED_MODULE_18__["HttpErrorsInterceptor"],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__["FlexModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__["DragDropModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _item_item_component__WEBPACK_IMPORTED_MODULE_5__["ItemComponent"], _item_board_item_board_component__WEBPACK_IMPORTED_MODULE_6__["ItemBoardComponent"], _item_save_dialog_item_save_dialog_component__WEBPACK_IMPORTED_MODULE_17__["ItemSaveDialogComponent"], _pipe_moment_humanize_pipe__WEBPACK_IMPORTED_MODULE_20__["MomentHumanizePipe"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__["FlexModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__["DragDropModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _item_item_component__WEBPACK_IMPORTED_MODULE_5__["ItemComponent"], _item_board_item_board_component__WEBPACK_IMPORTED_MODULE_6__["ItemBoardComponent"], _item_save_dialog_item_save_dialog_component__WEBPACK_IMPORTED_MODULE_17__["ItemSaveDialogComponent"], _pipe_moment_humanize_pipe__WEBPACK_IMPORTED_MODULE_20__["MomentHumanizePipe"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__["FlexModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__["DragDropModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"]],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            useClass: _interceptor_http_errors_interceptor__WEBPACK_IMPORTED_MODULE_18__["HttpErrorsInterceptor"],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/interceptor/http-errors-interceptor.ts":
  /*!********************************************************!*\
    !*** ./src/app/interceptor/http-errors-interceptor.ts ***!
    \********************************************************/

  /*! exports provided: HttpErrorsInterceptor */

  /***/
  function srcAppInterceptorHttpErrorsInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpErrorsInterceptor", function () {
      return HttpErrorsInterceptor;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");

    var HttpErrorsInterceptor = /*#__PURE__*/function () {
      function HttpErrorsInterceptor(matSnackBar) {
        _classCallCheck(this, HttpErrorsInterceptor);

        this.matSnackBar = matSnackBar;
        this.errors = [];
        this.optimisticLockingDefaultMessage = 'You are trying to modify an outdated version of this resource. Please, refresh the data.';
        this.serverErrorDefaultMessage = 'Server error. If the error persists, please, contact the support.';
        this.loadCodes();
      }

      _createClass(HttpErrorsInterceptor, [{
        key: "loadCodes",
        value: function loadCodes() {
          this.errors[400] = {
            http: 'Bad Request',
            message: 'This request is not correctly formed.'
          };
          this.errors[401] = {
            http: 'Unauthorized',
            message: 'Your authentication is not valid to access this resource.'
          };
          this.errors[403] = {
            http: 'Forbidden',
            message: 'You don\'t have the permission to access this resource.'
          };
          this.errors[404] = {
            http: 'Not Found',
            message: 'The resource is not existing.'
          };
          this.errors[405] = {
            http: 'Method Not Allowed',
            message: 'The application is trying to access this resource with the wrong HTTP method.'
          };
          this.errors[406] = {
            http: 'Not Acceptable',
            message: 'The application is trying to access this resource with the wrong content type.'
          };
          this.errors[408] = {
            http: 'Request Timeout',
            message: 'The application tried to call the server but the request timed out.'
          };
          this.errors[409] = {
            http: 'Conflict',
            message: this.optimisticLockingDefaultMessage
          };
          this.errors[412] = {
            http: 'Precondition failed',
            message: this.optimisticLockingDefaultMessage
          };
          this.errors[422] = {
            http: 'Unprocessable Entity',
            message: 'The server consider that the resource validation is not fulfilled.'
          };
          this.errors[500] = {
            http: 'Internal Server Error',
            message: 'Sorry, the server can\'t process this request.'
          };
          this.errors[502] = {
            http: 'Bad Gateway',
            message: this.serverErrorDefaultMessage
          };
          this.errors[503] = {
            http: 'Service Unavailable',
            message: this.serverErrorDefaultMessage
          };
          this.errors[504] = {
            http: 'Gateway Timeout',
            message: this.serverErrorDefaultMessage
          };
        }
      }, {
        key: "intercept",
        value: function intercept(req, next) {
          var _this = this;

          return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            var errorMessage = _this.serverErrorDefaultMessage;
            var actionType = 'Error';

            if (error.error instanceof ErrorEvent) {
              // client-side error
              errorMessage = error.error.message;
            } else {
              // server-side error
              if (_this.errors[error.status]) {
                errorMessage = _this.errors[error.status].message;

                if (error.message) {
                  console.error(error.message);
                }

                actionType = _this.errors[error.status].http;
              }
            }

            _this.matSnackBar.open(errorMessage, actionType, {
              duration: 8000,
              panelClass: ['error-message']
            });

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error);
          }));
        }
      }]);

      return HttpErrorsInterceptor;
    }();

    HttpErrorsInterceptor.ɵfac = function HttpErrorsInterceptor_Factory(t) {
      return new (t || HttpErrorsInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]));
    };

    HttpErrorsInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: HttpErrorsInterceptor,
      factory: HttpErrorsInterceptor.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](HttpErrorsInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/item-board/item-board.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/item-board/item-board.component.ts ***!
    \****************************************************/

  /*! exports provided: ItemBoardComponent */

  /***/
  function srcAppItemBoardItemBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemBoardComponent", function () {
      return ItemBoardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _model_item_status_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../model/item-status.enum */
    "./src/app/model/item-status.enum.ts");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _item_save_dialog_item_save_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../item-save-dialog/item-save-dialog.component */
    "./src/app/item-save-dialog/item-save-dialog.component.ts");
    /* harmony import */


    var _utils_map_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../utils/map-utils */
    "./src/app/utils/map-utils.ts");
    /* harmony import */


    var _service_item_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../service/item.service */
    "./src/app/service/item.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _item_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../item/item.component */
    "./src/app/item/item.component.ts");

    function ItemBoardComponent_div_11_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDragStarted", function ItemBoardComponent_div_11_div_4_Template_div_cdkDragStarted_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r4.startDragAction();
        })("cdkDragEnded", function ItemBoardComponent_div_11_div_4_Template_div_cdkDragEnded_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r6.stopDragAction();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-item", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemDeleted", function ItemBoardComponent_div_11_div_4_Template_app_item_itemDeleted_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r7.refresh();
        })("itemUpdated", function ItemBoardComponent_div_11_div_4_Template_app_item_itemUpdated_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r8.refresh();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r3)("readonly", ctx_r2.dragAndDropInProgress || ctx_r2.actionInProgress);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "drag-drop-hover-col": a0
      };
    };

    function ItemBoardComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ItemBoardComponent_div_11_Template_div_cdkDropListDropped_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.drop($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ItemBoardComponent_div_11_div_4_Template, 2, 2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var status_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", ctx_r0.statusItemsMap.get(status_r1))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r0.dragAndDropInProgress));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.ItemStatus[status_r1]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.statusItemsMap.get(status_r1));
      }
    }

    var ItemBoardComponent = /*#__PURE__*/function () {
      function ItemBoardComponent(itemService, changeDetector, dialog) {
        _classCallCheck(this, ItemBoardComponent);

        this.itemService = itemService;
        this.changeDetector = changeDetector;
        this.dialog = dialog;
        this.ItemStatus = _model_item_status_enum__WEBPACK_IMPORTED_MODULE_2__["ItemStatus"];
        this.statusItemsMap = new Map();
        this.actionInProgress = false;
        this.dragAndDropInProgress = false;
      }

      _createClass(ItemBoardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.refresh();
          this.startEventListener();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.stopEventListener();
        } // ---------------------------------------------------------------------------------------
        // Enable this code to solve the issue of the maximum number of SSE
        // Drawback: data modifications are visible only when the user has the focus on the tab
        // ---------------------------------------------------------------------------------------

      }, {
        key: "onFocus",
        value: function onFocus(event) {
          this.refresh();
          this.startEventListener();
        }
      }, {
        key: "onBlur",
        value: function onBlur(event) {
          this.stopEventListener();
        }
      }, {
        key: "refresh",
        value: function refresh() {
          var _this2 = this;

          this.actionInProgress = true; // Clear all statuses

          var _iterator = _createForOfIteratorHelper(this.getStatuses()),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var status = _step.value;
              this.statusItemsMap.set(status, []);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          this.itemService.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
            _this2.stopActionInProgress();
          })).subscribe(function (item) {
            _this2.addItem(item);
          });
        }
      }, {
        key: "getStatuses",
        value: function getStatuses() {
          return Object.keys(_model_item_status_enum__WEBPACK_IMPORTED_MODULE_2__["ItemStatus"]);
        }
      }, {
        key: "add",
        value: function add() {
          var _this3 = this;

          this.startActionInProgress();
          var dialogRef = this.dialog.open(_item_save_dialog_item_save_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ItemSaveDialogComponent"], {
            width: '650px',
            disableClose: true
          });
          dialogRef.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function (response) {
            if (response) {
              _this3.itemService.addItem(response).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
                _this3.stopActionInProgress();
              })).subscribe();
            } else {
              _this3.stopActionInProgress();
            }
          });
        }
      }, {
        key: "drop",
        value: function drop(event) {
          var _this4 = this;

          if (event.previousContainer !== event.container) {
            this.startActionInProgress(); // New status

            var newStatus = _utils_map_utils__WEBPACK_IMPORTED_MODULE_5__["MapUtils"].findKeyByValue(this.statusItemsMap, event.container.data); // Moved item


            var item = event.previousContainer.data[event.previousIndex];
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex); // Update the status of the dropped item

            this.itemService.updateStatus(item.id, item.version, newStatus).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
              _this4.stopActionInProgress();
            })).subscribe();
          }
        }
      }, {
        key: "startActionInProgress",
        value: function startActionInProgress() {
          this.actionInProgress = true;
        }
      }, {
        key: "stopActionInProgress",
        value: function stopActionInProgress() {
          this.actionInProgress = false;
          this.changeDetector.detectChanges();
        }
      }, {
        key: "startDragAction",
        value: function startDragAction() {
          this.dragAndDropInProgress = true;
        }
      }, {
        key: "stopDragAction",
        value: function stopDragAction() {
          this.dragAndDropInProgress = false;
        }
      }, {
        key: "addItem",
        value: function addItem(item) {
          this.statusItemsMap.get(item.status).push(item);
        }
      }, {
        key: "removeItem",
        value: function removeItem(itemId) {
          // Remove the item
          var _iterator2 = _createForOfIteratorHelper(this.statusItemsMap.values()),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var items = _step2.value;
              var index = items.map(function (i) {
                return i.id;
              }).indexOf(itemId);

              if (index >= 0) {
                items.splice(index, 1);
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }, {
        key: "startEventListener",
        value: function startEventListener() {
          var _this5 = this;

          this.eventSource = this.itemService.listenToEvents(function (e) {
            return _this5.onSaved(e);
          }, function (e) {
            return _this5.onDeleted(e);
          });
        }
      }, {
        key: "onDeleted",
        value: function onDeleted(e) {
          this.removeItem(e.itemId);
        }
      }, {
        key: "onSaved",
        value: function onSaved(e) {
          this.removeItem(e.item.id);
          this.addItem(e.item);
        }
      }, {
        key: "stopEventListener",
        value: function stopEventListener() {
          this.eventSource.close();
        }
      }]);

      return ItemBoardComponent;
    }();

    ItemBoardComponent.ɵfac = function ItemBoardComponent_Factory(t) {
      return new (t || ItemBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_item_service__WEBPACK_IMPORTED_MODULE_6__["ItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]));
    };

    ItemBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ItemBoardComponent,
      selectors: [["app-item-board"]],
      hostBindings: function ItemBoardComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function ItemBoardComponent_focus_HostBindingHandler($event) {
            return ctx.onFocus($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("blur", function ItemBoardComponent_blur_HostBindingHandler($event) {
            return ctx.onBlur($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 12,
      vars: 3,
      consts: [[1, "toolbar"], [1, "toolbar-title"], ["color", "basic", "mat-mini-fab", "", "matTooltip", "Refresh", 1, "toolbar-item", 3, "disabled", "click"], ["color", "basic", "mat-mini-fab", "", "matTooltip", "Add a new item", 1, "toolbar-item", 3, "disabled", "click"], ["cdkDropListGroup", ""], [1, "status-cols"], ["class", "status-col", "cdkDropList", "", "cdkDropListSortingDisabled", "", 3, "cdkDropListData", "ngClass", "cdkDropListDropped", 4, "ngFor", "ngForOf"], ["cdkDropList", "", "cdkDropListSortingDisabled", "", 1, "status-col", 3, "cdkDropListData", "ngClass", "cdkDropListDropped"], [1, "status-title"], ["cdkDrag", "", "class", "item-div", 3, "cdkDragStarted", "cdkDragEnded", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "item-div", 3, "cdkDragStarted", "cdkDragEnded"], [3, "item", "readonly", "itemDeleted", "itemUpdated"]],
      template: function ItemBoardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "To Do List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemBoardComponent_Template_button_click_3_listener() {
            return ctx.refresh();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "refresh");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemBoardComponent_Template_button_click_6_listener() {
            return ctx.add();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ItemBoardComponent_div_11_Template, 5, 6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.actionInProgress);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.actionInProgress);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getStatuses());
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDropListGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDrag"], _item_item_component__WEBPACK_IMPORTED_MODULE_13__["ItemComponent"]],
      styles: [".toolbar[_ngcontent-%COMP%] {\n  border-bottom: black solid 0.5px;\n  margin-bottom: 50px;\n}\n\n.toolbar-title[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-left: 10px;\n  padding-right: 40px;\n  font-size: 1.5em;\n  font-family: \"Luckiest Guy\", cursive;\n  color: white;\n  text-shadow: 2px 2px black;\n}\n\n.toolbar-item[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.status-cols[_ngcontent-%COMP%] {\n  display: flex;\n  overflow: hidden;\n}\n\n.status-col[_ngcontent-%COMP%] {\n  float: left;\n  margin: 5px;\n  width: 33%;\n  min-height: 60vh;\n}\n\n.status-col.drag-drop-hover-col[_ngcontent-%COMP%] {\n  border: dashed darkred 1px;\n}\n\n.status-title[_ngcontent-%COMP%] {\n  font-family: \"Luckiest Guy\", cursive;\n  color: #ececec;\n  text-shadow: 2px 2px black;\n  text-align: center;\n  padding-top: 10px;\n  padding-bottom: 20px;\n  font-size: 30px;\n}\n\n.item-div[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hamFjcXVvdC9Qcm9qZWN0cy9wZXJzby9yZWFjdGl2ZS10b2RvLWxpc3QtcjJkYmMvdG9kby1saXN0LXVpL3NyYy9hcHAvaXRlbS1ib2FyZC9pdGVtLWJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pdGVtLWJvYXJkL2l0ZW0tYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSwwQkFBQTtBQ0NKOztBREdBO0VBQ0Usb0NBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtBQ0FGOztBREdBO0VBQ0Usc0RBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0tYm9hcmQvaXRlbS1ib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyIHtcbiAgYm9yZGVyLWJvdHRvbTogYmxhY2sgc29saWQgMC41cHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi50b29sYmFyLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgZm9udC1mYW1pbHk6ICdMdWNraWVzdCBHdXknLCBjdXJzaXZlO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IGJsYWNrO1xufVxuXG4udG9vbGJhci1pdGVtIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnN0YXR1cy1jb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnN0YXR1cy1jb2wge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiAzMyU7XG4gIG1pbi1oZWlnaHQ6IDYwdmg7XG5cbiAgJi5kcmFnLWRyb3AtaG92ZXItY29sIHtcbiAgICBib3JkZXI6IGRhc2hlZCBkYXJrcmVkIDFweDtcbiAgfVxufVxuXG4uc3RhdHVzLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6ICdMdWNraWVzdCBHdXknLCBjdXJzaXZlO1xuICBjb2xvcjogI2VjZWNlYztcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5pdGVtLWRpdiB7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuIiwiLnRvb2xiYXIge1xuICBib3JkZXItYm90dG9tOiBibGFjayBzb2xpZCAwLjVweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLnRvb2xiYXItdGl0bGUge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDEuNWVtO1xuICBmb250LWZhbWlseTogXCJMdWNraWVzdCBHdXlcIiwgY3Vyc2l2ZTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCBibGFjaztcbn1cblxuLnRvb2xiYXItaXRlbSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5zdGF0dXMtY29scyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zdGF0dXMtY29sIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogNXB4O1xuICB3aWR0aDogMzMlO1xuICBtaW4taGVpZ2h0OiA2MHZoO1xufVxuLnN0YXR1cy1jb2wuZHJhZy1kcm9wLWhvdmVyLWNvbCB7XG4gIGJvcmRlcjogZGFzaGVkIGRhcmtyZWQgMXB4O1xufVxuXG4uc3RhdHVzLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiTHVja2llc3QgR3V5XCIsIGN1cnNpdmU7XG4gIGNvbG9yOiAjZWNlY2VjO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLml0ZW0tZGl2IHtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemBoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-item-board',
          templateUrl: './item-board.component.html',
          styleUrls: ['./item-board.component.scss']
        }]
      }], function () {
        return [{
          type: _service_item_service__WEBPACK_IMPORTED_MODULE_6__["ItemService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
        }];
      }, {
        onFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:focus', ['$event']]
        }],
        onBlur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:blur', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/item-save-dialog/item-save-dialog.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/item-save-dialog/item-save-dialog.component.ts ***!
    \****************************************************************/

  /*! exports provided: ItemSaveDialogComponent */

  /***/
  function srcAppItemSaveDialogItemSaveDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemSaveDialogComponent", function () {
      return ItemSaveDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var ItemSaveDialogComponent = /*#__PURE__*/function () {
      function ItemSaveDialogComponent(dialogRef, item) {
        _classCallCheck(this, ItemSaveDialogComponent);

        this.dialogRef = dialogRef;
        this.item = item;
        this.description = item ? item.description : undefined;
      }

      _createClass(ItemSaveDialogComponent, [{
        key: "onCancel",
        value: function onCancel() {
          this.dialogRef.close();
        }
      }, {
        key: "onOk",
        value: function onOk() {
          this.dialogRef.close(this.description);
        }
      }]);

      return ItemSaveDialogComponent;
    }();

    ItemSaveDialogComponent.ɵfac = function ItemSaveDialogComponent_Factory(t) {
      return new (t || ItemSaveDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    ItemSaveDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ItemSaveDialogComponent,
      selectors: [["app-item-edit"]],
      decls: 10,
      vars: 3,
      consts: [[2, "overflow", "visible"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], [2, "min-width", "96%", "min-height", "100px", 3, "ngModel", "ngModelChange"], ["mat-dialog-actions", ""], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", 3, "disabled", "click"]],
      template: function ItemSaveDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "textarea", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ItemSaveDialogComponent_Template_textarea_ngModelChange_4_listener($event) {
            return ctx.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemSaveDialogComponent_Template_button_click_6_listener() {
            return ctx.onCancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemSaveDialogComponent_Template_button_click_8_listener() {
            return ctx.onOk();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Save ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item ? "Update" : "Create a new item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.description || !ctx.description.trim());
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]],
      styles: [".mat-dialog-actions[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  resize: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hamFjcXVvdC9Qcm9qZWN0cy9wZXJzby9yZWFjdGl2ZS10b2RvLWxpc3QtcjJkYmMvdG9kby1saXN0LXVpL3NyYy9hcHAvaXRlbS1zYXZlLWRpYWxvZy9pdGVtLXNhdmUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pdGVtLXNhdmUtZGlhbG9nL2l0ZW0tc2F2ZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaXRlbS1zYXZlLWRpYWxvZy9pdGVtLXNhdmUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbnRleHRhcmVhIHtcbiAgcmVzaXplOiBub25lO1xufVxuIiwiLm1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbnRleHRhcmVhIHtcbiAgcmVzaXplOiBub25lO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemSaveDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-item-edit',
          templateUrl: './item-save-dialog.component.html',
          styleUrls: ['./item-save-dialog.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/item/item.component.ts":
  /*!****************************************!*\
    !*** ./src/app/item/item.component.ts ***!
    \****************************************/

  /*! exports provided: ItemComponent */

  /***/
  function srcAppItemItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemComponent", function () {
      return ItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _item_save_dialog_item_save_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../item-save-dialog/item-save-dialog.component */
    "./src/app/item-save-dialog/item-save-dialog.component.ts");
    /* harmony import */


    var _utils_date_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../utils/date-utils */
    "./src/app/utils/date-utils.ts");
    /* harmony import */


    var _service_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service/item.service */
    "./src/app/service/item.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _pipe_moment_humanize_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../pipe/moment-humanize.pipe */
    "./src/app/pipe/moment-humanize.pipe.ts");

    function ItemComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemComponent_div_14_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.edit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemComponent_div_14_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3["delete"]();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.actionInProgress);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.actionInProgress);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "recent": a0
      };
    };

    var ItemComponent = /*#__PURE__*/function () {
      function ItemComponent(itemService, dialog) {
        _classCallCheck(this, ItemComponent);

        this.itemService = itemService;
        this.dialog = dialog;
        this.readonly = false;
        this.itemDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.itemUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.displayMenu = false;
        this.actionInProgress = false;
      }

      _createClass(ItemComponent, [{
        key: "delete",
        value: function _delete() {
          var _this6 = this;

          this.actionInProgress = true;
          this.itemService["delete"](this.item.id, this.item.version).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
            return _this6.actionInProgress = false;
          })).subscribe(function () {
            _this6.itemDeleted.emit();
          });
        }
      }, {
        key: "edit",
        value: function edit() {
          var _this7 = this;

          this.actionInProgress = true;
          var dialogRef = this.dialog.open(_item_save_dialog_item_save_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ItemSaveDialogComponent"], {
            width: '650px',
            disableClose: true,
            data: this.item
          });
          dialogRef.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function (response) {
            if (response) {
              _this7.itemService.updateDescription(_this7.item.id, _this7.item.version, response).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
                return _this7.actionInProgress = false;
              })).subscribe(function () {
                _this7.itemUpdated.emit();
              });
            } else {
              _this7.actionInProgress = false;
            }
          });
        }
      }, {
        key: "hasBeenUpdateRecently",
        value: function hasBeenUpdateRecently() {
          return _utils_date_utils__WEBPACK_IMPORTED_MODULE_3__["DateUtils"].toDuration(this.item.lastModifiedDate).asSeconds() < 5;
        }
      }, {
        key: "displayActionButtons",
        value: function displayActionButtons() {
          return !this.readonly && this.displayMenu;
        }
      }]);

      return ItemComponent;
    }();

    ItemComponent.ɵfac = function ItemComponent_Factory(t) {
      return new (t || ItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]));
    };

    ItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ItemComponent,
      selectors: [["app-item"]],
      inputs: {
        item: "item",
        readonly: "readonly"
      },
      outputs: {
        itemDeleted: "itemDeleted",
        itemUpdated: "itemUpdated"
      },
      decls: 15,
      vars: 8,
      consts: [["fxLayout", "row", 3, "mouseenter", "mouseleave"], [2, "width", "10%"], [2, "width", "80%", 3, "mouseup", "mousedown"], [1, "item-card"], [1, "item-description"], [1, "timestamp-info", 3, "ngClass"], ["fxLayout", "column", "fxLayoutAlign", "space-evenly", "class", "toolbar fade", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "space-evenly", 1, "toolbar", "fade"], ["color", "basic", "mat-mini-fab", "", "matTooltip", "Edit the item", 1, "icon", 3, "disabled", "click"], ["color", "accent", "mat-mini-fab", "", "matTooltip", "Delete the item", 1, "icon", 3, "disabled", "click"]],
      template: function ItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function ItemComponent_Template_div_mouseenter_0_listener() {
            return ctx.displayMenu = true;
          })("mouseleave", function ItemComponent_Template_div_mouseleave_0_listener() {
            return ctx.displayMenu = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseup", function ItemComponent_Template_div_mouseup_2_listener() {
            return ctx.displayMenu = true;
          })("mousedown", function ItemComponent_Template_div_mousedown_2_listener() {
            return ctx.displayMenu = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-card-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "momentHumanize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ItemComponent_div_14_Template, 7, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.hasBeenUpdateRecently()));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Saved ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 4, ctx.item.lastModifiedDate), " ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayActionButtons());
        }
      },
      directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardFooter"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"]],
      pipes: [_pipe_moment_humanize_pipe__WEBPACK_IMPORTED_MODULE_12__["MomentHumanizePipe"]],
      styles: [".item-card[_ngcontent-%COMP%] {\n  padding: 15px;\n  background-color: lightyellow;\n  margin: 0;\n  overflow: auto;\n  min-height: 75px;\n  max-height: 200px;\n}\n\n.item-description[_ngcontent-%COMP%] {\n  padding-right: 20px;\n  padding-left: 5px;\n  word-break: break-all;\n  word-wrap: break-word;\n  white-space: pre-line;\n}\n\n.icon[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  cursor: pointer;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.fade[_ngcontent-%COMP%] {\n  -webkit-animation: fadeIn 0.5s linear;\n          animation: fadeIn 0.5s linear;\n}\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.timestamp-info[_ngcontent-%COMP%] {\n  color: darkgrey;\n  padding-top: 2px;\n  text-align: right;\n  width: 100%;\n  font-size: 11px;\n  font-family: sans-serif;\n}\n\n.timestamp-info.recent[_ngcontent-%COMP%] {\n  color: darkgreen;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hamFjcXVvdC9Qcm9qZWN0cy9wZXJzby9yZWFjdGl2ZS10b2RvLWxpc3QtcjJkYmMvdG9kby1saXN0LXVpL3NyYy9hcHAvaXRlbS9pdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pdGVtL2l0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FER0E7RUFDRSxxQ0FBQTtVQUFBLDZCQUFBO0FDQUY7O0FER0E7RUFDRTtJQUNFLFVBQUE7RUNBRjtFREVBO0lBQ0UsVUFBQTtFQ0FGO0FBQ0Y7O0FETkE7RUFDRTtJQUNFLFVBQUE7RUNBRjtFREVBO0lBQ0UsVUFBQTtFQ0FGO0FBQ0Y7O0FER0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNERjs7QURHRTtFQUNFLGdCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9pdGVtL2l0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS1jYXJkIHtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHR5ZWxsb3c7XG4gIG1hcmdpbjogMDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDc1cHg7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xufVxuXG4uaXRlbS1kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xufVxuXG4uaWNvbiB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50b29sYmFyIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG5cbn1cblxuLmZhZGUge1xuICBhbmltYXRpb246IGZhZGVJbiAwLjVzIGxpbmVhcjtcbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMFxuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLnRpbWVzdGFtcC1pbmZvIHtcbiAgY29sb3I6IGRhcmtncmV5O1xuICBwYWRkaW5nLXRvcDogMnB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG5cbiAgJi5yZWNlbnQge1xuICAgIGNvbG9yOiBkYXJrZ3JlZW47XG4gIH1cbn1cblxuIiwiLml0ZW0tY2FyZCB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0eWVsbG93O1xuICBtYXJnaW46IDA7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtaW4taGVpZ2h0OiA3NXB4O1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbn1cblxuLml0ZW0tZGVzY3JpcHRpb24ge1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbn1cblxuLmljb24ge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udG9vbGJhciB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uZmFkZSB7XG4gIGFuaW1hdGlvbjogZmFkZUluIDAuNXMgbGluZWFyO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi50aW1lc3RhbXAtaW5mbyB7XG4gIGNvbG9yOiBkYXJrZ3JleTtcbiAgcGFkZGluZy10b3A6IDJweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuLnRpbWVzdGFtcC1pbmZvLnJlY2VudCB7XG4gIGNvbG9yOiBkYXJrZ3JlZW47XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-item',
          templateUrl: './item.component.html',
          styleUrls: ['./item.component.scss']
        }]
      }], function () {
        return [{
          type: _service_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }];
      }, {
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        readonly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        itemDeleted: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        itemUpdated: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/model/item-status.enum.ts":
  /*!*******************************************!*\
    !*** ./src/app/model/item-status.enum.ts ***!
    \*******************************************/

  /*! exports provided: ItemStatus */

  /***/
  function srcAppModelItemStatusEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemStatus", function () {
      return ItemStatus;
    });

    var ItemStatus;

    (function (ItemStatus) {
      ItemStatus["TODO"] = "TO DO";
      ItemStatus["IN_PROGRESS"] = "IN PROGRESS";
      ItemStatus["DONE"] = "DONE";
    })(ItemStatus || (ItemStatus = {}));
    /***/

  },

  /***/
  "./src/app/pipe/moment-humanize.pipe.ts":
  /*!**********************************************!*\
    !*** ./src/app/pipe/moment-humanize.pipe.ts ***!
    \**********************************************/

  /*! exports provided: MomentHumanizePipe */

  /***/
  function srcAppPipeMomentHumanizePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MomentHumanizePipe", function () {
      return MomentHumanizePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _utils_date_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../utils/date-utils */
    "./src/app/utils/date-utils.ts");

    var MomentHumanizePipe = /*#__PURE__*/function () {
      function MomentHumanizePipe() {
        _classCallCheck(this, MomentHumanizePipe);
      }

      _createClass(MomentHumanizePipe, [{
        key: "transform",
        value: function transform(value) {
          return value ? _utils_date_utils__WEBPACK_IMPORTED_MODULE_1__["DateUtils"].toDuration(value).humanize() : null;
        }
      }]);

      return MomentHumanizePipe;
    }();

    MomentHumanizePipe.ɵfac = function MomentHumanizePipe_Factory(t) {
      return new (t || MomentHumanizePipe)();
    };

    MomentHumanizePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "momentHumanize",
      type: MomentHumanizePipe,
      pure: false
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MomentHumanizePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'momentHumanize',
          pure: false
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/service/item.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/service/item.service.ts ***!
    \*****************************************/

  /*! exports provided: ItemService */

  /***/
  function srcAppServiceItemServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemService", function () {
      return ItemService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var ItemService = /*#__PURE__*/function () {
      function ItemService(http, ngZone) {
        _classCallCheck(this, ItemService);

        this.http = http;
        this.ngZone = ngZone;
        this.baseUrl = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/items");
      }

      _createClass(ItemService, [{
        key: "findAll",
        value: function findAll() {
          var _this8 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (subscriber) {
            var eventSource = new EventSource(_this8.baseUrl); // Process incoming messages

            eventSource.onmessage = function (event) {
              var item = JSON.parse(event.data);

              _this8.ngZone.run(function () {
                return subscriber.next(item);
              });
            }; // Handle error


            eventSource.onerror = function (error) {
              if (eventSource.readyState === 0) {
                // The connection has been closed by the server
                eventSource.close();
                subscriber.complete();
              } else {
                subscriber.error(error);
              }
            };
          });
        }
      }, {
        key: "addItem",
        value: function addItem(description) {
          return this.http.post(this.baseUrl, {
            description: description
          });
        }
      }, {
        key: "findById",
        value: function findById(id) {
          return this.http.get("".concat(this.baseUrl, "/").concat(id));
        }
      }, {
        key: "delete",
        value: function _delete(id, version) {
          return this.http["delete"]("".concat(this.baseUrl, "/").concat(id), ItemService.buildOptions(version));
        }
      }, {
        key: "updateDescription",
        value: function updateDescription(id, version, description) {
          return this.http.patch("".concat(this.baseUrl, "/").concat(id), {
            description: description
          }, ItemService.buildOptions(version));
        }
      }, {
        key: "updateStatus",
        value: function updateStatus(id, version, status) {
          return this.http.patch("".concat(this.baseUrl, "/").concat(id), {
            status: status
          }, ItemService.buildOptions(version));
        }
      }, {
        key: "listenToEvents",
        value: function listenToEvents(onSaved, onDeleted) {
          var eventSource = new EventSource("".concat(this.baseUrl, "/events")); // Handle the creation and the update of items

          eventSource.addEventListener('ItemSaved', function (event) {
            onSaved(JSON.parse(event.data));
          }); // Handle the deletion of items

          eventSource.addEventListener('ItemDeleted', function (event) {
            onDeleted(JSON.parse(event.data));
          }); // Handle errors

          eventSource.onerror = function (error) {
            if (eventSource.readyState === 0) {
              // The connection has been closed
              // We should not close the eventSource in order to allow the automatic reconnection
              console.error('Stream closed');
            } else {
              console.error(error);
            }
          };

          return eventSource;
        }
      }], [{
        key: "buildOptions",
        value: function buildOptions(version) {
          return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'if-match': String(version)
            })
          };
        }
      }]);

      return ItemService;
    }();

    ItemService.ɵfac = function ItemService_Factory(t) {
      return new (t || ItemService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
    };

    ItemService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ItemService,
      factory: ItemService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/utils/date-utils.ts":
  /*!*************************************!*\
    !*** ./src/app/utils/date-utils.ts ***!
    \*************************************/

  /*! exports provided: DateUtils */

  /***/
  function srcAppUtilsDateUtilsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateUtils", function () {
      return DateUtils;
    });
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

    var DateUtils = /*#__PURE__*/function () {
      function DateUtils() {
        _classCallCheck(this, DateUtils);
      }

      _createClass(DateUtils, null, [{
        key: "toDuration",
        value: function toDuration(value) {
          return value ? moment__WEBPACK_IMPORTED_MODULE_0__["duration"](moment__WEBPACK_IMPORTED_MODULE_0__().utc().diff(value)) : null;
        }
      }]);

      return DateUtils;
    }();
    /***/

  },

  /***/
  "./src/app/utils/map-utils.ts":
  /*!************************************!*\
    !*** ./src/app/utils/map-utils.ts ***!
    \************************************/

  /*! exports provided: MapUtils */

  /***/
  function srcAppUtilsMapUtilsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapUtils", function () {
      return MapUtils;
    });

    var MapUtils = /*#__PURE__*/function () {
      function MapUtils() {
        _classCallCheck(this, MapUtils);
      }

      _createClass(MapUtils, null, [{
        key: "findKeyByValue",
        value: function findKeyByValue(map, value) {
          var _iterator3 = _createForOfIteratorHelper(map.keys()),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var key = _step3.value;

              if (map.get(key) === value) {
                return key;
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          return undefined;
        }
      }]);

      return MapUtils;
    }();
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
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: 'http://localhost:8080'
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
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
    /*! /Users/ajacquot/Projects/perso/reactive-todo-list-r2dbc/todo-list-ui/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map