// 概念： 开辟一个新栈内存，两个对象属性完全一致，但对应两个不同的栈内存地址，修改其中一个对象，另一个不会改变

// 在 JavaScript 里，存在或实现深拷贝的现象有：
// - _.cloneDeep()
// - jQuery.extend()
// - JSON.stringify()
// - 手写循环递归

const obj1 = {
  a: 1,
  b: { f: { g: 1 } },
  c: [1, 2, 3],
  d: function () {},
};

// # _.cloneDeep()

// const _ = require("lodash");
// const obj2 = _.cloneDeep(obj1);
// console.log(obj1.b.f === obj2.b.f); // false

// # jQuery.extend()

// const $ = require("jquery");
// const obj2 = $.extend(true, {}, obj1);
// console.log(obj1.b.f === obj2.b.f); // false

// # JSON.stringify
// 弊端： 会忽略 undefined、symbol 和 函数

// const obj2 = JSON.parse(JSON.stringify(obj1));
// console.log(obj1.b.f === obj2.b.f); // false
// console.log(obj2); // { a: 1, b: { f: { g: 1 } }, c: [ 1, 2, 3 ] } d 消失了

// # 手写循环递归

function deepClone(obj, hash = new WeakMap()) {
  if (obj === null) return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  // 可能是对象或普通值，如果是函数则不需要深拷贝
  if (typeof obj !== "object") return obj;
  // 是对象的话就需要进行深拷贝
  if (hash.get(obj)) return hash.get(obj);
  let cloneObj = new obj.constructor();
  // 找到的是所属类原型上的constructor，而原型上的constructor指向的是当前类本身
  hash.set(obj, cloneObj);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 实现一个递归拷贝
      cloneObj[key] = deepClone(obj[key], hash);
    }
  }

  return cloneObj;
}
