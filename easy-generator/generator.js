/**
 *
 * # 怎么理解 Generator ？
 *
 * Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同。
 *
 * 我们以前为了解决异步的手段主要有：
 * - 1. 回调函数。
 * - 2. Promise。
 *
 * 现在新增了两种手段：
 * - 1. Generator。
 * - 2. async/await。
 *
 */

/**
 *
 * 执行 Generator 函数会返回一个迭代器对象，可以依次遍历 Generator 函数内部的每一个状态。
 *
 * 形式上，Generator 函数是一个普通函数，但有两个特征：
 * - 1. function 关键字和函数名之间有一个星号。
 * - 2. 函数体内部使用 yield 表达式，控制内部流程和状态。
 *
 */
function* helloWorldGenerator() {
  yield "hello";
  yield "world";
  return "ending";
}

/**
 *
 * Generator 函数返回的迭代器对象，具有 Symbol.iterator 属性，并且返回给自己。
 *
 */
function* gen() {}
const g = gen();
g[Symbol.iterator] === g; // true

/**
 *
 * 通过 yield 关键字可以暂停 Generator 函数返回的迭代器对象的状态。
 *
 * 上述 helloWorldGenerator 函数存在三个状态：
 * - 1. hello。
 * - 2. world。
 * - 3. return。
 *
 * 通过 next 方法才会遍历到下一个内部状态，运行逻辑如下：
 * - 遇到 yield 表达式，暂停执行后面的代码，并将紧跟在 yield 表达式后面的那个值返回。
 * - 调用 next 方法，继续执行，直到遇到下一个 yield 表达式继续暂停，以此类推。
 * - 如果没有再语到 yield，一直运行到函数结束，直至 return 语句结束为止，返回 return 的值。
 * - 若该函数无 return 语句，则返回 undefined。
 *
 */
const hello = helloWorldGenerator();
hello.next(); // { value: "hello", done: false }
hello.next(); // { value: "world", done: false }
hello.next(); // { value: "ending", done: true }
hello.next(); // { value: "undefined", done: true }

/**
 *
 * 其中，返回的对象里：
 * - done 用于判断是否存在下个状态，true 为不存在。
 * - value 用于返回对应的状态值。
 *
 * yield 表达式本身没有返回值，或者说总是返回 undefined。
 * Generator 通过调用 next() 方法，其可以携带一个参数，该参数就会被当作上一个 yield 表达式的返回值。
 *
 */
function* foo(x) {
  let y = 2 * (yield x + 1);
  let z = yield y / 3;
  return x + y + z;
}

const a = foo(5);
a.next(); // { value: 6, done: false }
a.next(); // { value: NaN, done: false }
a.next(); // { value: NaN, done: true }

const b = foo(5);
b.next(); // { value: 6, done: false }
b.next(12); // { value: 8, done: false }
b.next(13); // { value: 42, done: true }

/**
 *
 * 正因为 Generator 函数返回 Iterator 迭代器对象，因此我们可以使用 for-of 遍历。
 * 注意：对于 for 循环遍历，函数体里面 return 是不执行的。
 *
 */
function* bar() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  return 6;
}

for (let v of foo()) {
  console.log(v);
}
// 1 2 3 4 5

/**
 *
 * 原生对象没有迭代器接口，通过 Generator 可以为原生对象加上迭代器接口，因此也可以使用 for-of。
 *
 */
function* objectEntries(obj) {
  let propKeys = Reflect.ownKeys(obj);

  for (let propKey of propKeys) {
    yield [propKey, obj[propKey]];
  }
}

let jane = { first: "Jane", last: "Doe" };

for (let [key, value] of objectEntries(jane)) {
  console.log(`${key}: ${value}`);
}
// first: Jane
// last: Doe
