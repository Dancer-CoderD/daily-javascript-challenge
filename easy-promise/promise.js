/**
 *
 * Promise，译为承诺，是异步编程的一种解决方案。
 *
 * 例如，传统的异步编程如下，形成了经典的回调地狱：
 *
 */
doSomething(function (result) {
  doSomethingElse(
    result,
    function (newResult) {
      doThirdThing(
        newResult,
        function (finalResult) {
          console.log("得到最终结果: " + finalResult);
        },
        failureCallback
      );
    },
    failureCallback
  );
}, failureCallback);

/**
 *
 * 而，通过 Promise 重写上面的代码如下：
 *
 * 这之间的差异体现出 Promise 的优点：
 * - 1. 链式操作降低了代码难度。
 * - 2. 代码可读性明显增强。
 *
 */
doSomething()
  .then((result) => {
    return doSomethingElse(result);
  })
  .then((newResult) => {
    return doThirdThing(newResult);
  })
  .then((finalResult) => {
    console.log(finalResult);
  })
  .catch(failureCallback);

/**
 *
 * 状态仅有三种：
 * - 1. pending（进行中）；
 * - 2. fulfilled（已成功）；
 * - 3. rejected（已失败）。
 *
 * 特点：
 * - 1. 对象的状态不受外界影响，只有异步操作的结果，可以决定当前是哪一种状态；
 * - 2. 一旦状态改变一次，就不会再便，任何时候都可以得到这个结果。
 *
 */
// Promise(pending) -> fulfilled -> .then(onFulfillment) -> async action -> return Promise(pending) -> .then()/.catch() -> ...
// Promise(pending) -> rejected -> .then(onRejection)/.catch(onRejection) => error handling -> return Promise(pending) -> .then()/.catch() -> ...

/**
 *
 * # 用法
 *
 * Promise 是一个构造函数，用于生成 Promise 实例。
 * Promise 构造函数接收一个函数作为参数，该函数的两个参数分别是 resolve 和 reject：
 * - resolve() 的作用是，将 Promise 对象的状态从“未完成”变为“成功”；
 * - reject() 的作用是，将 Promise 对象的状态从“未完成”变为“失败”。
 *
 * # 实例方法
 * - 1. then();
 * - 2. catch();
 * - 3. finally();
 *
 */

/**
 *
 * # then()
 *
 * 它是实例状态发生改变时的回调函数。
 *
 * 参数1：resolved 状态的回调函数。
 * 参数2：rejected 状态的回调函数。
 *
 * then() 方法返回的是一个新的 Promise 实例，也就是 Promise 能链式书写的原因。
 *
 */
getJSON("/posts.json")
  .then((json) => {
    return json.post;
  })
  .then((post) => {
    // ...
  });

/**
 *
 * # catch()
 *
 * 它是 then(null, rejection)/then(undefined, rejection) 的别名，用于指定发生错误时的回调函数。
 *
 * Promise 对象的错误具有“冒泡”属性，会一直向后传递，直到被捕获为止。
 *
 */
getJSON("/post/1.json")
  .then((post) => {
    return getJSON(post.commentURL);
  })
  .then((comments) => {
    // ...
  })
  .catch((error) => {
    // 处理前面三个 Promise 产生的错误
  });

/**
 *
 * 一般来说，使用 catch 方法代替 then() 的第二个参数时，
 * Promise 对象抛出的错误不会传递到外层代码，即不会有任何反应。
 *
 * 例如以下代码：
 *
 * 浏览器会打印错误提示： ReferenceError: x is not defined。但是并不会退出进程。
 * 而使用 catch() 不仅能捕获到这个错误，还能抛出错误，终止进程。
 *
 */
const someAsyncThing = () => {
  return new Promise((resolve, reject) => {
    // 此处会报错，因为x 未声明
    resolve(x + 2);
  });
};

/**
 *
 * # finally()
 *
 * 该方法用于指定，不管 Promise 对象最后状态如何，都会执行的操作
 *
 * 例如：
 *
 */
promise
  .then((result) => {
    // ...
  })
  .catch((error) => {
    // ...
  })
  .finally(() => {
    // ...
  });
