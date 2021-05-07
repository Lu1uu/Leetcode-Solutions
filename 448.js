//https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/submissions/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findDisappearedNumbers(nums) {
	const missingNums = []
	const uniqueValues = new Set(nums)
	for (let i = 1; i <= nums.length; i++) {
		if (!uniqueValues.has(i)) missingNums.push(i)
	}
	return missingNums
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))
