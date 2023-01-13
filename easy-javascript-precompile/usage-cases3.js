/**
 * 
 * # case3
 * 
*/
var a = 1;
function b() {
    console.log(a);
    a = 10;
    return;
    function a() {}
}
b();
console.log(a);
// function a() {}
// 1

// 1. 生成GO
GO: {
    a: undefined
    b: function b() {}
}
// 2. 执行 GO 的 a 赋值
GO: {
    a: 1
    b: function b() {}
}
// 3. 执行函数，生成 AO
AO: {
    a: function a() {}
    [[scope]]: [BAO, GO]
}
// 4. 执行赋值语句
// a 一开始为函数，现在被赋值为10
AO: {
    a: 10
    [[scope]]: [BAO, GO]
}
// 5. 执行完毕，AO销毁

// 6. 分析剩余代码
// a 在 GO 中一直为 1