
// input arr - increasing order elements
// note - we should remove it in place
// approach
// iterate over array
// check if next element is different if not 
// go to next
// if yes place it next to the index
function removeDuplicates(arr) {
    let i = 0;
    for (elem of arr) {
        // console.log(elem)
        if (elem != arr[i]) {
            arr[++i] = elem;
        }
    }
    return arr.length && i + 1;
}
// eg.
// ip:[1,1,2]
// as 1 is present in 0 and 1, the index 1 got replaced with 2 
// op:[1,2,2]
let arr = [1, 1, 2]
console.log(removeDuplicates(arr))
console.log(arr)