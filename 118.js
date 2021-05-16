/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
	if (numRows === 1) return [[1]]
	let rows = [[1], [1, 1]]
	function findRow(previousRow) {
		const newRow = []
		//Find centervalues
		for (let i = 0; i < previousRow.length - 1; i++) {
			newRow.push(previousRow[i] + previousRow[i + 1])
		}
		newRow.unshift(1)
		newRow.push(1)
		return newRow
	}
	for (let i = 2; i < numRows; i++) {
		rows.push(findRow(rows[i - 1]))
	}
	return rows
}

console.log(generate(1))
