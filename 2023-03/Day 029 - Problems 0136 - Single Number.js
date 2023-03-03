/*
    136. Single Number

    Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

    You must implement a solution with a linear runtime complexity and use only constant extra space.

    

    Example 1:
    Input: nums = [2,2,1]
    Output: 1

    Example 2:
    Input: nums = [4,1,2,1,2]
    Output: 4

    Example 3:
    Input: nums = [1]
    Output: 1
    

    Constraints:

    1 <= nums.length <= 3 * 104
    -3 * 104 <= nums[i] <= 3 * 104
    Each element in the array appears twice except for one element which appears only once.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    // 方法二: 使用 xor
    // 0 xor 0 = 0
    // 0 xor 1 = 1
    // 1 xor 0 = 1
    // 1 xor 1 = 0
    // 一樣的會變成 0，題目規定一樣的數字只會出現 2 次跟 1 次，所以剩下那個就是答案了
    let result;

    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i];
    }

    return result;

    /*
    let stack = {};

    for(let i = 0; i < nums.length; i++) {
        if (nums[i] in stack) {
            stack[nums[i]]++;
        } else {
            stack[nums[i]] = 1;
        }
    }

    for(let key in stack) {
        if (stack[key] == 1) return Number(key);
    }
    */
};

const nums = [2, 2, 3];
// const nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums));
