/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 *
 * https://leetcode-cn.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (40.95%)
 * Likes:    4639
 * Dislikes: 0
 * Total Accepted:    544.2K
 * Total Submissions: 1.3M
 * Testcase Example:  '[1,3]\n[2]'
 *
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums1 = [1,3], nums2 = [2]
 * 输出：2.00000
 * 解释：合并数组 = [1,2,3] ，中位数 2
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums1 = [1,2], nums2 = [3,4]
 * 输出：2.50000
 * 解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums1 = [0,0], nums2 = [0,0]
 * 输出：0.00000
 *
 *
 * 示例 4：
 *
 *
 * 输入：nums1 = [], nums2 = [1]
 * 输出：1.00000
 *
 *
 * 示例 5：
 *
 *
 * 输入：nums1 = [2], nums2 = []
 * 输出：2.00000
 *
 *
 *
 *
 * 提示：
 *
 *
 * nums1.length == m
 * nums2.length == n
 * 0
 * 0
 * 1
 * -10^6
 *
 *
 *
 *
 * 进阶：你能设计一个时间复杂度为 O(log (m+n)) 的算法解决此问题吗？
 *
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const len = nums1.length + nums2.length;
  let mid = Math.floor(len / 2); // 2
  const o = len / 2 === mid; // 是偶数 // 2

  if (o) {
    mid--;
  }

  if (nums1.length === 0) {
    if (o) {
      return (nums2[mid] + nums2[mid + 1]) / 2;
    } else {
      return nums2[mid];
    }
  }

  if (nums2.length === 0) {
    if (o) {
      return (nums1[mid] + nums1[mid + 1]) / 2;
    } else {
      return nums1[mid];
    }
  }

  while (mid >= 0) {
    const n1 = nums1[0] ?? Number.MAX_SAFE_INTEGER;
    const n3 = nums1[1] ?? Number.MAX_SAFE_INTEGER;
    const n2 = nums2[0] ?? Number.MAX_SAFE_INTEGER;
    const n4 = nums2[1] ?? Number.MAX_SAFE_INTEGER;
    if (mid <= 0) {
      if (o) {
        if (n1 < n2) {
          return (n1 + Math.min(n3, n2)) / 2;
        } else if (n2 < n1) {
          return (n2 + Math.min(n1, n4)) / 2;
        }
        return n1;
      }
      return Math.min(n1, n2);
    }

    if (n1 < n2) {
      nums1?.shift();
    } else {
      nums2?.shift();
    }
    mid--;
  }
  return 0;
}
// @lc code=end
