// Sum zero problem- sum=0
// given the sorted array find the first pair which give sum as 0
// example : [-8,-5,-4,-2,0,3,4,6]
// output : [-4,4]

// naive approach
const arr = [-8, -5, -4, -2, 0, 3, 4, 6];
const findSumZero = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        const compare = arr[i];
        for (let j = i + 1; j < arr.length - 1; j++) {
            const compareWith = arr[j];
            if (compare + compareWith === 0)
                return [arr[i], arr[j]]
        }
    }
    return "No sum zero pair";
}

const result = findSumZero(arr)
console.log(result);
// time complexity - O(n^2)

// Efficient approach

const findSumZeroEfficient = (arr) => {
    let start = 0;
    let end = arr.length - 1
    while (start < end) {
        if (arr[start] + arr[end] < 0) {
            start = start + 1
        } else if (arr[start] + arr[end] > 0) {
            end = end - 1;
        }
        else {
            return [arr[start],arr[end]];
        }
    }
    return "No sum zero pair"
}
const effiresult = findSumZeroEfficient(arr)
console.log(effiresult);

// O(n)