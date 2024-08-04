/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    // Backtrack approach
    // create 3 sets to keep track of positions where queens are placed currently
    let col = new Set(); // columns as we cant place in same column
    let posDiag = new Set(); // r+c as we cant place in same +ve diagonal
    let negDiag = new Set(); // r-c as we cant place in same -ve diagonal
    const res = []
    let board = []
    // create board to put . and Q
    for (let i = 0; i < n; i++) {
        let temp = []
        for (let j = 0; j < n; j++) {
            temp.push(".")
        }
        board.push(temp)
    }
    // console.log(board);

    function backtrack(r) {
        // console.log("r",r)
        if (r === n) {
            // base case, means we found solution case
            let copyBoard = []
            for (let i = 0; i < n; i++) {
                // join the array as we were storing it as array inside array
                copyBoard.push(board[i].join(""))
            }
            // console.log("cb",copyBoard)
            res.push([...copyBoard])
            return
        }
        // console.log("n",n)

        for (let c = 0; c < n; c++) {
            // console.log("c",c)
            // check if its present in same column/ positive diagonal / negative diagonal
            if (col.has(c) || posDiag.has(r + c) || negDiag.has(r - c)) {
                continue
            }
            col.add(c)
            posDiag.add(r + c)
            negDiag.add(r - c)
            board[r][c] = "Q";
            backtrack(r + 1)
            col.delete(c)
            posDiag.delete(r + c)
            negDiag.delete(r - c)
            board[r][c] = ".";
        }
    }
    backtrack(0);
    return res;
};

const input = 4
console.log(solveNQueens(input))