/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst mapReduceSqlRows = __webpack_require__(/*! ./src/mapReduceSqlRows */ \"./src/mapReduceSqlRows.js\");\nconst addSqlParamsToRequest = __webpack_require__(/*! ./src/addSqlParamsToRequest */ \"./src/addSqlParamsToRequest.js\");\nconst promisifyTediousExecSql = __webpack_require__(/*! ./src/promisifyTediousExecSql */ \"./src/promisifyTediousExecSql.js\");\nconst addParam = __webpack_require__(/*! ./src/addParams */ \"./src/addParams.js\");\n\nmodule.exports = {\n  mapReduceSqlRows,\n  addSqlParamsToRequest,\n  promisifyTediousExecSql,\n  addParam\n};\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./src/addParams.js":
/*!**************************!*\
  !*** ./src/addParams.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = (name, type, value) => ({\n  name,\n  type,\n  value\n});\n\n//# sourceURL=webpack:///./src/addParams.js?");

/***/ }),

/***/ "./src/addSqlParamsToRequest.js":
/*!**************************************!*\
  !*** ./src/addSqlParamsToRequest.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst addSqlParamsToRequest = (sqlParams, request) => {\n  sqlParams.forEach(param => {\n    request.addParameter(param.name, param.type, param.value);\n  });\n};\nmodule.exports = addSqlParamsToRequest;\n\n//# sourceURL=webpack:///./src/addSqlParamsToRequest.js?");

/***/ }),

/***/ "./src/mapReduceSqlRows.js":
/*!*********************************!*\
  !*** ./src/mapReduceSqlRows.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nconst _ = __webpack_require__(/*! lodash */ \"lodash\");\n\nconst mapReduceSqlRows = rows => rows.map(row => row.reduce((prev, curr) => _extends({}, prev, { [_.camelCase(curr.metadata.colName)]: curr.value\n}), {}));\nmodule.exports = mapReduceSqlRows;\n\n//# sourceURL=webpack:///./src/mapReduceSqlRows.js?");

/***/ }),

/***/ "./src/promisifyTediousExecSql.js":
/*!****************************************!*\
  !*** ./src/promisifyTediousExecSql.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst sql = __webpack_require__(/*! tedious */ \"tedious\");\nconst mapReduceSqlRows = __webpack_require__(/*! ./mapReduceSqlRows */ \"./src/mapReduceSqlRows.js\");\nconst addSqlParamsToRequest = __webpack_require__(/*! ./addSqlParamsToRequest */ \"./src/addSqlParamsToRequest.js\");\n\nconst promisifyTediousExecSql = (connection, query, params = null) => new Promise((resolve, reject) => {\n  const sqlCallback = (err, rowCount, rows) => {\n    if (err) {\n      reject(err);\n    } else {\n      const results = mapReduceSqlRows(rows);\n      resolve(results);\n    }\n  };\n  const request = new sql.Request(query, sqlCallback);\n  if (params) {\n    addSqlParamsToRequest(params, request);\n  }\n  connection.execSql(request);\n});\nmodule.exports = promisifyTediousExecSql;\n\n//# sourceURL=webpack:///./src/promisifyTediousExecSql.js?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "tedious":
/*!**************************!*\
  !*** external "tedious" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"tedious\");\n\n//# sourceURL=webpack:///external_%22tedious%22?");

/***/ })

/******/ });