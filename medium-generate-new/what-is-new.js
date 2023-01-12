/**
 *
 * 在 JavaScript 中，new 操作符用于创建一个给定构造函数的实例对象。
 *
 * new 通过构造函数创建出来的实例可以访问到构造函数中的属性，也可以访问到构造函数原型链中的属性。
 *
 * 例如：
 *
 */
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayName = function () {
  console.log(this.name);
};

const person1 = new Person("Tom", 20);
console.log(person1); // Person { name: "Tom", age: 20 }
person1.sayName(); // "Tom"

/**
 *
 * 现在在构造函数中显式加上返回值，并且这个返回值是一个原始类型。
 * 可以发现，构造函数中返回一个原始值，然而这个返回值并没有任何作用。
 *
 * 例如：
 *
 */
function Test(name) {
  this.name = name;
  return 1;
}

const t = new Test("xxx");
console.log(t.name); // "xxx"

/**
 *
 * 现在在构造函数中返回一个对象。
 * 我们可以发现，构造函数如果返回值为一个对象，那么这个返回值会被正常使用。
 *
 * 例如：
 *
 */
function Name(name) {
  this.name = name;
  console.log(this); // Name { name: "xxx" }
  return { age: 26 };
}

const n = new Name("Xxx");
console.log(t); // { age: 26 }
console.log(t.name); // undefined
