/**
 * 代码实现：实现 Array.prototype.reduce 方法
 * 考虑以下情况：空数组，有无初始值
 */

const test = () => {
  const arr = [1]
  const sum = arr.reduce((pre, cur) => {
    return pre + cur
  })
  console.log(sum)
}

test()

type CallbackFn = (previousValue: any, currentValue: any, currentIndex: number, array: any[] ) => any

Array.prototype.reduce = function(callbackFn: CallbackFn , ...rest: any[]): any {
  const array = this
  const len = array.length
  const hasInitialValue = !!rest && rest.length > 0
  if (!hasInitialValue && len === 0) {
    throw(new TypeError('Reduce of empty array with no intial value'))
  }
  let pre = hasInitialValue ? rest[0] : array[0]
  for (let i = hasInitialValue ? 0 : 1; i < len; i++) {
    pre = callbackFn(pre, array[i], i, array)
  }
  return pre
}

test()
