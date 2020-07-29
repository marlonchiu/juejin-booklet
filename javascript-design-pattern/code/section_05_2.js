/**
 * TODO 用**闭包**来实现
 *
 * @class SingleDog
 */
class SingleDog {
  show() {
    console.log('我是一个单例对象')
  }
}

SingleDog.getInstance = (function () {
  // 定义自由变量instance，模拟私有变量
  let instance = null
  return function () {
    // 判断自由变量是否为null
    if (!instance) {
      // 如果为null则new出唯一实例
      instance = new SingleDog()
    }
  }
})()

const s3 = SingleDog.getInstance()
const s4 = SingleDog.getInstance()
const s5 = SingleDog.getInstance()

console.log(s3 === s4) // true
console.log(s3 === s5) // true
