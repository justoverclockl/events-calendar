module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./src/admin/components/CalendarPage.js":
/*!**********************************************!*\
  !*** ./src/admin/components/CalendarPage.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CalendarPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/admin/components/ExtensionPage */ "flarum/admin/components/ExtensionPage");
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_admin_utils_saveSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/admin/utils/saveSettings */ "flarum/admin/utils/saveSettings");
/* harmony import */ var flarum_admin_utils_saveSettings__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_utils_saveSettings__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4__);






var CalendarPage = /*#__PURE__*/function (_ExtensionPage) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(CalendarPage, _ExtensionPage);

  function CalendarPage() {
    return _ExtensionPage.apply(this, arguments) || this;
  }

  var _proto = CalendarPage.prototype;

  _proto.oncreate = function oncreate(vnode) {
    _ExtensionPage.prototype.oncreate.call(this, vnode); // data for events


    var eventsArray = [{
      id: 'New Flarum Extension',
      date: '2021/08/23',
      content: 'is the extension finished?',
      source: '#'
    }];
    var today = new Date(),
        currentMonth = today.getMonth(),
        currentYear = today.getFullYear(); // array for weeks

    var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; // array for month

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; // structure

    var structureCalendar = createElement('div', window.root, {
      id: 'structureCalendar'
    }),
        // header
    calendarHeader = createElement('header', structureCalendar, {}),
        // header columns left center and right
    headerLeft = createElement('div', calendarHeader, {
      className: 'left'
    }),
        headerCenter = createElement('div', calendarHeader, {
      className: 'center'
    }),
        headerRight = createElement('div', calendarHeader, {
      className: 'right'
    }),
        // inside left column
    buttonPrev = createElement('button', headerLeft, {
      textContent: 'Previous'
    }),
        buttonNext = createElement('button', headerLeft, {
      textContent: 'Next'
    }),
        centerTitle = createElement('h1', headerCenter, {
      textContent: months[currentMonth] + ' ' + currentYear
    }),
        // calendar body
    calendarBody = createElement('div', structureCalendar, {
      id: 'calendar'
    }),
        weekdayBody = createElement('ul', calendarBody, {
      id: 'weekdays'
    }),
        daysBody = createElement('ul', calendarBody, {
      id: 'days'
    }); // init calendar

    showCalendar(currentMonth, currentYear); // map week days

    weekdays.map(function (item, i) {
      return (// change to monday
        today.getDay() - 0 == i ? createElement('li', weekdayBody, {
          className: 'today',
          textContent: item
        }) : createElement('li', weekdayBody, {
          textContent: item
        })
      );
    }); // buttons next prev

    buttonPrev.onclick = function () {
      return prev();
    };

    buttonNext.onclick = function () {
      return next();
    }; // generate calendar


    function showCalendar(month, year) {
      // first day - 1
      var firstDay = new Date(year, month).getDay() - 1; // clear preview content

      daysBody.textContent = ''; // filing data about month and in the page via DOM.

      centerTitle.textContent = months[month] + ' ' + year; // creating all cells

      var date = 1;

      for (var i = 0; i < 6; i++) {
        //creating individual cells, filing them up with data.
        for (var j = 0; j < 7; j++) {
          if (i === 0 && j < firstDay) {
            createElement('li', daysBody, {
              textContent: ''
            });
          } else if (date > daysInMonth(month, year)) {
            break;
          } else {
            var li = createElement('li', daysBody, {}),
                info = createElement('div', li, {
              className: 'info',
              textContent: weekdays[j]
            }),
                div = createElement('div', li, {
              className: 'date',
              textContent: date
            }); // ----------------------------
            // ----- view events

            if (typeof eventsArray !== 'undefined') {
              viewEvents(eventsArray, li, [year, month, date]);
            } // ----------------------------


            if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
              li.className = 'today';
            }

            date++;
          }
        }
      }
    } // view events


    function viewEvents(data, where, args) {
      return data && data.map(function (item) {
        var date = item.date.split('/'),
            year = parseInt(date[0]),
            month = parseInt(date[1]) - 1,
            day = parseInt(date[2]);

        if (year === args[0] && month === args[1] && day === args[2]) {
          var event = createElement('div', where, {
            className: 'ev',
            id: item.id
          }),
              eventDesc = createElement('div', event, {
            className: 'ev-desc'
          });
          eventDesc.innerHTML = "<div class=\"eventFlarumCalendar\">" + item.content + "</div>";

          event.onclick = function () {
            return alert(eventDesc.textContent);
          };
        }
      });
    } // next month


    function next() {
      currentMonth = (currentMonth + 1) % 12;
      currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
      showCalendar(currentMonth, currentYear);
    } // previus month


    function prev() {
      currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
      currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
      showCalendar(currentMonth, currentYear);
    }

    function daysInMonth(iMonth, iYear) {
      return 32 - new Date(iYear, iMonth, 32).getDate();
    } // --- Create element


    function createElement(element, where, args) {
      var d = document.createElement(element);
      if (args) for (var _i = 0, _Object$entries = Object.entries(args); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _Object$entries[_i],
            k = _Object$entries$_i[0],
            v = _Object$entries$_i[1];
        d[k] = v;
      }
      where.appendChild(d);
      return d;
    }
  };

  _proto.content = function content() {
    return m("div", {
      "class": "contentcalflarum"
    }, m("div", {
      "class": "calforflarum",
      id: "root"
    }));
  };

  return CalendarPage;
}(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_registerWidget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/registerWidget */ "./src/common/registerWidget.js");
/* harmony import */ var _components_CalendarPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/CalendarPage */ "./src/admin/components/CalendarPage.js");



flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('justoverclock/events-calendar', function () {
  Object(_common_registerWidget__WEBPACK_IMPORTED_MODULE_1__["default"])(flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a);
  flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.extensionData["for"]('justoverclock-events-calendar').registerPage(_components_CalendarPage__WEBPACK_IMPORTED_MODULE_2__["default"]);
});

/***/ }),

/***/ "./src/common/components/GoogleCalendarEvents.js":
/*!*******************************************************!*\
  !*** ./src/common/components/GoogleCalendarEvents.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GoogleCalendarEvents; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_extensions_afrux_forum_widgets_core_common_components_Widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/extensions/afrux-forum-widgets-core/common/components/Widget */ "flarum/extensions/afrux-forum-widgets-core/common/components/Widget");
/* harmony import */ var flarum_extensions_afrux_forum_widgets_core_common_components_Widget__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_extensions_afrux_forum_widgets_core_common_components_Widget__WEBPACK_IMPORTED_MODULE_1__);


/*
 * This file is part of justoverclock/last-tweet.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */


var GoogleCalendarEvents = /*#__PURE__*/function (_Widget) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(GoogleCalendarEvents, _Widget);

  function GoogleCalendarEvents() {
    return _Widget.apply(this, arguments) || this;
  }

  var _proto = GoogleCalendarEvents.prototype;

  _proto.oncreate = function oncreate(vnode) {};

  _proto.className = function className() {
    return 'GoogleCalEvents';
  };

  _proto.icon = function icon() {
    // Widget icon.
    return 'far fa-calendar-check';
  };

  _proto.title = function title() {
    // Widget title.
    return app.translator.trans('justoverclock-last-tweet.forum.widget-title');
  };

  _proto.content = function content() {
    return m("div", null, m("ul", {
      id: "events-upcoming"
    }), m("ul", {
      id: "events-past"
    }));
  };

  return GoogleCalendarEvents;
}(flarum_extensions_afrux_forum_widgets_core_common_components_Widget__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/common/registerWidget.js":
/*!**************************************!*\
  !*** ./src/common/registerWidget.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extensions_afrux_forum_widgets_core_common_extend_Widgets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extensions/afrux-forum-widgets-core/common/extend/Widgets */ "flarum/extensions/afrux-forum-widgets-core/common/extend/Widgets");
/* harmony import */ var flarum_extensions_afrux_forum_widgets_core_common_extend_Widgets__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extensions_afrux_forum_widgets_core_common_extend_Widgets__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_GoogleCalendarEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/GoogleCalendarEvents */ "./src/common/components/GoogleCalendarEvents.js");


/* harmony default export */ __webpack_exports__["default"] = (function (app) {
  new flarum_extensions_afrux_forum_widgets_core_common_extend_Widgets__WEBPACK_IMPORTED_MODULE_0___default.a().add({
    key: 'GoogleCalEvents',
    component: _components_GoogleCalendarEvents__WEBPACK_IMPORTED_MODULE_1__["default"],
    isDisabled: false,
    isUnique: true,
    placement: 'end',
    position: 1
  }).extend(app, 'justoverclock-events-calendar');
});

/***/ }),

/***/ "flarum/admin/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['admin/app']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/app'];

/***/ }),

/***/ "flarum/admin/components/ExtensionPage":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/ExtensionPage']" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/components/ExtensionPage'];

/***/ }),

/***/ "flarum/admin/utils/saveSettings":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['admin/utils/saveSettings']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/utils/saveSettings'];

/***/ }),

/***/ "flarum/common/utils/extractText":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/utils/extractText']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/extractText'];

/***/ }),

/***/ "flarum/extensions/afrux-forum-widgets-core/common/components/Widget":
/*!*****************************************************************************************************!*\
  !*** external "flarum.core.compat['extensions/afrux-forum-widgets-core/common/components/Widget']" ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extensions/afrux-forum-widgets-core/common/components/Widget'];

/***/ }),

/***/ "flarum/extensions/afrux-forum-widgets-core/common/extend/Widgets":
/*!**************************************************************************************************!*\
  !*** external "flarum.core.compat['extensions/afrux-forum-widgets-core/common/extend/Widgets']" ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extensions/afrux-forum-widgets-core/common/extend/Widgets'];

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map