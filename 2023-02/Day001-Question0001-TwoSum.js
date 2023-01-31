/**
  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.

  You can return the answer in any order.

  Example 1:

  Input: nums = [2,7,11,15], target = 9
  Output: [0,1]
  Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
  Example 2:

  Input: nums = [3,2,4], target = 6
  Output: [1,2]
  Example 3:

  Input: nums = [3,3], target = 6
  Output: [0,1]
*/

let twoSum = function (nums, target) {
  // 解法二
  let res = [];
  
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (diff in res) {
      return [res[diff], i];
    }
    res[nums[i]] = i;
  }

  /*
    // 解法一
    for (let i = 0; i < nums.length; i++) {
      for (let j = nums.length - 1; j > 0; j--) {
        if (nums[i] + nums[j] === target && i !== j) return [i, j];
      }
    }
  */
};
