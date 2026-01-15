// https://www.greatfrontend.com/questions/algo/optimal-stock-trading?practice=practice&tab=coding

/**
 * @param {number[]} prices
 * @return {number}
 */
function optimalStockTrading(prices) {
  let min = prices[0];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    console.log(prices[i], "prices[i");
    if (prices[i] < min) {
      min = prices[i];
    } else if (prices[i] - min > maxProfit) {
      maxProfit = prices[i] - min;
    }
  }

  return maxProfit;
}

console.log(optimalStockTrading([8, 7, 9, 6, 4]));
