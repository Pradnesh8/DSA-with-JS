// QuickSort : It is a sorting algorithm which works on Divide and Conquer strategy
// we decide the pivot (it can be first index element), place lower elements than pivot
// to left of pivot and high elements on right of pivot.
// Recursively sort both left and right side of pivot

// This function divides the arr into two parts using pivot
function partition(arr, low, high) {
    let pivot = arr[low];
    let i = low
    let j = high
    while (i < j) {
        while (arr[i] <= pivot && i <= high - 1) {
            i++;
        }
        while (arr[j] > pivot && j >= low + 1) {
            j--;
        }
        // swap elements if they are not in correct position
        // with rule i elements should be less than equal to pivot
        // with rule j elements should be larger than pivot
        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    // swap J with pivot element
    // return J as its a new position of pivot
    [arr[j], arr[low]] = [arr[low], arr[j]]
    return j;
}

function qs(arr, low, high) {
    if (low < high) {
        // find pivot position
        let partitionVal = partition(arr, low, high)
        console.log("partition val", partitionVal)
        // call quick sort for left side of pivot
        qs(arr, low, partitionVal - 1)
        // call quick sort for right side of pivot
        qs(arr, partitionVal + 1, high)
    }
    // return arr
}

function quickSort(arr) {
    qs(arr, 0, arr.length - 1)
    return arr
}

const arr = [3, 1, 123, 123, 1, 134, 342, 13, 4, 62, 3, 5, 216, 4]
console.log(quickSort(arr))