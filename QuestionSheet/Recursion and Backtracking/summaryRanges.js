/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    let i = 0;
    const result = []
    while (i < nums.length) {
        let rangeStart = nums[i];
        while (i < nums.length - 1 && nums[i + 1] === nums[i] + 1) {
            i++
        }
        let rangeEnd = nums[i];

        if (rangeStart === rangeEnd) {
            result.push(`${rangeStart}`)
        } else {
            result.push(`${rangeStart}->${rangeEnd}`)
        }
        i++;
    };
    return result
}
// Recursion approach
// var summaryRanges2 = function (nums) {
//     const result = [];

//     const helper = (i, rangeStart) => {
//         if (i >= nums.length) {
//             // If we've processed all elements, add the final range if not added
//             if (rangeStart !== undefined) {
//                 if (i > 0 && nums[i - 1] === rangeStart) {
//                     result.push(`${rangeStart}`);
//                 } else if (i > 0) {
//                     result.push(`${rangeStart}->${nums[i - 1]}`);
//                 }
//             }
//             return;
//         }

//         // If the next number is consecutive, continue the range
//         if (i > 0 && nums[i] === nums[i - 1] + 1) {
//             helper(i + 1, rangeStart);
//         } else {
//             // If the range start is defined, add the range to the result
//             if (rangeStart !== undefined) {
//                 if (nums[i - 1] === rangeStart) {
//                     result.push(`${rangeStart}`);
//                 } else {
//                     result.push(`${rangeStart}->${nums[i - 1]}`);
//                 }
//             }
//             // Start a new range
//             helper(i + 1, nums[i]);
//         }
//     };

//     // Start the recursion if the array is not empty
//     if (nums.length > 0) {
//         helper(0, undefined);
//     }

//     return result;
// };

nums = [0, 1, 2, 4, 5, 7]

console.log(summaryRanges2(nums))