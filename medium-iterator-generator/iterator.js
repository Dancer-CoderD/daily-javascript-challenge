/**
 * 
 * 简单的说，我们常用的 for-in 循环，都是通过调用被循环对象的一个特殊函数——Iterator 来实现的。
 * 但是以前这个函数是隐藏的，我们无从访问。
 * 自从 Symbol 引入之后，我们就可以通过 Symbol.iterator 来直接读写这个特殊函数。
 * 
*/

/**
 * 
 * 对于循环语句来说，它并不关心被循环的对象到底是什么，它只负责调用 data[Symbol.iterator] 函数，
 * 然后根据返回值来进行循环。所以任何对象只要提供了标准的 Iterator 接口，即可被循环。
 * 
*/
const students = {}

students[Symbol.iterator] = function() {
    let index = 1;
    return {
        next() {
            return { done: index > 100, value: index++ }
        }
    }
}

for(const i of students) { console.log(i) }

/**
 * 
 * 除此之外，我们也可以通过 Generator 来实现一个 Iterator 接口。
 * 
*/