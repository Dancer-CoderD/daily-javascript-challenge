/**
 * 
 * 因为手动创建一个 iterator 十分麻烦，因此 Generator 通常用于更加方便的创建 Iterator。
 * 也就是说，Generator 就是一个返回值为 Iterator 对象的函数。
 * 
 * Generator 可以看作是一个更加灵活的 Iterator，他们之间是可以互相替代的。
 * 但是，Generator 由于可以通过 yield 随时暂停，因此可以很方便的进行流程控制和状态管理。
 * 而 Iterator 就可能需要你写更多的代码进行相同的操作。
 * 例如：中序遍历代码，同样的功能用 Iterator 实现就会变得麻烦很多。
 *  
*/
function* traverseTree(node) {
    if (node == null) return;
    yield* traverseTree(node.left);
    yield node.value;
    yield* traverseTree(node.right);
}

/**
 * 
 * Generator 也是实现简单的状态机的最佳选择，因为他是在函数内部进行 yield 操作，
 * 因此不会丢失当前状态。
 * 
 * 同样的功能如果普通的函数，因为每次都是调用这个函数，所以函数内部并不能保存状态，
 * 因此就需要在函数外面用一个变量来保存当前状态。
 * 
*/
function* clock() {
    yield "tick";
    yield "tock";
}

let tick = false;
function clock() {
    tick = !tick;
    return tick ? "tick" : "tock";
}