const fs = require("fs");
/**
 *
 * 已知异步解决方案有4：
 * - 1. 回调函数。
 * - 2. Promise。
 * - 3. Generator函数。
 * - 4. async/await。
 *
 */

/**
 *
 * # 回调函数
 *
 * 所谓回调函数，就是把任务的第二段，单独写在一个函数里面。
 * 等到重新执行这个任务时，再调用这个函数。
 * 例如：
 */
fs.readFile("/etc/fstab", function (err, data) {
  if (err) throw err;

  fs.readFile("/etc/shells", function (err, data) {
    if (err) throw err;
    console.log(data);
  });
});

/**
 *
 * # Promise
 *
 * Promise 是为了解决回调地狱而产生的。
 * 将回调函数的嵌套，改成链式调用。
 * 例如：
 *
 */
const readFile = function (fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, function (err, data) {
      if (err) return reject(err);
      resolve(data);
    });
  });
};

readFile("/etc/fstab")
  .then((data) => {
    console.log(data);
    return readFile("/etc/shells");
  })
  .then((data) => {
    console.log(data);
  });

/**
 *
 * 这种链式调用操作形式，很明显的把异步任务的两段执行分开了，使得代码步骤变得更加清楚。
 * 但也存在非常明显的问题：
 * - 代码变得稍微冗杂。
 * - 语义化并不强。
 *
 */

/**
 *
 * # Generator
 *
 * yield 表达式可以控制函数流程；
 * next 方法用于恢复函数执行；
 * 这两个使得 Generator 函数非常适合将异步任务同步化。
 * 例如：
 *
 */
const baz = function* () {
  const f1 = yield readFile("/etc/fstab");
  const f2 = yield readFile("/etc/shells");
  console.log(f1.toString());
  console.log(f2.toString());
};

baz().next();
baz().next();

/**
 *
 * # async/await
 *
 * 属于是 Generator 函数的一个语法糖。
 * 能将上面的 Generator 函数改成 async/await 形式，更为简洁，语义化更强。
 * 例如：
 *
 */
const asyncReadFile = async () => {
  const f1 = await readFile("/etc/fstab");
  const f2 = await readFile("/etc/shells");
  console.log(f1.toString());
  console.log(f2.toString());
};

asyncReadFile();

/**
 *
 * # 区别
 *
 * 1. Promise 和 async/await 是专门用于处理异步操作的。
 * 2. Generator 并不是为异步设计出来的，它只是异步编程的一种解决方案。它还有其他功能（对象迭代、控制输出、部署 Iterator 接口...）。
 * 3. Promise 是为了解决异步编程的回调地狱问题的，但与 Generator 和 async/await 相比，其更为复杂化且可读性也稍差。
 * 4. Generator、async/await 方案需要与 Promise 对象搭配处理异步代码。
 * 5. async/await 实质是 Generator 的语法糖，相当于会自动调用 next() 执行函数。
 * 6. async/await 用法上更为简洁，能将异步代码以同步的形式进行编写，是处理异步编程的最终方案。
 *
 */

/**
 *
 * # 使用场景一 | 加载UI
 *
 */
const loader = function* () {
  showLoadingScreen();
  yield loadUIDataAsynchronously();
  hideLoadingScreen();
};

// 加载动画
loader();
// 加载UI
loader().next();
// 关闭动画
loader().next();

/**
 *
 * # 使用场景二 | redux-saga 中间件
 *
 */
function* fetchUser(action) {
  try {
    const user = yield call(Api.fetchUser, action.payload.userId);
    yield put({ type: "USER_FETCH_SUCCEEDED", user: user });
  } catch (error) {
    yield put({ type: "USER_FETCH_FAILED", message: error });
  }
}

function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

function* mySaga() {
  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}

export default mySaga;

/**
 *
 * # 使用场景三 | 部署 Iterator 接口
 *
 */
function* iterEntries(obj) {
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    yield [key, obj[key]];
  }
}

let myObj = { foo: 3, bar: 7 };

for (let [key, value] of iterEntries(myObj)) {
  console.log(key, value);
}
// foo 3
// bar 7
