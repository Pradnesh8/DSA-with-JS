// Selection sort - An algorithm to sort an array inplace.
// Iterate through whole array n times, where n is no. of elements in array.
// compare elements and find smallest element's index
// swap it 
// follow this until it reaches to last element

const selectionSort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i; j < n; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j
            }
        }
        if (minIndex !== i) {
            // swap
            [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
        }
    }
    return arr;
}

console.time("selection")
console.log(selectionSort([10, 5, 4, 6, 2, 7, 1]))
console.timeEnd("selection")