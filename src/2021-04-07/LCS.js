/**
 * 最长公共子序列 longestCommonSubsequence
 * 给定两个字符串 text1 和 text2，返回两个字符串的最长公共子序列的长度
 * 
 * 典型的二维动态规划问题
 * 
 * dp[i][j] = 
 */


/**
 * text1 = 'abcd' text2 = 'acbd'
 * dp = [
 *  [0, 0, 0, 0, 0],
 *  [0, 1, 1, 1, 1],
 *  [0, 1, 1, 2, 2],
 *  [0, 1, 2, 2, 2],
 *  [0, 1, 2, 2, 3]
 * ]
 * 
 */
const longestCommonSubsequence = (text1, text2) => {
  const m = text1.length
  const n = text2.length
  const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0))

  for (let i = 1; i <= m; i++) {
    const c1 = text1[i - 1]
    for (let j = 1; j <= n; j++) {
      const c2 = text2[j - 1]
      if (c1 === c2) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
      }
    }
  }

  return dp[m][n]
}
