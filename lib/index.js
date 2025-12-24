"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "hasRejected", {
  enumerable: true,
  get: function get() {
    return _hasRejected["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _hasResolved["default"];
  }
});

var _hasRejected = _interopRequireDefault(require("./hasRejected"));

var _hasResolved = _interopRequireDefault(require("./hasResolved"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_hasResolved["default"].hasRejected = _hasRejected["default"];