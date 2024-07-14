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
function permutation(inputs, ds, ans, freq) {
    console.log("DS value: ", ds)

    if (ds.length === inputs.length) {
        ans.push([...ds]);
        return;
    }
    for (let i = 0; i < inputs.length; i++) {
        if (!freq[i]) {
            console.log("calling for: ", inputs[i])
            freq[i] = true;
            ds.push(inputs[i])
            permutation(inputs, ds, ans, freq);
            const removed = ds.pop();
            console.log("removed elem: ", removed)
            freq[i] = false;
        }
    }
}
const inputs = [1, 2, 3]
const inputs2 = ["ab", "ba", "ac"]
const ds = []
const ans = []
const freq = {}
permutation(inputs, ds, ans, freq);
console.log(ans);
