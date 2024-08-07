/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

/***
 * Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

Each of the digits 1-9 must occur exactly once in each row.
Each of the digits 1-9 must occur exactly once in each column.
Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
The '.' character indicates empty cells.
 */
var solveSudoku = function (board) {
    solve(board);
    // console.log(board)
};
function solve(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === '.') {
                for (let c = 1; c < 10; c++) {
                    // board, row, col, character
                    if (checkValid(board, i, j, c)) {
                        // console.log("found",checkValid(board, i, j, c))
                        board[i][j] = c.toString()
                        // call recursively to find next empty space and valid character
                        if (solve(board)) {
                            // console.log(i, board)
                            return true
                        }
                        // if filled character was not in correct position, replace back to empty space
                        else {
                            board[i][j] = '.';
                        }
                    }
                }
                // if no valid character found to replace the empty space
                return false;
            }
        }
    }
    return true
}
// function to validate the character is unique in row, col, and 3*3 sub matrix
function checkValid(board, row, col, charToFill) {

    for (let i = 0; i < 9; i++) {
        // console.log("col",board[row][i])
        // console.log("row",board[i][col])
        if (board[row][i] === charToFill.toString()) {
            return false
        }
        if (board[i][col] === charToFill.toString()) {
            return false
        }
        if (board[3 * (Math.floor(row / 3)) + Math.floor(i / 3)][3 * (Math.floor(col / 3)) + Math.floor(i % 3)] === charToFill.toString()) {
            return false
        }
    }
    return true;
}

const board = [["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
solveSudoku(board)
console.log(board)