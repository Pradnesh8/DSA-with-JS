// Given a string s, find the length of the longest substring without repeating characters

// Approach - Sliding window problem
// keep a window and slide it when character repeats

// initialize start=0, charSet = new Set, maxLength = 0
// for every character in string s
// check if its present in charSet
// yes, delete it and increment start++
// No, add it to charSet & calculate maxLength = find max b/w current maxlength or end - start + 1
// after all iterations
// return current maxLength
function lengthOfLongestSubstring(s) {
    let n = s.length;
    let maxLength = 0;
    let start = 0;
    let charSet = new Set();

    for (let end = 0; end < n; end++) {
        // If the character is already in the set, remove characters from the set until the duplicate is removed
        while (charSet.has(s[end])) {
            charSet.delete(s[start]);
            start++;
        }

        // Add the current character to the set
        charSet.add(s[end]);

        // Calculate the length of the current window and update maxLength if it's larger
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3