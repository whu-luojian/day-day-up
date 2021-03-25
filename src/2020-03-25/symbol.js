/**
 * 实现 symbol
 */

// 3. Symbol 值可以作为标识符，用于对象的属性名，可以保证不会出现同名的属性
const generateName = (function() {
  let id = 0
  return desc => {
    id++
    return 'MySymbol(' + desc + '_' + id + ')'
  }
})()

function MySymbol(desc) {
  // 1. Symbol 函数不能 new
  if (this instanceof MySymbol) {
    throw new TypeError('Symbol is not a constructor')
  }

  // 2. 将参数转为字符串，作为描述，没传则描述为 undefined
  const descString = desc === undefined ? undefined : String(desc)

  let symbol = Object.create({
    toString: function() {
      return this.__Name__
    },
    valueOf: function() {
      return this
    }
  })

  Object.defineProperties(symbol, {
    '__Description__': {
      value: descString,
      writable: false,
      enumerable: false,
      configurable: false
    },
    '__Name__': {
      value: generateName(descString),
      writable: false,
      enumerable: false,
      configurable: false
    }
  })

  // 4. 每次返回新对象，保证每次调用返回值都不相等：MySymbol('a) === MySymbol('a) // false
  return symbol
}

const symbolMap = new Map()

Object.defineProperties(MySymbol, {
  'for': {
    value: function(desc) {
      const descString = desc === undefined ? undefined : String(desc)
      if (symbolMap.has(descString)) {
        return symbolMap.get(descString)
      } else {
        const symbol = MySymbol(descString)
        symbolMap.set(descString, symbol)
        return symbol
      }
    },
    enumerable: false,
    writable: true,
    configurable: true
  },
  'keyFor': {
    value: function(symbol) {
      for (let e of symbolMap.entries()) {
        if (e[1] === symbol) {
          return e[0]
        }
      }
    },
    enumerable: false,
    configurable: true,
    writable: true
  }
})
