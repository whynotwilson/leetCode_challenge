/*
	88. Merge Sorted Array

    You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

    Merge nums1 and nums2 into a single array sorted in non-decreasing order.

    The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

    Example 1:
    Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
    Output: [1,2,2,3,5,6]
    Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
    The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

    Example 2:

    Input: nums1 = [1], m = 1, nums2 = [], n = 0
    Output: [1]
    Explanation: The arrays we are merging are [1] and [].
    The result of the merge is [1].
    Example 3:

    Input: nums1 = [0], m = 0, nums2 = [1], n = 1
    Output: [1]
    Explanation: The arrays we are merging are [] and [1].
    The result of the merge is [1].
    Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    if (m === 0) {
        for (let i = 0; i < n; i++) {
            nums1[i] = nums2[i];
        }
        return;
    }

    if (n === 0) {
        return;
    }

    let isHasEmptyElement = nums1.length > m ? true : false;

    // 先區分元素 0 和空出來準備給 nums2 的元素
    if (isHasEmptyElement) {
        let i = nums1.length - 1;
        while (i >= m) {
            nums1[i] = null;
            i--;
        }
    }

    // console.log(nums1);

    // 先把 nums1 的每個元素位置排好，把 nums2 的位置空出來
    for (
        let k = m + n - 1, i = m - 1, j = n - 1;
        k >= 0 && j >= 0 && i >= 0;
        k--
    ) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            nums1[i] = isHasEmptyElement ? null : 0;
            i--;
        } else {
            j--;
        }
    }

    // console.log(nums1);

    // nums1 的位置弄好了之後再把 nums2 按順序塞進去
    for (let i = 0; i < m + n; i++) {
        if (isHasEmptyElement) {
            if (nums1[i] === null) {
                nums1[i] = nums2.shift();
            }
        } else {
            if (nums1[i] == 0) {
                nums1[i] = nums2.shift();
            }
        }
    }

    console.log(nums1);
};

// const nums1 = [1, 2, 3, 0, 0, 0], // expect: [1,2,2,3,5,6]
//     m = 3,
//     nums2 = [2, 5, 6],
//     n = 3;

// const nums1 = [0], // expect: [1]
//     m = 0,
//     nums2 = [1],
//     n = 1;

// const nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0], // expect: [-1,0,0,1,2,2,3,3,3]
//     m = 6,
//     nums2 = [1, 2, 2],
//     n = 3;

// const nums1 = [0, 0, 3, 0, 0, 0, 0, 0, 0], // expect: [-1,0,0,1,1,1,2,3,3]
//     m = 3,
//     nums2 = [-1, 1, 1, 1, 2, 3],
//     n = 6;

const nums1 = [-1, -1, 0, 0, 0, 0], // expect: [-1,-1,-1,0,0,0]
    m = 4,
    nums2 = [-1, 0],
    n = 2;

merge(nums1, m, nums2, n);
