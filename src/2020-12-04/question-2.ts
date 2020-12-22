/**
 * 实现一个 LRUCache 的类
 * 使用 list（队列）实现 LRU
 */

class LRUCache {
  private capacity: number = 0
  private list: any[] = []
  private map = new Map()

  custructor(capacity: number) {
    this.capacity = capacity
  }

  get(key: number) {
    if (this.map.has(key)) {
      const idx = this.list.findIndex(item => item === key)
      this.list.splice(idx, 1)
      this.list.unshift(key)
      return this.map.get(key)
    }
    return -1
  }

  put(key: number, value: any) {
    if (!this.map.has(key)) {
      this.map.set(key, value)
      if (this.list.length === this.capacity) {
        this.map.delete(this.list.pop())
      }
      this.list.unshift(key)
    } else {
      this.map.set(key, value)
      this.get(key)
    }
  }
}


/**
 * 实现一个 LRUCache 的类，仅使用 Map
 * Map.prototype.keys() 返回一个引用的 Iterator 对象。它包含按照顺序插入 Map 对象中每个元素的key值。
 */

class LRUCache1 {
  private capacity: number = 0
  private map = new Map()

  custructor(capacity: number) {
    this.capacity = capacity
  }

  get(key: number) {
    if (this.map.has(key)) {
      const value = this.map.get(key)
      this.map.delete(key)
      this.map.set(key, value)
      return value
    }
    return -1
  }

  put(key: number, value: any) {
    if (!this.map.has(key)) {
      if (this.map.size === this.capacity) {
        this.map.delete(this.map.keys().next().value)
      }
      this.map.set(key, value)
    } else {
      this.map.delete(key)
      this.map.set(key, value)
    }
  }
}
