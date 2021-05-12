/**
 * https://leetcode.com/problems/rotate-image/
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = (matrix) => {
	let originalMatrix = [...matrix]

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix.length; j++) {
			let newRow = []
			for (let k = 1; k <= matrix.length; k++) {
				newRow.push(originalMatrix[matrix.length - k][i])
			}
			matrix[i] = newRow
		}
	}
	console.log(matrix)
}

rotate([
	[5, 1, 9, 11],
	[2, 4, 8, 10],
	[13, 3, 6, 7],
	[15, 14, 12, 16],
])
