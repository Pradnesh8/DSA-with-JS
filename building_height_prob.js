let maxCountRight = 0;
let maxheightLeft = 0;
let maxheightRight = 0;
let maxCountLeft = 0
height = [4, 8, 2, 0, 0, 5];
for (i = height.length - 1; i >= 0; i--) {
    if (height[i] > maxheightRight) {
        maxheightRight = height[i];
        maxCountRight += 1;
    }
}
for (i = 0; i < height.length; i++) {
    if (height[i] > maxheightLeft) {
        maxheightLeft = height[i];
        maxCountLeft += 1;
    }
}
console.log("Result Building visible from right", maxCountRight);
console.log("Result Building visible from left", maxCountLeft);

// O(n)