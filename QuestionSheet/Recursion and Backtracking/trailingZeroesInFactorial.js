/**
 * @param {number} n
 * @return {number}
 */
// Approach
/**
 * To get the trailing zero factorial answer must be prime factor of 5 or 2
 * The number of 5 present in the prime factor can indicate the no of trailing spaces
 * Trailing 0s in n! = Count of 5s in prime factors of n! = floor(n/5) + floor(n/25) + floor(n/125) +
 */
var trailingZeroes = function (n) {
    if (n < 0) return -1;

    let count = 0;
    for (let i = 5; Math.floor(n / i) >= 1; i *= 5) {
        count = count + Math.floor(n / i)
    }
    return count

};
console.log(trailingZeroes(5))