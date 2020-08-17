// todo 策略模式——重构小能手，拆分“胖逻辑”

// prePrice - 处理预热价
// onSalePrice - 处理大促价
// backPrice - 处理返场价
// freshPrice - 处理尝鲜价
// askPrice - 分发询价逻辑

// TODO 询价逻辑的分发 ——> 询价逻辑的执行
// TODO 对扩展开放，对修改封闭

// 定义一个询价处理器对象
const priceProcessor = {
  // 处理预热价
  pre(originPrice) {
    if (originPrice >= 100) {
      return originPrice - 20
    }
    return originPrice * 0.9
  },
  // 处理大促价
  onSale(originPrice) {
    if (originPrice >= 100) {
      return originPrice - 30
    }
    return originPrice * 0.8
  },
  //  处理返场价
  back(originPrice) {
    if (originPrice >= 200) {
      return originPrice - 50
    }
    return originPrice
  },
  // 处理尝鲜价
  fresh(originPrice) {
    return originPrice * 0.5
  }
}

// 询价函数
function askPrice(tag, originPrice) {
  return priceProcessor[tag](originPrice)
}

// 扩展一个新人价
priceProcessor.newUser = function (originPrice) {
  if (originPrice >= 100) {
    return originPrice - 50
  }
  return originPrice
}
