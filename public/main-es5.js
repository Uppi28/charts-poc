var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$": 
        /*!**************************************************!*\
          !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
          \**************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
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
                "./en-SG": "./node_modules/moment/locale/en-SG.js",
                "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
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
                "./en-nz": "./node_modules/moment/locale/en-nz.js",
                "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
                "./eo": "./node_modules/moment/locale/eo.js",
                "./eo.js": "./node_modules/moment/locale/eo.js",
                "./es": "./node_modules/moment/locale/es.js",
                "./es-do": "./node_modules/moment/locale/es-do.js",
                "./es-do.js": "./node_modules/moment/locale/es-do.js",
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
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div class=\"appContent\">\n  <router-outlet></router-outlet>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/commercial/commercial.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commercial/commercial.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tabContentWrapper\">\n    <div class=\"noPadding filterWrapper\">\n        <app-filters></app-filters>\n    </div>\n    <div class=\"tabBody\">\n        <div class=\"tabTitle flex alignCenter justCenter\">\n            Commercials\n        </div>\n        <div class=\"chartsWrapper\">\n            <div class=\"chartWrapper\" style=\"width: 100%;\">\n                <app-bubble-chart [xLabel]=\"xLabel\" [yLabel]=\"yLabel\" [bubbleChartData]=\"bubbleData\" (clicked)=\"scatterClicked($event)\"></app-bubble-chart>\n            </div>\n            <div class=\"chartWrapper\" style=\"width: 100%;\">\n                <app-line-chart [lineData]=\"trendLineData\" [lineLabels]=\"trendLineLabels\" [xLabel]=\"'Months'\"\n                    [yLabel]=\"'Cost($)'\" width=\"100%\" height=\"100%\" [chartColor]=\"trendLineColor\">\n                </app-line-chart>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"headerWrapper width100 flex alignCenter justLeft \">\n    <div class=\"flex alignCenter justLeft\">\n        <i class=\"material-icons\" routerLink='/home'>home</i>\n        <span style=\"margin: 0 15px;\">Product Decision Engine</span>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tabContentWrapper flex alignCenter justSE row noPadding\">\n    <div class=\"routerImgWrapper col-xs-6 col-sm-6 col-md-3 col-lg-3 noPadding flex flexDirCol alignCenter\" routerLink='/portfolio'>\n        <img src=\"../../assets/images/portfolio.png\" alt=\"\" srcset=\"\">\n        <span class=\"routerTitle\">Product Portfolio</span>\n    </div>\n    <div class=\"routerImgWrapper col-xs-6 col-sm-6 col-md-3 col-lg-3 noPadding flex flexDirCol alignCenter\" routerLink='/rnd'>\n        <img src=\"../../assets/images/rnd.png\" alt=\"\" srcset=\"\">\n        <span class=\"routerTitle\">Research and Development</span>\n    </div>\n    <div class=\"routerImgWrapper col-xs-6 col-sm-6 col-md-3 col-lg-3 noPadding flex flexDirCol alignCenter\" routerLink='/commercial'>\n        <img src=\"../../assets/images/commercial.png\" alt=\"\" srcset=\"\">\n        <span class=\"routerTitle\">Commercials</span>\n    </div>\n    <div class=\"routerImgWrapper col-xs-6 col-sm-6 col-md-3 col-lg-3 noPadding flex flexDirCol alignCenter\" routerLink='/logistics'>\n        <img src=\"../../assets/images/logistics.jpg\" alt=\"\" srcset=\"\">\n        <span class=\"routerTitle\">Inbound Logistics</span>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/logistics/logistics.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/logistics/logistics.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tabContentWrapper\">\n    <div class=\"noPadding filterWrapper\">\n        <app-filters></app-filters>\n    </div>\n    <div class=\"tabBody\">\n        <div class=\"tabTitle flex alignCenter justCenter\">\n            Inbound Logistics\n        </div>\n        <div class=\"chartsWrapper flex alignCenter justCenter\">\n            <div class=\"chartWrapper multiChartHolder\" style=\"width: 70%; height: 70%;\">\n                <app-bar-chart [barData]=\"logisticsMulti\" [barLabels]=\"logisticsMultiLabels\" [xLabel]=\"xLabel\" [yLabel]=\"yLabel\"\n                    [chartColor]=\"'#04A777'\">\n                </app-bar-chart>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio/portfolio.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio/portfolio.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tabContentWrapper\">\n    <div class=\"noPadding filterWrapper\">\n        <app-filters></app-filters>\n    </div>\n    <div class=\"tabBody\">\n        <div class=\"tabTitle flex alignCenter justCenter\">\n            Product Performance\n        </div>\n        <div class=\"chartsWrapper\">\n            <mat-tab-group>\n                <mat-tab label=\"Sales\">\n                    <div class=\"chartWrapper\">\n                        <app-bar-chart [chartName]=\"'ppSales'\" [barData]=\"salesBarData\" [barLabels]=\"[2015, 2016, 2017, 2018, 2019]\"\n                            [xLabel]=\"'Years'\" [yLabel]=\"'LSV($MM)'\" [chartColor]=\"'#ffe29a'\" (clicked)=\"barClicked($event)\">\n                        </app-bar-chart>\n                    </div>\n                    <div class=\"chartWrapper\">\n                        <app-line-chart [lineData]=\"salesLineData\" [lineLabels]=\"['P1', 'P2', 'P3', 'P4', 'P5', 'P6']\" [xLabel]=\"'Periods'\"\n                            [yLabel]=\"'LSV($MM)'\" width=\"100%\" height=\"100%\" [chartColor]=\"'#04a777'\">\n                        </app-line-chart>\n                    </div>\n                </mat-tab>\n                <mat-tab label=\"Volume\">\n                    <div class=\"chartWrapper\">\n                        <app-bar-chart [chartName]=\"'ppVol'\" [barData]=\"volBarData\" [barLabels]=\"[2015, 2016, 2017, 2018, 2019]\"\n                            [xLabel]=\"'Years'\" [yLabel]=\"'Tonnes'\" [chartColor]=\"'#f99eb5'\" (clicked)=\"barClicked($event)\">\n                        </app-bar-chart>\n                    </div>\n                    <div class=\"chartWrapper\">\n                        <app-line-chart [lineData]=\"volLineData\" [lineLabels]=\"['P1', 'P2', 'P3', 'P4', 'P5', 'P6']\" [xLabel]=\"'Periods'\"\n                            [yLabel]=\"'Tonnes'\" width=\"100%\" height=\"100%\" [chartColor]=\"'#84a0d5'\">\n                        </app-line-chart>\n                    </div>\n                </mat-tab>\n                <mat-tab label=\"COGS\">\n                    <div class=\"chartWrapper\">\n                        <app-bar-chart [chartName]=\"'ppCogs'\" [barData]=\"cogsBarData\" [barLabels]=\"[2015, 2016, 2017, 2018, 2019]\"\n                            [xLabel]=\"'Years'\" [yLabel]=\"'$MM'\" [chartColor]=\"'#f99eb5'\" (clicked)=\"barClicked($event)\">\n                        </app-bar-chart>\n                    </div>\n                    <div class=\"chartWrapper\">\n                        <app-line-chart [lineData]=\"cogsLineData\" [lineLabels]=\"lineChartLabels\" [xLabel]=\"'Periods'\"\n                            [yLabel]=\"'$(MM)'\" width=\"100%\" height=\"100%\" [chartColor]=\"'#04a777'\">\n                        </app-line-chart>\n                    </div>\n                </mat-tab>\n            </mat-tab-group>\n            <mat-card>Market Performance</mat-card>\n            <mat-tab-group>\n                <mat-tab label=\"Volume\">\n                    <div class=\"chartWrapper donutHolder\">\n                        <app-doughnut-chart [donutData]=\"[1,2]\" [donutLabels]=\"['Mars', 'Competitors']\"\n                            (clicked)=\"dunutClicked($event)\" [chartName]=\"'abc'\"></app-doughnut-chart>\n                    </div>\n                    <div class=\"chartWrapper multiChartHolder\">\n                        <app-bar-chart [barData]=\"mktPerfBarData\" [barLabels]=\"['P1', 'P2', 'P3', 'P4', 'P5', 'P6']\" [xLabel]=\"'Periods'\"\n                            [yLabel]=\"yLabel\" [chartColor]=\"'#04A777'\">\n                        </app-bar-chart>\n                    </div>\n                </mat-tab>\n                <mat-tab label=\"Sales\">\n                    <div class=\"chartWrapper donutHolder\">\n                        <app-doughnut-chart [donutData]=\"[1,2]\" [donutLabels]=\"['Mars', 'Competitors']\"\n                            (clicked)=\"dunutClicked($event)\" [chartName]=\"'abc'\"></app-doughnut-chart>\n                    </div>\n                    <div class=\"chartWrapper multiChartHolder\">\n                        <app-bar-chart [barData]=\"mktPerfBarData\" [barLabels]=\"['P1', 'P2', 'P3', 'P4', 'P5', 'P6']\" [xLabel]=\"'Periods'\"\n                            [yLabel]=\"yLabel\" [chartColor]=\"'#04A777'\">\n                        </app-bar-chart>\n                    </div>\n                </mat-tab>\n            </mat-tab-group>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/rnd/rnd.component.html": 
        /*!******************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rnd/rnd.component.html ***!
          \******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tabContentWrapper\">\n    <div class=\"noPadding filterWrapper\">\n        <app-filters></app-filters>\n    </div>\n    <div class=\"tabBody\">\n        <div class=\"tabTitle flex alignCenter justCenter\">\n            Research and Development\n        </div>\n        <div class=\"chartsWrapper\">\n            <div class=\"height100 width50 pullLeft\">\n                <div class=\"chartWrapper\" style=\"width: 100%;\">\n                    <app-doughnut-chart [donutData]=\"donutData\" [donutLabels]=\"donutLabels\"\n                        (clicked)=\"donutClicked($event)\" [chartName]=\"'abc'\"></app-doughnut-chart>\n                    <div class=\"flex alignCenter justCenter\">Original recipe Composition</div>\n                </div>\n                <div class=\"chartWrapper\" style=\"overflow: auto; width: 100%;\">\n                    <mat-card style=\"background: gray; color: white;\">\n                        Alternate Ingredients' List <span> For: Ing {{altIngindex + 1}}</span>\n                    </mat-card>\n                    <div *ngFor=\"let alt of altIngs\">\n                        <mat-card style=\"background: lightgray;\">{{alt}}</mat-card>\n                    </div>\n                </div>\n            </div>\n            <div class=\"chartWrapper\" style=\"height: 100%;\">\n                <mat-card style=\"background: gray; color: white;\">Cost Simulator</mat-card>\n                <div style=\"height: 75%; overflow: auto;\">\n                    <mat-card class=\"alignCenter justSB\" style=\"display: flex;\"\n                        *ngFor=\"let altIngs of altIngsAll; let i = index; trackBy: trackByIndex\">\n                        <span>Ing {{i}} </span>\n                        <i class=\"material-icons\">repeat</i>\n                        <mat-form-field>\n                            <mat-label>Select alternate Ingredient</mat-label>\n                            <mat-select>\n                                <mat-option\n                                    *ngFor=\"let altIng of altIngsAll[i]; let index = index; trackBy: trackByIndex\"\n                                    [value]=\"altIngsAll[i][index]\">\n                                    {{altIngsAll[i][index]}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </mat-card>\n                </div>\n                <mat-card class=\"flex alignCenter justSB\" style=\"display: flex; background: lightgray;\">\n                    <button mat-raised-button color=\"primary\" (click)=\"calcUpdatedCost()\"> Generate updated\n                        cost</button>\n                    <div>{{updatedCost}}</div>\n                </mat-card>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/bar-chart/bar-chart.component.html": 
        /*!*************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/bar-chart/bar-chart.component.html ***!
          \*************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"chart-wrapper\">\n    <canvas baseChart \n    [datasets]=\"barChartData\"\n    [labels]=\"barChartLabels\"\n    [options]=\"barChartOptions\"\n    [plugins]=\"barChartPlugins\"\n    [legend]=\"barChartLegend\"\n    [chartType]=\"barChartType\"\n    [colors]=\"barChartColors\"\n    (chartClick)=\"barClicked($event)\">\n  </canvas>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/bubble-chart/bubble-chart.component.html": 
        /*!*******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/bubble-chart/bubble-chart.component.html ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"chart-wrapper\">\n    <canvas \n        baseChart \n        [datasets]=\"bubbleChartData\" \n        [options]=\"bubbleChartOptions\" \n        [colors]=\"bubbleChartColors\"\n        [legend]=\"bubbleChartLegend\" \n        [chartType]=\"bubbleChartType\"\n        (chartClick)=\"scatterClicked($event)\">\n    </canvas>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/doughnut-chart/doughnut-chart.component.html": 
        /*!***********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/doughnut-chart/doughnut-chart.component.html ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"chart-wrapper\">\n    <canvas baseChart \n    [data]=\"doughnutChartData\"\n    [labels]=\"doughnutChartLabels\"\n    [chartType]=\"doughnutChartType\"\n    [options]=\"doughnutOptions\"\n    (chartClick)=\"donutClicked($event)\">\n  </canvas>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/filters/filters.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/filters/filters.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"filterContent\">\n    <div class=\"col-12 flex alignCenter justSB filterHeader\">\n        <div>Select Filters</div>\n        <div class=\"flex alignCenter justCenter pointer\" (click)=\"toggleFilters()\">\n            <i class=\"material-icons\">filter_list</i>\n        </div>\n    </div>\n    <div class=\"col-12\" class=\"filterBody\">\n        <div class=\"filterSectionHolder\">\n            <app-multi-select [data]='[\"Segment1\", \"Segment2\", \"Segment3\", \"Segment4\", \"Segment5\", \"Segment6\"]'\n                [styles]=\"{'font-size': '1rem'}\" [index]=\"1\" [allowAlias]=\"false\"\n                (optionSelected)=\"selectionDone($event)\" [filterFor]=\"'Segment'\"></app-multi-select>\n        </div>\n        <div class=\"filterSectionHolder\">\n            <app-multi-select [data]='[\"RegionA\", \"RegionB\", \"RegionC\", \"RegionD\", \"RegionE\", \"RegionF\"]'\n                [styles]=\"{'font-size': '1rem'}\" [index]=\"1\" [allowAlias]=\"false\"\n                (optionSelected)=\"selectionDone($event)\" [filterFor]=\"'Region'\"></app-multi-select>\n        </div>\n        <div class=\"filterSectionHolder\">\n            <app-multi-select [data]='[\"PlantA\", \"PlantB\", \"PlantC\", \"PlantD\", \"PlantE\", \"PlantF\"]'\n                [styles]=\"{'font-size': '1rem'}\" [index]=\"1\" [allowAlias]=\"false\"\n                (optionSelected)=\"selectionDone($event)\" [filterFor]=\"'Plant'\">\n            </app-multi-select>\n        </div>\n        <div class=\"filterSectionHolder\">\n            <app-multi-select [data]='[\"CategoryA\", \"CategoryB\", \"CategoryC\", \"CategoryD\", \"CategoryE\", \"CategoryF\"]'\n                [styles]=\"{'font-size': '1rem'}\" [index]=\"1\" [allowAlias]=\"false\"\n                (optionSelected)=\"selectionDone($event)\" [filterFor]=\"'Category'\"></app-multi-select>\n        </div>\n        <div class=\"filterSectionHolder\">\n            <app-multi-select [data]='[\"BrandA\", \"BrandB\", \"BrandC\", \"BrandD\", \"BrandE\", \"BrandF\"]'\n                [styles]=\"{'font-size': '1rem'}\" [index]=\"1\" [allowAlias]=\"false\"\n                (optionSelected)=\"selectionDone($event)\" [filterFor]=\"'Brand'\"></app-multi-select>\n        </div>\n        <div class=\"filterSectionHolder\">\n            <app-multi-select\n                [data]='[\"Pack Type A\", \"Pack Type B\", \"Pack Type C\", \"Pack Type D\", \"Pack Type E\", \"Pack Type F\"]'\n                [styles]=\"{'font-size': '1rem'}\" [index]=\"1\" [allowAlias]=\"false\"\n                (optionSelected)=\"selectionDone($event)\" [filterFor]=\"'Pack Type'\"></app-multi-select>\n        </div>\n        <div class=\"filterSectionHolder\">\n            <app-multi-select [data]='[\"SKUA\", \"SKUB\", \"SKUC\", \"SKUD\", \"SKUE\", \"SKUF\"]' [styles]=\"{'font-size': '1rem'}\"\n                [index]=\"1\" [allowAlias]=\"false\" (optionSelected)=\"selectionDone($event)\" [filterFor]=\"'SKU'\">\n            </app-multi-select>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/line-chart/line-chart.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/line-chart/line-chart.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"chart-wrapper\">\n    <canvas baseChart \n        [datasets]=\"lineChartData\" \n        [labels]=\"lineChartLabels\" \n        [options]=\"lineChartOptions\"\n        [colors]=\"lineChartColors\" \n        [legend]=\"lineChartLegend\" \n        [chartType]=\"lineChartType\" \n        [plugins]=\"lineChartPlugins\">\n    </canvas>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/multi-select/multi-select.component.html": 
        /*!*******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/multi-select/multi-select.component.html ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div [ngStyle]=\"styles\">\n  <div class=\"dropdown alignLeft\" (click)=\"selectClicked($event);\" style=\"cursor: pointer;display: flex;\">\n    <div class=\"selectedValuesHolder alignLeft\">\n      <div *ngIf=\"selectedValues.length !== 0\" class=\"ellipsis-title\" [title]=\"selectedValues.slice()\">\n        <!-- <div class=\"selectedValue\" *ngFor=\"let item of selectedValues\" [title]=\"item\">{{item}}</div> -->\n        <span *ngFor=\"let item of selectedValues;let i = index;\">\n          {{ item }} {{ selectedValues.length == i+1 ? '':',' }}\n        </span>\n      </div>\n      <div *ngIf=\"selectedValues.length == 0\">Select {{ filterFor }}</div>\n    </div>\n    <!-- <mat-icon style=\"font-size: 28px;width: 10%;\">arrow_drop_down</mat-icon> -->\n    <span class=\"glyphicon glyphicon-triangle-bottom\"></span>\n    <!-- <span class=\"glyphicon glyphicon-triangle-top\" *ngIf=\"!hideMenu\"></span> -->\n  </div>\n  <div class=\"screen-bg\" (click)=\"closeDropDown()\" *ngIf=\"hideMenu\">\n  </div>\n  <div class=\"dropdownMenu positionAb\" *ngIf=\"hideMenu\" [ngStyle]=\"{ 'top' : client.y , 'left' : client.x }\">\n    <div class=\"selectAll alignMiddleLeft\">\n      <label for=\"selectAllCb_{{index}}\" class=\"container\">Select All\n        <input id=\"selectAllCb_{{index}}\" type=\"checkbox\" (click)=\"selectAllToggle()\" [disabled]=\"!filteredData.length\">\n        <span class=\"checkmark\"></span>\n      </label>\n    </div>\n    <div id=\"searchField\" class=\"searchField options\" (input)=\"startSearch($event)\" contenteditable=\"true\"></div>\n    <div class=\"options alignMiddleLeft\" *ngFor=\"let option of filteredData\">\n      <div class=\"width50 pull-left alignMiddleLeft\">\n        <label [for]=\"option\" class=\"container\">{{option}}\n          <input [id]=\"option\" class=\"dropdownMenu\" type=\"checkbox\" [value]=\"option\"\n            [checked]=\"optionsMap[option]['checked']\" (click)=\"toggleEach(option)\">\n          <span class=\"checkmark\"></span>\n        </label>\n      </div>\n      <div class=\"alignMiddleLeft width50 pull-left\" *ngIf=\"allowAlias\" [title]=\"optionsMap[option]['aliasName']\">\n        <input class=\"aliasNameInput\" type=\"text\" [value]=\"optionsMap[option]['aliasName']\" placeholder=\"Column alias\"\n          [(ngModel)]=\"optionsMap[option]['aliasName']\">\n      </div>\n    </div>\n    <div *ngIf=\"!filteredData.length\" style=\"padding: 25px;\">No Options available</div>\n  </div>\n\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
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
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
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
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _commercial_commercial_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./commercial/commercial.component */ "./src/app/commercial/commercial.component.ts");
            /* harmony import */ var _rnd_rnd_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rnd/rnd.component */ "./src/app/rnd/rnd.component.ts");
            /* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
            /* harmony import */ var _logistics_logistics_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logistics/logistics.component */ "./src/app/logistics/logistics.component.ts");
            var appRoutes = [
                { path: '', redirectTo: '/home', pathMatch: 'full' },
                { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
                { path: 'commercial', component: _commercial_commercial_component__WEBPACK_IMPORTED_MODULE_4__["CommercialComponent"] },
                { path: 'rnd', component: _rnd_rnd_component__WEBPACK_IMPORTED_MODULE_5__["RndComponent"] },
                { path: 'portfolio', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__["PortfolioComponent"] },
                { path: 'logistics', component: _logistics_logistics_component__WEBPACK_IMPORTED_MODULE_7__["LogisticsComponent"] },
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'charts-poc';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
            /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
            /* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app/app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _shared_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/bar-chart/bar-chart.component */ "./src/app/shared/bar-chart/bar-chart.component.ts");
            /* harmony import */ var _shared_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/line-chart/line-chart.component */ "./src/app/shared/line-chart/line-chart.component.ts");
            /* harmony import */ var _shared_doughnut_chart_doughnut_chart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/doughnut-chart/doughnut-chart.component */ "./src/app/shared/doughnut-chart/doughnut-chart.component.ts");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _rnd_rnd_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./rnd/rnd.component */ "./src/app/rnd/rnd.component.ts");
            /* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
            /* harmony import */ var _logistics_logistics_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./logistics/logistics.component */ "./src/app/logistics/logistics.component.ts");
            /* harmony import */ var _commercial_commercial_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./commercial/commercial.component */ "./src/app/commercial/commercial.component.ts");
            /* harmony import */ var _shared_filters_filters_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/filters/filters.component */ "./src/app/shared/filters/filters.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _shared_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/multi-select/multi-select.component */ "./src/app/shared/multi-select/multi-select.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _shared_bubble_chart_bubble_chart_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/bubble-chart/bubble-chart.component */ "./src/app/shared/bubble-chart/bubble-chart.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                        _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                        _shared_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_11__["BarChartComponent"],
                        _shared_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_12__["LineChartComponent"],
                        _shared_doughnut_chart_doughnut_chart_component__WEBPACK_IMPORTED_MODULE_13__["DoughnutChartComponent"],
                        _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                        _rnd_rnd_component__WEBPACK_IMPORTED_MODULE_15__["RndComponent"],
                        _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_16__["PortfolioComponent"],
                        _logistics_logistics_component__WEBPACK_IMPORTED_MODULE_17__["LogisticsComponent"],
                        _commercial_commercial_component__WEBPACK_IMPORTED_MODULE_18__["CommercialComponent"],
                        _shared_filters_filters_component__WEBPACK_IMPORTED_MODULE_19__["FiltersComponent"],
                        _shared_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_21__["MultiSelectComponent"],
                        _shared_bubble_chart_bubble_chart_component__WEBPACK_IMPORTED_MODULE_23__["BubbleChartComponent"],
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
                        _app_app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ReactiveFormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                        _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase),
                        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/commercial/commercial.component.css": 
        /*!*****************************************************!*\
          !*** ./src/app/commercial/commercial.component.css ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".chartWrapper{\n    height: 50%;\n    width: 50%;\n    float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbWVyY2lhbC9jb21tZXJjaWFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lcmNpYWwvY29tbWVyY2lhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXJ0V3JhcHBlcntcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICB3aWR0aDogNTAlO1xuICAgIGZsb2F0OiBsZWZ0O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/commercial/commercial.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/commercial/commercial.component.ts ***!
          \****************************************************/
        /*! exports provided: CommercialComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommercialComponent", function () { return CommercialComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var CommercialComponent = /** @class */ (function () {
                function CommercialComponent() {
                    this.xLabel = 'Composition(%)';
                    this.yLabel = 'Cost($)';
                    this.trendLineColor = 'red';
                    this.mockData = [
                        [1, 2, 3, 4, 5, 6],
                        [5, 4, 3, 2, 1, 0],
                        [5, 3, 4, 1, 2, 0],
                        [10, 10, 20, 20, 10, 10]
                    ];
                }
                CommercialComponent.prototype.scatterClicked = function (data) {
                    this.trendLineData[0].data = this.mockData[data.index];
                };
                CommercialComponent.prototype.ngOnInit = function () {
                    this.trendLineData = [
                        {
                            data: [95, 29, 89, 15, 57, 5], label: 'Cost Trend',
                            backgroundColor: 'red'
                        }
                    ];
                    this.trendLineLabels = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6'];
                    this.bubbleData = [
                        {
                            data: [
                                { x: 10, y: 10, r: 10 },
                                { x: 15, y: 5, r: 15 },
                                { x: 24, y: 12, r: 23 },
                                { x: 7, y: 8, r: 8 },
                            ],
                            label: 'Cost per Kilogram',
                            backgroundColor: 'green',
                            borderColor: 'transparent'
                        },
                    ];
                };
                return CommercialComponent;
            }());
            CommercialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-commercial',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./commercial.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/commercial/commercial.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./commercial.component.css */ "./src/app/commercial/commercial.component.css")).default]
                })
            ], CommercialComponent);
            /***/ 
        }),
        /***/ "./src/app/header/header.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/header/header.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".headerWrapper{\n    background: #00003c;\n    color: white;\n    padding: 0 1rem;\n    height: 5rem;\n    position: fixed;\n    top: 0;\n    font-size: 1.5rem;\n    z-index: 2;\n    box-shadow: 0px 3px 5px black;\n}\n.material-icons{\n    font-size: 40px;\n    cursor: pointer;\n}\n.material-icons:focus{\n    outline: 0\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLGVBQWU7SUFDZixNQUFNO0lBQ04saUJBQWlCO0lBQ2pCLFVBQVU7SUFDViw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGVBQWU7SUFDZixlQUFlO0FBQ25CO0FBQ0E7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcldyYXBwZXJ7XG4gICAgYmFja2dyb3VuZDogIzAwMDAzYztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICAgIGhlaWdodDogNXJlbTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIHotaW5kZXg6IDI7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggYmxhY2s7XG59XG4ubWF0ZXJpYWwtaWNvbnN7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tYXRlcmlhbC1pY29uczpmb2N1c3tcbiAgICBvdXRsaW5lOiAwXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/header/header.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/header/header.component.ts ***!
          \********************************************/
        /*! exports provided: HeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HeaderComponent = /** @class */ (function () {
                function HeaderComponent() {
                }
                HeaderComponent.prototype.ngOnInit = function () {
                };
                return HeaderComponent;
            }());
            HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
                })
            ], HeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/home/home.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/home/home.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("img{\n    width: 80%;\n}\n.routerTitle{\n    padding: 2rem 0;\n}\n.routerImgWrapper:focus{\n    outline: 0\n}\n.routerImgWrapper{\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcbiAgICB3aWR0aDogODAlO1xufVxuLnJvdXRlclRpdGxle1xuICAgIHBhZGRpbmc6IDJyZW0gMDtcbn1cbi5yb3V0ZXJJbWdXcmFwcGVyOmZvY3Vze1xuICAgIG91dGxpbmU6IDBcbn1cbi5yb3V0ZXJJbWdXcmFwcGVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/home/home.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/home/home.component.ts ***!
          \****************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent() {
                }
                HomeComponent.prototype.ngOnInit = function () {
                };
                return HomeComponent;
            }());
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/logistics/logistics.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/logistics/logistics.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".chartWrapper{\n    height: 50%;\n    width: 50%;\n    float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naXN0aWNzL2xvZ2lzdGljcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9sb2dpc3RpY3MvbG9naXN0aWNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhcnRXcmFwcGVye1xuICAgIGhlaWdodDogNTAlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/logistics/logistics.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/logistics/logistics.component.ts ***!
          \**************************************************/
        /*! exports provided: LogisticsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticsComponent", function () { return LogisticsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var LogisticsComponent = /** @class */ (function () {
                function LogisticsComponent() {
                    this.xLabel = "Periods";
                    this.yLabel = "Tonnes";
                }
                LogisticsComponent.prototype.ngOnInit = function () {
                    this.logisticsMulti = [
                        { data: [900000, 70000, 734356, 234568, 113456], label: 'Demand Plan', type: 'line' },
                        { data: [50000, 50000, 50000, 50000, 50000], label: 'Physical', stack: 'a' },
                        { data: [72345, 45678, 12345, 45678, 76544], label: 'Safety Stock', stack: 'a' },
                        { data: [45672, 56789, 67899, 87654, 73456], label: 'In-Transit', stack: 'a' },
                    ];
                    this.logisticsMultiLabels = ['P1', 'P2', 'P3', 'P4', 'P5'];
                };
                return LogisticsComponent;
            }());
            LogisticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-logistics',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./logistics.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/logistics/logistics.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./logistics.component.css */ "./src/app/logistics/logistics.component.css")).default]
                })
            ], LogisticsComponent);
            /***/ 
        }),
        /***/ "./src/app/portfolio/portfolio.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/portfolio/portfolio.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep .mat-tab-body-wrapper {\n    height: 300px;\n}\n.donutHolder{\n    width: 30%;\n}\n.multiChartHolder{\n    width: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLm1hdC10YWItYm9keS13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xufVxuLmRvbnV0SG9sZGVye1xuICAgIHdpZHRoOiAzMCU7XG59XG4ubXVsdGlDaGFydEhvbGRlcntcbiAgICB3aWR0aDogNzAlO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/portfolio/portfolio.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/portfolio/portfolio.component.ts ***!
          \**************************************************/
        /*! exports provided: PortfolioComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function () { return PortfolioComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PortfolioComponent = /** @class */ (function () {
                function PortfolioComponent() {
                    this.hardCodedData = [
                        [25, 32, 68, 65, 57, 45],
                        [53, 82, 78, 46, 37, 95],
                        [15, 72, 28, 35, 27, 15],
                        [5, 72, 68, 95, 57, 15],
                        [55, 32, 78, 15, 7, 5],
                        [95, 82, 8, 15, 45, 53]
                    ];
                }
                PortfolioComponent.prototype.barClicked = function (data) {
                    var tempObj = {};
                    switch (data.chartName) {
                        case 'ppVol':
                            this.volLineData[0]['data'] = this.hardCodedData[data.index];
                            break;
                        case 'ppSales':
                            this.salesLineData[0]['data'] = this.hardCodedData[data.index];
                            break;
                        case 'ppCogs':
                            this.cogsLineData[0]['data'] = this.hardCodedData[data.index];
                            break;
                        default:
                            break;
                    }
                };
                PortfolioComponent.prototype.ngOnInit = function () {
                    this.volBarData = [
                        { data: [25, 32, 68, 65, 57], label: 'YoY Volume' },
                    ];
                    this.salesBarData = [
                        { data: [2, 50, 30, 5, 27], label: 'YoY LSV' },
                    ];
                    this.cogsBarData = [
                        { data: [10, 34, 45, 3, 76], label: 'YoY COGS' },
                    ];
                    this.volLineData = [
                        { data: [25, 32, 68, 65, 57, 45], label: 'PoP Volume' },
                    ];
                    this.salesLineData = [
                        { data: [2, 50, 30, 5, 27, 45], label: 'PoP LSV' },
                    ];
                    this.cogsLineData = [
                        { data: [10, 34, 45, 3, 76, 40], label: 'PoP COGS' },
                    ];
                    this.mktPerfBarData = [
                        { data: [1, 3, 5, 3, 7, 0], label: 'PQR', type: 'line' },
                        { data: [2, -2, 6, -5, 7, 4], label: 'ABC', type: 'line' },
                        { data: [1, 3, -5, 2, 7, 4], label: 'PQR' },
                    ];
                    this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June'];
                    this.barLabels = ['January', 'February', 'March', 'April', 'May', 'June'];
                    this.xLabel = 'Months';
                    this.yLabel = 'Sales($MM)';
                };
                return PortfolioComponent;
            }());
            PortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-portfolio',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./portfolio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio/portfolio.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./portfolio.component.css */ "./src/app/portfolio/portfolio.component.css")).default]
                })
            ], PortfolioComponent);
            /***/ 
        }),
        /***/ "./src/app/rnd/rnd.component.css": 
        /*!***************************************!*\
          !*** ./src/app/rnd/rnd.component.css ***!
          \***************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".chartWrapper{\n    width: 50%;\n    height: 50%;\n    float: left;\n}\nmat-card{\n    margin: 1rem 0;\n}\nmat-card span{\n    width: 10rem;\n}\nmat-form-field{\n    width: 20rem;\n}\nbutton{\n    outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm5kL3JuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9ybmQvcm5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhcnRXcmFwcGVye1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5tYXQtY2FyZHtcbiAgICBtYXJnaW46IDFyZW0gMDtcbn1cbm1hdC1jYXJkIHNwYW57XG4gICAgd2lkdGg6IDEwcmVtO1xufVxubWF0LWZvcm0tZmllbGR7XG4gICAgd2lkdGg6IDIwcmVtO1xufVxuYnV0dG9ue1xuICAgIG91dGxpbmU6IG5vbmU7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/rnd/rnd.component.ts": 
        /*!**************************************!*\
          !*** ./src/app/rnd/rnd.component.ts ***!
          \**************************************/
        /*! exports provided: RndComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RndComponent", function () { return RndComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var RndComponent = /** @class */ (function () {
                function RndComponent() {
                    this.altIngsAll = [
                        ['Alt11', 'Alt12', 'Alt13', 'Alt14'],
                        ['Alt21', 'Alt22', 'Alt23', 'Alt24'],
                        ['Alt31', 'Alt32', 'Alt33', 'Alt34'],
                        ['Alt41', 'Alt42', 'Alt43', 'Alt44'],
                        ['Alt51', 'Alt52', 'Alt53', 'Alt54']
                    ];
                    this.altIngs = this.altIngsAll[0];
                    this.altIngindex = 0;
                    this.updatedCost = 10;
                }
                RndComponent.prototype.calcUpdatedCost = function () {
                    this.updatedCost = Math.random() * 10;
                };
                RndComponent.prototype.donutClicked = function (data) {
                    this.altIngindex = data.index;
                    this.altIngs = this.altIngsAll[data.index];
                };
                RndComponent.prototype.trackByIndex = function (index, obj) {
                    return index;
                };
                RndComponent.prototype.ngOnInit = function () {
                    this.ing1Data = [
                        { data: [85, 72, 78, 75, 77, 75], label: 'ABC' },
                        { data: [85, 72, 78, 75, 77, 75], label: 'XYZ', type: 'line' },
                    ];
                    this.ing1Label = ['January', 'February', 'March', 'April', 'May', 'June'];
                    this.ing2Data = [
                        { data: [35, 72, 48, 65, 70, 35], label: 'ABC' },
                        { data: [35, 72, 48, 65, 70, 35], label: 'XYZ', type: 'line' },
                    ];
                    this.ing2Label = ['January', 'February', 'March', 'April', 'May', 'June'];
                    this.priceCompData = [
                        { data: [35, 72], label: 'ABC' }
                    ];
                    this.priceCompLabel = ['Ing 1', 'Ing 2'];
                    this.xLabel = 'Months';
                    this.yLabel = 'Sales($MM)';
                    this.donutData = [1, 2, 3, 4, 5];
                    this.donutLabels = ['Ing 1 ', 'Ing 2', 'Ing 3', 'Ing 4', 'Ing 5'];
                };
                return RndComponent;
            }());
            RndComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-rnd',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rnd.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/rnd/rnd.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rnd.component.css */ "./src/app/rnd/rnd.component.css")).default]
                })
            ], RndComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/bar-chart/bar-chart.component.css": 
        /*!**********************************************************!*\
          !*** ./src/app/shared/bar-chart/bar-chart.component.css ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9iYXItY2hhcnQvYmFyLWNoYXJ0LmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/shared/bar-chart/bar-chart.component.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/shared/bar-chart/bar-chart.component.ts ***!
          \*********************************************************/
        /*! exports provided: BarChartComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartComponent", function () { return BarChartComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var BarChartComponent = /** @class */ (function () {
                function BarChartComponent() {
                    this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.barChartType = 'bar';
                    this.barChartLegend = true;
                    this.barChartPlugins = [];
                }
                BarChartComponent.prototype.barClicked = function (event) {
                    this.clicked.emit({ index: event.active[0]['_index'], chartName: this.chartName });
                };
                BarChartComponent.prototype.ngOnInit = function () {
                    this.barChartColors = [
                        {
                            backgroundColor: this.chartColor,
                            borderColor: this.chartColor,
                            pointBackgroundColor: 'rgba(148,159,177,1)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
                        }
                    ];
                    this.barChartOptions = {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            xAxes: [{
                                    scaleLabel: {
                                        display: true,
                                        labelString: this.xLabel
                                    }
                                }],
                            yAxes: [{
                                    scaleLabel: {
                                        display: true,
                                        labelString: this.yLabel
                                    },
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                        },
                        elements: {
                            line: {
                                fill: false
                            }
                        }
                    };
                    this.barChartData = this.barData;
                    this.barChartLabels = this.barLabels;
                };
                return BarChartComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], BarChartComponent.prototype, "barData", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], BarChartComponent.prototype, "barLabels", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], BarChartComponent.prototype, "xLabel", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], BarChartComponent.prototype, "yLabel", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], BarChartComponent.prototype, "chartColor", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], BarChartComponent.prototype, "chartName", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], BarChartComponent.prototype, "clicked", void 0);
            BarChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-bar-chart',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bar-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/bar-chart/bar-chart.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bar-chart.component.css */ "./src/app/shared/bar-chart/bar-chart.component.css")).default]
                })
            ], BarChartComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/bubble-chart/bubble-chart.component.css": 
        /*!****************************************************************!*\
          !*** ./src/app/shared/bubble-chart/bubble-chart.component.css ***!
          \****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9idWJibGUtY2hhcnQvYnViYmxlLWNoYXJ0LmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/shared/bubble-chart/bubble-chart.component.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/shared/bubble-chart/bubble-chart.component.ts ***!
          \***************************************************************/
        /*! exports provided: BubbleChartComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BubbleChartComponent", function () { return BubbleChartComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var BubbleChartComponent = /** @class */ (function () {
                function BubbleChartComponent() {
                    this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.bubbleChartType = 'bubble';
                    this.bubbleChartLegend = true;
                    this.bubbleChartColors = [
                        {
                            backgroundColor: [
                                'green',
                                'red',
                                'blue',
                                'purple',
                                'yellow',
                                'brown',
                                'magenta',
                                'cyan',
                                'orange',
                                'pink'
                            ]
                        }
                    ];
                }
                BubbleChartComponent.prototype.scatterClicked = function (event) {
                    this.clicked.emit({ index: event.active[0]['_index'], color: event.active[0]['_options'].backgroundColor });
                };
                BubbleChartComponent.prototype.ngOnInit = function () {
                    this.bubbleChartOptions = {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            xAxes: [{
                                    scaleLabel: {
                                        display: true,
                                        labelString: this.xLabel
                                    },
                                    ticks: {
                                        min: 0,
                                        max: 30,
                                    }
                                }],
                            yAxes: [{
                                    scaleLabel: {
                                        display: true,
                                        labelString: this.yLabel
                                    },
                                    ticks: {
                                        min: 0,
                                        max: 30,
                                    }
                                }]
                        }
                    };
                };
                return BubbleChartComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], BubbleChartComponent.prototype, "xLabel", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], BubbleChartComponent.prototype, "yLabel", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], BubbleChartComponent.prototype, "bubbleChartData", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], BubbleChartComponent.prototype, "clicked", void 0);
            BubbleChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-bubble-chart',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bubble-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/bubble-chart/bubble-chart.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bubble-chart.component.css */ "./src/app/shared/bubble-chart/bubble-chart.component.css")).default]
                })
            ], BubbleChartComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/doughnut-chart/doughnut-chart.component.css": 
        /*!********************************************************************!*\
          !*** ./src/app/shared/doughnut-chart/doughnut-chart.component.css ***!
          \********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kb3VnaG51dC1jaGFydC9kb3VnaG51dC1jaGFydC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/shared/doughnut-chart/doughnut-chart.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/shared/doughnut-chart/doughnut-chart.component.ts ***!
          \*******************************************************************/
        /*! exports provided: DoughnutChartComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoughnutChartComponent", function () { return DoughnutChartComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var DoughnutChartComponent = /** @class */ (function () {
                function DoughnutChartComponent() {
                    this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                DoughnutChartComponent.prototype.donutClicked = function (event) {
                    if (event.active[0]) {
                        this.clicked.emit({ index: event.active[0]['_index'] });
                    }
                };
                DoughnutChartComponent.prototype.ngOnInit = function () {
                    this.doughnutOptions = {
                        responsive: true,
                        maintainAspectRatio: false,
                    };
                    this.doughnutChartLabels = this.donutLabels;
                    this.doughnutChartData = this.donutData;
                    this.doughnutChartType = 'doughnut';
                };
                return DoughnutChartComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DoughnutChartComponent.prototype, "donutData", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DoughnutChartComponent.prototype, "donutLabels", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DoughnutChartComponent.prototype, "chartName", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], DoughnutChartComponent.prototype, "clicked", void 0);
            DoughnutChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-doughnut-chart',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./doughnut-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/doughnut-chart/doughnut-chart.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./doughnut-chart.component.css */ "./src/app/shared/doughnut-chart/doughnut-chart.component.css")).default]
                })
            ], DoughnutChartComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/filters/filters.component.css": 
        /*!******************************************************!*\
          !*** ./src/app/shared/filters/filters.component.css ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".filterContent{\n    height: 100%;\n    background: white;\n    border-right: 1px solid grey;\n    width: calc(100% - 1px);\n}\nbutton:focus, button:active:focus, button.active:focus {\n    outline: none !important;\n    outline-style: none !important;\n}\n.filterHeader{\n    background: #000092;\n    padding: 1rem;\n    color: white;\n    font-size: 1.2rem;\n}\n.filterBody{\n    padding: 1rem;\n    color: black;\n}\n.filterSectionHolder{\n    margin-bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2ZpbHRlcnMvZmlsdGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZmlsdGVycy9maWx0ZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyQ29udGVudHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JleTtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMXB4KTtcbn1cbmJ1dHRvbjpmb2N1cywgYnV0dG9uOmFjdGl2ZTpmb2N1cywgYnV0dG9uLmFjdGl2ZTpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIG91dGxpbmUtc3R5bGU6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5maWx0ZXJIZWFkZXJ7XG4gICAgYmFja2dyb3VuZDogIzAwMDA5MjtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbn1cbi5maWx0ZXJCb2R5e1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgY29sb3I6IGJsYWNrO1xufVxuLmZpbHRlclNlY3Rpb25Ib2xkZXJ7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/shared/filters/filters.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/shared/filters/filters.component.ts ***!
          \*****************************************************/
        /*! exports provided: FiltersComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersComponent", function () { return FiltersComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FiltersComponent = /** @class */ (function () {
                function FiltersComponent() {
                    this.filtersOpen = false;
                }
                FiltersComponent.prototype.toggleFilters = function () {
                    this.filtersOpen = !this.filtersOpen;
                };
                FiltersComponent.prototype.selectionDone = function (event) {
                    console.log(event);
                };
                FiltersComponent.prototype.ngOnInit = function () {
                };
                return FiltersComponent;
            }());
            FiltersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-filters',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./filters.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/filters/filters.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./filters.component.css */ "./src/app/shared/filters/filters.component.css")).default]
                })
            ], FiltersComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/line-chart/line-chart.component.css": 
        /*!************************************************************!*\
          !*** ./src/app/shared/line-chart/line-chart.component.css ***!
          \************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9saW5lLWNoYXJ0L2xpbmUtY2hhcnQuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/shared/line-chart/line-chart.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/shared/line-chart/line-chart.component.ts ***!
          \***********************************************************/
        /*! exports provided: LineChartComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChartComponent", function () { return LineChartComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var LineChartComponent = /** @class */ (function () {
                function LineChartComponent() {
                    this.lineChartLegend = true;
                    this.lineChartPlugins = [];
                    this.lineChartType = 'line';
                }
                LineChartComponent.prototype.ngOnInit = function () {
                    this.lineChartData = this.lineData;
                    this.lineChartLabels = this.lineLabels;
                    this.lineChartOptions = {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            xAxes: [{
                                    scaleLabel: {
                                        display: true,
                                        labelString: this.xLabel
                                    }
                                }],
                            yAxes: [{
                                    scaleLabel: {
                                        display: true,
                                        labelString: this.yLabel
                                    }
                                }]
                        },
                        elements: {
                            line: {
                                fill: false
                            }
                        }
                    };
                    this.lineChartColors = [
                        {
                            backgroundColor: this.chartColor,
                            borderColor: this.chartColor,
                            pointBackgroundColor: 'rgba(148,159,177,1)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
                        },
                    ];
                };
                return LineChartComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], LineChartComponent.prototype, "lineData", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], LineChartComponent.prototype, "lineLabels", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], LineChartComponent.prototype, "xLabel", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], LineChartComponent.prototype, "yLabel", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], LineChartComponent.prototype, "chartColor", void 0);
            LineChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-line-chart',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./line-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/line-chart/line-chart.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./line-chart.component.css */ "./src/app/shared/line-chart/line-chart.component.css")).default]
                })
            ], LineChartComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/multi-select/multi-select.component.css": 
        /*!****************************************************************!*\
          !*** ./src/app/shared/multi-select/multi-select.component.css ***!
          \****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("input{\n  margin: auto 10px;\n}\n.dropdown{\n  min-width: 100px;\n  border-bottom: 1px solid grey;\n  padding: 10px 15px;\n  /* border-radius: 5px; */\n  margin-bottom: 24px;\n}\n.selectedValuesHolder{\n  width: 90%;\n}\n.selectedValue{\n  /* padding: 5px 10px; */\n  border: 1px solid #337ab7;\n  background: #337ab7;\n  color: white;\n  /* margin: 5px; */\n  border-radius: 3px;\n  float: left;\n  max-width: 100%;\n  overflow: hidden;\n}\n#searchField:empty::before {\n  content: 'Search';\n  color: grey;\n}\n.dropdownMenu{\n  box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);\n  /* border: 1px solid grey; */\n  border-radius: 3px;\n}\n.selectAll {\n  padding: 12px 20px 0px;\n  border-bottom: 1px solid grey;\n}\n.searchField{\n  border-bottom: 1px solid grey;\n}\n.options{\n  padding: 10px 20px;\n}\nlabel{\n  max-width: 98%;\n  word-break: break-word;\n  margin: 0;\n}\n.aliasNameInput{\n  border: none;\n  border-bottom: 1px solid grey;\n  border-radius: 3px;\n  /* padding: 5px 15px; */\n  float: right;\n  width: calc(100% - 10px);\n}\n/* Styling for input checkboxes */\n/* The container */\n.container {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n/* Hide the browser's default checkbox */\n.container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n/* Create a custom checkbox */\n.checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 25px;\n  width: 25px;\n  background-color: #eee;\n}\n/* On mouse-over, add a grey background color */\n.container:hover input ~ .checkmark {\n  background-color: #ccc;\n}\n/* When the checkbox is checked, add a blue background */\n.container input:checked ~ .checkmark {\n  background-color: #2e8bd4;\n}\n/* Create the checkmark/indicator (hidden when not checked) */\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n/* Show the checkmark when checked */\n.container input:checked ~ .checkmark:after {\n  display: block;\n}\n/* Style the checkmark/indicator */\n.container .checkmark:after {\n  left: 8px;\n  top: 0px;\n  width: 10px;\n  height: 20px;\n  border: solid white;\n  border-width: 0 4px 4px 0;\n  transform: rotate(45deg);\n}\n.positionAb{\n    position: fixed;\n    width: 24rem;\n    background: white;\n    z-index: 2;\n    max-height: 316px;\n    overflow-x: auto;\n    overflow-y: auto;\n    border-radius: 5px;\n}\n.screen-bg{\n  background: grey;\n  position: fixed;\n  width: 100%;\n  opacity: 0.1;\n  height: 100%;\n  left: 0px;\n  top: 0px;\n  z-index: 1;\n}\n.ellipsis-title{\n    width: 90%;\n    overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n  }\n.container::before{\n      margin-top: 2px;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL211bHRpLXNlbGVjdC9tdWx0aS1zZWxlY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjtBQUVBO0VBQ0Usb0dBQW9HO0VBQ3BHLDRCQUE0QjtFQUM1QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0Qiw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWix3QkFBd0I7QUFDMUI7QUFFQSxpQ0FBaUM7QUFDakMsa0JBQWtCO0FBQ2xCO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7QUFFQSx3Q0FBd0M7QUFDeEM7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGVBQWU7RUFDZixTQUFTO0VBQ1QsUUFBUTtBQUNWO0FBRUEsNkJBQTZCO0FBQzdCO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7QUFFQSwrQ0FBK0M7QUFDL0M7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQSx3REFBd0Q7QUFDeEQ7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQSw2REFBNkQ7QUFDN0Q7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjtBQUVBLG9DQUFvQztBQUNwQztFQUNFLGNBQWM7QUFDaEI7QUFFQSxrQ0FBa0M7QUFDbEM7RUFDRSxTQUFTO0VBQ1QsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6Qix3QkFBd0I7QUFDMUI7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osU0FBUztFQUNULFFBQVE7RUFDUixVQUFVO0FBQ1o7QUFDQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7TUFDZCxtQkFBbUI7TUFDbkIsdUJBQXVCO0VBQzNCO0FBQ0E7TUFDSSxlQUFlO0VBQ25CIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL211bHRpLXNlbGVjdC9tdWx0aS1zZWxlY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0e1xuICBtYXJnaW46IGF1dG8gMTBweDtcbn1cbi5kcm9wZG93bntcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgLyogYm9yZGVyLXJhZGl1czogNXB4OyAqL1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4uc2VsZWN0ZWRWYWx1ZXNIb2xkZXJ7XG4gIHdpZHRoOiA5MCU7XG59XG4uc2VsZWN0ZWRWYWx1ZXtcbiAgLyogcGFkZGluZzogNXB4IDEwcHg7ICovXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzdhYjc7XG4gIGJhY2tncm91bmQ6ICMzMzdhYjc7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLyogbWFyZ2luOiA1cHg7ICovXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI3NlYXJjaEZpZWxkOmVtcHR5OjpiZWZvcmUge1xuICBjb250ZW50OiAnU2VhcmNoJztcbiAgY29sb3I6IGdyZXk7XG59XG5cbi5kcm9wZG93bk1lbnV7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDRweCA1cHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDEwcHggMCByZ2JhKDAsMCwwLC4xMik7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7ICovXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbi5zZWxlY3RBbGwge1xuICBwYWRkaW5nOiAxMnB4IDIwcHggMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcbn1cblxuLnNlYXJjaEZpZWxke1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcbn1cbi5vcHRpb25ze1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG5cbmxhYmVse1xuICBtYXgtd2lkdGg6IDk4JTtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgbWFyZ2luOiAwO1xufVxuLmFsaWFzTmFtZUlucHV0e1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIC8qIHBhZGRpbmc6IDVweCAxNXB4OyAqL1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcbn1cblxuLyogU3R5bGluZyBmb3IgaW5wdXQgY2hlY2tib3hlcyAqL1xuLyogVGhlIGNvbnRhaW5lciAqL1xuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMzVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4vKiBIaWRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCBjaGVja2JveCAqL1xuLmNvbnRhaW5lciBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xufVxuXG4vKiBDcmVhdGUgYSBjdXN0b20gY2hlY2tib3ggKi9cbi5jaGVja21hcmsge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbn1cblxuLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yICovXG4uY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG59XG5cbi8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xuLmNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZThiZDQ7XG59XG5cbi8qIENyZWF0ZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAoaGlkZGVuIHdoZW4gbm90IGNoZWNrZWQpICovXG4uY2hlY2ttYXJrOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBTaG93IHRoZSBjaGVja21hcmsgd2hlbiBjaGVja2VkICovXG4uY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIFN0eWxlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yICovXG4uY29udGFpbmVyIC5jaGVja21hcms6YWZ0ZXIge1xuICBsZWZ0OiA4cHg7XG4gIHRvcDogMHB4O1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXI6IHNvbGlkIHdoaXRlO1xuICBib3JkZXItd2lkdGg6IDAgNHB4IDRweCAwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5wb3NpdGlvbkFie1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMjRyZW07XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgei1pbmRleDogMjtcbiAgICBtYXgtaGVpZ2h0OiAzMTZweDtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnNjcmVlbi1iZ3tcbiAgYmFja2dyb3VuZDogZ3JleTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMC4xO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHotaW5kZXg6IDE7XG59XG4uZWxsaXBzaXMtdGl0bGV7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG4gIC5jb250YWluZXI6OmJlZm9yZXtcbiAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgfVxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/shared/multi-select/multi-select.component.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/shared/multi-select/multi-select.component.ts ***!
          \***************************************************************/
        /*! exports provided: MultiSelectComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSelectComponent", function () { return MultiSelectComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var MultiSelectComponent = /** @class */ (function () {
                function MultiSelectComponent() {
                    this.optionSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.filteredData = [];
                    this.hideMenu = false;
                    this.optionsMap = [];
                    this.selectedValues = [];
                    this.client = {
                        x: 'auto',
                        y: 'auto'
                    };
                }
                MultiSelectComponent.prototype.ngOnInit = function () {
                };
                MultiSelectComponent.prototype.ngOnChanges = function () {
                    // console.log(this.data);
                    if (this.data)
                        this.listUpdated();
                };
                MultiSelectComponent.prototype.listUpdated = function () {
                    var _this = this;
                    // Copying input data so that it doesnt get mutated while searching
                    this.filteredData = __spread(this.data);
                    // Creating the mapped object to store aliasName and checked value to true or false
                    this.filteredData.map(function (datum) {
                        var tempObj = {};
                        if (_this.allowAlias)
                            tempObj['aliasName'] = "";
                        tempObj['checked'] = false;
                        _this.optionsMap[datum] = tempObj;
                    });
                };
                //The displayed values in chips format: Updating that array 
                MultiSelectComponent.prototype.updateSelectedValues = function () {
                    var _this = this;
                    this.selectedValues.length = 0;
                    this.data.map(function (datum) {
                        if (_this.optionsMap[datum]['checked']) {
                            _this.selectedValues.push(datum);
                        }
                    });
                };
                // Updating select all checkbox based on multiple conditions
                MultiSelectComponent.prototype.updateSelectAll = function () {
                    var _this = this;
                    var checkSelectAll = this.filteredData.map(function (datum) { return _this.optionsMap[datum]['checked']; });
                    // console.log(checkSelectAll,checkSelectAll.indexOf(false));
                    var ele = document.getElementById("selectAllCb" + "_" + this.index);
                    // if(checkSelectAll.indexOf(false) === -1){
                    //   ele.checked = true;
                    // } else {
                    //   ele.checked = false;
                    // }
                    if (checkSelectAll.indexOf(false) !== -1 || checkSelectAll.length === 0) {
                        ele.checked = false;
                    }
                    else {
                        ele.checked = true;
                    }
                    this.updateSelectedValues();
                };
                // updating options display array while searching
                MultiSelectComponent.prototype.updateOptions = function (searchValue) {
                    this.filteredData = __spread(this.data);
                    this.filteredData = __spread(this.filteredData.filter(function (el) {
                        return el.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
                    }));
                    this.updateSelectAll();
                };
                // function to trigger while seacrh value is being entered: for each keyup event
                MultiSelectComponent.prototype.startSearch = function (event) {
                    // let searchValue = $('#searchField')[0].innerHTML;
                    var searchValue = event.srcElement.innerText;
                    if (searchValue !== "") {
                        this.updateOptions(searchValue);
                    }
                    else {
                        this.filteredData = __spread(this.data);
                        this.updateSelectAll();
                    }
                };
                // Toggle between selectAll and unselectAll state
                MultiSelectComponent.prototype.selectAllToggle = function () {
                    var _this = this;
                    var ele = document.getElementById("selectAllCb" + "_" + this.index);
                    this.filteredData.map(function (datum) {
                        _this.optionsMap[datum]['checked'] = ele.checked;
                    });
                    this.updateSelectedValues();
                    this.optionSelected.emit(this.optionsMap);
                };
                // function to trigger on toggle of each option
                MultiSelectComponent.prototype.toggleEach = function (option) {
                    // console.log(option);
                    // console.log(this.index);
                    this.optionsMap[option]['checked'] = !this.optionsMap[option]['checked'];
                    this.updateSelectAll();
                    this.optionSelected.emit(this.optionsMap);
                };
                MultiSelectComponent.prototype.selectClicked = function (eve) {
                    var _this = this;
                    // console.log(eve);
                    if (this.data ? this.data.length : false) {
                        this.client.x = (eve.clientX - eve.layerX - 10) + 'px';
                        this.client.y = (eve.clientY - eve.layerY - 10) + 'px';
                        this.hideMenu = true;
                        setTimeout(function () {
                            _this.updateSelectAll();
                        }, 0);
                    }
                };
                MultiSelectComponent.prototype.closeDropDown = function () {
                    this.startSearch({ srcElement: { innerText: "" } });
                    this.hideMenu = false;
                };
                return MultiSelectComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], MultiSelectComponent.prototype, "data", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], MultiSelectComponent.prototype, "styles", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], MultiSelectComponent.prototype, "index", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], MultiSelectComponent.prototype, "allowAlias", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], MultiSelectComponent.prototype, "filterFor", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], MultiSelectComponent.prototype, "optionSelected", void 0);
            MultiSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-multi-select',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./multi-select.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/multi-select/multi-select.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./multi-select.component.css */ "./src/app/shared/multi-select/multi-select.component.css")).default]
                })
            ], MultiSelectComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                firebase: {
                    apiKey: "AIzaSyB6yyKVmEQReT8HiyaM4n1_3NoJR11CQl4",
                    authDomain: "product-decision-engine.firebaseapp.com",
                    databaseURL: "https://product-decision-engine.firebaseio.com",
                    projectId: "product-decision-engine",
                    storageBucket: "product-decision-engine.appspot.com",
                    messagingSenderId: "631501982844",
                    appId: "1:631501982844:web:e815a5bddb345ab1080df9"
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
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /Users/upendra/Desktop/GIT/charts-poc/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map