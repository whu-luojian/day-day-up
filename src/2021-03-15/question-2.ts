/**
 * add(1)(2)(3).sum() = 6
 * curring
 */

export const add = (a: number) => {
  return (b:number) => {
    return (c: number) => {
      return {
        sum: () => {
          return a + b + c
        }
      }
    }
  }
}

console.log(add(1)(2)(3).sum())

export const add1 = (...args: number[]) => {
  let a = args
  const fn = (...moreArgs: number[]) => {
    a = a.concat(moreArgs)
    return fn
  }
  fn.sum = () => {
    return a.reduce((prev, cur) => prev + cur)
  }
  return fn
}

console.log(add1(1)(2)(3).sum())
