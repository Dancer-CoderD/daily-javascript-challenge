/**
 *
 * 我们可以分析出，new 关键字主要做了以下工作：
 *
 * - 1. 创建一个新对象；
 * - 2. 将对象与构造函数通过原型链连接起来；
 * - 3. 将构造函数中的 this 绑定到新建的对象上；
 * - 4. 根据构造函数返回的类型做判断，如果是原始类型会被忽略；如果是返回对象，则会被正常使用。
 *
 */
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.say = function () {
  console.log(this.name);
};

const person = new Person("Tom", 20);
console.log(person); // Person { name: "Tom", age: 20 }

/**
 *
 * 根据上面的分析，转化为代码如下：
 *
 * - 1. {}
 * - 2. { __proto__: Person.prototype }
 * - 3. { __proto__: Person.prototype, name: "Tom", age: 20 }
 * - 4. const person = { __proto__: Person.prototype, name: "Tom", age: 20 }
 *
 */

/**
 *
 * # 手写 new
 *
 */
function myNew(Func, ...args) {
  // 1. 创建一个新对象；
  const obj = {};
  // 2. 新对象原型指向构造函数原型对象
  obj.__proto__ = Func.prototype;
  // 3. 将构造函数的this指向新对象
  const result = Func.apply(obj, args);
  return result instanceof Object ? result : obj;
}

/**
 *
 * # 测试 Test
 *
 */
const person2 = myNew(Person, "John", 30);
console.log(person2); // Person { name: "John", age: 30 }
person2.say(); // "John"
