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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    --grad-color: linear-gradient(90deg,rgba(255, 255, 255, 1) 6%, rgba(121, 9, 72, 1) 100%, rgba(106, 0, 255, 1) 100%);\n    --grad-color2: linear-gradient(90deg,rgba(189, 83, 124, 1) 0%, rgba(121, 9, 72, 1) 35%, rgba(106, 0, 255, 1) 100%);\n    --grad-color3: linear-gradient(90deg,rgba(255, 255, 255, 1) 6%, rgba(232, 225, 174, 1) 100%, rgba(240, 218, 120, 1) 100%);\n    --my-font: \"Droid Sans\", sans-serif;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-family: \"Adwaita Mono\", monospace;\n    background: #FFFFFF;\n    background: var(--grad-color3), var(--grad-color2);\n    font-family: var(--my-font, monospace);\n}\n\nheader {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nimg {\n    width: 300px;\n    height: 200px;\n}\n\nnav {\n    display: flex;\n    flex-direction: row;\n    justify-content: start;\n    align-items: center;\n    width: 100%;\n    height: 50px;\n    background-color: var(--grad-color);\n    color: white;\n}\nnav button {\n    background-color: #bd537c;\n    background: var(--grad-color3);\n    color: saddlebrown;\n    border: none;\n    padding: 10px 20px;\n    margin: 0 10px;\n    cursor: pointer;\n    border-radius: 5px;\n    font-size: 16px;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n}\n\n#content h1 {\n    font-family: \"Droid Sans\", sans-serif;\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n    font-weight: 700;\n    font-size: 3rem;\n}\n\n#content h2 {\n    font-family: \"Adwaita Mono\", monospace;\n    font-size: 2rem;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n}\n\n#menu {\n    display: flex;\n    flex-direction: row;\n    background-color: var(--grad-color2);\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-restaurant-landing-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://top-restaurant-landing-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top-restaurant-landing-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top-restaurant-landing-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top-restaurant-landing-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top-restaurant-landing-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top-restaurant-landing-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top-restaurant-landing-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top-restaurant-landing-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   load_contact: () => (/* binding */ load_contact)\n/* harmony export */ });\nfunction load_contact() {\n    const content = document.getElementById('content');\n    const contact = document.createElement('div');\n    contact.id = 'contact';\n    try {\n        // Create main section\n        const section = document.createElement('section');\n        section.className = 'contact-section';\n\n        // Header\n        const header = document.createElement('h2');\n        header.textContent = 'Contact Abrom\\'s Steakhouse';\n        section.appendChild(header);\n\n        // Intro paragraph\n        const intro = document.createElement('p');\n        intro.className = 'contact-intro';\n        intro.textContent = 'We\\'d love to hear from you! Whether you have a question, want to make a reservation, or simply want to share your dining experience, feel free to reach out.';\n        section.appendChild(intro);\n\n        // Contact Info Container\n        const contactInfo = document.createElement('div');\n        contactInfo.className = 'contact-info';\n\n        // Contact Method\n        const contactMethod = document.createElement('div');\n        contactMethod.className = 'contact-method';\n        contactMethod.innerHTML = `\n            <h3>Get in Touch</h3>\n            <ul class=\"contact-details\">\n                <li><i class=\"fas fa-phone\"></i> <a href=\"tel:5551234567\">(555) 123-4567</a></li>\n                <li><i class=\"fas fa-envelope\"></i> <a href=\"mailto:info@abromssteakhouse.com\">info@abromssteakhouse.com</a></li>\n            </ul>\n        `;\n        contactInfo.appendChild(contactMethod);\n\n        // Location\n        const locationDiv = document.createElement('div');\n        locationDiv.className = 'location';\n        locationDiv.innerHTML = `\n            <h3>Our Location</h3>\n            <address>\n                <p>Abrom\\'s Steakhouse</p>\n                <p>123 Prime Cut Boulevard</p>\n                <p>Steakville, USA 90210</p>\n            </address>\n        `;\n        contactInfo.appendChild(locationDiv);\n\n        // Hours\n        const hoursDiv = document.createElement('div');\n        hoursDiv.className = 'hours';\n        hoursDiv.innerHTML = `\n            <h3>Hours of Operation</h3>\n            <div class=\"hours-section\">\n                <h4>Dinner:</h4>\n                <ul class=\"hours-list\">\n                    <li>Monday - Thursday: 5:00 PM - 10:00 PM</li>\n                    <li>Friday - Saturday: 5:00 PM - 11:00 PM</li>\n                    <li>Sunday: 4:00 PM - 9:00 PM</li>\n                </ul>\n            </div>\n            <div class=\"hours-section\">\n                <h4>Lunch:</h4>\n                <p>Currently, we do not offer lunch service.</p>\n            </div>\n        `;\n        contactInfo.appendChild(hoursDiv);\n\n        section.appendChild(contactInfo);\n\n        // Reservation Note\n        const reservationNote = document.createElement('div');\n        reservationNote.className = 'reservation-note';\n        reservationNote.innerHTML = `\n            <p>For reservations, please call us during operating hours or use our online reservation system (if applicable). We look forward to welcoming you!</p>\n        `;\n        section.appendChild(reservationNote);\n\n        // Clear existing content and append new content\n        contact.innerHTML = '';\n        contact.appendChild(section);\n\n        // Add event listeners for phone and email links\n        const phoneLink = contact.querySelector('a[href^=\"tel:\"]');\n        const emailLink = contact.querySelector('a[href^=\"mailto:\"]');\n\n        if (phoneLink) {\n            phoneLink.addEventListener('click', () => {\n                console.log('Phone link clicked');\n            });\n        }\n\n        if (emailLink) {\n            emailLink.addEventListener('click', () => {\n                console.log('Email link clicked');\n            });\n        }\n    } catch (error) {\n        console.error('Error loading contact section:', error);\n        contact.innerHTML = '<p>Sorry, there was an error loading the contact information.</p>';\n    }\n    content.appendChild(contact);\n}\n\n//# sourceURL=webpack://top-restaurant-landing-page/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _load_page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load_page.js */ \"./src/load_page.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    (0,_load_page_js__WEBPACK_IMPORTED_MODULE_1__.load_page)();\n});\n\nconst home_btn = document.getElementById('home');\nhome_btn.addEventListener('click', () => {\n    (0,_load_page_js__WEBPACK_IMPORTED_MODULE_1__.load_page)();\n})\n\nconst menu_btn = document.getElementById(\"menu\");\nmenu_btn.addEventListener('click', () => {\n    const content = document.querySelector('#content');\n    content.innerHTML = '';\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.load_menu)();\n});\n\nconst contact_btn = document.querySelector('#contact');\ncontact_btn.addEventListener('click', () => {\n   const content = document.querySelector('#content');\n   content.innerHTML = '';\n   (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.load_contact)();\n});\n\n//# sourceURL=webpack://top-restaurant-landing-page/./src/index.js?");

/***/ }),

/***/ "./src/load_page.js":
/*!**************************!*\
  !*** ./src/load_page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   load_page: () => (/* binding */ load_page)\n/* harmony export */ });\n/* harmony import */ var _logo_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.jpg */ \"./src/logo.jpg\");\n\nfunction load_page() {\n    try {\n        const content = document.getElementById('content');\n        content.textContent = ''; // Clear content safely\n\n        // Create and append h1\n        const h1 = document.createElement('h1');\n        h1.textContent = \"Abrom's Steakhouse\";\n        content.appendChild(h1);\n\n        // Create and append logo\n        const img = document.createElement('img');\n        img.src = _logo_jpg__WEBPACK_IMPORTED_MODULE_0__;\n        img.alt = \"Abrom's Steakhouse Logo\";\n        img.height = 200;\n        img.width = 200;\n        content.appendChild(img);\n\n        // Create home section\n        const home = document.createElement('section');\n        home.id = \"home\";\n        \n        // Add heading\n        const heading = document.createElement('h2');\n        heading.textContent = 'About Us';\n        home.appendChild(heading);\n        \n        // Add paragraph with line breaks\n        const paragraph = document.createElement('p');\n        const lines = [\n            \"Welcome to Abrom's Steakhouse, where every meal is a celebration of flavor and tradition.\",\n            \"Indulge in our succulent steaks, cooked to perfection and seasoned with passion.\",\n            \"Experience a culinary journey that tantalizes your taste buds and leaves you craving more.\",\n            \"At Abrom's, we believe in crafting memorable moments around exceptional food.\"\n        ];\n        \n        lines.forEach((line, index) => {\n            paragraph.appendChild(document.createTextNode(line));\n            if (index < lines.length - 1) {\n                paragraph.appendChild(document.createElement('br'));\n            }\n        });\n        \n        home.appendChild(paragraph);\n        content.appendChild(home);\n        content.id = \"content\";\n    } catch (error) {\n        console.error('Error loading page:', error);\n        const content = document.getElementById('content');\n        content.textContent = 'Error loading content. Please try again later.';\n    }\n}\n\n//# sourceURL=webpack://top-restaurant-landing-page/./src/load_page.js?");

/***/ }),

/***/ "./src/logo.jpg":
/*!**********************!*\
  !*** ./src/logo.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cd7ad1a6a1f731e2af61.jpg\";\n\n//# sourceURL=webpack://top-restaurant-landing-page/./src/logo.jpg?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   load_menu: () => (/* binding */ load_menu)\n/* harmony export */ });\nfunction createMenuItem(name, description, price) {\n    const li = document.createElement('li');\n    \n    if (description) {\n        const nameSpan = document.createElement('span');\n        nameSpan.textContent = `${name} - ${description} `;\n        li.appendChild(nameSpan);\n    } else {\n        li.textContent = name;\n    }\n    \n    if (price) {\n        const priceSpan = document.createElement('span');\n        priceSpan.className = 'price';\n        priceSpan.textContent = price;\n        li.appendChild(priceSpan);\n    }\n    \n    return li;\n}\n\nfunction createMenuSection(title, items, note) {\n    const section = document.createElement('div');\n    section.className = 'menu-section';\n    \n    const heading = document.createElement('h2');\n    heading.textContent = title;\n    section.appendChild(heading);\n    \n    if (note) {\n        const noteP = document.createElement('p');\n        noteP.className = 'note';\n        noteP.textContent = note;\n        section.appendChild(noteP);\n    }\n    \n    const ul = document.createElement('ul');\n    items.forEach(item => {\n        ul.appendChild(createMenuItem(item.name, item.description, item.price));\n    });\n    \n    section.appendChild(ul);\n    return section;\n}\n\nfunction load_menu() {\n    try {\n        const content = document.getElementById('content');\n        content.textContent = ''; // Clear content safely\n        \n        const menu = document.createElement('div');\n        menu.id = 'menu';\n        \n        const menuSection = document.createElement('div');\n        menuSection.className = 'menu-section';\n        \n        // Menu Title\n        const menuTitle = document.createElement('h1');\n        menuTitle.textContent = 'Menu';\n        menuSection.appendChild(menuTitle);\n        \n        // Appetizers\n        const appetizers = {\n            title: 'Appetizers',\n            items: [\n                { name: 'Seared Scallops (5 pcs)', description: 'Pan-seared to a golden crisp, served with a lemon-butter reduction and asparagus tips', price: '$18.00' },\n                { name: 'Wagyu Beef Carpaccio', description: 'Thinly sliced, prime Wagyu beef drizzled with truffle oil, capers, arugula, and Parmesan shavings', price: '$22.00' },\n                { name: 'Crispy Calamari', description: 'Lightly breaded calamari, fried to perfection, served with a zesty marinara sauce and aioli', price: '$15.00' },\n                { name: 'Lobster Bisque', description: 'Rich and creamy bisque, infused with sweet lobster meat and a hint of brandy', price: '$12.00' }\n            ]\n        };\n        menuSection.appendChild(createMenuSection(appetizers.title, appetizers.items));\n        \n        // Signature Steaks\n        const steaks = {\n            title: 'From the Grill - Our Signature Steaks',\n            note: '(All steaks are served with your choice of two sides and a sauce.)',\n            items: [\n                { name: 'The Abrom\\'s Prime Ribeye (300g)', description: 'Our most popular cut, perfectly marbled and bursting with flavor', price: '$45.00' },\n                { name: 'New York Strip (350g)', description: 'A lean and flavorful classic, expertly grilled to your preference', price: '$42.00' },\n                { name: 'Filet Mignon', description: 'Exceptionally tender, melt-in-your-mouth cut (200g / 280g)', price: '$48.00 / $60.00' },\n                { name: 'Porterhouse Steak (700g - serves 2)', description: 'The best of both worlds: a generous cut combining the rich flavor of a New York Strip with the tenderness of a Filet Mignon', price: '$85.00' },\n                { name: 'Tomahawk Steak (1.2kg - serves 2-3)', description: 'A show-stopping, long-bone ribeye, dry-aged for intense flavor and cooked to perfection', price: '$120.00' }\n            ]\n        };\n        menuSection.appendChild(createMenuSection(steaks.title, steaks.items, steaks.note));\n        \n        // Sauces\n        const sauces = {\n            title: 'Sauces',\n            items: [\n                { name: 'Classic Béarnaise' },\n                { name: 'Peppercorn' },\n                { name: 'Red Wine Reduction' },\n                { name: 'Creamy Horseradish' }\n            ]\n        };\n        menuSection.appendChild(createMenuSection(sauces.title, sauces.items));\n        \n        // Sides\n        const sides = {\n            title: 'Sides',\n            items: [\n                { name: 'Creamed Spinach', price: '$8.00' },\n                { name: 'Asparagus with Hollandaise', price: '$9.00' },\n                { name: 'Garlic Mashed Potatoes', price: '$7.00' },\n                { name: 'Truffle Parmesan Fries', price: '$9.00' },\n                { name: 'Roasted Seasonal Vegetables', price: '$8.00' },\n                { name: 'Macaroni & Cheese', price: '$10.00' }\n            ]\n        };\n        menuSection.appendChild(createMenuSection(sides.title, sides.items));\n        \n        // Desserts\n        const desserts = {\n            title: 'Desserts',\n            items: [\n                { name: 'New York Style Cheesecake', description: 'Creamy cheesecake with a berry compote', price: '$10.00' },\n                { name: 'Molten Chocolate Lava Cake', description: 'Warm chocolate cake with a gooey molten center, served with vanilla bean ice cream', price: '$11.00' },\n                { name: 'Crème Brûlée', description: 'Classic vanilla custard with a crisp caramelized sugar top', price: '$9.00' },\n                { name: 'Seasonal Fruit Platter', description: 'A refreshing selection of fresh, seasonal fruits', price: '$8.00' }\n            ]\n        };\n        menuSection.appendChild(createMenuSection(desserts.title, desserts.items));\n        \n        menu.appendChild(menuSection);\n        content.appendChild(menu);\n        \n    } catch (error) {\n        console.error('Error loading menu:', error);\n        const content = document.getElementById('content');\n        content.textContent = 'Error loading menu. Please try again later.';\n    }\n}\n\n//# sourceURL=webpack://top-restaurant-landing-page/./src/menu.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-restaurant-landing-page/./src/styles.css?");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
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
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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