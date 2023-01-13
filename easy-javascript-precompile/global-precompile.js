/**
 *
 * # 全局预编译
 *
 * 全局中不存在形参和实参，所以全局预编译只需要处理变量声明和函数声明即可。
 *
 * 全局预编译分为3个阶段：
 * - 1. 生成 GO（Global Object）；
 * - 2. 找变量声明，由于全局变量默认挂载在window上，若window当前已存在当前属性，忽略当前操作；若没有，变量作为属性名，值赋予 undefined；
 * - 3. 找函数声明，函数与变量类似，先去window上查看，若不存在，函数作为函数名，值为函数体。
 *
 */
console.log(a);
var a = 1;
console.log(a);
function test(a) {
  console.log(a);
  var a = 123;
  console.log(a);
  function a() {}
  console.log(a);
  console.log(b);
  var b = function () {};
  console.log(b);
}

test(2);
// undefined
// 1

// 1. 先生成 GO
GO: {
  a: undefined;
  test: function test() {}
}
// 2. 找变量声明
GO: {
  a: 1;
  test: function test() {}
}
// 3. 预编译结束，开始分析 console
// 第一个：还未赋值，GO 内 a 为 undefined
// 第二个：已赋值，GO 内 a 为 1

/**
 *
 * 需要注意的是：test中也定义了变量a，因此打印的a为自身AO中的值。
 * 如果test中没有定义a，就会沿着作用域链，到GO中查找a。
 *
 */
