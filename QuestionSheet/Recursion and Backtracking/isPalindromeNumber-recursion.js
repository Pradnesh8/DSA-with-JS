/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindromeHelper = function (num, rev) {
    if (num === 0) return rev;
    rev = (rev * 10) + num % 10;
    num = Math.floor(num / 10);
    return isPalindromeHelper(num, rev)
};

const isPalindrome = (x) => {
    if (x < 0) return false
    let num = x;
    const reverse = isPalindromeHelper(num, 0);
    // console.log(reverse)
    return reverse === x;
}
console.log("is input palindrome number:")
console.log(isPalindrome(121121))