// Bubble sort - An algorithm to sort an array inplace.
// Iterate through whole array n times, where n is no. of elements in array.
// compare element which are next to each other, if they are not in order, swap them.
// follow this until it reaches to last element


const bubbleSort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
console.time("bubble")
console.log(bubbleSort([10, 5, 4, 5, 6, 2, 7, 8, 10, 1]))
console.timeEnd("bubble")
