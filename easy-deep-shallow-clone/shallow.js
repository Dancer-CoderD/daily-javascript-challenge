// 概念： 浅拷贝是拷贝一层，深层次的引用类型的共享内存地址

// 在 JavaScript 里，存在浅拷贝的现象有：
// - Object.assign
// - Array.prototype.slice()
// - Array.prototype.concat()
// - 使用拓展运算符

// # Object.assign

const obj = {
  age: 18,
  nature: ["smart", "good"],
  names: {
    name1: "fx",
    name2: "xka",
  },
  love: function () {
    console.log("fx is a great girl");
  },
};

// const newObj = Object.assign({}, obj);

// # slice()

// const fxArr = ["One", "Two", "Three"];
// const fxArrs = fxArr.slice(0);
// fxArrs[1] = "love";
// console.log(fxArr); // ["One", "Two", "Three"]
// console.log(fxArrs); // ["One", "love", "Three"]

// # concat()

// const fxArr = ["One", "Two", "Three"];
// const fxArrs = fxArr.concat();
// fxArrs[0] = "love";
// console.log(fxArr); // ["One", "Two", "Three"]
// console.log(fxArrs); // ["love", "Two", "Three"]

// # 拓展运算符
// const fxArr = ["One", "Two", "Three"];
// const fxArrs = [...fxArr];
// fxArrs[2] = "love";
// console.log(fxArr); // ["One", "Two", "Three"]
// console.log(fxArrs); // ["One", "Two", "love"]

// 简单实现一个浅拷贝

function shallowClone(obj) {
  const newObj = {};

  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      newObj[prop] = obj[prop];
    }
  }

  return newObj;
}
