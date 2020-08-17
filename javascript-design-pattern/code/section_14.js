// TODO 状态模式——自助咖啡机背后的力量

class CoffeeMaker {
  constructor() {
    /**
    这里略去咖啡机中与咖啡状态切换无关的一些初始化逻辑
  **/
    // 初始化状态，没有切换任何咖啡模式
    this.state = 'init'
    // 初始化牛奶的存储量
    this.leftMilk = '500ml'
  }

  stateToProcessor = {
    that: this,
    american() {
      // 尝试在行为函数里拿到咖啡机实例的信息并输出
      console.log('咖啡机现在的牛奶存储量是:', this.that.leftMilk)
      console.log('我只吐黑咖啡')
    },
    latte() {
      this.american()
      console.log('加点奶')
    },
    vanillaLatte() {
      this.latte()
      console.log('再加香草糖浆')
    },
    mocha() {
      this.latte()
      console.log('再加巧克力')
    }
  }

  // 关注咖啡机状态切换函数
  changeState(state) {
    // 记录当前状态
    this.state = state
    // 若状态不存在，则返回
    if (!this.stateToProcessor[state]) {
      return
    }
    this.stateToProcessor[state]()
  }
}

const mk = new CoffeeMaker()
mk.changeState('latte') // 输出 '给黑咖啡加点奶'
