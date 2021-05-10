/**
 * https://leetcode.com/problems/counting-bits/
 * @param {number} num
 * @return {number[]}
 */
const countBits = function (num) {
	const output = []
	while (num >= 0) {
		//Convert num to binary
		const binaryString = num.toString(2)
		const binaryArray = binaryString.split("")
		let numOfOnes = binaryArray.reduce((total, digit) => {
			if (digit == "1") return ++total
			return total
		}, 0)
		output.unshift(numOfOnes)
		num--
	}
	return output
}

console.log(countBits(8))
