/**
 *
 * # Promise 构造函数的方法
 *
 * - 1. all();
 * - 2. race();
 * - 3. allSettled();
 * - 4. resolve();
 * - 5. reject();
 * - 6. try();
 *
 */

/**
 *
 * # all()
 * @param Array<Iterator>[Promise]
 *
 * 该方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。
 *
 * 例如下面这个例子：
 *
 * - 1. 只有 p1,p2,p3 的状态都变成 fulfilled，p 的状态才会变成 fulfilled。此时 p1,p2,p3 的返回值组成一个数组，返回给 p 的回调函数。
 * - 2. p1/p2/p3 其中一个状态变成 rejected，p 的状态就会变成 rejected。此时第一个被 rejected 的实例的返回值就会传递给 p 的回调函数。
 * - 3. 若 p1/p2/p3 自己定义了 catch 方法，那么一旦其中一个被 rejected，并不会触发 Promise.all() 的 catch 方法的。
 * - 4. 若 p1/p2/p3 没有自己的 catch 方法，就会调用 Promise.all() 的 catch 方法。
 *
 */
const p1 = new Promise((resolve, reject) => {
  resolve("hello");
})
  .then((result) => result)
  .catch((e) => e);
const p2 = new Promise((resolve, reject) => {
  throw new Error("报错了");
})
  .then((result) => result)
  .catch((e) => e);
Promise.all([p1, p2])
  .then((result) => console.log(result))
  .catch((e) => console.log(e)); // ["hello", Error: "报错了"]

const p3 = new Promise((resolve, reject) => {
  resolve("hello");
})
  .then((result) => result)
  .catch((e) => e);
const p4 = new Promise((resolve, reject) => {
  throw new Error("报错了");
}).then((result) => result);

Promise.all([p3, p4])
  .then((result) => console.log(result))
  .catch((e) => console.log(e)); // Error: "报错了"

/**
 *
 * # race()
 * @param Array<Iterator>[Promise]
 *
 * 该方法同样是将多个 Promise 实例，包装成一个 Promise 实例。
 *
 * 例如下面这个例子：
 *
 * - 1. 只要 p1/p2/p3 之中有一个实例率先改变状态，p 的状态就跟着改变。
 * - 2. 率先改变的 Promise 实例的返回值将会传递给 p 的回调函数。
 *
 */
const p = Promise.race([
  fetch("/resource-that-may-take-a-while"),
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("request timeout"), 5000));
  }),
]);

p.then(console.log).catch(console.error);

/**
 *
 * # allSettled()
 * @param Array<Iterator>[Promise]
 *
 * 该方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例。
 * 所有参数的返回值将会组成一个数组，返回给包装实例的回调函数。
 *
 * 注意：只有等到所有参数都返回结果，包装实例才会结束。
 *
 */
const promises = [fetch("/api-1"), fetch("/api-2"), fetch("/api-3")];
await Promise.allSettled(promises);

/**
 *
 * # resolve()
 * @param Promise
 * @return new Promise().resolve()
 * @param Object<thenable>
 * @return new Promise().resolve().then()
 * @param any
 * @return new Promise<fulfilled>()
 * @param ''
 * @return new Promise<fulfilled>()
 *
 * 该方法用于将现有对象转为 Promise 对象。
 *
 * 例如下面这个例子：
 *
 */
Promise.resolve("foo");
// 等价于
new Promise((resolve) => resolve("foo"));

/**
 *
 * # reject()
 * @param any
 * @return new Promise<rejected>()
 *
 * 该方法用于返回一个具有 rejected 状态的 Promise 实例。
 *
 * 例如下面这个例子：
 *
 */
const p5 = Promise.reject("出错了");
// 等价于
new Promise((reject) => reject("出错了"));

p5.then(null, (err) => {
  console.log(err);
});
// 出错了

Promise.reject("出错了").catch((e) => {
  console.log(e === "出错了");
});
// true
