const data = {};
const element = document.querySelector(".node");
console.log(element); // 输出 div.node 对象
console.log(element.toString()); // 输出 object HTMLDivElement 字符串

data[element] = "objectData";
console.log(data["[object HTMLDivElement]"]);

/**
 *
 * 上面代码中，我们创建了一个对象，并将一个节点对象作为它的键名，进行了代码测试。
 * 首先验证了获取到的 element 节点为一个对象。
 * 再确定了经过 toString 方法转化后的结果，这个值为键名成功的输出了 value 值为 objectData。
 * 这证明了，传统对昂的键名会通过 toString 方法转化为字符串类型。
 * 注意：我们在访问对象成员时，键名有空格时不能采用点访问，可以使用中括号访问。
 *
 */

/**
 *
 * Map.
 * Map 本质上是一个键值对的集合。
 * 其与传统对象结构相比，传统对象只能用字符串作为键名，这在使用上造成了很大的限制。
 * Map 类似于对象，但是键名不限于字符串，可以说 Object 结构提供键值对应，Map 结构提供值值对应。
 *
 */
const dataMap = new Map();
const elementMap = document.querySelector(".node");
dataMap.set(element, "objectData");
console.log(dataMap.get(elementMap)); // 输出 object HTMLDivElement 对象

/**
 *
 * 上面代码中我们获取值时直接传入了 elementMap 对象，成功的将对象作为键名，弥补了传统对象的不足。
 * # 特点
 * 1. Map 默认情况下不包含任何键，所有键都是自己添加。不同于 Object 原型链上有一些默认的键。
 * 2. Map 的键可以是任何数据类型，函数也可以。
 * 3. Map 的键值对个数可以轻易通过 size 属性获取，Object 需要手动计算。
 * 4. Map 在频繁增删键值对的场景下性能比 Object 更好。
 *
 */

/**
 *
 * # 什么时候使用 Map ？
 * 1. 想要添加的键值名和 Object 上默认键值名冲突，又不想重写改名，使用 Map。
 * 2. 需要 String 和 Symbol 意外的数据类型做键值时，使用 Map。
 * 3. 键值对很多，有时需要计算数量。
 * 4. 需要频繁的增删键值对时。
 *
 */
