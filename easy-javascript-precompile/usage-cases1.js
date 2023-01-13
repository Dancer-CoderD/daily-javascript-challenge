/**
 * 
 * # case1
 * 
*/
function test() {
    console.log(b);
    if (a) var b = 100;
    console.log(b);
    c=234
    console.log(c);
}
var a;
test();
a = 10;
console.log(c);
// undefined
// undefined
// 234
// 234

// 1. 生成GO
GO: {
    a: undefined
    test: function test() {}
    c: undefined
}
// 2. test 执行，生成 test 的 AO
AO: {
    b: undefined
    [[scope]]: [TestAO, GO] // 存储的作用域链
}
// 3. 分析 test 函数执行
// b: undefined
// b: undefined
// c: 234，属于imply global
// 执行完毕，AO销毁

// 4. 分析剩余代码
// a = 10; // GO 中 a 赋值为 10
// GO 中 c 被 AO imply 赋值为 234，输出234