/**
 * 
 * Generator 的设计，可以很方便执行异步操作。
 * 例如：实现一个函数，可以取到用户信息然后打印出来。
 * 
*/
function* fetchUser() {
    const user = yield ajax();
    console.log(user);
}

/**
 * 
 * 但是，Generator 本身并不会自动进行 next 操作。
 * 因为 Generator 此时本身只是一个状态机，它需要由调用者来改变它的状态，
 * 所以我们需要额外加一段控制代码来控制 fetchUser 进行状态转换。
 * 
*/
const f = fetchUser(); // 此时拿到 Iterator

// 加入控制代码
const result = f.next(); // 此时拿到异步结果
result.value.then((d) => {
    f.next(d); // 重新设置状态
});

/**
 * 
 * 但是写了这些代码之后，Generator 的实现就变得非常不优雅，
 * 如果我们内部有多个异步操作，控制代码就会变得很长。
 * 
*/