

// Merge sort - An algorithm to sort an array.
// Divides an array in middle, and creates subarrays
// Sorts each subarray and then merge the sorted subarrays
// back together to form final sorted array


const arrInput = [38, 24, 9, 12, 52, 6]

function merge(left, right) {
    let sortedArr = []
    // console.log(left, right)
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        }
    }
    // left and right are already sorted
    return [...sortedArr, ...left, ...right]
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid));
    const ans = merge(left, right)
    // console.log("left", left)
    // console.log("right", right)
    // console.log("merge", ans)
    return ans
}

console.log(mergeSort(arrInput))