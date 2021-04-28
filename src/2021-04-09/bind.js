/**
 * 1. bind 是 Function.prototype 上的方法
 * 2. bind 作用是返回一个指定了 this 和部分参数的新函数
 * 3. bind 函数没有 prototype 属性， bind 函数被 new 时以原函数为构造函数执行
 * 4. 新函数的 name 为 'bound' + 原函数的 name，只读属性，不可修改，无法 pollify
 */

Function.prototype.myBind = function(context, ...args) {
  let fToBound = this

  let fBound = function(...moreArgs) {
    let _this = this instanceof fBound ? this : context
    return fToBound.call(_this, ...args, ...moreArgs)
  }

  // 虽然 bind 函数没有 prototype 属性， bind 函数被 new 时以原函数为构造函数执行
  // 因此 polyfill 时需要需要将绑定函数的 prototype 指向原函数的 prototype
  if (fToBound.prototype) {
    fBound.prototype = fToBound.prototype
  }

  return fBound
}

Function.prototype.myBind2 = function(context, ...args) {
  let fToBound = this

  let fBound = function(...moreArgs) {
    // 关键
    if (new.target) {
        return new fToBound(...args, ...moreArgs)
    }
    return fToBound.call(context, ...args, ...moreArgs)
  }

  return fBound
}
