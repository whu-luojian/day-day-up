/**
 * 最长递增子序列 longest increasing subsequence
 * 给定一个整数数组 nums，找出其中最长严格递增子序列的长度
 * nums = [10, 9, 2, 5, 3, 7, 101, 18]
 * res = 4 ([2 , 3, 7, 101])
 */

const lengthOfLIS = nums => {
  let maxLen = 0
  let n = nums.length
  let dp = []
  for (let i = 0; i < n; i++) {
    dp[i] = 1
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    maxLen = Math.max(maxLen, dp[i])
  }
  return maxLen
}