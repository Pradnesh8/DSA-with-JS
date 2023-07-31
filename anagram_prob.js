// Anagram- Given 2 strings find if its an anagram
// example : str1 = "hello" str2 ="llleo"
// output : Not anagram
// str1 = "hello" str2 ="llheo" output : Anagram

const str1 = "hello";
const str2 = "llheo";

function isAnagram(str1, str2) {
    if (str1.length !== str2.length){
        return false;
    }
    let counter = {}
    for (let s of str1) {
        counter[s] = (counter[s] || 0) + 1;
        // console.log(counter);
    }
    for (s of str2) {
        if (!counter[s]) {
            return false;
        }
        counter[s] -= 1;
        // console.log(counter);
    }
    return true;
}
console.log(isAnagram(str1, str2));//true
console.log(isAnagram(str1, "hllep"));//false
