/**
 * 给定一个非负整数数组，你最初位于数组的第一个位置。

  数组中的每个元素代表你在该位置可以跳跃的最大长度。

  你的目标是使用最少的跳跃次数到达数组的最后一个位置。
*/

// nums = [2,3,1,1,4]
function jump(nums) {
  let len = nums.length
  let step = 0
  let max = 0
  let end = 0
  for (let i = 0; i < len - 1; i++) {
    max = Math.max(max, nums[i] + i)
    if (end === i) {
      step++
      end = max
    }
  }
  return step
}

