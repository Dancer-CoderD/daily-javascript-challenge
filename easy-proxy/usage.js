/**
 *
 * # 使用场景1
 *
 * 使用 Proxy 保障数据类型的准确性。
 *
 */
const numericDataStore = {
  count: 0,
  amount: 1234,
  total: 14,
};

numericDataStore = new Proxy(numericDataStore, {
  set(target, key, value, proxy) {
    if (typeof value !== "number") {
      throw TypeError("属性只能是 number 类型！");
    }

    return Reflect.set(target, key, value, proxy);
  },
});

numericDataStore.count = "foo"; // TypeError：属性只能是 number 类型
numericDataStore.count = 333;

/**
 *
 * # 使用场景2
 *
 * 声明了一个私有的 apiKey，便于 api 这个对象内部的方法调用，但不希望从外部也能够访问。
 *
 */
const api = {
  _apiKey: "123abc456def",
  getUsers: function () {},
  getUser: function (userId) {},
  setUser: function (userId, config) {},
};

const RESTRICTED = ["_apiKey"];

api = new Proxy(api, {
  get(target, key, proxy) {
    if (RESTRICTED.indexOf(key) > -1) {
      throw Error(`${key} 不可访问.`);
    }

    return Reflect.get(target, key, proxy);
  },
  set(target, key, value, proxy) {
    if (RESTRICTED.indexOf(key) > -1) {
      throw Error(`${key} 不可修改.`);
    }

    return Reflect.set(target, key, value, proxy);
  },
});

console.log(api._apiKey); // Error
api._apiKey = undefined; // Error

/**
 *
 * # 使用场景3
 *
 * 使用 Proxy 实现观察者模式。
 * 观察者函数都被放进 Set 集合，当修改 obj 的值时，就会在 set 函数中被拦截，自动执行 Set 所有的观察者。
 *
 */
const queuedObservers = new Set();

const observe = (fn) => queuedObservers.add(fn);
const observable = (obj) => new Proxy(obj, { set });

function set(target, key, value, receiver) {
  const result = Reflect.set(target, key, value, receiver);
  queuedObservers.forEach((observer) => observer());
  return result;
}
