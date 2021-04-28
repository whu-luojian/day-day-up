/**
 * 实现一个发布订阅中心
 * 1. on
 * 2. emit (创建副本执行，避免死循环)
 * 3. off
 * 4. once
 */

class EventEmitter {
  constructor() {
    this.eventMap = new Map()
  }

  on(type, cb) {
    const events = this.eventMap.has(type) ? this.eventMap.get(type) : []
    if (!events.includes(cb)) {
      this.eventMap.set(type, events.concat([cb]))
    }
  }

  off(type, cb) {
    if (this.eventMap.has(type)) {
      const events = this.eventMap.get(type)
      const index = events.indexOf(cb)
      if (index !== -1) {
        events.splice(index, 1)
        this.eventMap.set(type, events)
      }
    }
  }

  once(type, cb) {
    const onceCb = function(...data) {
      cb(...data)
      this.off(type, cb)
    }
    this.on(type, onceCb)
  }

  emit(type, ...data) {
    if (this.eventMap.has(type)) {
      // 创建副本，如果回调函数内注册相同类型事件，会造成死循环
      const events = this.eventMap.get(type).slice()
      events.forEach(cb => {
        cb(...data)
      })
    }
  }
}


