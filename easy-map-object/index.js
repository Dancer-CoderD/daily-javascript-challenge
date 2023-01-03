/**
 *
 * 之前了解过 Map 和 Object 的区别，object 存在诸多限制。
 *
 * # Object
 *
 * 在 JavaScript 中，Object 是一个特殊对象。
 * 它本身是一个顶级对象，同时还是一个构造函数（new Object()）。
 *
 * # Map
 *
 * 它类似于对象，也是键值对集合，但是键的范围不限于字符串。
 * Map 提供了“值——值”对应的键值对，是一种更完善的 Hash 结构的实现。
 *
 */
const obj = new Object();
const obj2 = {};

const map = new Map();

/**
 *
 * # 赋值
 *
 * Object: obj.a 或者 obj[a]，key 只能是字符串、数字或 Symbol。
 * Map：map.set()，key 可以是任意数据类型。
 *
 */
obj.a = 123;
map.set(123, 456);

/**
 *
 * # 访问
 *
 * Object: obj.a 或者 obj[a]，不存在则返回 undefined。
 * Map：map.get()，不存在则返回 undefined。
 *
 */
console.log(obj.a); // 123
console.log(map.get(123)); // 456

/**
 *
 * # 删除
 *
 * Object: 通过 delete 操作符，当删除不存在的属性时，也返回 true。
 * Map：map.delete()，当删除不存在的属性时，返回 false。
 *
 */
console.log(delete obj.b); // true
console.log(map.delete("b")); // false

/**
 *
 * # 大小
 *
 * Object: 需要通过 Object.keys 转换为数组，通过 length 属性获取总长度。
 * Map: 通过 map.size()，快速获取内部元素的总个数。
 *
 */
const objArr = Object.keys(obj);
console.log(objArr.length); // 1

console.log(map.size()); // 1

/**
 *
 * # 迭代
 *
 * Object: 没有实现迭代器，需要自行实现，不实现只能通过 for-in 循环去迭代，此时遍历的顺序是不确定的。
 * Map: 拥有迭代器，可以通过 for-of、forEach 直接迭代元素，且遍历的顺序是确定的。
 *
 */
