/**
 * https://router.vuejs.org/zh/guide/advanced/navigation-guards.html
 * vue-router 钩子分类：
 * 1. 全局守卫：
 *    beforeEach    // 路由权限判断和路由参数补充
 *    beforeResolve // 可用来做页面 PV 上报
 *    afterEach
 * 2. 路由配置独享守卫：
 *    beforeEnter
 * 3. 组件内守卫：
 *    beforeRouteEnter
 *    beforeRouteUpdate
 *    beforeRouteLeave
 * 
 * 完整的导航解析流程：
 * 1. 导航被触发
 * 2. 在失活的组件调用 beforeRouteLeave 守卫
 * 3. 调用全局的 beforeEach 守卫
 * 4. 在重用的组件内调用 beforeRouteUpdate 守卫
 * 5. 在路由配置里调用 beforeEnter
 * 6. 解析异步路由组件
 * 7. 在被激活的组件内调用 beforeRouteEnter 守卫
 * 8. 调用全局的 beforeResolve 守卫
 * 9. 导航被确认
 * 10. 调用全局的 afterEach 守卫
 * 11. 触发 dom 更新
 * 12. 调用组件 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为参数传入。
 */