/**
 * 1. Promise 是一个类，执行时接受一个执行器，执行器会立即执行
 * 2. 三种状态：FulFilled, Pending, Rejected
 * 3. .then
 * 4. 
 */

const STATUS = {
  PENDING = 'pending',
  FULFILLED = 'fulfilled',
  REJECTED = 'rejected'
}

class MyPromise {
  constructor(exector) {
    this._status = STATUS.PENDING
    this._value = undefined
    this._resolveQueue = []
    this._rejectQueue = []
    const resolve = value => {
      const run = () => {
        if (this._status === STATUS.PENDING) {
          this._status = STATUS.FULFILLED
        }
        this._value = value
        while (this._resolveQueue.length) {
          const cb = this._resolveQueue.shift()
          cb(value)
        }
      }
      setTimeout(run)
    }
    const reject = reason => {
      const run = () => {
        if (this._status === STATUS.PENDING) {
          this._status = STATUS.REJECTED
        }
        this._value = reason
        while (this._rejectQueue.length) {
          const cb = this._rejectQueue.shift()
          cb(reason)
        }
      }
      setTimeout(run)
    }
    try {
      exector(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }

  then(onFulfilled, onRejected) {
    
  }
}
