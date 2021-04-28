/**
 * 1. 基本数据类型直接复制
 * 2. Array、Object 类型递归拷贝
 * 3. Set、Map、WeakSet、WeakMap、Date、RegExp 类型重新构造
 * 4. 避免循环引用
 * 5. 处理 Symbol 类型的属性
 */

const isObject = v => typeof v === 'object' && v !== null

const cloneDeep = (obj, map = new WeakMap()) => {
  if (!isObject(obj)) {
    return obj
  }

  const ctor = [Set, Map, WeakMap, WeakSet, Date, RegExp]
  if (ctor.includes(obj.constructor)) {
    return new obj.construtor(obj)
  }

  if (map.has(obj)) {
    return map.get(obj)
  }

  const newObj = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors())
  map.set(obj, newObj)

  Reflect.ownKeys(obj).forEach(key => {
    newObj[key] = isObject(obj[key]) ? cloneDeep(obj[key], map) : obj[key]
  })

  return newObj
}
