/**
 * 小程序底层原理
 * 双线程架构
 * https://juejin.cn/post/6844903845961662477
 */


/**
 * 逻辑层
 *   定义（data、生命周期、event处理逻辑）
 *   装载所有页面的逻辑 js
 * 
 *   基础库：
 *   1. Page、App
 *   2. 与 native 通信
 *   3. wx.xx API
 */

/**
 * 渲染层
 *   一个页面一个渲染层
 *   document.getElementByTagName('webview')[0].showDevTools(true, null) 查看渲染层
 * 
 *   基础库
 *   1. 页面元素事件绑定
 *   2. 与 native 通信
 *   3. 组件系统
 * 
 *   执行流程
 *   1. 加载基础库
 *   2. 加载 wxml.js(渲染器的生成器)
 *   3. 执行 eval wxss.js 加载样式
 *   4. history.pushState
 *   5. 定义自定义事件 generateFuncReady(渲染器以及准备好了)
 *   6. 基础库中，监听到对应方法，执行 WeixinJSBridge 通知 native，native 通知逻辑层
 *   7. 数据传递过来之后，监听执行 generateFunc --> VNode
 *   8. VNode --> virtualDOM --> dom diff --> patch
 *   9. 使用组件系统 webComponent 进行渲染
 */

/**
 * wcc
 *   Wechat WXML Compiler
 * 
 *   index.wxml --> wxml.js
 *   wxml.js 执行得到渲染器 render （输入动态数据，输出 vnode）
 */

/**
 * wcsc
 *   Wechat Stylesheet(wxss) Compiler
 *   
 *   index.wxss --> wxss.js
 *   wxss.js 更加手机分辨率，动态计算 rpx，然后把 style 插入到 head 中
 */