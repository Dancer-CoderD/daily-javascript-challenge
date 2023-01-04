/**
 *
 * # Map
 *
 * Map 类型是键值对的有序列表。
 * Map 类型的键和值都可以是任意类型。
 *
 */
const m = new Map();

/**
 *
 * # 增加
 *
 * 使用 set() API。
 * 调用之后，返回整个 Map 结构。
 * 如果 key 已有值，则键值会被更新。
 * 可采用链式写法。
 *
 */
m.set("edition", 6); // 键是字符串
m.set(262, "standard"); // 键是数值
m.set(undefined, "hash"); // 键是 undefined
m.set(1, "a").set(2, "b").set(3, "c"); // 链式操作

/**
 *
 * # 删除
 *
 * 使用 delete() API。
 * 调用之后，返回一个布尔值。
 * 如果 key 不存在，则会返回 false。
 *
 */
m.has(undefined); // true
m.delete(undefined); // true
m.has(undefined); // false

/**
 *
 * # 清除
 *
 * 使用 clear() API。
 * 调用之后，没有返回值
 *
 */
console.log(m.size); // 5
m.clear();
console.log(m.size); // 0

/**
 *
 * # 查询
 *
 * 使用 has() API。
 * 调用之后，返回一个布尔值。
 *
 */
m.has(262); // false

/**
 *
 * # 获取
 *
 * 使用 get() API。
 * 调用之后，返回对应的键值。
 * 若 key 不存在，则返回 undefined。
 *
 */
const hello = function () {
  console.log("hello");
};
m.set(hello, "Hello ES6!");
m.get(hello); // Hello ES6!
m.get(1); // undefined

/**
 *
 * # 获取长度
 * 使用 size 字段。
 * 调用之后，返回结构的成员总数。
 *
 */
console.log(m.size); // 1

/**
 *
 * # 遍历
 *
 * 与 Set 一致，拥有：
 * - keys()
 * - values()
 * - entries()
 * - forEach()
 *
 * 注意：keys/values/enetries 返回的都是遍历器对象。
 *
 */
