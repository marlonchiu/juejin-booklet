// todo 缓存代理

// addAll方法会对你传入的所有参数做求和操作
const addAll = function () {
  console.log('进行了一次计算')
  let result = 0
  const len = arguments.length
  for (let i = 0; i < len; i++) {
    result += arguments[i]
  }
  return result
}

// 为求和方法创建代理

const proxyAddAll = (function () {
  // 求和结果的缓存池
  const resultCache = {}
  return function () {
    // 将入参转化为一个唯一的入参字符串
    const args = Array.prototype.join.call(arguments, ',')
    // console.log(args)
    // 检查本次入参是否有对应的计算结果
    if (args in resultCache) {
      // 如果有，则返回缓存池里现成的结果
      return resultCache[args]
    }
    return (resultCache[args] = addAll(...arguments))
  }
})()

// console.log(proxyAddAll(1, 2, 3, 4, 5, 6, 7))
let res = proxyAddAll(1, 2, 3, 4, 5, 6, 7)
console.log(res)
proxyAddAll(1, 2, 3, 4, 5, 6, 7)
console.log(proxyAddAll(1, 2, 3, 4, 5, 6, 7))
