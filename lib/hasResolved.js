"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = hasResolved;

function hasResolved(promise) {
  var symbol = Symbol();
  return Promise.race([promise, new Promise(function (resolve) {
    return setImmediate(function () {
      return resolve(symbol);
    });
  })]).then(function (result) {
    return result !== symbol;
  }, function () {
    return false;
  });
}

module.exports = exports.default;
module.exports.default = exports.default;