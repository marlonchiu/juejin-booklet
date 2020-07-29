class SingleDog {
  show() {
    console.log('我是一个单例对象')
  }
  // 构造函数需要判断自己是否已经创建过一个实例
  static getInstance() {
    // 判断是否已经new过1个实例
    if (!SingleDog.instance) {
      // 若这个唯一的实例不存在，那么先创建它
      SingleDog.instance = new SingleDog()
    }
    // 如果这个唯一的实例已经存在，则直接返回
    return SingleDog.instance
  }
}

const s1 = new SingleDog()
const s2 = new SingleDog()
const s3 = SingleDog.getInstance()
const s4 = SingleDog.getInstance()

console.log(s1 === s2) // false
console.log(s3 === s4) // true
