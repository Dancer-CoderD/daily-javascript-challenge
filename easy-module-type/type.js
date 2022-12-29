/**
 * CommonJS、AMD、CMD、ES Module
 *
 * 时间轴：CommonJS -> AMD -> CMD -> ES Module
 *
 */

// # CommonJS
// - 常用于：服务端，例如 node，以及 webpack
// - 特点：同步/运行时加载，磁盘读取速度快

// ### 导出
module.exports = {
  module1,
  module2,
};

exports.module3 = xxx;

// 注意：不可以 exports = xxx，这样写更改了 exports 的地址。
// exports 是 module.exports 的引用，两者指向的是同一个内存，模块最后导出的是 module.exports。

// ### 导入
const xxx = require("xxx");
const { module4 } = require("xxx");

// # AMD
// - 非常用：属于是 CommonJS 在浏览器端的实现。
// - 特点：异步加载。面向浏览器端，为了不影响渲染进程。
// - 特点：依赖前置。所有的依赖必须写在最初的依赖数组中，速度快。但是会浪费资源，预先加载了所有依赖不管你是否用到。

// ### 导出
define(["x"], function (x) {
  function foo() {
    return x.fn() + 1;
  }
  return {
    foo: foo,
  };
});

// ### 导入
require(["a"], function (a) {
  a.foo();
});

// # CMD
// - 非常用：根据 CommonJS 和 AMD 实现，优化了加载方式
// - 特点：异步加载。
// - 特点：按需加载。用到依赖再引用，方便开发，缺点是速度和性能较差。

// ### 导出
define(function () {
  function foo() {
    var x = require("x");
    return x.fn() + 1;
  }
  return {
    foo: foo,
  };
});

// ### 导入
var x = require("a");
a.foo();

// # ES Module
// - 常用：目前浏览器端的默认标准。
// - 特点：静态编译。在编译时就能确定依赖关系，输入以及输出的变量。

// ### 导出
export var m = 1;
export function m() {}
export class M {}

export { module5, module6 };

export default () => {
  return module7;
};

// 注意：export default，一个模块只能由一个默认输出。
// 注意：export 和 export default 可以同时存在。
/**
 * var info = {
    name: 'module8'
}

export default info;
export const api = "/user/profile";
*/

// ### 导入
import { x } from "test.js"; // 导出模块中对应的值，必须知道导出时定义的名字
import { x as newX } from "test.js"; // 将导出时的名字修改
import x from "test.js"; // 导出默认引用 -> export default
