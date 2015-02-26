const reverseArgs = (fn, scope) =>
  (...args) =>
    fn.apply(scope || this, args.reverse());

export default reverseArgs;
