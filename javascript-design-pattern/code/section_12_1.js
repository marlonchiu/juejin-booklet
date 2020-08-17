// 假如不用代理模式，我们将循环安装监听函数
// const aNodes = document.getElementById('father').getElementsByTagName('a')
// const aLength = aNodes.length
// for (let i = 0; i < aLength; i++) {
//   aNodes[i].addEventListener('click', e => {
//     e.preventDefault()
//     // console.log(i)
//     alert(`我是${aNodes[i].innerText}`)
//   })
// }

// todo 事件代理的实现
const father = document.getElementById('father')
// 给父元素安装一次监听函数
father.addEventListener('click', e => {
  // console.log(e.target)
  if (e.target.tagName === 'A') {
    // 以下是监听函数的函数体
    e.preventDefault()
    alert(`我是${e.target.innerText}`)
  }
})
