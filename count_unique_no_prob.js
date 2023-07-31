// Count the unique numbers in sorted array
// eg. [1,1,1,2,2,4,4,4,5,5,6,6,7]
// OUTPUT: 6

const arr = [1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 6, 6, 7];
function getUnique(arr) {
    let i = 0;
    let j = 1;
    let count = 1;
    if(!arr.length){
        throw new Error("Array is empty");
    }
    while (j < arr.length && arr.length > 1) {
        // console.log(arr[i], arr[j]);
        if (arr[i] === arr[j]) {
            j += 1;
        } else {
            count += 1;
            i = j;
        }
    }
    return count;
}
console.log("Unique no. count:", getUnique(arr));
console.log("Unique no. count:", getUnique([1]));
console.log("Unique no. count:", getUnique([]));

// Time complexity - O(n)