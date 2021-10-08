/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  const p = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //p for possibilities
  function leftRightElim(squareSet, target) {
    // uses L-R elimination to search for valid additions to the board
    p.forEach((p) => {});
  }

  function upDownElim(squareSet, target) {}
};

// so.
// i played these...
// first move is to find the most common numbers already in place.
// then, from most common to least common, put all the possibilities in place for *every* number.
// search for duos and triads, i.e., a box that has 5,8 and then a box in the box to the right with 5,8.
// because that means

// from website:
// scan right-left looking for eliminations.
// scan up-down looking for eliminations.

// scan two directions. right-left and then up-down.
// left-right scan eliminates using two #s in the adjacent boxes. up down scan uses #s from the vertical adjacents.

// eliminate by checking for other #s in the row, column, and box.

// technique 4: one box in one row|col has a 5. going updown/leftright makes it possible only for up-down positioning of a remaining
// number. use that number's position to at as if it already exists. go to a previous technique.
// ** can mark it as "existing" using an "imaginary number"

// 5: look for a row that has e.g. 2-3 spaces where a # could fit. cross reference all empty spaces for eliminating conflicts
// in rows/cols. e.g. 4a could be a 1, but 9a has a 1, therefore 4a cannot be a 1.

// AT #1: Look for Naked Pairs
// Analyzing Techniques #2: look for 2 nums in a row that eliminate possibilities from a 3rd box in row.
// AT3: find hidden pairs, carve out space just for them. those space are now eliminated.
// AT4: X wing if really needed.
