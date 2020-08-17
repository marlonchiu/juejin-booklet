class PreLoadImage {
  constructor(imgNode) {
    // 获取真实的 DOM 节点
    this.imgNode = imgNode
  }
  // 操作 img 节点的 src 属性
  setSrc(imgUrl) {
    this.imgNode.src = imgUrl
  }
}

class ProxyImage {
  // 占位图的url地址
  // static LOADING_URL = 'xxxxxx'
  static LOADING_URL = './images/0.png'

  constructor(targetImage) {
    // 目标Image，即PreLoadImage实例
    this.targetImage = targetImage
  }
  // 该方法主要操作虚拟Image，完成加载
  setSrc(targetUrl) {
    // 真实img节点初始化时展示的是一个占位图
    this.targetImage.setSrc(ProxyImage.LOADING_URL)
    // 创建一个帮我们加载图片的虚拟Image实例
    const virtualImage = new Image()
    // 监听目标图片加载的情况，完成时再将DOM上的真实img节点的src属性设置为目标图片的url
    virtualImage.onload = () => {
      this.targetImage.setSrc(targetUrl)
    }
    // 设置src属性，虚拟Image实例开始加载图片
    virtualImage.src = targetUrl
  }
}

// 获取所有的图片标签
const imgs = document.getElementsByTagName('img')
Array.from(imgs).forEach(img => {
  let pre = new PreLoadImage(img)
  pre.setSrc('./images/1.png')
  // 假设图片真实地址存在data-url属性上
  let url = img.getAttribute('data-url')
  setTimeout(() => {
    var pro = new ProxyImage(pre)
    pro.setSrc(url)
  }, 0)
})

// 获取可视区域的高度
const viewHeight = window.innerHeight || document.documentElement.clientHeight
// console.log(viewHeight)
// num用于统计当前显示到了哪一张图片，避免每次都从第一张图片开始检查是否露出
let num = 0
function lazyload() {
  for (let i = num; i < imgs.length; i++) {
    // 用可视区域高度减去元素顶部距离可视区域顶部的高度
    let distance = viewHeight - imgs[i].getBoundingClientRect().top
    // 如果可视区域高度大于等于元素顶部距离可视区域顶部的高度，说明元素露出
    if (distance >= 0) {
      // 给元素写入真实的src，展示图片
      imgs[i].src = imgs[i].getAttribute('data-src')
      // 前i张图片已经加载完毕，下次从第i+1张开始检查是否露出
      num = i + 1
    }
  }
}
// 监听Scroll事件
window.addEventListener('scroll', lazyload, false)
