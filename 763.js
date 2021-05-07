// https://leetcode.com/problems/partition-labels/

/**
 * @param {string} S
 * @return {number[]}
 */

function partitionLabels(S) {
	const answer = []
	const mapping = {}
	new Set(S).forEach((char) => {
		const firstIndex = S.indexOf(char)
		const lastIndex = S.lastIndexOf(char)
		mapping[char] = [firstIndex, lastIndex]
	})

	while (true) {
		let [firstIndex, lastIndex] = mapping[cloneString[0]]
		let subString = S.slice(firstIndex, lastIndex)
		for (let i = 1; i < subString.length; i++) {
			if (mapping[subString[i]][1] > lastIndex) {
				lastIndex = mapping[subString[i]][1]
			}
			subString = S.slice(firstIndex, lastIndex)
		}
		answer.push(lastIndex - firstIndex + 1)

		cloneString = S.slice(lastIndex + 1, S.length)
		if (cloneString.length === 0) break
	}
	return answer
}

console.log(partitionLabels("qiejxqfnqceocmy"))
