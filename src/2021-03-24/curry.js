/**
 * sum(2, 3) = sum(2)(3) = 5
 */

// 方法1
const sum = (...args) => {
  return args.length === 2 ? args.reduce((a, b) => a + b) : (...moreArgs) => sum(...args, ...moreArgs)
}

// 方法2
const add = (a, b) => a + b
const curry = fn => {
  const judge = (...args) => args.length === fn.length
    ? fn(...args)
    : (...moreArgs) => judge(...args, ...moreArgs)
}
const sum = curry(add)

