(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("$"));
	else if(typeof define === 'function' && define.amd)
		define(["$"], factory);
	else if(typeof exports === 'object')
		exports["dodoroy"] = factory(require("$"));
	else
		root["dodoroy"] = factory(root["$"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_jquery__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/blur-viewer.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blur-viewer.js":
/*!****************************!*\
  !*** ./src/blur-viewer.js ***!
  \****************************/
/*! exports provided: BlurViewer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlurViewer", function() { return BlurViewer; });
/* harmony import */ var _templator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templator.js */ "./src/templator.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blur_viewer_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blur-viewer.scss */ "./src/blur-viewer.scss");
/* harmony import */ var _blur_viewer_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_blur_viewer_scss__WEBPACK_IMPORTED_MODULE_2__);



class BlurViewer {
  constructor(wrapper) {
    this.id = this.generateID('blur-viewer-');
    this.$wrapper = jquery__WEBPACK_IMPORTED_MODULE_1___default()(wrapper);
    this.blurTemplate = null;
    this.init();
  }

  init() {
    this.blurTemplate = new _templator_js__WEBPACK_IMPORTED_MODULE_0__["default"](document.getElementById('blur-template').innerHTML);
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).on('load', () => {
      this.addBlur();
    });
    this.bind();
  }

  addBlur() {
    // this.$wrapper.find('.blur').empty().remove();
    let svgStr = this.blurTemplate.compile({
      image: this.$wrapper.find('.blur-image').attr('src'),
      filter: this.generateID('filter-'),
      mask: this.generateID('mask-')
    });
    console.log(svgStr);
    this.$wrapper.append(svgStr);
  }

  updateCirclePosition(event) {
    let posX = event.offsetX;
    let posY = event.offsetY;
    let circle = this.$wrapper.find('.mask circle').get(0);
    circle.setAttribute('cy', posY + 'px');
    circle.setAttribute('cx', posX + 'px');
  }

  bind() {
    this.$wrapper.on('mousemove', event => {
      this.updateCirclePosition(event);
    });
  }

  unbind() {
    this.$wrapper.off('mousemove');
  }

  destroy() {
    this.unbind();
  }

  generateID(prefix) {
    return (prefix || '') + new Date().getTime();
  }

}

/***/ }),

/***/ "./src/blur-viewer.scss":
/*!******************************!*\
  !*** ./src/blur-viewer.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/templator.js":
/*!**************************!*\
  !*** ./src/templator.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Templator; });
class Templator {
  constructor(string) {
    this.template = string;
  }

  compile(data) {
    if (!this.template) {
      return null;
    }

    return this.template.replace(/\{\{(.*?)\}\}/g, function (match, keysString) {
      console.log('match', match, 'keysString', keysString);
      let keys = keysString.split('.');
      let value = data; // console.log(keys.length)

      for (let i = 0; i < keys.length; i++) {
        if (value.hasOwnProperty(keys[i])) {
          value = value[keys[i]];
        } else {
          value = '';
          break;
        }
      }

      return value;
    });
  }

}

/***/ }),

/***/ "jquery":
/*!********************!*\
  !*** external "$" ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;

/***/ })

/******/ });
});
//# sourceMappingURL=blur-viewer.js.map