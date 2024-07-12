/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let output = new Array(nums.length).fill(1)
    let leftProduct = 1;
    // get all left Product and store in output array
    for (let i = 0; i < nums.length; i++) {
        output[i] = leftProduct;
        leftProduct *= nums[i];
    }

    let rightProduct = 1;
    // multiply left product while getting right product
    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    return output
};

nums = [1, 2, 3, 4]
console.log(productExceptSelf(nums))
nums = [-1, 1, 0, -3, 3]
console.log(productExceptSelf(nums))
