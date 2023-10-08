// Binary search - Input array must be sorted in ascending order

const binarySearch = (arr, search) => {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let middle = Math.floor((start + end) / 2)
        if (arr[middle] === search) {
            return middle;
        }
        else if (arr[middle] < search) {
            start = middle + 1
        }
        else {
            end = middle - 1
        }
    }
    return -1;
}

const arr = [1, 5, 6, 13, 14, 61]
const searchItem = 13
console.log(binarySearch(arr, searchItem))