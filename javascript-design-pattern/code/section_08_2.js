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

class OpenButton {
  // 点击后展示弹框（旧逻辑）
  onClick() {
    const modal = new Modal()
    modal.style.display = 'block'
  }
}

// 定义按钮对应的装饰器
class Decorator {
  // 将按钮实例传入
  constructor(open_button) {
    this.open_button = open_button
  }
  onClick() {
    this.open_button.onClick()
    // “包装”了一层新逻辑
    this.changeButtonStatus()
  }
  changeButtonStatus() {
    this.changeButtonText()
    this.disableButton()
  }

  changeButtonText() {
    const btn = document.getElementById('open')
    btn.innerText = '快去登录'
  }

  disableButton() {
    const btn = document.getElementById('open')
    btn.setAttribute('disabled', true)
  }
}

const openButton = new OpenButton()
const decorator = new Decorator(openButton)

// 点击打开按钮展示模态框
document.getElementById('open').addEventListener('click', function () {
  openButton.onClick()
  // 此处可以分别尝试两个实例的onClick方法，验证装饰器是否生效
  // decorator.onClick()
})

// 点击关闭按钮隐藏模态框
document.getElementById('close').addEventListener('click', function () {
  const modal = document.getElementById('modal')
  if (modal) {
    modal.style.display = 'none'
  }
})
