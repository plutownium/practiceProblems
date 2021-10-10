/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const gridLengthY = grid.length;
  const gridLengthX = grid[0].length;
  let alreadyBeenTo = [];
  function detectAdjacents(x, y, islandPieces, placesWeveBeenTo, currentSize) {
    if (placesWeveBeenTo.includes(JSON.stringify([x, y]))) {
      throw "you are trying to run a func on an input it was designed to avoid";
    }
    // 2,2 => 1,2| 3,2| 2,1| 2,3
    placesWeveBeenTo.push(JSON.stringify([x, y]));
    // collect all adjacents, re-run it, discarding prev hits.
    let left = x - 1 >= 0 ? x - 1 : null;
    let right = x + 1 < gridLengthX ? x + 1 : null;
    let up = y - 1 >= 0 ? y - 1 : null;
    let down = y + 1 < gridLengthY ? y + 1 : null;

    // let continueCondition = false; // false if no new hits are detected
    let reportedSize = currentSize;

    if (
      left !== null &&
      grid[y][left] === 1 &&
      !placesWeveBeenTo.includes(JSON.stringify([left, y]))
    ) {
      islandPieces.push([left, y]);
      reportedSize++;
      reportedSize = detectAdjacents(
        left,
        y,
        islandPieces,
        placesWeveBeenTo,
        reportedSize
      );
    }
    if (
      right !== null &&
      grid[y][right] === 1 &&
      !placesWeveBeenTo.includes(JSON.stringify([right, y]))
    ) {
      islandPieces.push([right, y]);
      reportedSize++;
      reportedSize = detectAdjacents(
        right,
        y,
        islandPieces,
        placesWeveBeenTo,
        reportedSize
      );
    }
    if (
      up !== null &&
      grid[up][x] === 1 &&
      !placesWeveBeenTo.includes(JSON.stringify([x, up]))
    ) {
      islandPieces.push([x, up]);
      reportedSize++;
      reportedSize = detectAdjacents(
        x,
        up,
        islandPieces,
        placesWeveBeenTo,
        reportedSize
      );
    }
    if (
      down !== null &&
      grid[down][x] === 1 &&
      !placesWeveBeenTo.includes(JSON.stringify([x, down]))
    ) {
      islandPieces.push([x, down]);
      reportedSize++;
      reportedSize = detectAdjacents(
        x,
        down,
        islandPieces,
        placesWeveBeenTo,
        reportedSize
      );
    }
    // return continueCondition; // jk we're doing recursion
    return reportedSize;
  }

  let islands = [];
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      if (alreadyBeenTo.includes(JSON.stringify([x, y]))) {
        continue;
      }
      let islandPieces = [];
      if (grid[y][x] === 1) {
        // follow to conclusion while removing searchedIndexes from pool
        islands.push(detectAdjacents(x, y, islandPieces, alreadyBeenTo, 1));
      }
    }
  }
  const sorted = islands.sort((a, b) => a - b);
  if (sorted[0] === 0) {
    return 0;
  }
  return sorted.pop();
};

// oof
// ex1:
let grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];
// Output: 6

console.log(maxAreaOfIsland(grid));
