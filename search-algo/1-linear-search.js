const linearSearch = (arr, search) => {
    for (let i = 0; i < arr.length; i++) {
        if (search === arr[i]) {
            return i
        }
    }
    return -1;
}


const arr = [1, 5, 6, 13, 14, 61, 34, 643, 1, 235, 51, 6, 3]
const searchItem = 61
console.log(linearSearch(arr, searchItem))