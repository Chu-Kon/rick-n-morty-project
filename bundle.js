/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.character-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 20px;\n}\n\n.character-card {\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  padding: 10px;\n}\n\n.character-card img {\n  max-width: 100%;\n  border-radius: 8px;\n}\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.modal-content {\n  background-color: #fefefe;\n  margin: 10% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%;\n  border-radius: 8px;\n}\n\n.modal-character-details {\n  display: flex;\n}\n\n.modal-character-details img {\n  max-width: calc(100% - 20px);\n  border-radius: 8px;\n  margin-right: 20px;\n}\n\n#modal-character-name {\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.button {\n  margin-right: 10px;\n}\n\n.pagination {\n  margin-top: 20px;\n  text-align: center;\n}\n\n.pagination span {\n  cursor: pointer;\n  padding: 5px 10px;\n  margin: 0 5px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n}\n\n.pagination span.active {\n  background-color: #007bff;\n  color: #fff;\n}\n\n.pagination span:not(:last-child) {\n  margin-right: 10px;\n}\n\n#favoriteButton {\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  z-index: 1000;\n}\n\n#backButton {\n  display: none;\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  z-index: 1000;\n}\n\n#favorite-characters-container {\n  display: none;\n  top: 10px;\n  right: 10px;\n  z-index: 1000;\n}\n\n#clearLocalStorageButton {\n  color: red;\n  margin: 10px;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://ricknmorty-proj/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://ricknmorty-proj/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://ricknmorty-proj/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./style.css */ \"./src/style.css?1315\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./script.js */ \"./src/script.js?eac1\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar code = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n  <meta charset=\\\"UTF-8\\\">\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n  <title>Rick and Morty Characters</title>\\n  <link rel=\\\"stylesheet\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\">\\n</head>\\n<body>\\n    <div id=\\\"characters-container\\\" class=\\\"character-container\\\"></div>\\n    <div id=\\\"pagination-container\\\" class=\\\"pagination\\\"></div>\\n    <div id=\\\"character-modal\\\" class=\\\"modal\\\">\\n        <div class=\\\"modal-content\\\">\\n          <span class=\\\"close\\\">&times;</span>\\n          <h1 id=\\\"modal-character-name\\\"></h1>\\n          <div class=\\\"modal-character-details\\\">\\n            <img id=\\\"modal-character-image\\\" src=\\\"#\\\" alt=\\\"Character Image\\\">\\n            <div id=\\\"modal-character-info\\\" class=\\\"modal-info\\\"></div>\\n          </div>\\n        </div>\\n    </div>\\n    <button id=\\\"clearLocalStorageButton\\\">Очистить Local Storage</button>\\n    <button id=\\\"favoriteButton\\\">Избранное</button>\\n    <button id=\\\"backButton\\\">Назад</button>\\n    <div id=\\\"favorite-characters-container\\\" class=\\\"favorite-character-container\\\"></div>\\n  <\" + \"script type=\\\"module\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\">\\n  <\" + \"/script>\\n</body>\\n</html>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://ricknmorty-proj/./src/index.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n\n  // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n  url = String(url.__esModule ? url.default : url);\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://ricknmorty-proj/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/style.css?7163":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://ricknmorty-proj/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://ricknmorty-proj/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://ricknmorty-proj/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://ricknmorty-proj/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://ricknmorty-proj/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://ricknmorty-proj/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://ricknmorty-proj/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/favorites.js":
/*!**************************!*\
  !*** ./src/favorites.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayFavoriteCharacters: () => (/* binding */ displayFavoriteCharacters),\n/* harmony export */   favoriteCharacters: () => (/* binding */ favoriteCharacters),\n/* harmony export */   toggleFavorite: () => (/* binding */ toggleFavorite)\n/* harmony export */ });\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.js */ \"./src/modal.js\");\n\nlet favoriteCharacters = [];\n\n// Функция для переключения состояния избранного персонажа\nfunction toggleFavorite(character) {\n    const index = favoriteCharacters.indexOf(character.id);\n    if (index !== -1) {\n        favoriteCharacters.splice(index, 1); // Удаляем из избранного, если уже там\n    } else {\n        favoriteCharacters.push(character.id); // Добавляем в избранное, если не было\n    }\n    console.log('Массив избранных персонажей:', favoriteCharacters);\n}\n\n// Функция для отображения избранных персонажей\nfunction displayFavoriteCharacters(favoriteCharactersContainer) {\n    favoriteCharactersContainer.innerHTML = ''; // Очищаем контейнер перед отображением\n    if (favoriteCharacters.length === 0) {\n        // Если список избранных пуст, выводим сообщение об этом\n        const emptyMessage = document.createElement('p');\n        emptyMessage.textContent = 'Список избранного пуст';\n        favoriteCharactersContainer.appendChild(emptyMessage);\n    } else {\n        // Если список не пуст, отображаем каждого избранного персонажа\n        favoriteCharactersContainer.style.display = 'grid';\n        favoriteCharactersContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';\n        favoriteCharactersContainer.style.gap = '20px';\n        favoriteCharacters.forEach(characterId => {\n            fetch(`https://rickandmortyapi.com/api/character/${characterId}`)\n                .then(response => response.json())\n                .then(character => {\n                    // Создаем карточку для каждого избранного персонажа и добавляем на страницу\n                    const characterCard = document.createElement('div');\n                    characterCard.classList.add('character-card');\n                    characterCard.dataset.id = character.id;\n\n                    const characterImage = document.createElement('img');\n                    characterImage.src = character.image;\n\n                    const characterName = document.createElement('p');\n                    characterName.textContent = character.name;\n\n                    const infoButton = document.createElement('button');\n                    infoButton.textContent = 'Инфо';\n                    infoButton.classList.add('button');\n                    infoButton.addEventListener('click', () => (0,_modal_js__WEBPACK_IMPORTED_MODULE_0__.openModal)(character));\n\n                    const removeFromFavoriteBtn = document.createElement('button');\n                    removeFromFavoriteBtn.textContent = 'Убрать из избранного';\n                    removeFromFavoriteBtn.classList.add('remove-button');\n                    removeFromFavoriteBtn.addEventListener('click', () => {\n                        toggleFavorite(character); // Убираем из избранного\n                        characterCard.remove(); // Удаляем карточку из контейнера\n                    });\n\n                    characterCard.appendChild(characterImage);\n                    characterCard.appendChild(characterName);\n                    characterCard.appendChild(infoButton);\n                    characterCard.appendChild(removeFromFavoriteBtn);\n                    favoriteCharactersContainer.appendChild(characterCard);\n                });\n        });\n    }\n}\n\n\n\n\n//# sourceURL=webpack://ricknmorty-proj/./src/favorites.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css?7163\");\n/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script.js */ \"./src/script.js?68b0\");\n\n\n\n\n//# sourceURL=webpack://ricknmorty-proj/./src/index.js?");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeModal: () => (/* binding */ closeModal),\n/* harmony export */   openModal: () => (/* binding */ openModal)\n/* harmony export */ });\n// modal.js\n\n// Функция для открытия модального окна с информацией о персонаже\nfunction openModal(character) {\n    const modal = document.querySelector('#character-modal');\n    const modalCharacterName = document.querySelector('#modal-character-name');\n    const modalCharacterImage = document.querySelector('#modal-character-image');\n    const modalCharacterInfo = document.querySelector('#modal-character-info');\n\n    modalCharacterName.textContent = character.name;\n    modalCharacterImage.src = character.image;\n    modalCharacterInfo.innerHTML = `\n        <p><b>Статус:</b> ${character.status}</p>\n        <p><b>Вид:</b> ${character.species}</p>\n        <p><b>Пол:</b> ${character.gender}</p>\n        <p><b>Происхождение:</b> ${character.origin.name}</p>\n        <p><b>Местоположение:</b> ${character.location.name}</p>\n    `;\n    modal.style.display = 'block';\n}\n\n// Функция для закрытия модального окна\nfunction closeModal() {\n    const modal = document.querySelector('#character-modal');\n    modal.style.display = 'none';\n}\n\n// Обработчик события для кнопки закрытия модального окна\nconst closeModalButton = document.querySelector('.close');\ncloseModalButton.addEventListener('click', closeModal);\n\n// Обработчик события для клика вне модального окна для закрытия его\nwindow.onclick = function (event) {\n    const modal = document.querySelector('#character-modal');\n    if (event.target == modal) {\n        closeModal();\n    }\n}\n\n\n\n\n//# sourceURL=webpack://ricknmorty-proj/./src/modal.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderCharacters: () => (/* binding */ renderCharacters)\n/* harmony export */ });\n/* harmony import */ var _favorites_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorites.js */ \"./src/favorites.js\");\n/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script.js */ \"./src/script.js?68b0\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.js */ \"./src/modal.js\");\n\n\n\n\n// Функция для отображения персонажей на странице\nfunction renderCharacters(data, charactersContainer, favoriteCharacters) {\n    charactersContainer.innerHTML = ''; // Очищаем контейнер перед отображением\n\n    data.results.forEach(character => {\n        const characterCard = document.createElement('div');\n        characterCard.classList.add('character-card');\n        characterCard.dataset.id = character.id;\n\n        const characterImage = document.createElement('img');\n        characterImage.src = character.image;\n\n        const characterName = document.createElement('p');\n        characterName.textContent = character.name;\n\n        const infoButton = document.createElement('button');\n        infoButton.textContent = 'Инфо';\n        infoButton.classList.add('button');\n        infoButton.addEventListener('click', () => (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.openModal)(character));\n\n        const addToFavoriteBtn = document.createElement('button');\n        addToFavoriteBtn.textContent = favoriteCharacters.includes(character.id) ? 'Удалить из избранного' : 'Добавить в избранное';\n        addToFavoriteBtn.classList.add('add-button');\n        addToFavoriteBtn.addEventListener('click', () => {\n            (0,_favorites_js__WEBPACK_IMPORTED_MODULE_0__.toggleFavorite)(character);\n            (0,_script_js__WEBPACK_IMPORTED_MODULE_1__.updateFavoriteButton)(characterCard, character);\n        });\n\n        characterCard.appendChild(characterImage);\n        characterCard.appendChild(characterName);\n        characterCard.appendChild(infoButton);\n        characterCard.appendChild(addToFavoriteBtn);\n        charactersContainer.appendChild(characterCard);\n    });\n}\n\n\n\n\n//# sourceURL=webpack://ricknmorty-proj/./src/render.js?");

/***/ }),

/***/ "./src/script.js?68b0":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateFavoriteButton: () => (/* binding */ updateFavoriteButton)\n/* harmony export */ });\n/* harmony import */ var _favorites_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorites.js */ \"./src/favorites.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ \"./src/render.js\");\n\n\n\nconst charactersContainer = document.querySelector('#characters-container');\nconst paginationContainer = document.querySelector('#pagination-container');\nconst modal = document.querySelector('#character-modal');\nconst modalCharacterName = document.querySelector('#modal-character-name');\nconst modalCharacterImage = document.querySelector('#modal-character-image');\nconst modalCharacterInfo = document.querySelector('#modal-character-info');\nconst closeModalButton = document.querySelector('.close');\nconst favoriteButton = document.querySelector('#favoriteButton');\nconst favoriteCharactersContainer = document.querySelector('#favorite-characters-container');\nconst backButton = document.querySelector('#backButton');\nconst clearLocalStorageButton = document.querySelector('#clearLocalStorageButton');\n\nlet currentPage = 1;\nlet pages;\n\n// Функция для сохранения данных в localStorage\nfunction saveDataToLocalStorage() {\n    localStorage.setItem('currentPage', currentPage);\n    localStorage.setItem('favoriteCharacters', JSON.stringify(_favorites_js__WEBPACK_IMPORTED_MODULE_0__.favoriteCharacters));\n}\n\n// Функция для загрузки данных из localStorage\nfunction loadDataFromLocalStorage() {\n    const savedCurrentPage = localStorage.getItem('currentPage');\n    const savedFavoriteCharacters = localStorage.getItem('favoriteCharacters');\n\n    if (savedCurrentPage) {\n        currentPage = parseInt(savedCurrentPage);\n    }\n\n    if (savedFavoriteCharacters) {\n        _favorites_js__WEBPACK_IMPORTED_MODULE_0__.favoriteCharacters.splice(0, _favorites_js__WEBPACK_IMPORTED_MODULE_0__.favoriteCharacters.length, ...JSON.parse(savedFavoriteCharacters));\n        // Используем splice для замены всех элементов в favoriteCharacters сохраненными из localStorage\n    }\n}\n\n// Вызываем функцию загрузки данных при загрузке страницы\nwindow.onload = loadDataFromLocalStorage;\n\n// Обновляем localStorage при изменении данных\nwindow.addEventListener('beforeunload', saveDataToLocalStorage);\n\nfunction fetchCharacters(page) {\n    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)\n        .then(response => response.json())\n        .then(data => {\n            (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderCharacters)(data, charactersContainer, _favorites_js__WEBPACK_IMPORTED_MODULE_0__.favoriteCharacters); // Используем функцию для отображения персонажей\n            const charactersPerPage = data.results.length; // количество персонажей на странице\n            const totalCharacters = data.info.count; // общее количество персонажей\n            pages = Math.ceil(totalCharacters / charactersPerPage); // общее количество страниц\n            renderPagination();\n        });\n}\n\nfunction renderPagination() {\n    paginationContainer.innerHTML = ''; // Очищаем содержимое контейнера перед перерисовкой\n    const maxVisiblePages = 5; // Максимальное количество видимых страниц\n    const sidePages = Math.floor((maxVisiblePages - 1) / 2); // Количество страниц с каждой стороны от текущей страницы\n    let startPage = Math.max(1, currentPage - sidePages); // Начальная страница пагинации\n    let endPage = Math.min(pages, startPage + maxVisiblePages - 1); // Конечная страница пагинации\n\n    if (currentPage === pages) {\n        endPage = pages;\n    }\n\n    const showStartDots = startPage > 1; // Показывать многоточие перед промежуточными страницами\n    const showEndDots = endPage < pages; // Показывать многоточие после промежуточных страниц\n\n    // Первая страница\n    const firstPageButton = document.createElement('button');\n    firstPageButton.textContent = '<<';\n    firstPageButton.addEventListener('click', () => {\n        currentPage = 1;\n        fetchCharacters(currentPage);\n    });\n    paginationContainer.appendChild(firstPageButton);\n\n    // Предыдущая страница\n    const prevButton = document.createElement('button');\n    prevButton.textContent = '<';\n    prevButton.addEventListener('click', () => {\n        if (currentPage > 1) {\n            currentPage--;\n            fetchCharacters(currentPage);\n        }\n    });\n    paginationContainer.appendChild(prevButton);\n\n    if (showStartDots) {\n        addDots();\n    }\n\n    // Добавляем промежуточные страницы\n    for (let i = startPage; i <= endPage; i++) {\n        addPage(i);\n    }\n\n    if (showEndDots) {\n        addDots();\n    }\n\n    // Следующая страница\n    const nextButton = document.createElement('button');\n    nextButton.textContent = '>';\n    nextButton.addEventListener('click', () => {\n        if (currentPage < pages) {\n            currentPage++;\n            fetchCharacters(currentPage);\n        }\n    });\n    paginationContainer.appendChild(nextButton);\n\n    // Последняя страница\n    const lastPageButton = document.createElement('button');\n    lastPageButton.textContent = '>>';\n    lastPageButton.addEventListener('click', () => {\n        currentPage = pages;\n        fetchCharacters(currentPage);\n    });\n    paginationContainer.appendChild(lastPageButton);\n}\n\nfunction addPage(pageNumber) {\n    let span = document.createElement('span');\n    span.textContent = pageNumber;\n    if (pageNumber === currentPage) {\n        span.classList.add('active');\n    }\n    span.addEventListener('click', () => {\n        currentPage = pageNumber;\n        fetchCharacters(currentPage);\n    });\n    paginationContainer.appendChild(span);\n}\n\nfunction addDots() {\n    let span = document.createElement('span');\n    span.textContent = '...';\n    paginationContainer.appendChild(span);\n}\n\nfunction updateFavoriteButton(characterCard, character) {\n    if (characterCard) {\n        const addToFavoriteBtn = characterCard.querySelector('.add-button');\n        if (addToFavoriteBtn) {\n            if (_favorites_js__WEBPACK_IMPORTED_MODULE_0__.favoriteCharacters.includes(character.id)) {\n                addToFavoriteBtn.textContent = 'Убрать из избранного';\n            } else {\n                addToFavoriteBtn.textContent = 'Добавить в избранное';\n            }\n        }\n    }\n}\n\n\n\n// Обработчик события для кнопки \"Избранное\"\nfavoriteButton.addEventListener('click', () => {\n    charactersContainer.style.display = 'none';\n    paginationContainer.style.display = 'none';\n    favoriteButton.style.display = 'none';\n    favoriteCharactersContainer.style.display = 'grid';\n    backButton.style.display = 'block';\n    (0,_favorites_js__WEBPACK_IMPORTED_MODULE_0__.displayFavoriteCharacters)(favoriteCharactersContainer);\n});\n\n// Обработчик события для кнопки \"Назад\"\nbackButton.addEventListener('click', () => {\n    charactersContainer.style.display = 'grid';\n    paginationContainer.style.display = 'block';\n    favoriteButton.style.display = 'block';\n    favoriteCharactersContainer.style.display = 'none';\n    backButton.style.display = 'none';\n});\n\n// Обработчик события для кнопки \"Очистить Local Storage\"\nclearLocalStorageButton.addEventListener('click', () => {\n    localStorage.clear();\n    // Очищаем данные на странице, которые отображают информацию из localStorage\n    currentPage = 1;\n    _favorites_js__WEBPACK_IMPORTED_MODULE_0__.favoriteCharacters.splice(0); // Очищаем массив избранных персонажей\n    charactersContainer.innerHTML = '';\n    paginationContainer.innerHTML = '';\n    favoriteCharactersContainer.innerHTML = '';\n});\n\nfetchCharacters(currentPage);\n\n\n//# sourceURL=webpack://ricknmorty-proj/./src/script.js?");

/***/ }),

/***/ "./src/style.css?1315":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"57011448dc08b9372b5e.css\";\n\n//# sourceURL=webpack://ricknmorty-proj/./src/style.css?");

/***/ }),

/***/ "./src/script.js?eac1":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dd4f57833d2bebaef308.js\";\n\n//# sourceURL=webpack://ricknmorty-proj/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;