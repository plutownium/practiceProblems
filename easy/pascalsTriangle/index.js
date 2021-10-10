/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let returnRows = [];
  let lastRow = [];
  for (let i = 0; i < numRows; i++) {
    if (i == 0) {
      lastRow = [1];
      returnRows.push(lastRow);
    } else {
      let newRow = [];
      for (let j = 0; j <= i; j++) {
        let entry;
        if (j === 0) {
          entry = lastRow[j];
        } else if (j === i) {
          entry = lastRow[j];
        } else {
          entry = lastRow[j] + lastRow[j + 1];
        }
        newRow.push(entry);
      }
    }
  }
};

console.log(generate(3)); // 1, 11, 121
console.log(generate(5)); // 1, 11, 121, 1331, 14641
console.log(generate(6)); // 1, 11, 121, 1331, 14641, 15tenTen51, 16/15/20/15/6/1
// row y has y number of columns
// position x in row y is row y-1's x-1 and xth
