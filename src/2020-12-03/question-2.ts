/**
 * 用 Object 实现一个迭代器
 */
// @ts-nocheck
Object.prototype[Symbol.iterator] = function *() {
  let keys = Object.keys(this)
  for (const key of keys) {
    yield this[key]
  }
}

const obj = {
  a: 1,
  b: true,
  c: {
    key: 'z'
  }
}

for (const value of obj) {
  console.log(value)
}

const createObjectIterator = (obj) => {
  let i = 0
  let keys = Object.keys(obj)
  let len = keys.length
  return {
    next() {
      return {
        done: i >= len,
        value: obj[keys[i++]]
      }
    }
  }
}

const objIterator = createObjectIterator(obj)
console.log(objIterator.next())
console.log(objIterator.next())
console.log(objIterator.next())
console.log(objIterator.next())
