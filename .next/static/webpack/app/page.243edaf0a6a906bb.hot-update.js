"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/components/Message-composer/message-composer.tsx":
/*!**************************************************************!*\
  !*** ./src/components/Message-composer/message-composer.tsx ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _message_composer_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message-composer.module.css */ \"(app-client)/./src/components/Message-composer/message-composer.module.css\");\n/* harmony import */ var _message_composer_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_message_composer_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst MessageComposer = (param)=>{\n    let { onSubmit  } = param;\n    _s();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        onSubmit(message);\n        setMessage(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed bottom-0 left-0 z-50 w-full pb-2 pt-2 bg-white border-t border-gray-100\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \" w-full \".concat((_message_composer_module_css__WEBPACK_IMPORTED_MODULE_2___default().flexrow)),\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    className: \"\".concat((_message_composer_module_css__WEBPACK_IMPORTED_MODULE_2___default().inputBox)),\n                    placeholder: \"Type your message\",\n                    value: message,\n                    onChange: (e)=>setMessage(e.target.value)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\CSC498\\\\Implementation\\\\moodi\\\\src\\\\components\\\\Message-composer\\\\message-composer.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 21\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"\".concat((_message_composer_module_css__WEBPACK_IMPORTED_MODULE_2___default().sendbutton)),\n                    type: \"submit\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: \" fi-br-paper-plane \".concat((_message_composer_module_css__WEBPACK_IMPORTED_MODULE_2___default().sendIcon))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\CSC498\\\\Implementation\\\\moodi\\\\src\\\\components\\\\Message-composer\\\\message-composer.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\CSC498\\\\Implementation\\\\moodi\\\\src\\\\components\\\\Message-composer\\\\message-composer.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 21\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\CSC498\\\\Implementation\\\\moodi\\\\src\\\\components\\\\Message-composer\\\\message-composer.tsx\",\n            lineNumber: 21,\n            columnNumber: 17\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\CSC498\\\\Implementation\\\\moodi\\\\src\\\\components\\\\Message-composer\\\\message-composer.tsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MessageComposer, \"EiOGSxO4GWQlH0sM782nQ9JwuAs=\");\n_c = MessageComposer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MessageComposer);\nvar _c;\n$RefreshReg$(_c, \"MessageComposer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvTWVzc2FnZS1jb21wb3Nlci9tZXNzYWdlLWNvbXBvc2VyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUV5QztBQUdVO0FBR25ELE1BQU1HLGtCQUFrRCxTQUFrQjtRQUFqQixFQUFFQyxTQUFRLEVBQUU7O0lBQ2pFLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNTSxlQUFlLENBQUNDLElBQXdDO1FBQzFEQSxFQUFFQyxjQUFjO1FBQ2hCTCxTQUFTQztRQUNUQyxXQUFXO0lBQ2Y7SUFHQSxxQkFDSSw4REFBQ0k7UUFBSUMsV0FBVTtrQkFDUCw0RUFBQ0M7WUFBS0QsV0FBYSxXQUEwQixPQUFmVCw2RUFBYztZQUFJRSxVQUFVRzs7OEJBQ3RELDhEQUFDTztvQkFDR0MsTUFBSztvQkFDTEosV0FBVyxHQUFtQixPQUFoQlQsOEVBQWU7b0JBQzdCZSxhQUFZO29CQUNaQyxPQUFPYjtvQkFDUGMsVUFBVSxDQUFDWCxJQUFNRixXQUFXRSxFQUFFWSxNQUFNLENBQUNGLEtBQUs7Ozs7Ozs4QkFFOUMsOERBQUNHO29CQUFPVixXQUFhLEdBQXNCLE9BQWxCVCxnRkFBaUI7b0JBQUlhLE1BQUs7OEJBQy9DLDRFQUFDUTt3QkFBRVosV0FBYSxzQkFBc0MsT0FBaEJULDhFQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTdFO0dBM0JNQztLQUFBQTtBQTZCTiwrREFBZUEsZUFBZUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NZXNzYWdlLWNvbXBvc2VyL21lc3NhZ2UtY29tcG9zZXIudHN4PzcyMDgiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0ICBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyLCB1c2VQYXRobmFtZSB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XHJcbmltcG9ydCB7IE1lc3NhZ2VDb21wb3NlclByb3BzLCB0b3BuYXZiYXIgfSBmcm9tICdtb29kaV9ib3QvdHlwZXMvdHlwZXMnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL21lc3NhZ2UtY29tcG9zZXIubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyB1c2VySW5mZXJlbmNlIH0gZnJvbSAnbW9vZGlfYm90L2FwcC9hcGkvaGVsbG8vdXNlcl9pbmZlcmUvcm91dGUnO1xyXG5cclxuY29uc3QgTWVzc2FnZUNvbXBvc2VyOiBSZWFjdC5GQzxNZXNzYWdlQ29tcG9zZXJQcm9wcz4gPSAoeyBvblN1Ym1pdCB9KSA9PiB7XHJcbiAgICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgb25TdWJtaXQobWVzc2FnZSk7XHJcbiAgICAgICAgc2V0TWVzc2FnZShcIlwiKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBib3R0b20tMCBsZWZ0LTAgei01MCB3LWZ1bGwgcGItMiBwdC0yIGJnLXdoaXRlIGJvcmRlci10IGJvcmRlci1ncmF5LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lID0ge2Agdy1mdWxsICR7c3R5bGVzLmZsZXhyb3d9YH0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaW5wdXRCb3h9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgbWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXttZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWUgPSB7YCR7IHN0eWxlcy5zZW5kYnV0dG9ufWB9IHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lID0ge2AgZmktYnItcGFwZXItcGxhbmUgJHtzdHlsZXMuc2VuZEljb259YH0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZUNvbXBvc2VyXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiTWVzc2FnZUNvbXBvc2VyIiwib25TdWJtaXQiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJmbGV4cm93IiwiaW5wdXQiLCJ0eXBlIiwiaW5wdXRCb3giLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iLCJzZW5kYnV0dG9uIiwiaSIsInNlbmRJY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/components/Message-composer/message-composer.tsx\n"));

/***/ })

});