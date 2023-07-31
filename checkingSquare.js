// Check if square of numbers in first array is present in other array
// array1= [1,3,2,4] array2 = [1,16,9,4]
// op: true - as square of all numbers in array1 is present in array2

// Naive solution : O(n^2)


const checkSquare = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        let isSquare = false;
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] * arr1[i] === arr2[j]) {
                isSquare = true
            }
            if (!isSquare && j === arr2.length - 1) {
                return false;
            }
        }
    }
    return true;
}
const arr1 = [1, 3, 2, 4]
const arr2 = [1, 16, 9, 4]
console.time("Naive approach");
console.log(checkSquare(arr1, arr2));
console.timeEnd("Naive approach");

// using JS in built functions Map,Filter

const checkSquareJS = (arr1, arr2) => arr1.map(elem => elem * elem).filter(elem => arr2.includes(elem)).length === arr2.length;

console.time("JS in built functions");
console.log(checkSquareJS(arr1, arr2));
console.timeEnd("JS in built functions");

// Efficient solution - O(n)


const checkSquareEfficient = (arr1, arr2) => {
    const map1 = {}
    const map2 = {}
    for (const key of arr1) {
        console.log(key);
        map1[key] = (map1[key] || 0) + 1;
    }
    for (const key of arr2) {
        console.log(key);
        map2[key] = (map2[key] || 0) + 1;
    }

    console.log("map for arr1 : ", map1);
    console.log("map for arr2 : ", map2);

    for (let key in map1) {
        console.log(map2[key * key]);
        if (!map2[key * key]) {
            return false;
        }
        if (map1[key] !== map2[key * key]) {
            return false;
        }
    }
    return true;
}
const array1 = [1, 3, 3, 2, 4]
const array2 = [1, 16, 9, 4, 9]
console.time("Efficient approach");
console.log(checkSquareEfficient(array1, array2));
console.timeEnd("Efficient approach");