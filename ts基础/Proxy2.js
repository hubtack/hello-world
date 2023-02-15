const user = {
  name: 'John',
  age: 12
}
/*
    proxyUser是代理对象, user是被代理对象
    后面所有的操作都是通过代理对象来操作被代理对象内部属性
    */
/**
 * Proxy对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义
 * 比如： 属性的查找、赋值、枚举、函数调用等
 * 用法： const p = new Proxy(target, handler)
 * 参数：
 *      target: 被代理的对象（任何类型的对象：原生数组、函数、另外一个代理）
 *      handle: 一个通常以函数作为属性的对象，每个属性中的函数分别定义了在执行各种操作时代理对象的行为
 */
const proxyUser = new Proxy(user, {
  get(target, prop) {
    console.log('劫持get()', target, prop)
    return Reflect.get(target, prop)
  },

  set(target, prop, val) {
    console.log('劫持set()', prop, val)
    return Reflect.set(target, prop, val) // (2)
  },

  deleteProperty(target, prop) {
    console.log('劫持delete属性', prop)
    return Reflect.deleteProperty(target, prop)
  }
})

// 读取属性值
// console.log(proxyUser)
// console.log(proxyUser.name, proxyUser.age)
// console.log(proxyUser === user)

// 设置属性
console.log((proxyUser.name = 'koa'))
console.log(user)
// // 读取属性值
// console.log(proxyUser === user)
// console.log(proxyUser.name, proxyUser.age)
// // 设置属性值
// proxyUser.name = 'bob'
// proxyUser.age = 13
// console.log(user)
// // 添加属性
proxyUser.sex = '男'
console.log(user)
// // 删除属性
delete proxyUser.name
console.log(user)
