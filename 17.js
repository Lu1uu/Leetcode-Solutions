/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
    let phoneNumbers = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    }
    let combinations = []
    switch (digits.length) {
        case 1:
            for (let letter of phoneNumbers[digits[0]]) {
                combinations.push(letter)
            }
            break
        case 2:
            for (let i = 0; i < phoneNumbers[digits[0]].length; i++) {
                for (let j = 0; j < phoneNumbers[digits[1]].length; j++) {
                    combinations.push(
                        phoneNumbers[digits[0]][i] + phoneNumbers[digits[1]][j]
                    )
                }
            }
            break
        case 3:
            for (let i = 0; i < phoneNumbers[digits[0]].length; i++) {
                for (let j = 0; j < phoneNumbers[digits[1]].length; j++) {
                    for (let k = 0; k < phoneNumbers[digits[2]].length; k++) {
                        combinations.push(
                            phoneNumbers[digits[0]][i] +
                                phoneNumbers[digits[1]][j] +
                                phoneNumbers[digits[2]][k]
                        )
                    }
                }
            }
            break
        case 4:
            for (let i = 0; i < phoneNumbers[digits[0]].length; i++) {
                for (let j = 0; j < phoneNumbers[digits[1]].length; j++) {
                    for (let k = 0; k < phoneNumbers[digits[2]].length; k++) {
                        for (
                            let l = 0;
                            l < phoneNumbers[digits[3]].length;
                            l++
                        ) {
                            combinations.push(
                                phoneNumbers[digits[0]][i] +
                                    phoneNumbers[digits[1]][j] +
                                    phoneNumbers[digits[2]][k] +
                                    phoneNumbers[digits[3]][l]
                            )
                        }
                    }
                }
            }
    }

    return combinations
}
console.log(letterCombinations('2332'))
