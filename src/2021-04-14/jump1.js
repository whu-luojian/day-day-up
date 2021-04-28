/**
 * 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标。
   数组中的每个元素代表你在该位置可以跳跃的最大长度。
   判断你是否能够到达最后一个下标。

   输入：nums = [2,3,1,1,4]
   输出：true
   解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
 */

// [3, 2, 1, 0, 4]
const jump = (nums) => {
  let faster = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    faster = Math.max(faster, i + nums[i])
    if (faster <= i) return false
  }
  return faster >= nums.length - 1
}

const jump2 = (nums) => {
  let len = nums.length
  if (len === 0) {
    return false
  }
  let dp = Array(len).fill(0)
  dp[0] = 1
  for (let i = 0; i < len; i++) {
    if (dp[i]) {
      for (let j = 1; j <= nums[i]; j++) {
        if (i + j >= len - 1) {
          return true
        }
        dp[i + j] = 1
      }
    } else {
      return false
    }
  }
  return dp[len - 1] === 1
}
