"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = hasRejected;

function hasRejected(promise) {
  var symbol = Symbol();
  return Promise.race([promise, new Promise(function (_, reject) {
    return setImmediate(function () {
      return reject(symbol);
    });
  })]).then(function () {
    return false;
  }, function (result) {
    return result !== symbol;
  });
}

module.exports = exports.default;
module.exports.default = exports.default;