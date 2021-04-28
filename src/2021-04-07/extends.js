// https://juejin.cn/post/6844903825241800717
// e6 的静态属性和静态方法均可以被继承，如下面例子
// C.sayHello === P.sayHello (共享引用)

class P {
  constructor(name) {
      this.name = name
  }

  setName(name) {
      this.name = name
  }

  static sayHello() {
      console.log('hello')
  }
}

class C extends P {
  constructor(name, age) {
      super(name)
      this.age = age
  }

  setAge(age) {
      this.age = age
  }

  static sayWorld() {
      console.log('world')
  }
}

// ES5

function P1(name) {
  this.name = name
}

P1.prototype.setName = function(name) {
  this.name = name
}

P1.sayHello = function() {
  console.log('hello')
}

function C1(name, age) {
  P1.call(this, name)
  this.age = age
}

C1.prototype = Object.create(P1.prototype, {
  constructor: {
      value: C1
  },
  setAge: {
      value: function(age) {
          this.age = age
      }
  }
})

C1.sayWorld = function() {
  console.log('world')
}

// 实现静态属性的继承，即 C1.__proto__ = P1
// 注意区分 __proto__ 和 prototype
// 可参考 babel 转义后的结果：https://babeljs.io/repl/#?browsers=&build=&builtIns=false&spec=false&loose=true&code_lz=MYGwhgzhAEAK0G8BQ1XWAewHYQC4CcBXYXDfACizAFsBTASkRTRdwAsBLCAOirugC80PrWaoAvkjHQItXADkatSksbIWrTjxGDhS6ZOl4wuDsBlgAngAlaIEBnJrpLTDgwha3BwHNyAcjY7B396AyRDUEgYAGFoWgAPXFosABMYeHU0NzwiEjIVOgAaaDAfBiYNNAhCAAdaChEwqtR2Lm4y2l1O8KM5AEFy8k7nFug2nk7u8t6WY1NzCCsAdTIQVKdKlpyPL18AgHc11NDw8SA&debug=false&forceAllTransforms=true&shippedProposals=false&circleciRepo=&evaluate=true&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env&prettier=false&targets=&version=7.13.14&externalPlugins=
Object.setPrototypeOf(C1, P1)
