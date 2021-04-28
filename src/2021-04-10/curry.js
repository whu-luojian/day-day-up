/**
 * 函数柯里化
 * 实现 sum(1, 2, 3) = sum(1, 2)(3) = sum(1)(2)(3) = 6
 */

const add = function(a, b, c) {
  return a + b + c
}

const curry = function(fn) {
  return judgeFn = (...args) => args.length === fn.length ? fn(...args) : (...moreArgs) => judgeFn(...args, ...moreArgs)
}

const sum = curry(add)
