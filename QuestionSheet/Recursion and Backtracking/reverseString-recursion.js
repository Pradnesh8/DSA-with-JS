
function swap(i, j, num) {
    let temp = num[i]
    num[i] = num[j]
    num[j] = temp
}

function reverseString(s) {
    const input = s.split("")
    console.log(input)
    for (let i = 0; i < Math.floor(input.length / 2); i++) {

        swap(i, input.length - i - 1, input);
    }
    return input.join("")
    // console.log(input);
}

console.log(reverseString("abcasdsa"))