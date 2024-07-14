// APPROACH:
// To find all permutations of the input
// in permutation, success case is the size of DS is equal to length of input
// We create a DS to store the which elements is filled
// freq is map to check if the position in DS is filled or not
// Iterate through input array,
// check if the map has the index 
// if not,
// we add it in map, also push element present at that index in DS
// and call permutation recursively
// we remove the element from DS as well as map as it is now move back to previous position
// after looping through the inputs we get the all permutations
//      [1, 2, 3]
//     /     |     \
// [1, 2, 3][2, 1, 3][3, 2, 1]
//     /    \     /    \     /    \
// [1, 2, 3][1, 3, 2][2, 1, 3][2, 3, 1][3, 2, 1][3, 1, 2]
function permutation(index, inputs, ans) {
    console.log("INPUT value: ", inputs)

    if (index === inputs.length) {
        ans.push([...inputs]);
        return;
    }
    for (let i = index; i < inputs.length; i++) {
        // swap the elements
        swap(i, index, inputs)
        // inputs[i], inputs[index] = inputs[index], inputs[i]
        console.log("SWAPPED", inputs)
        permutation(index + 1, inputs, ans);
        swap(i, index, inputs)
        // swap elements again (backtracking)
        // inputs[i], inputs[index] = inputs[index], inputs[i]

    }
}
function swap(i, j, nums) {
    let t = nums[i]
    nums[i] = nums[j]
    nums[j] = t
}
const inputs = [1, 2, 3]
const inputs2 = ["ab", "ba", "ac"]
const ans = []
permutation(0, inputs, ans);
console.log(ans);

/**
 * 
 * step1: [] {}
 * step2: [1] {1:t} option:[1, , ]
 * step3: [1,2] {1:t, 2:t} option: [1,2, ]
 * step4: [1,2,3] {1:t, 2:t, 3:t} option: [1,2,3]
 * 
 * step1: [] {}
 * step2: [2] {2:t} option:[ ,2, ]
 * step3: [2,1] {1:t, 2:t} option: [1,2, ]
 * step4: [2,1,3] {1:t, 2:t, 3:t} option: [1,2,3]
 * 
 * step1: [] {}
 * step2: [3] {3:t} option:[ , ,3]
 * step3: [3,2] {2:t,3:t} option: [ ,2,3]
 * step4: [3,2,1] {1:t, 2:t, 3:t} option: [1,2,3]
 */