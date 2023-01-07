/**
 *
 * 若要在 Proxy 内部调用对象的默认行为，建议使用 Reflect，这是 ES6 中为操作对象而提供的新 API。
 *
 * 基本特点：
 * - 只要 Proxy 实例具有的代理方法，Reflect 对象全部具有，以静态的形式存在；
 * - 修改某些 Object 方法的返回结果，让其变得更合理。例如定义不存在属性行为时不报错，而是返回 false；
 * - 让 Object 操作都变成函数行为。
 *
 */
const person = {
  name: "张三",
};

const proxy = new Proxy(person, {
  get: function (target, propKey) {
    return Reflect.get(target, propKey);
  },
});

console.log(proxy.name); // "张三"

/**
 *
 * get 能对数组的增删改查进行拦截。
 *
 * 例如下面这个例子，我们使用代理，自定义封装一个 createArray 函数：
 *
 */
function createArray(...elements) {
  let handler = {
    get(target, propKey, receiver) {
      let index = Number(propKey);
      if (index < 0) {
        propKey = String(target.length + index);
      }

      return Reflect.get(target, propKey, receiver);
    },
  };

  let target = [];
  target.push(...elements);

  return new Proxy(target, handler);
}

const arr = createArray("a", "b", "c");
console.log(arr[-1]); // "c"

/**
 *
 * 注意：如果一个属性不可配置且不可写，则 Proxy 不能修改该属性，否则就会报错。
 *
 * 例如：
 *
 */
const target = Object.defineProperties(
  {},
  {
    foo: {
      value: 123,
      writable: false,
      configurable: false,
    },
  }
);

const handler = {
  get(target, propKey) {
    return "abd";
  },
};

const proxy1 = new Proxy(target, handler);

console.log(proxy1.foo); // TypeError: Invariant check failed

/**
 *
 * # set()
 *
 * 该方法用来拦截某个属性的复制操作。
 * 可以接受四个参数，依次为目标对象、属性名、属性值和 Proxy 实例本身。
 *
 * 假定 Person 对象有一个 age 属性，该属性应该是一个不大于 200 的整数：
 *
 */
const validator = {
  set: function (obj, prop, value) {
    if (prop === "age") {
      if (!Number.isInteger(value)) {
        throw new TypeError("The age is not an integer");
      }
      if (value > 200) {
        throw new RangeError("The age seems invalid");
      }
    }
    obj[prop] = value;
  },
};

const person1 = new Proxy({}, validator);
person1.age = 100;
console.log(person1.age); // 100
person1.age = "string";
console.log(person1.age); // 报错
person1.age = 300;
console.log(person1.age); // 报错

/**
 *
 * 同样，如果一个属性不可配置且不可写，则 set 方法将不其作用。
 *
 * 注意：严格模式下，set 代理如果没有返回 true，那么就会报错。
 *
 * 例如：
 *
 */
const obj = {};
Object.defineProperty(obj, "foo", {
  value: "bar",
  writable: false,
});

const handler1 = {
  set: function (obj, prop, value, receiver) {
    obj[prop] = "baz";
  },
};

const proxy2 = new Proxy(obj, handler1);
proxy2.foo = "baz";
console.log(proxy2.foo); // "bar"

/**
 *
 * # deleteProperty()
 *
 * 该方法用于拦截 delete 操作。
 * 如果这个方法抛出错误或者返回 false，那么该方法将不起作用。
 *
 * 注意：当目标对象不可配置时，PRoxy 实例对象不不能被删除。
 *
 */
const handler2 = {
  deleteProperty(target, key) {
    invariant(key, "delete");
    Reflect.deleteProperty(target, key);
    return true;
  },
};

function invariant(key, action) {
  if (key[0] === "_") {
    throw new Error("无法删除私有属性");
  }
}

const target1 = { _prop: "foo" };
const proxy3 = new Proxy(target1, handler2);
delete proxy3._prop; // Error: 无法删除私有属性

/**
 *
 * # revocable()
 *
 * 该方法用于取消代理。
 *
 */
Proxy.revocable(proxy1, handler);
