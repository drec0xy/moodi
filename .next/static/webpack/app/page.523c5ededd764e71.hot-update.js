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

/***/ "(app-client)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var moodi_bot_components_Message_composer_message_composer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moodi_bot/components/Message-composer/message-composer */ \"(app-client)/./src/components/Message-composer/message-composer.tsx\");\n/* harmony import */ var moodi_bot_components_chat_sceens_message_bubble__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moodi_bot/components/chat-sceens/message-bubble */ \"(app-client)/./src/components/chat-sceens/message-bubble.tsx\");\n/* harmony import */ var moodi_bot_components_chat_sceens_chat_thread_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moodi_bot/components/chat-sceens/chat-thread-section */ \"(app-client)/./src/components/chat-sceens/chat-thread-section.tsx\");\n/* harmony import */ var _chat_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat.json */ \"(app-client)/./src/app/chat.json\");\n\n\n\n\n\n//const inter = Inter({ subsets: ['latin'] })\nvar Chats = _chat_json__WEBPACK_IMPORTED_MODULE_4__.chatsthread;\nvar x;\nasync function updateChats() {}\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \" min-h-screen border flex-col items-center justify-between \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(moodi_bot_components_chat_sceens_chat_thread_section__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    children: Chats.map((chats, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(moodi_bot_components_chat_sceens_message_bubble__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            userMessage: chats.userQuery,\n                            botMessage: chats.botResponds\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\CSC498\\\\Implementation\\\\moodi\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\CSC498\\\\Implementation\\\\moodi\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(moodi_bot_components_Message_composer_message_composer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    onSubmit: updateChats\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\CSC498\\\\Implementation\\\\moodi\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\CSC498\\\\Implementation\\\\moodi\\\\src\\\\app\\\\page.tsx\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\CSC498\\\\Implementation\\\\moodi\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9wYWdlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBSW9GO0FBQ2xCO0FBQ2E7QUFDaEQ7QUFLL0IsNkNBQTZDO0FBRTdDLElBQUlJLFFBQVFELG1EQUFnQjtBQUM1QixJQUFJRztBQUNKLGVBQWVDLGNBQWEsQ0FFNUI7QUFFZSxTQUFTQyxPQUFPO0lBRTdCLHFCQUNFLDhEQUFDQztRQUFLQyxXQUFVO2tCQUNkLDRFQUFDQzs7OEJBQ0MsOERBQUNULDRGQUFXQTs4QkFFVEUsTUFBTVEsR0FBRyxDQUFDLENBQUNDLE9BQXlCQyxzQkFDbkMsOERBQUNiLHVGQUFJQTs0QkFBQ2MsYUFBYUYsTUFBTUcsU0FBUzs0QkFBRUMsWUFBWUosTUFBTUssV0FBVzs7Ozs7Ozs7Ozs7OEJBR3JFLDhEQUFDbEIsOEZBQWVBO29CQUFDbUIsVUFBVVo7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSW5DLENBQUM7S0FmdUJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IEludGVyIH0gZnJvbSAnbmV4dC9mb250L2dvb2dsZSdcbmltcG9ydCBUb3BOYXZCYXIgZnJvbSAnbW9vZGlfYm90L2NvbXBvbmVudHMvdG9wLW5hdi1iYXIvdG9wLW5hdi1iYXInXG5pbXBvcnQgTWVzc2FnZUNvbXBvc2VyIGZyb20gJ21vb2RpX2JvdC9jb21wb25lbnRzL01lc3NhZ2UtY29tcG9zZXIvbWVzc2FnZS1jb21wb3NlcidcbmltcG9ydCBDaGF0IGZyb20gJ21vb2RpX2JvdC9jb21wb25lbnRzL2NoYXQtc2NlZW5zL21lc3NhZ2UtYnViYmxlJ1xuaW1wb3J0IENoYXRUaHJlYWRzIGZyb20gJ21vb2RpX2JvdC9jb21wb25lbnRzL2NoYXQtc2NlZW5zL2NoYXQtdGhyZWFkLXNlY3Rpb24nO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9jaGF0Lmpzb24nO1xuaW1wb3J0IHsgSUNoYXRNZXNzYWdlUHJvcHMgfSBmcm9tICdtb29kaV9ib3QvdHlwZXMvdHlwZXMnO1xuaW1wb3J0IHsgSW50ZXJmYWNlIH0gZnJvbSAncmVhZGxpbmUnO1xuXG5cbi8vY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFsnbGF0aW4nXSB9KVxuXG52YXIgQ2hhdHMgPSBkYXRhLmNoYXRzdGhyZWFkIGFzIHVua25vd24gYXMgSUNoYXRNZXNzYWdlUHJvcHNbXTtcbnZhciB4OiBJQ2hhdE1lc3NhZ2VQcm9wcztcbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNoYXRzKCl7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cIiBtaW4taC1zY3JlZW4gYm9yZGVyIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8Q2hhdFRocmVhZHM+XG4gICAgICAgICBcbiAgICAgICAgICB7Q2hhdHMubWFwKChjaGF0czpJQ2hhdE1lc3NhZ2VQcm9wcywgaW5kZXg6bnVtYmVyKSA9PihcbiAgICAgICAgICAgIDxDaGF0IHVzZXJNZXNzYWdlPXtjaGF0cy51c2VyUXVlcnl9IGJvdE1lc3NhZ2U9e2NoYXRzLmJvdFJlc3BvbmRzfT48L0NoYXQ+XG4gICAgICAgICAgKSl9ICAgICAgIFxuICAgICAgICA8L0NoYXRUaHJlYWRzPlxuICAgICAgICA8TWVzc2FnZUNvbXBvc2VyIG9uU3VibWl0PXt1cGRhdGVDaGF0c30+PC9NZXNzYWdlQ29tcG9zZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJNZXNzYWdlQ29tcG9zZXIiLCJDaGF0IiwiQ2hhdFRocmVhZHMiLCJkYXRhIiwiQ2hhdHMiLCJjaGF0c3RocmVhZCIsIngiLCJ1cGRhdGVDaGF0cyIsIkhvbWUiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwibWFwIiwiY2hhdHMiLCJpbmRleCIsInVzZXJNZXNzYWdlIiwidXNlclF1ZXJ5IiwiYm90TWVzc2FnZSIsImJvdFJlc3BvbmRzIiwib25TdWJtaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/app/page.tsx\n"));

/***/ })

});