/**
 *
 * # case5
 *
 */
var foo = 1;

function bar(a) {
  var a1 = a;
  var a = foo;
  function a() {
    console.log(a);
  }
  a1();
}
bar(3);
// 1

// 1. 生成 GO
GO: {
  foo: undefined;
  bar: function bar() {}
}

// 2. 执行 foo 赋值语句，更新 GO
GO: {
  foo: 1;
  bar: function bar() {}
}

// 3. 执行 bar 函数，生成 AO
AO: {
  a1: undefined;
  a: undefined;
  a: function a() {}
}

// 4. 执行函数体代码，更新 AO
AO: {
  a1: function a() {}
  a: 1;
  a: function a() {}
}

// 5. 执行函数体 a1 函数，输出 AO 中的 a，为 1

// 6. 执行 a1 完毕，销毁 a1 的 AO

// 7. 执行 bar 完毕，销毁 bar 的 AO
