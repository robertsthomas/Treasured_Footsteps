webpackHotUpdate("static/development/pages/index.js",{

/***/ "./Sections/Home/Schedule.js":
/*!***********************************!*\
  !*** ./Sections/Home/Schedule.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/media/thomas/extfiles/Projects/treasured_footsteps/Sections/Home/Schedule.js";


var Schedule = function Schedule() {
  var classes = [{
    type: "Zumba Gold",
    schedule: [{
      day: 'Monday',
      time: '10:15 am - 11:00 am'
    }]
  }, {
    type: "L.I.S",
    schedule: [{
      day: 'Thursday',
      time: '8:30 am - 9:15 am'
    }]
  }, {
    type: "Bootcamp",
    schedule: [{
      day: 'Thursday',
      time: '9:30 am - 10:30 am'
    }]
  }, {
    type: 'Zumba Toning',
    schedule: [{
      day: "Friday",
      time: '8:00 am - 9:00 am'
    }]
  }, {
    type: 'Body Sculpting',
    schedule: [{
      day: 'Monday',
      time: '9:15 am - 10:00 am'
    }, {
      day: 'Saturday',
      time: '8:30 am - 9:15 am'
    }]
  }];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container my-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Class Schedule"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "card w-75 mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, classes.map(function (data) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "card-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, data.type), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      class: "list-group list-group-flush",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, data.schedule.map(function (d) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        class: "list-group-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, d.day, " ", d.time);
    })));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Schedule);

/***/ })

})
//# sourceMappingURL=index.js.2e9c1a66af91dd28ac0e.hot-update.js.map