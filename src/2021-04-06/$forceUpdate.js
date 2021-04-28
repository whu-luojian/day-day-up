/**
 * vue $forceUpdate 发生了什么
 * 
 * vue 2.x
 * 1. vm._watcher.update() 
 * _watcher 为渲染 watcher， 即 updateComponent = () => {
      vm._update(vm._render(), hydrating)
  }
 * 2. queueWatcher(this) // 放入更新队列
 * 3. nextTick(flushSchedulerQueue)
 * 4. watcher.run() // 更新
 * 
 * vue 3.x
 * 1. queueJob(i.update) // 放入更新队列
 * i.update 是 reactive effect for rendering，update 情况下分为 执行 beforeUpdate 钩子 --> patch --> 执行 update 钩子三步
 * 2. queueFlush()
 * 3. nextTick(flushJobs)
 * 4. flushJobs() // 更新
 */