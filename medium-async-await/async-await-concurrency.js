/**
 * 
 * async/await 并发
 * 
 * 我们的代码在执行到 await 时会等待结果返回才执行下一行。
 * 这样如果我们有很多需要异步执行的操作就会变得很慢。
 * 例如：我们需要遍历获取 redis 中存储的 100个 用户的信息。
 * 
*/
const users = [];
for(let i = 0; i < ids.length; i++) {
    users.push(await db.get(ids));
};

/**
 * 
 * 由于每次数据库读取操作都要消耗时间，这个接口就会变得非常慢。
 * 如果我们把它变成一个并行的操作，将会极大提升效率。
 * 
*/
const userss = await Promise.all(ids.map(async (id) => await db.get(id)));