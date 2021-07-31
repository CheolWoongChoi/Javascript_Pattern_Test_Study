const Aop = {
  around(fnName: string, advice: Function, fnObj: Function) {
    const originalFn = fnObj[fnName];
    fnObj[fnName] = function () {
      return advice.call(this, { fn: originalFn, args: arguments });
    };
  },
};
