/**
 * 实现深拷贝
 */

const getType = (a: any) => {
  return toString.call(a).slice(8, -1)
}

const cloneDeep = (obj: any) => {
  if (obj === null) {
    return null
  }

  if (!(typeof obj === 'object')) {
    return obj
  }

  const newObj = obj instanceof Array ? [] : {}

  if (obj instanceof Array) {
    obj.forEach(item => {
      // @ts-ignore
      newObj.push(cloneDeep(item))
    })
  } else {
    Object.keys(obj).forEach(key => {
      // @ts-ignore
      newObj[key] = cloneDeep(obj[key])
    })
  }
  
  return newObj
}

const obj1 = {
  a: 1,
  b: {
    c: [1, 2],
    d: null
  }
}

console.log(cloneDeep(obj1))
