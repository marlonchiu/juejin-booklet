// 递归实现深拷贝
function deepClone(obj) {
  // 如果是 值类型 或 null，则直接return
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }
  // 定义结果对象
  let copy = {}

  // 如果对象是数组，则定义结果数组
  if (obj.constructor === Array) {
    copy = []
  }

  // 遍历对象的key
  for (let key in obj) {
    // 如果key是对象的自有属性
    if (obj.hasOwnProperty(key)) {
      // 递归调用深拷贝方法
      copy[key] = deepClone(obj[key])
    }
  }
  return copy
}

function _deepClone(source) {
  let target
  if (typeof source === 'object') {
    target = Array.isArray(source) ? [] : {}
    for (let key in source) {
      if (source.hasOwnProperty(key)) {
        if (typeof source[key] !== 'object') {
          target[key] = source[key]
        } else {
          target[key] = _deepClone(source[key])
        }
      }
    }
  } else {
    target = source
  }
  return target
}

/**
 * TODO 调用深拷贝方法，若属性为值类型，则直接返回；若属性为引用类型，则递归遍历。
 *
 * 深拷贝在命题时，可发挥的空间主要在于针对不同数据结构的处理，比如除了考虑 Array、Object，
 * 还需要考虑一些其它的数据结构（Map、Set 等）；此外还有一些极端 case（循环引用等）的处理等等。
 *
 * [jQuery中的extend方法源码](https://github.com/jquery/jquery/blob/1472290917f17af05e98007136096784f9051fab/src/core.js#L121)
 * [深拷贝的终极探索](https://segmentfault.com/a/1190000016672263)
 */

const k = {
  a: {
    b: {
      c: 1,
      f: 4
    },
    d: 2
  },
  m: 3
}

const l = deepClone(k)
const m = _deepClone(k)

console.log(k === l)
console.log(k == m)
