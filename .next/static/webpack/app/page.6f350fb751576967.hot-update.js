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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _message_composer_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message-composer.module.css */ \"(app-client)/./src/components/Message-composer/message-composer.module.css\");\n/* harmony import */ var _message_composer_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_message_composer_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst MessageComposer = (param)=>{\n    let { onSubmit  } = param;\n    _s();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    useEfect(()=>{\n        const handleSubmit1 = (e)=>{\n            e.preventDefault();\n            onSubmit(message);\n            setMessage(\"\");\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed bottom-0 left-0 z-50 w-full pb-2 pt-2 bg-white border-t border-gray-100\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \" w-full \".concat((_message_composer_module_css__WEBPACK_IMPORTED_MODULE_2___default().flexrow)),\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    className: \"\".concat((_message_composer_module_css__WEBPACK_IMPORTED_MODULE_2___default().inputBox)),\n                    placeholder: \"Type your message\",\n                    value: message,\n                    onChange: (e)=>setMessage(e.target.value)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\CSC498\\\\Implementation\\\\moodi\\\\src\\\\components\\\\Message-composer\\\\message-composer.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 21\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"\".concat((_message_composer_module_css__WEBPACK_IMPORTED_MODULE_2___default().sendbutton)),\n                    type: \"submit\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: \" fi-br-paper-plane \".concat((_message_composer_module_css__WEBPACK_IMPORTED_MODULE_2___default().sendIcon))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\CSC498\\\\Implementation\\\\moodi\\\\src\\\\components\\\\Message-composer\\\\message-composer.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\CSC498\\\\Implementation\\\\moodi\\\\src\\\\components\\\\Message-composer\\\\message-composer.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 21\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\CSC498\\\\Implementation\\\\moodi\\\\src\\\\components\\\\Message-composer\\\\message-composer.tsx\",\n            lineNumber: 21,\n            columnNumber: 17\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\CSC498\\\\Implementation\\\\moodi\\\\src\\\\components\\\\Message-composer\\\\message-composer.tsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MessageComposer, \"37m63LSuT9VwthqK4p/ZviEANcM=\", true);\n_c = MessageComposer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MessageComposer);\nvar _c;\n$RefreshReg$(_c, \"MessageComposer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvTWVzc2FnZS1jb21wb3Nlci9tZXNzYWdlLWNvbXBvc2VyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUV5QztBQUdVO0FBR25ELE1BQU1HLGtCQUFrRCxTQUFrQjtRQUFqQixFQUFFQyxTQUFRLEVBQUU7O0lBQ2pFLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUN2Q00sU0FBUyxJQUFJO1FBQ2IsTUFBTUMsZ0JBQWUsQ0FBQ0MsSUFBd0M7WUFDMURBLEVBQUVDLGNBQWM7WUFDaEJOLFNBQVNDO1lBQ1RDLFdBQVc7UUFDZjtJQUNKO0lBRUkscUJBQ0ksOERBQUNLO1FBQUlDLFdBQVU7a0JBQ1AsNEVBQUNDO1lBQUtELFdBQWEsV0FBMEIsT0FBZlYsNkVBQWM7WUFBSUUsVUFBVUk7OzhCQUN0RCw4REFBQ087b0JBQ0dDLE1BQUs7b0JBQ0xKLFdBQVcsR0FBbUIsT0FBaEJWLDhFQUFlO29CQUM3QmdCLGFBQVk7b0JBQ1pDLE9BQU9kO29CQUNQZSxVQUFVLENBQUNYLElBQU1ILFdBQVdHLEVBQUVZLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7OzhCQUU5Qyw4REFBQ0c7b0JBQU9WLFdBQWEsR0FBc0IsT0FBbEJWLGdGQUFpQjtvQkFBSWMsTUFBSzs4QkFDL0MsNEVBQUNRO3dCQUFFWixXQUFhLHNCQUFzQyxPQUFoQlYsOEVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNN0U7R0EzQk1DO0tBQUFBO0FBNkJOLCtEQUFlQSxlQUFlQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01lc3NhZ2UtY29tcG9zZXIvbWVzc2FnZS1jb21wb3Nlci50c3g/NzIwOCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgIFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIsIHVzZVBhdGhuYW1lIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcclxuaW1wb3J0IHsgTWVzc2FnZUNvbXBvc2VyUHJvcHMgfSBmcm9tICdtb29kaV9ib3QvdHlwZXMvdHlwZXMnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL21lc3NhZ2UtY29tcG9zZXIubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyB1c2VySW5mZXJlbmNlIH0gZnJvbSAnbW9vZGlfYm90L2FwcC9hcGkvaGVsbG8vdXNlcl9pbmZlcmUvcm91dGUnO1xyXG5cclxuY29uc3QgTWVzc2FnZUNvbXBvc2VyOiBSZWFjdC5GQzxNZXNzYWdlQ29tcG9zZXJQcm9wcz4gPSAoeyBvblN1Ym1pdCB9KSA9PiB7XHJcbiAgICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIHVzZUVmZWN0KCgpPT57XHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgb25TdWJtaXQobWVzc2FnZSk7XHJcbiAgICAgICAgc2V0TWVzc2FnZShcIlwiKTtcclxuICAgIH07XHJcbn0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGJvdHRvbS0wIGxlZnQtMCB6LTUwIHctZnVsbCBwYi0yIHB0LTIgYmctd2hpdGUgYm9yZGVyLXQgYm9yZGVyLWdyYXktMTAwXCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWUgPSB7YCB3LWZ1bGwgJHtzdHlsZXMuZmxleHJvd31gfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5pbnB1dEJveH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBtZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZSA9IHtgJHsgc3R5bGVzLnNlbmRidXR0b259YH0gdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWUgPSB7YCBmaS1ici1wYXBlci1wbGFuZSAke3N0eWxlcy5zZW5kSWNvbn1gfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlQ29tcG9zZXJcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJNZXNzYWdlQ29tcG9zZXIiLCJvblN1Ym1pdCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwidXNlRWZlY3QiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwiZmxleHJvdyIsImlucHV0IiwidHlwZSIsImlucHV0Qm94IiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYnV0dG9uIiwic2VuZGJ1dHRvbiIsImkiLCJzZW5kSWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/components/Message-composer/message-composer.tsx\n"));

/***/ })

});