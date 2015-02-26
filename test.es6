import reverse from './';
import expect from 'expect.js';

class Klass {
  constructor () {
    this.test = true;
  }
  isEqual (arg, bool) {
    return bool === this.test;
  }
};

const obj = new Klass();
const join = (...args) => args.join(',');
const foo = (string, upper) =>
  upper?
    string.toUpperCase():
    string.toLowerCase();

it('should reverse the arguments', () => {
  expect(reverse(join)()).to.equal('');
  expect(reverse(join)(1)).to.equal('1');
  expect(reverse(join)(1, 2)).to.equal('2,1');
  expect(reverse(join)(1, 2, 3)).to.equal('3,2,1');
  expect(reverse(foo)(true, 'Foo')).to.equal('FOO');
  expect(reverse(foo)(false, 'Foo')).to.equal('foo');
  expect(reverse(reverse(foo))('Foo', false)).to.equal('foo');
  expect(reverse(reverse(foo))('Foo', true)).to.equal('FOO');
});

it('should call the function with the given scope', () => {
  expect(reverse(obj.isEqual, obj)()).to.not.be.ok();
  expect(reverse(obj.isEqual, obj)(true, undefined)).to.be.ok();
  expect(reverse(obj.isEqual, obj)(false, undefined)).to.not.be.ok();
  expect(reverse(obj.isEqual, obj)(undefined, true)).to.not.be.ok();
  expect(reverse(reverse(obj.isEqual, obj))(undefined, true)).to.be.ok();
});
