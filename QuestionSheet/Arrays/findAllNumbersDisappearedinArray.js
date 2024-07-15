/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    const n = nums.length;
    const arr = new Array(n + 1).fill(-1);
    for (let i = 0; i < nums.length; i++) {
        arr[nums[i]] = nums[i]
    }
    // console.log(arr)
    const ans = []
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === -1) ans.push(i)
    }
    // console.log(ans)
    return ans
};

const input = [4, 3, 2, 7, 8, 2, 3, 1]
console.log(findDisappearedNumbers(input))