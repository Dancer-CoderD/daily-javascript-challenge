/**
 * 
 * 经过我们前面对 Generator 的理解之后，现在来看其实它就是 Generator 的一个语法糖。
 * 它只是自动帮我们进行了 Generator 的流程控制而已。
 * 
 * - async 对应的是 *
 * - await 对应的是 yield
 *  
*/
// 这是之前 Generator 实现的例子
async function fetchUser() {
    const user = await ajax();
    console.log(user);
};

/**
 * 
 * 因为有自动的流程控制，所以我们不需要再手动等 ajax 成功时调用 next。
 * 有兴趣可以参考一下 Babel 是如何编译 async/await 的。
 * 简单的说，代码一部分编译了一个 Generator，另一部分通过 promise 实现了 Generator 的流程控制。
 * 
*/
async function count() {
    let a = await 1;
    let b = await 2;
    return a + b;
}

// 编译之后的代码：

var count = function () {
  // 下面这部分是 generator 的一个实现
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var a, b;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return 1;

            // 省略...
        }
      }
    }, _callee, this);
  }));

  return function count() {
    return _ref.apply(this, arguments);
  };
}();