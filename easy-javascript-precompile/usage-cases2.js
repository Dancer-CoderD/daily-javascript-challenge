/**
 * 
 * # case2
 * 
*/
var foo = 1;
function bar() {
    console.log(foo);
    if (!foo) var foo = 10;
    console.log(foo);
}
bar();
// undefined
// 10

// 1. 生成 GO
GO: {
    foo: undefined
    bar: function bar() {}
}
// 2. 执行 bar，生成 AO
AO: {
    foo: undefined
    [[scope]]: [BarAO, GO]
}
// 3. 执行判断语句
// !foo = !undefined -> true，AO 中，foo 被赋值为 10
AO: {
    foo: 10
    [[scope]]: [BarAO, GO]
}
// 4. 执行完毕，AO销毁
// 5. 分析剩余代码，已无代码