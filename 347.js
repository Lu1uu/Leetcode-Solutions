/**
 * https://leetcode.com/problems/top-k-frequent-elements/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
	let numberAppearances = {}
	let numberAppearancesArray = []
	let answer = []
	nums.forEach((num) =>
		numberAppearances[num] != null
			? numberAppearances[num]++
			: (numberAppearances[num] = 1)
	)
	//Convert object into array
	for (key of Object.keys(numberAppearances)) {
		numberAppearancesArray.push([+key, numberAppearances[key]])
	}
	numberAppearancesArray.sort((a, b) => a[1] < b[1])
	for (let i = 0; i < k; i++) {
		answer.push(numberAppearancesArray[i][0])
	}
	return answer
}

console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2))
