
// Given an array of strings strs, group the anagrams together.You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
// typically using all the original letters exactly once.

// Approach
/**
 * 
 * 1. create a map
 * 2. for each string - split, sort, join cba => abc, bca => abc
 * 3. check if it is present in map, if not add it in map with initial value as []
 * 4. add string currently being processed into it, it automatically groups the anagram
 * 5. at last map will have iterable array values, we will use Array.from to extact all array from map
 */
var groupAnagrams = function (strs) {
    const map = new Map();

    for (let str of strs) {
        const sortedStr = str.split("").sort().join("")
        if (!map.has(sortedStr)) {
            map.set(sortedStr, [])
        }
        map.get(sortedStr).push(str)
    }
    return Array.from(map.values())
    // console.log(map)
};

const input = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(input))