/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let uniqueValues = [...new Set(nums)]
    let dict = {}
    let highest = 0
    let majority = 0
    uniqueValues.forEach((num) => (dict[num] = 0))
    nums.forEach((num) => dict[num]++)

    let keys = Object.keys(dict)
    keys.forEach((key) => {
        if (dict[key] > highest) {
            highest = dict[key]
            majority = key
        }
    })
    return majority
}

console.log(majorityElement([3, 2, 3]))
