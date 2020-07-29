// TODO 实现一个 Storage
const LocalStorage = require('node-localstorage').LocalStorage
const localStorage = new LocalStorage('./scratch')

// 实现一:静态方法版
class Storage {
  static getInstance() {
    if (!Storage.instance) {
      Storage.instance = new Storage()
    }
    return Storage.instance
  }

  getItem(key) {
    return localStorage.getItem(key)
  }

  setItem(key, value) {
    return localStorage.setItem(key, value)
  }
}

const storage1 = Storage.getInstance()
const storage2 = Storage.getInstance()
storage1.setItem('name', '李雷')
storage2.setItem('job', 'coder')

console.log(storage1.getItem('job')) // coder
console.log(storage1.getItem('name')) // 李雷
console.log(storage2.getItem('name')) // 李雷
console.log(storage1 === storage2) // true
