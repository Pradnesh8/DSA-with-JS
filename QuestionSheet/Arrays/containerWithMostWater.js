// You are given an integer array height of length n.There are n vertical lines drawn 
// such that the two endpoints of the ith line are(i, 0) and(i, height[i]).
// Find two lines that together with the x - axis form a container, 
// such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.


// declare min as 0, max as last height
// as bigger the distance bw height more the volume
// also find the min height as the min height will be considered as height and
// breadth will be Max index - min index (distance between the lines)
// store maxAmount in variable
function maxWater(heights) {
    // if only 2 lines, distance will be 1 so find min height of line
    if (heights.length === 2) {
        return Math.min(heights[0], heights[1]) * 1
    }
    let maxAmount = 0;
    let min = 0
    let max = heights.length - 1;
    while (min < max) {
        amount = Math.min(heights[min], heights[max]) * (max - min) // formula height*breadth
        if (amount > maxAmount) {
            maxAmount = amount
        }
        if (heights[min] < heights[max]) {
            min = min + 1
        }
        else {
            max = max - 1
        }
    }
    return maxAmount
}

heights = [1, 8, 6, 2, 5, 4, 8, 3, 7]

const res = maxWater(heights)
console.log("Input: ", heights);
console.log("Max amount: ", res);
