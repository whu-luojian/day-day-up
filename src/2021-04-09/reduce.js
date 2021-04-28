/**
 * 1. reduce 是数组原型上的方法，对数组的每一项进行reduce操作，将结果汇总为单个值返回
 * 2. reduce 接收两个参数，第一个参数为一个函数
 * 3. 第一个参数（函数）本身有四个参数：累计器、当前项的值、当前项索引、数组本身，返回值用于累计器
 * 4. 第二个参数为可选值，作为第一次调用 callback 函数的初始值，如果没有提供初始值，则使用数组第一个元素作为初始值
 * 5. 在没有提供初始值的空数组上调用 reduce 将报错
 */

Array.prototype.myReduce = function(cb, ...args) {
  const arr = this
  const hasInitialValue = args.length > 0
  if (!hasInitialValue && !arr.length) {
    throw new TypeError('Reduce of empty array with no initial value')
  }
  let res = hasInitialValue ? args[0] : arr[0]
  for (let i = hasInitialValue ? 0 : 1; i < arr.length; i++) {
    res = cb(res, arr[i], i, arr)
  }
  return res
}
