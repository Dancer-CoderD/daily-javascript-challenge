/**
 *
 * # case4
 *
 */
console.log(foo);
var foo = "A";
console.log(foo);
var foo = function () {
  console.log("B");
};
console.log(foo);
foo();
function foo() {
  console.log("C");
}
console.log(foo);
foo();
// f foo() { console.log("C") }
// "A"
// f () { console.log("B") }
// "B"
// f () { console.log("B") }
// "B"

// 1. 生成 GO
GO: {
    foo: undefined
    foo: function foo() {}
}

// 输出 f foo() { console.log("C") }

// 2. 执行 foo 赋值语句，更新 GO
GO: {
    foo: "A"
    foo: function foo() {}
}

// 输出 "A"

// 3. 执行 foo 赋值函数语句，更新 GO
GO: {
    foo: function() {} // 此时为匿名函数
    foo: function foo() {}
}

// 输出 f () { console.log("B") }

// 4. 执行匿名函数，生成 AO
AO: {
    [[scope]]: [FooAO, GO]
}
// 5. 执行函数体代码，输出 "B"

// 6. 执行完毕，销毁 AO

// 输出 f () { console.log("B") }

// 7. 执行你们函数，生成 AO

AO: {
    [[scope]]: [FooAO, GO]
}

// 8. 执行函数体代码，输出 "B"

// 9. 执行完毕，销毁 AO