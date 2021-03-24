/**
 *  实现 fn，按正确顺序输出
 *  function a1(next) {
      console.log('dosth_a1_before')
      next && next()
      console.log('dosth_a1_after')
    }

    function a2(next) {
      console.log('dosth_a2_before')
      next && next()
      console.log('dosth_a2_after')
    }

    function a3(next) {
      console.log('dosth_a3_before')
      next && next()
      console.log('dosth_a3_after')
    }

    function fn([a1, a2, a3])()
 */

/**
 * 简易版
 * @param middlewares
 */
const fn = (middlewares: Function[]) => {
  const len = middlewares.length
  if (!len) {
    return
  }
  let i = 0
  const next = () => {
    i++
    if(i >= len) {
      return
    } else {
      return middlewares[i](next)
    }
  }
  middlewares[0](next)
}

/**
 * koa 版
 * @param middlewares
 */
const compose = (middlewares: Function[]) => {
  if (!Array.isArray(middlewares)) {
    throw new TypeError('Middleware stack must be an array!')
  }

  for (const fn of middlewares) {
    if (typeof fn !== 'function') {
      throw new TypeError('Middleware must be composed of functions!')
    }
  }

  let index = -1
  const dispatch = (i: number): any => {
    if (i <= index) {
      return Promise.reject(new Error('next() called multiple times'))
    }
    index = i
    if (i >= middlewares.length) {
      return Promise.resolve()
    }
    const fn = middlewares[i]
    try {
      return Promise.resolve(fn(dispatch.bind(null, i + 1)))
    } catch (err) {
      return Promise.reject(err)
    }
  }

  dispatch(0)
}

function a1(next: Function) {
  console.log('dosth_a1_before')
  next && next()
  console.log('dosth_a1_after')
}

function a2(next: Function) {
  console.log('dosth_a2_before')
  next && next()
  console.log('dosth_a2_after')
}

function a3(next: Function) {
  console.log('dosth_a3_before')
  next && next()
  console.log('dosth_a3_after')
}

fn([a1, a2, a3])
compose([a1, a2, a3])
