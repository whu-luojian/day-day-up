/**
 * let const 如何实现局部作用域，const 如何实现不可修改
 * 
 * https://zhuanlan.zhihu.com/p/28140450
   https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/133
   https://262.ecma-international.org/6.0/#sec-lexical-environments （如果是 const， 会CreateImmutableBinding(dn, true)）
   https://stackoverflow.com/questions/23948198/variable-environment-vs-lexical-environment/54673945
 */

/**
 * const
 * 如果是 const， CreateImmutableBinding(dn, true)
 *
 */
