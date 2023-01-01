/**
 * 
 * Generator 是一个可以暂停和继续执行的函数。
 * 简单的用法，可以当作一个 Iterator 使用，进行一些遍历操作。
 * 复杂的用法，可以在内部保存一些状态，成为一个状态机。
 * 
*/

/**
 * 
 * Generator 基本语法包含两个部分：
 * - 函数名前要加一个星号
 * - 函数内部用 yield 关键字返回值
 * 
*/
function * count() {
    yield 1
    yield 2
    return 3
}

const c = count();
console.log(c.next()); // { value: 1, done: false }
console.log(c.next()); // { value: 2, done: false }
console.log(c.next()); // { value: 3, done: true }
console.log(c.next()); // { value: undefined, done: true }

/**
 * 
 * 由于 Generator 也存在 Symbol.iterator 接口，所以它也可以被 for 循环调用
 * 
*/
for(i of c) console.log(i); // 1, 2

/**
 * 
 * 注意：for 会忽略最后的 return 语句，也就是 for 循环会忽略 generator 中的 return 语句。
 * 
*/