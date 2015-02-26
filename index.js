"use strict";

var reverseArgs = function (fn, scope) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return fn.apply(scope || undefined, args.reverse());
  };
};

module.exports = reverseArgs;