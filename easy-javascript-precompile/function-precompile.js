/**
 *
 * # 函数预编译
 *
 * 函数编译分为4个阶段：
 * - 1. 预编译开始，建立 AO（Activation Object）对象；
 * - 2. 找形参和变量声明，使其作为AO的属性名，值赋予 undefined；
 * - 3. 实参和形参相统一（将实参赋值给形参）；
 * - 4. 找函数声明，函数名作为AO属性名，值赋予函数体。
 *
 */

function test(a) {
  console.log(a);
  var a = 123;
  console.log(a);
  function a() {}
  console.log(a);
  var b = function () {};
  console.log(b);
  function d() {}
}

/**
 *
 * 就以上述例子中的 a 为例，有形参a，变量a，函数a。
 *
 * 那么执行时，a 到底会输出什么呢？
 *
 */
test(1);
// f a() {}
// 123
// 123
// f () {}

// 1. 先建立AO，并找形参和变量声明，赋予 undefined
AO: {
  a: undefined;
  b: undefined;
}
// 2. 形参实参相统一
AO: {
  a: 1;
  b: undefined;
}
// 3. 找函数声明，值赋予函数体
AO: {
  a: function a() {}
  b: undefined;
  d: function d() {}
}
// 4. 预编译过程结束，开始分析 console 打印结果
// 第一个：此时 AO 中 a 的值为 function
// 执行赋值操作
// 第二个：赋值为 123
// 第三个：值不变为 123
// 第四个：AO 中 b 的值为 function
