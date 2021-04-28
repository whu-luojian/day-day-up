/**
 * https://whu-luojian.github.io/blog/browser-frontend-cache.html
 * 
 * 发起资源请求：
 * 1. service worker
 * 2. memory cache
 * 3. disk cache
 * 4. http 请求
 * 
 * 资源从服务器返回：
 * 1. service worker（根据 worker 的 handler 配置是否存入 cache storage ）
 * 2. disk cache (根据响应头判断是否存入 disk)
 * 3. memory cache (资源引用存入 memory，下次使用)
 * 
 * max-age 单位是秒，比如 cache-control: max-age=3600，表示资源 60 分钟后失效
 * last-modified 是资源上次修改的时间，比如：Last-Modified: Mon, 10 Nov 2018 09:10:11 GMT，
 * 精度也是秒，所以如果资源更新速度是秒以下单位，那么该缓存是不能被使用的
 */