/**
 *
 * Proxy 为构造函数，用来生成 Proxy 实例。
 *
 * 它其实非常类似于设计模式中的代理模式：
 * - 拦截和监视外部对对象的访问；
 * - 降低函数或类的复杂度；
 * - 在复杂操作前对操作进行校验或对所需资源进行管理。
 *
 * 参数：
 * - target: 表示所要拦截的目标对象(任何类型的对象，包括原生数组、函数，甚至可以是另一个代理)；
 * - handler: 通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理实例 proxy 的行为。
 *
 */
const proxy = new Proxy(target, handler);

/**
 *
 * # handler 解析
 *
 * - get(target, propKey, receiver): 拦截对象属性的读取信息;
 * - set(target, propKey, value, receiver): 拦截对象属性的设置信息；
 * - has(target, propKey): 拦截 propKey in Proxy 操作，返回一个布尔值；
 * - deleteProperty(target, propKey): 拦截 delete proxy[propKey] 的操作，返回一个布尔值；
 * - ownKeys(target): 拦截 Object.keys(proxy)、for-in 的循环操作，返回一个数组；
 * - getOwnPropertyDescriptor(target, propKey): 拦截 Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象；
 * - defineProperty(target, propKey, propDesc): 拦截 defineProperty(proxy, propKey, propDesc)，返回一个布尔值；
 * - preventExtensions(target): 拦截 Object.preventExtensions(proxy) 操作，返回一个布尔值；
 * - getPrototypeOf(target): 拦截 Object.getPrototypeOf(proxy) 操作，返回一个对象；
 * - isExtensible(target): 拦截 Object.isExtensible(proxy) 操作，返回一个布尔值；
 * - setPrototypeOf(target, proto): 拦截 Object.setPrototypeOf(proxy, proto) 的操作，返回一个布尔值；
 * - apply(target, object, args): 拦截 Proxy 实例作为函数调用的操作；
 * - construct(target, args): 拦截 Proxy 实例作为构造函数调用的操作。
 *
 */
