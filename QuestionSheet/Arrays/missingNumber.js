/**
 * @param {number[]} nums
 * @return {number}
 */
// best
var missingNumber = function (nums) {
    let n = nums.length;
    let v = new Array(n + 1).fill(-1);
    for (let i = 0; i < nums.length; i++) {
        v[nums[i]] = nums[i];
    }
    for (let i = 0; i < v.length; i++) {
        if (v[i] == -1) return i;
    }
    return 0;
};

// var missingNumber = function (nums) {
//     // const store = {}
//     // for (n of nums){
//     //     store[n]=1;
//     // }
//     // for (let i=0; i<nums.length;i++){
//     //     if (!store[i]) return i
//     // }
//     // return nums.length
//     nums.sort((a, b) => a - b);
//     for (let i = 0; i < nums.length; i++) {
//         if (i !== nums[i]) return i
//     }
//     return nums.length
// };

nums = [3, 0, 1]
console.log(missingNumber(nums))