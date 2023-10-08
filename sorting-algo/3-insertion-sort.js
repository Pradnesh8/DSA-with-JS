// Insertion sort - An algorithm to sort an array inplace.
// Iterate through whole array n times, where n is no. of elements in array.
// take first element as index 1 element, compare it with i-1 elements
// if its greater, change the value to current
// follow this until it reaches to last element

const insertionSort = (arr) => {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        const current = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current
    }
    return arr
}

console.time("insertion")
console.log(insertionSort([10, 5, 4, 6, 2, 7, 1]))
console.timeEnd("insertion")