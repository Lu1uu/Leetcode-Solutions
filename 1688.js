/**
 * https://leetcode.com/problems/count-of-matches-in-tournament/
 * @param {number} n
 * @return {number}
 */
const numberOfMatches = function (n) {
	let totalMatches = 0
	while (n != 1) {
		totalMatches += Math.floor(n / 2)
		n = n % 2 == 0 ? n / 2 : Math.ceil(n / 2)
	}
	return totalMatches
}
