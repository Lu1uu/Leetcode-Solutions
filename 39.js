const board = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '4', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '7', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]

/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
    //Check Rows
    for (row of board) {
        if (!isValid(row)) {
            return false
        }
    }
    //Check Columns
    let cols = []
    let j = 0
    for (let i = 0; i < board.length; i++) {
        cols.push(board.map((num) => num[i]))
    }
    for (col of cols) {
        if (!isValid(col)) {
            return false
        }
    }

    //Check Boxes
    let boxes = {
        box1: [],
        box2: [],
        box3: [],
        box4: [],
        box5: [],
        box6: [],
        box7: [],
        box8: [],
        box9: [],
    }
    for (let y = 0; y < 9; y++) {
        for (let x = 0; x < 9; x++) {
            //Box 1
            if (y < 3 && y >= 0 && x < 3 && x >= 0) {
                boxes['box1'].push(board[y][x])
            }
            //Box 2
            else if (y < 3 && y >= 0 && x < 6 && x >= 3) {
                boxes['box2'].push(board[y][x])
            }
            //Box 3
            else if (y < 3 && y >= 0 && x < 9 && x >= 6) {
                boxes['box3'].push(board[y][x])
            }
            //Box 4
            if (y < 6 && y >= 3 && x < 3 && x >= 0) {
                boxes['box4'].push(board[y][x])
            }
            //Box 5
            else if (y < 6 && y >= 3 && x < 6 && x >= 3) {
                boxes['box5'].push(board[y][x])
            }
            //Box 6
            else if (y < 6 && y >= 3 && x < 9 && x >= 6) {
                boxes['box6'].push(board[y][x])
            }
            //Box 7
            if (y < 9 && y >= 6 && x < 3 && x >= 0) {
                boxes['box7'].push(board[y][x])
            }
            //Box 8
            else if (y < 9 && y >= 6 && x < 6 && x >= 3) {
                boxes['box8'].push(board[y][x])
            }
            //Box 9
            else if (y < 9 && y >= 6 && x < 9 && x >= 6) {
                boxes['box9'].push(board[y][x])
            }
        }
    }
    for (let box in boxes) {
        if (!isValid(boxes[box])) {
            return false
        }
    }
    return true
}

function isValid(arr) {
    let values = new Set()
    for (let value of arr) {
        if (value == '.') continue

        if (values.has(value)) {
            return false
        }
        values.add(value)
    }
    return true
}
/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
    //Check Rows
    for (row of board) {
        if (!isValid(row)) {
            return false
        }
    }
    //Check Columns
    let cols = []
    let j = 0
    for (let i = 0; i < board.length; i++) {
        cols.push(board.map((num) => num[i]))
    }
    for (col of cols) {
        if (!isValid(col)) {
            return false
        }
    }

    //Check Boxes
    let boxes = {
        box1: [],
        box2: [],
        box3: [],
        box4: [],
        box5: [],
        box6: [],
        box7: [],
        box8: [],
        box9: [],
    }
    for (let y = 0; y < 9; y++) {
        for (let x = 0; x < 9; x++) {
            //Box 1
            if (y < 3 && y >= 0 && x < 3 && x >= 0) {
                boxes['box1'].push(board[y][x])
            }
            //Box 2
            else if (y < 3 && y >= 0 && x < 6 && x >= 3) {
                boxes['box2'].push(board[y][x])
            }
            //Box 3
            else if (y < 3 && y >= 0 && x < 9 && x >= 6) {
                boxes['box3'].push(board[y][x])
            }
            //Box 4
            else if (y < 6 && y >= 3 && x < 3 && x >= 0) {
                boxes['box4'].push(board[y][x])
            }
            //Box 5
            else if (y < 6 && y >= 3 && x < 6 && x >= 3) {
                boxes['box5'].push(board[y][x])
            }
            //Box 6
            else if (y < 6 && y >= 3 && x < 9 && x >= 6) {
                boxes['box6'].push(board[y][x])
            }
            //Box 7
            else if (y < 9 && y >= 6 && x < 3 && x >= 0) {
                boxes['box7'].push(board[y][x])
            }
            //Box 8
            else if (y < 9 && y >= 6 && x < 6 && x >= 3) {
                boxes['box8'].push(board[y][x])
            }
            //Box 9
            else if (y < 9 && y >= 6 && x < 9 && x >= 6) {
                boxes['box9'].push(board[y][x])
            }
        }
    }
    for (let box in boxes) {
        if (!isValid(boxes[box])) {
            return false
        }
    }
    return true
}

function isValid(arr) {
    let values = new Set()
    for (let value of arr) {
        if (value == '.') continue

        if (values.has(value)) {
            return false
        }
        values.add(value)
    }
    return true
}

console.log(isValidSudoku(board))
