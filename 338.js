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
		let numOfOnes = 0
		binaryArray.forEach((digit) => {
			if (digit == "1") numOfOnes++
		})
		output.unshift(numOfOnes)
		num--
	}
	return output
}

console.log(countBits(8))
