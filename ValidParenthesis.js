// ([)] invalid
// ([]) valid

function ValidateParenthesis(string) {
	const brackets = {
		"]": "[",
		")": "(",
		"}": "{",
	}

	const stack = []

	for (char of string.split("")) {
		if (char == "[" || char == "(" || char == "{") stack.unshift(char)
		if (char == "]" || char == ")" || char == "}") {
			if (brackets[char] !== stack[0]) return false
			else stack.shift()
		}
	}
	if (stack.length > 0) return false
	return true
}

console.log(ValidateParenthesis("["))
