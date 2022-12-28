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
