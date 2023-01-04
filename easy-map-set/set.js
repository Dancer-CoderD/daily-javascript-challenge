/**
 *
 * # Set
 *
 * ES6 新增数据结构，类似于数组。
 * 成员值都是唯一的，没有重复的值，我们一般称之为——集合。
 *
 */
const s = new Set();

/**
 *
 * # 增加
 *
 * 使用 add() API。
 * 调用之后，返回 Set 结构本身。
 * 对于实例中已经存在的元素，Set 不会进行处理添加。
 *
 */
s.add(1).add(2).add(2); // 2只被添加了一次

/**
 *
 * # 删除
 *
 * 使用 delete() API。
 * 调用之后，返回一个布尔值。
 * 对于实例中已删除的元素，Set 会返回 false。
 *
 */
s.delete(3); // false

/**
 *
 * # 查询
 *
 * 使用 has() API。
 * 调用之后，返回一个布尔值。
 * 对于实例中没有的元素，Set 会返回 false。
 *
 */
s.has(3); // false

/**
 *
 * # 清除
 *
 * 使用 clear() API。
 * 调用之后，没有返回值
 *
 */
s.clear();

/**
 *
 * # 遍历
 *
 * keys(): 返回键名的遍历器
 * values(): 返回键值的遍历器
 * entries(): 返回键值对的遍历器
 * forEach(): 使用回调函数遍历每个元素
 *
 * 注意：keys/values/enetries 返回的都是遍历器对象。
 *
 */
let set = new Set(["red", "green", "blue"]);

for (let item of set.keys()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.values()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.entries()) {
  console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]

set.forEach((key, value) => {
  console.log(`${key}: ${value}`);
});
// "red": "red"
// "green": "green"
// "blue": "blue"

/**
 *
 * 数组去重 && 并集、交集、差集
 *
 */
let arr = [3, 5, 2, 2, 5, 5];
let unique = [...new Set(arr)]; // [3, 5, 2]

let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a, ...b]); // Set {1, 2, 3, 4}
// 交集
let intersect = new Set([...a].filter((x) => b.has(x))); // Set {2, 3}
// 差集
let different = new Set([...a].filter((x) => !b.has(x))); // Set {1}
