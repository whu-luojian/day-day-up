/**
 * 手写将 xiaotuofeng-mingming-shezhi 改成驼峰式 xiaotuofengMingmingShezhi
 */

const camelize = (name: string) => {
  return name.replace(/-\D/g, function(match: string) {
    // match 为 '-m', '-s'
    return match.charAt(1).toUpperCase()
  })
}

console.log(camelize('xiaotuofeng-mingming-shezhi'))
