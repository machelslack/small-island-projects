"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _small_island_projects_small_island_components_lib_esm_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @small-island-projects/small-island-components/lib/esm/index.js */ \"../small-island-components/lib/esm/index.js\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Header(param) {\n    var title = param.title;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: title ? title : \"Default title\"\n    }, void 0, false, {\n        fileName: \"/Users/mslack/Documents/projects/small-island-projects/packages/small-island-labs/src/pages/index.jsx\",\n        lineNumber: 6,\n        columnNumber: 10\n    }, this);\n}\n_c = Header;\nfunction HomePage() {\n    var _this = this;\n    var handleClick = function handleClick() {\n        setLikes(likes + 1);\n    };\n    _s();\n    var names = [\n        \"Ada Lovelace\",\n        \"Grace Hopper\",\n        \"Margaret Hamilton\"\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), likes = ref[0], setLikes = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                title: \"Develop. Preview. Ship it. \\uD83D\\uDE80\"\n            }, void 0, false, {\n                fileName: \"/Users/mslack/Documents/projects/small-island-projects/packages/small-island-labs/src/pages/index.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"title\",\n                children: [\n                    \"Read\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/projects\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: \"this page!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mslack/Documents/projects/small-island-projects/packages/small-island-labs/src/pages/index.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mslack/Documents/projects/small-island-projects/packages/small-island-labs/src/pages/index.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mslack/Documents/projects/small-island-projects/packages/small-island-labs/src/pages/index.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: (0,_small_island_projects_small_island_components_lib_esm_index_js__WEBPACK_IMPORTED_MODULE_3__.HelloWorld)()\n            }, void 0, false, {\n                fileName: \"/Users/mslack/Documents/projects/small-island-projects/packages/small-island-labs/src/pages/index.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: names.map(function(name) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: name\n                    }, name, false, {\n                        fileName: \"/Users/mslack/Documents/projects/small-island-projects/packages/small-island-labs/src/pages/index.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/mslack/Documents/projects/small-island-projects/packages/small-island-labs/src/pages/index.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleClick,\n                children: [\n                    \"Like (\",\n                    likes,\n                    \")\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mslack/Documents/projects/small-island-projects/packages/small-island-labs/src/pages/index.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mslack/Documents/projects/small-island-projects/packages/small-island-labs/src/pages/index.jsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n};\n_s(HomePage, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c1 = HomePage;\nvar _c, _c1;\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c1, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBaUM7QUFDSjtBQUNnRTs7QUFFN0YsU0FBU0csTUFBTSxDQUFDLEtBQVMsRUFBRTtRQUFYLEtBQU8sR0FBUCxLQUFTLENBQVBDLEtBQUs7SUFDckIscUJBQU8sOERBQUNDLElBQUU7a0JBQUVELEtBQUssR0FBR0EsS0FBSyxHQUFHLGVBQWU7Ozs7O1lBQU0sQ0FBQztDQUNuRDtBQUZRRCxLQUFBQSxNQUFNO0FBSUEsU0FBU0csUUFBUSxHQUFHOztRQUt4QkMsV0FBVyxHQUFwQixTQUFTQSxXQUFXLEdBQUc7UUFDckJDLFFBQVEsQ0FBQ0MsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ3JCOztJQU5ELElBQU1DLEtBQUssR0FBRztRQUFDLGNBQWM7UUFBRSxjQUFjO1FBQUUsbUJBQW1CO0tBQUM7SUFFbkUsSUFBMEJWLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFYdkMsS0FXYyxHQUFjQSxHQUFXLEdBQXpCLEVBWGQsUUFXd0IsR0FBSUEsR0FBVyxHQUFmO0lBTXRCLHFCQUNFLDhEQUFDVyxLQUFHOzswQkFDRiw4REFBQ1IsTUFBTTtnQkFBQ0MsS0FBSyxFQUFDLHlDQUE4Qjs7Ozs7b0JBQUc7MEJBQy9DLDhEQUFDQyxJQUFFO2dCQUFDTyxTQUFTLEVBQUMsT0FBTzs7b0JBQUMsTUFDaEI7b0JBQUMsR0FBRztrQ0FDUiw4REFBQ1gsa0RBQUk7d0JBQUNZLElBQUksRUFBQyxXQUFXO2tDQUNwQiw0RUFBQ0MsR0FBQztzQ0FBQyxZQUFVOzs7OztnQ0FBSTs7Ozs7NEJBQ1o7Ozs7OztvQkFDSjswQkFDTCw4REFBQ0MsTUFBSTswQkFBRWIsMkdBQVUsRUFBRTs7Ozs7b0JBQVE7MEJBQzNCLDhEQUFDYyxJQUFFOzBCQUNBTixLQUFLLENBQUNPLEdBQUcsQ0FBQyxTQUFDQyxJQUFJO3lDQUNkLDhEQUFDQyxJQUFFO2tDQUFhRCxJQUFJO3VCQUFYQSxJQUFJOzs7OzZCQUFhO2lCQUMzQixDQUFDOzs7OztvQkFDQzswQkFFTCw4REFBQ0UsUUFBTTtnQkFBQ0MsT0FBTyxFQUFFZCxXQUFXOztvQkFBRSxRQUFNO29CQUFDRSxLQUFLO29CQUFDLEdBQUM7Ozs7OztvQkFBUzs7Ozs7O1lBQ2pELENBQ047Q0FDSDtHQTVCdUJILFFBQVE7QUFBUkEsTUFBQUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanN4P2QzNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IEhlbGxvV29ybGQgfSBmcm9tIFwiQHNtYWxsLWlzbGFuZC1wcm9qZWN0cy9zbWFsbC1pc2xhbmQtY29tcG9uZW50cy9saWIvZXNtL2luZGV4LmpzXCI7XG5cbmZ1bmN0aW9uIEhlYWRlcih7IHRpdGxlIH0pIHtcbiAgcmV0dXJuIDxoMT57dGl0bGUgPyB0aXRsZSA6IFwiRGVmYXVsdCB0aXRsZVwifTwvaDE+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgY29uc3QgbmFtZXMgPSBbXCJBZGEgTG92ZWxhY2VcIiwgXCJHcmFjZSBIb3BwZXJcIiwgXCJNYXJnYXJldCBIYW1pbHRvblwiXTtcblxuICBjb25zdCBbbGlrZXMsIHNldExpa2VzXSA9IHVzZVN0YXRlKDApO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xuICAgIHNldExpa2VzKGxpa2VzICsgMSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyIHRpdGxlPVwiRGV2ZWxvcC4gUHJldmlldy4gU2hpcCBpdC4g8J+agFwiIC8+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgUmVhZHtcIiBcIn1cbiAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0c1wiPlxuICAgICAgICAgIDxhPnRoaXMgcGFnZSE8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvaDE+XG4gICAgICA8c3Bhbj57SGVsbG9Xb3JsZCgpfTwvc3Bhbj5cbiAgICAgIDx1bD5cbiAgICAgICAge25hbWVzLm1hcCgobmFtZSkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e25hbWV9PntuYW1lfTwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cblxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+TGlrZSAoe2xpa2VzfSk8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkxpbmsiLCJIZWxsb1dvcmxkIiwiSGVhZGVyIiwidGl0bGUiLCJoMSIsIkhvbWVQYWdlIiwiaGFuZGxlQ2xpY2siLCJzZXRMaWtlcyIsImxpa2VzIiwibmFtZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwiYSIsInNwYW4iLCJ1bCIsIm1hcCIsIm5hbWUiLCJsaSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n");

/***/ })

});