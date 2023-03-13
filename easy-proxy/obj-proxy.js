/**
 *
 * 原先的 object.defineProperty 存在哪些缺点？
 *
 * 1. 由于是遍历递归监听属性，当属性过多或嵌套层级过过深时会影响性能。
 * 2. 无法监听对象新增的属性和删除属性，只能监听对象本身存在的属性，因此 vue2 设计了 $set 和 $delete。
 * 3. 监听数组时无法监听数组元素的增减。
 *
 */

/**
 *
 * 那么 Proxy 解决了哪些问题？
 *
 * 1. Proxy 是对整个对象的代理，而 object.defineProperty 只能代理某个属性。
 * 2. 对象上新增的属性，Proxy 能监听到。
 * 3. 数组新增修改，Proxy 也能监听到。
 * 4. Proxy 采用惰性代理，只在需要的时候进行递归。
 *
 */
const target = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
  f: {
    z: 3,
  },
};

const handler = {
  get: function (target, prop, receiver) {
    let val = Reflect.get(target, prop);
    console.log("触发get:", prop);
    if (val !== null && typeof val === "object") {
      return new Proxy(val, handler);
    }
  },
  set: function (target, key, value, receiver) {
    console.log("触发set:", key, value);
    return Reflect.set(target, key, value, receiver);
  },
};

const proxy = new Proxy(target, handler);

proxy.b.d.e = 4;

// 触发get: b
// 触发get: d
// 触发set: e 4

// 以上可以看出，Proxy 可以只在属性被调用时去设置代理，并且不会额外代理其他没有用到的深层属性，比如 z。
