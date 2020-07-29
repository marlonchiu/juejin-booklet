// TODO 实现一个全局唯一的Modal弹框

class Modal {
  static getInstance() {
    let modal = Modal.instance
    if (!Modal.instance) {
      Modal.instance = document.createElement('div')
      Modal.instance.innerHTML = '我是一个全局唯一的Modal'
      Modal.instance.id = 'modal'
      Modal.instance.style.display = 'none'
      document.body.appendChild(Modal.instance)
    }
    console.log(Modal.instance)
    return Modal.instance
  }
}

// 点击打开按钮展示模态框
document.getElementById('open').addEventListener('click', function () {
  const modal = Modal.getInstance()
  modal.style.display = 'block'
})

// 点击关闭按钮隐藏模态框
document.getElementById('close').addEventListener('click', function () {
  const modal = Modal.getInstance()
  if (modal) {
    modal.style.display = 'none'
  }
})
