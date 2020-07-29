/**
 * 抽象工厂模式
 *   AbstractFactory
 *
 */

// TODO 抽象工厂  (AbstractFactory)
class MobilePhoneFactory {
  // 提供操作系统的接口
  createOS() {
    throw new Error('抽象工厂方法不允许直接调用，你需要将我重写！')
  }
  // 提供硬件的接口
  createHardWare() {
    throw new Error('抽象工厂方法不允许直接调用，你需要将我重写！')
  }
}

// TODO 具体工厂（ConcreteFactory）
// 具体工厂继承自抽象工厂（安卓系统）
class FakeStarFactory extends MobilePhoneFactory {
  createOS() {
    // 提供安卓系统实例
    // 具体产品类（ConcreteProduct）
    return new AndroidOS()
  }
  createHardWare() {
    // 提供高通硬件实例
    return new QualcommHardWare()
  }
}

// TODO 抽象产品（AbstractProduct）类
// 定义操作系统这类产品的抽象产品类
class OS {
  controlHardWare() {
    throw new Error('抽象产品方法不允许直接调用，你需要将我重写！')
  }
}
// TODO 具体产品类（ConcreteProduct）
// 定义具体操作系统的具体产品类
class AndroidOS extends OS {
  controlHardWare() {
    console.log('我会用安卓的方式去操作硬件')
  }
}
class AppleOS extends OS {
  controlHardWare() {
    console.log('我会用🍎的方式去操作硬件')
  }
}

// 定义手机硬件这类产品的抽象产品类
class HardWare {
  // 手机硬件的共性方法，这里提取了“根据命令运转”这个共性
  operateByOrder() {
    throw new Error('抽象产品方法不允许直接调用，你需要将我重写！')
  }
}

// 定义具体硬件的具体产品类
class QualcommHardWare extends HardWare {
  operateByOrder() {
    console.log('我会用高通的方式去运转')
  }
}

class MiWare extends HardWare {
  operateByOrder() {
    console.log('我会用小米的方式去运转')
  }
}

// TODO EG:生产一台FakeStar
const myPhone = new FakeStarFactory()
const myOS = myPhone.createOS()
const myHardWare = myPhone.createHardWare()
// 启动操作系统(输出‘我会用安卓的方式去操作硬件’)
myOS.controlHardWare()
// 唤醒硬件(输出‘我会用高通的方式去运转’)
myHardWare.operateByOrder()

// TODO 新手机（定义新手机的产品类）
class newStarFactory extends MobilePhoneFactory {
  createOS() {
    // 操作系统实现代码（引入苹果系统）
    return new AppleOS()
  }
  createHardWare() {
    // 硬件实现代码(加入使用的是小米硬件)
    return new MiWare()
  }
}

const starPhone = new newStarFactory()
const starOS = starPhone.createOS()
const starHardWare = starPhone.createHardWare()
starOS.controlHardWare() // 我会用�的方式去操作硬件
starHardWare.operateByOrder() // 我会用小米的方式去运转

// 对原有的系统不会造成任何潜在影响. 所谓的“对拓展开放，对修改封闭”就这么圆满实现了。
