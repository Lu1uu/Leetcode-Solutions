/**
 * https://leetcode.com/problems/palindromic-substrings/
 * @param {string} s
 * @return {number}
 */
const countSubstrings = (s) => {
	const arrSubStrings = []

	for (let i = 0; i < s.length; i++) {
		for (let j = 0; j < s.length - i; j++) {
			const newString = s.substring(j, j + (i + 1))
			arrSubStrings.push(newString)
		}
	}
	const numOfPallindromes = arrSubStrings.reduce((total, subString) => {
		if (checkPalindrome(subString)) return total + 1
		return total
	}, 0)
	return numOfPallindromes
}

/**
 *
 * @param {string} s
 * @return {boolean}
 */
function checkPalindrome(s) {
	const reversedString = s.split("").reverse().join("")
	if (s === reversedString) return true
	return false
}

// console.log(checkPalindrome("raceca"))
console.log(countSubstrings("aaa"))
