/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // brute force
    // for (let i = 0; i < prices.length-1; i++) {
    //     for (let j = i + 1; j < prices.length; j++) {
    //         const p = prices[j] - prices[i]
    //         if (p > maxP) {
    //             maxP = p
    //         }
    //     }
    // }
    // return maxP
    // optimal two pointer approach
    // let sellDay = prices.length - 1;
    // let buyDay = sellDay - 1;
    // let maxP = 0;
    // while (buyDay >= 0) {
    //     let p = prices[sellDay] - prices[buyDay];
    //     if (p > maxP) {
    //         maxP = p
    //     }
    //     if (prices[sellDay] > prices[buyDay]) {
    //         buyDay = buyDay - 1
    //     }
    //     else {
    //         sellDay = sellDay - 1
    //         buyDay = sellDay - 1
    //     }
    // }
    // return maxP
    // optimal minProfit approach
    let minPrice = Infinity
    let maxProfit = 0
    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price
        }
        let profit = price - minPrice
        if (profit > maxProfit) {
            maxProfit = profit
        }
    }
    return maxProfit
};

prices = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(prices))
prices = [7, 6, 4, 3, 1]
console.log(maxProfit(prices))
