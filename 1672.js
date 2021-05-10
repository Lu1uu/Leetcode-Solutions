/**
 * https://leetcode.com/problems/richest-customer-wealth/
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = function (accounts) {
	maxWealth = 0
	for (let i = 0; i < accounts.length; i++) {
		let wealth = accounts[i].reduce((total, current) => {
			return total + current
		}, 0)
		if (wealth > maxWealth) maxWealth = wealth
	}
	return maxWealth
}
