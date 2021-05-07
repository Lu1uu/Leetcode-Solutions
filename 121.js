/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 */

function maxProfit(prices) {
	let maxProfit = 0
	let min = prices[0]
	for (let i = 1; i < prices.length; i++) {
		if (prices[i] < min) min = prices[i]
		const currentProfit = prices[i] - min
		if (currentProfit > maxProfit) maxProfit = currentProfit
	}
	return maxProfit
}
