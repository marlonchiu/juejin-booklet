// const arr = [1, 2, 3]
// const len = arr.length
// for (const item of arr) {
//   console.log(`当前元素是${item}`)
// }

// const arr = [1, 2, 3]
// const iterator = arr[Symbol.iterator]()
// iterator.next()

// TODO    for...of...其实就是iterator循环调用
// const arr = [1, 2, 3]
// const iterator = arr[Symbol.iterator]()
// // 初始化一个迭代结果
// let now = { done: false }
// // 循环往外迭代成员
// while (!now.done) {
//   now = iterator.next()
//   // console.log(now)
//   if (!now.done) {
//     console.log(`现在遍历到了${now.value}`)
//   }
// }

// 自定义可迭代对象
var myIterable = {}
myIterable[Symbol.iterator] = function* () {
  yield 1
  yield 2
  yield 3
}
// ;[...myIterable]
console.log([...myIterable]) // [ 1, 2, 3 ]

// todo  实现一个迭代器生成函数
// ** 迭代器对象 ** 全凭 ** 迭代器生成函数 ** 帮我们生成

// 编写一个迭代器生成函数
// function* iteratorGenerator() {
//   yield '1号选手'
//   yield '2号选手'
//   yield '3号选手'
// }

// const iterator = iteratorGenerator()
// // iterator.next()
// // iterator.next()
// // iterator.next()
// // iterator.next()
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

// TODO es5 实现一个迭代器生成函数

// 定义生成器函数，入参是任意集合
function iteratorGenerator(list) {
  // idx记录当前访问的索引
  var idx = 0
  // len 记录传入集合的长度
  var len = list.length
  return {
    // 自定义next方法
    next: function () {
      // 如果索引还没有超出集合长度，done为false
      var done = idx >= len
      // 如果done为false，则可以继续取值
      var value = !done ? list[idx++] : undefined
      // 将当前值与遍历是否完毕（done）返回
      return {
        value: value,
        done: done
      }
    }
  }
}

const iterator = iteratorGenerator(['1号选手', '2号选手', '3号选手'])
// iterator.next()
// iterator.next()
// iterator.next()
// iterator.next()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
