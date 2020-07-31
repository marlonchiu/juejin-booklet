// 定义一个单例弹框
const Modal = (function () {
  let modal = null
  return function () {
    if (!modal) {
      modal = document.createElement('div')
      modal.innerHTML = '您还未登录哦~'
      modal.id = 'modal'
      modal.style.display = 'none'
      document.body.appendChild(modal)
    }
    return modal
  }
})()

// // 点击打开按钮展示模态框
// document.getElementById('open').addEventListener('click', function () {
//   // 未点击则不创建modal实例，避免不必要的内存占用
//   const modal = new Modal()
//   modal.style.display = 'block'
// })

// // 点击关闭按钮隐藏模态框
// document.getElementById('close').addEventListener('click', function () {
//   const modal = document.getElementById('modal')
//   if (modal) {
//     modal.style.display = 'none'
//   }
// })

// 将展示Modal的逻辑单独封装
function openModal() {
  const modal = new Modal()
  modal.style.display = 'block'
}
function closeModal() {
  const modal = document.getElementById('modal')
  if (modal) {
    modal.style.display = 'none'
  }
}
// 按钮文案修改逻辑
function changeButtonText() {
  const btn = document.getElementById('open')
  btn.innerText = '快去登录'
}
// 按钮置灰逻辑
function disableButton() {
  const btn = document.getElementById('open')
  btn.setAttribute('disabled', true)
}

// 新版本功能逻辑整合
function changeButtonStatus() {
  changeButtonText()
  disableButton()
}

// 点击打开按钮展示模态框
document.getElementById('open').addEventListener('click', function () {
  openModal()
  changeButtonStatus()
})

// 点击关闭按钮隐藏模态框
document.getElementById('close').addEventListener('click', function () {
  closeModal()
})
