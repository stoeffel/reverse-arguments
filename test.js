"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var reverse = _interopRequire(require("./"));

var expect = _interopRequire(require("expect.js"));

var Klass = (function () {
  function Klass() {
    _classCallCheck(this, Klass);

    this.test = true;
  }

  Klass.prototype.isEqual = function isEqual(arg, bool) {
    return bool === this.test;
  };

  return Klass;
})();

;

var obj = new Klass();
var join = function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.join(",");
};
var foo = function (string, upper) {
  return upper ? string.toUpperCase() : string.toLowerCase();
};

it("should reverse the arguments", function () {
  expect(reverse(join)()).to.equal("");
  expect(reverse(join)(1)).to.equal("1");
  expect(reverse(join)(1, 2)).to.equal("2,1");
  expect(reverse(join)(1, 2, 3)).to.equal("3,2,1");
  expect(reverse(foo)(true, "Foo")).to.equal("FOO");
  expect(reverse(foo)(false, "Foo")).to.equal("foo");
  expect(reverse(reverse(foo))("Foo", false)).to.equal("foo");
  expect(reverse(reverse(foo))("Foo", true)).to.equal("FOO");
});

it("should call the function with the given scope", function () {
  expect(reverse(obj.isEqual, obj)()).to.not.be.ok();
  expect(reverse(obj.isEqual, obj)(true, undefined)).to.be.ok();
  expect(reverse(obj.isEqual, obj)(false, undefined)).to.not.be.ok();
  expect(reverse(obj.isEqual, obj)(undefined, true)).to.not.be.ok();
  expect(reverse(reverse(obj.isEqual, obj))(undefined, true)).to.be.ok();
});