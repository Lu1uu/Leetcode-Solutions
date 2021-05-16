/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = (temperatures) => {
	const waitTimes = temperatures.map((currentTemperature, index) => {
		let daysPassed = 0
		for (let i = index; i < temperatures.length; i++) {
			if (currentTemperature < temperatures[i]) {
				return daysPassed
			}
			daysPassed++
		}
		return 0
	})
	return waitTimes
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
