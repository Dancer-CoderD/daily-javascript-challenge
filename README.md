# daily-javascript-challenge

### 2022/12/28

> easy-deep-shallow-clone

- shallowClone in JavaScript
- - Object.assign
- - Array.prototype.slice()
- - Array.prototype.concat()
- - [...old]

- deepClone in JavaScript
- - \_.cloneDeep(old)（lodash）
- - $.extend(Boolean, new, old)（jquery）
- - JSON.parse(JSON.stringify(old))（会忽略函数、symbol 和 undefined）
- - deepClone(old, hash = new WeakMap())

### 2022/12/29

> easy-module-type

- CommonJS
- - 面向服务端 node 以及 webpack
- - 同步加载，磁盘读取速度快
- AMD
- - 面向浏览器，属于 CommonJS 的浏览器端实现
- - 异步加载，速度快；依赖预加载，浪费资源
- CMD
- - 面向浏览器，根据 CommonJS 和 AMD 共同实现
- - 异步加载、按需加载，导致速度性能差
- ES Module
- - 面向浏览器，属于当前浏览器默认标准
- - 静态编译，编译时就能确定依赖关系

### 2022/12/30

> medium-iterator-generator

- Iterator 的作用
- Symbol.iterator 是一个接口，用于生成 Iterator
- Generator 的作用
- Generator 的用法
- - 1. 函数前面加星号
- - 2. yield 关键字控制流程
- Generator 实现状态机
- Generator 实现异步代码

### 2023/1/1

> medium-async-await

- async/await 是 Generator 的一个语法糖，帮我们自动进行 Generator 的流程控制。
- - async 对应是 \*
- - await 对应是 yield
- async/await 并发
- 在同步代码里将关键并发代码以 async/await 实现

### 2023/1/2

> easy-map-weakmap

- Map 的键可以是任意类型，WeakMap 只接收对象作为键。
- Map 的键是跟内存地址绑定的，只要内存地址不一样，就视为两个键。
- WeakMap 的键是弱引用，键所指的对象可以被垃圾回收。
- Map 可以被遍历，WeakMap 不能被遍历。

### 2023/1/3

> easy-map-object

- 简单的键值对存储，key 不需要存储复杂类型的，直接用 Object。
- 需要通过 JSON 转换进行其他操作，只能用 Object，Map 暂不支持。
- Map 阅读性更好，所有操作都通过 API 去调用，更有编程体验。

### 2023/1/4

> easy-map-set

- 集合(Set)是一堆无序且不重复的元素的组合。
- 字典(Map)是一堆有序的、键可以是任意值的元素组合。

- 共同点：
- - 集合、字典都可以存储不重复的值；
- - 集合、字典查找速度都非常快，时间复杂度为 O(1)；数组查找的时间复杂度为 O(n)。

- 不同点：
- - 集合是无序的元素组合，字典是有序的元素组合；
- - 集合以 值-值 形式存储元素，字典以 键-值 形式存储元素；
- - 集合对象初始化的值为一维数组，字典对象初始化的值为二维数组；
- - 集合对象只能通过迭代器来修改值，字典的键不能改，但是值能改。

- 使用场景：
- - 集合无序，适合数组去重、求并集、交集和差集等运算；
- - 字典有序，适合保证对象顺序的集合，例如请求状态码对象字典。

### 2023/1/5

> easy-generator

- 理解 Generator
- 异步编程解决方案
- async/await 仅是 Generator 的语法糖
- async/await、Generator 需与 Promise 搭配使用

### 2023/1/6

> easy-promise

- const p = new Promise();
- - p.then()
- - p.catch()
- - p.finally()
- Promise()
- - all()
- - race()
- - allSettled()
- - resolve()
- - reject()
- - try()

### 2023/1/7

> easy-proxy

- what is meta programming
- easy proxy
- use Reflect to proxy
- position

### 2023/1/8

> medium-new-generate

- what is new
- new process
- - 1. create a new Object
- - 2. connect object's **proto** and Constructor's prototype
- - 3. binding Constructor's this to object
- - 4. condition Constructor's return type.If it's primitive that will be ignored.Else is Object, it will be used.
