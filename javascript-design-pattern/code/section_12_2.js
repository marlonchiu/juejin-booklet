// todo 虚拟代理 (图片预加载技术实现)
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
  static LOADING_URL = 'xxxxxx'
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

// `ProxyImage` 帮我们调度了预加载相关的工作，
// 我们可以通过`ProxyImage` 这个代理，实现对真实 img 节点的间接访问，并得到我们想要的效果。

// 在这个实例中，`virtualImage` 这个对象是一个“幕后英雄”，它始终存在于 JavaScript 世界中、代替真实 DOM 发起了图片加载请求、完成了图片加载工作，
// 却从未在渲染层面抛头露面。因此这种模式被称为“虚拟代理”模式。
