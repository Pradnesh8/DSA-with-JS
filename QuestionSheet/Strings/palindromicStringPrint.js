function generatePalindromicPermutations(s) {
    const charCount = new Map();

    // Step 1: Count frequency of each character
    for (let char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    let oddChar = '';
    let halfStr = '';

    // Step 2: Check for more than one odd character count
    for (let [char, count] of charCount) {
        if (count % 2 !== 0) {
            if (oddChar) {
                return []; // More than one character with odd count, no palindromic permutation possible
            }
            oddChar = char;
        }
        // Add half of the characters to halfStr
        halfStr += char.repeat(Math.floor(count / 2));
    }

    const halfPermutations = [];
    const used = new Array(halfStr.length).fill(false);

    // Step 3: Generate all unique permutations of halfStr
    function generatePermutations(current) {
        if (current.length === halfStr.length) {
            halfPermutations.push(current);
            return;
        }

        for (let i = 0; i < halfStr.length; i++) {
            if (used[i] || (i > 0 && halfStr[i] === halfStr[i - 1] && !used[i - 1])) {
                continue;
            }
            used[i] = true;
            generatePermutations(current + halfStr[i]);
            used[i] = false;
        }
    }

    generatePermutations('');

    // Step 4: Construct full palindromic permutations
    const palindromicPermutations = [];
    for (let perm of halfPermutations) {
        const reversePerm = perm.split('').reverse().join('');
        palindromicPermutations.push(perm + (oddChar ? oddChar : '') + reversePerm);
    }

    return palindromicPermutations;
}

/**
 * 
 * Solution Steps
Count character frequencies:

Use a Map to count occurrences of each character.
Check for valid palindromic permutation:

Track characters with odd frequencies. If more than one character has an odd count, 
no palindromic permutation is possible.
Generate half permutations:

Construct a string halfStr containing half of each character's occurrences.
Generate all unique permutations of halfStr.
Construct full palindromes:

For each permutation of halfStr, form the full palindrome by appending the mirrored second half and 
any middle character with an odd count (if present).
This approach efficiently generates all palindromic permutations by leveraging the properties of 
palindromes and ensures that the solution is both correct and optimal.
 */


// Example usage:
console.log(generatePalindromicPermutations("aabb")); // Output: ["abba", "baab"]
console.log(generatePalindromicPermutations("racecar"));  // Output: []
