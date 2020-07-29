// TODO 实现一个 Storage
const LocalStorage = require('node-localstorage').LocalStorage
const localStorage = new LocalStorage('./scratch')

// 实现一:闭包版
// 先实现一个基础的StorageBase类，把getItem和setItem方法放在它的原型链上
function StorageBase() {}
StorageBase.prototype.getItem = function (key) {
  return localStorage.getItem(key)
}
StorageBase.prototype.setItem = function (key, value) {
  return localStorage.setItem(key, value)
}
// 以闭包的形式创建一个引用自由变量的构造函数
const Storage = (function () {
  let instance = null
  return function () {
    // 判断自由变量是否为null
    if (!instance) {
      instance = new StorageBase()
    }
    return instance
  }
})()

const storage1 = Storage()
const storage2 = Storage()
storage1.setItem('name', '李雷')
storage2.setItem('job', 'coder')

console.log(storage1.getItem('job')) // coder
console.log(storage1.getItem('name')) // 李雷
console.log(storage2.getItem('name')) // 李雷
console.log(storage1 === storage2) // true
