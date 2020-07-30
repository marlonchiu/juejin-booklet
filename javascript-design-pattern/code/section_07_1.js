// 实现 JavaScript 中的深拷贝，有一种非常取巧的方式 —— JSON.stringify

const liLei = {
  name: 'liLei',
  age: 28,
  habits: ['coding', 'hiking', 'running']
}

const liLeiStr = JSON.stringify(liLei)
const liLeiCopy = JSON.parse(liLeiStr)

liLeiCopy.habits.splice(0, 1)
console.log('李雷副本的habits数组是', liLeiCopy.habits)
console.log('李雷的habits数组是', liLei.habits)

// todo 成功拷贝 副本和本体相互不干扰
// todo      无法处理 function、无法处理正则等等
// todo    ——只有当你的对象是一个严格的 JSON 对象时，可以顺利使用这个方法
