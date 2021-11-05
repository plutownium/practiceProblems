/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let tallest = [0, 0];
  let second = [0, 0];
  let third = [0, 0];
  let fourth = [0, 0];

  for (let i = 0; i < height.length; i++) {
    if (height[i] >= tallest[1]) {
      if (tallest[1] === height[i]) {
        second = [i, height[i]];
      } else {
        tallest = [i, height[i]];
      }
    } else if (height[i] >= second[1]) {
      second = [i, height[i]];
    } else if (height[i] >= third[1]) {
      third = [i, height[i]];
    } else if (height[i] >= fourth[1]) {
      fourth = [i, height[i]];
    } else {
    }
  }

  let potentials = [];
  if (tallest[0] !== 0) {
    potentials.push(tallest);
  }
  if (second[0] !== 0) {
    potentials.push(second);
  }
  if (third[0] !== 0) {
    potentials.push(third);
  }
  if (fourth[0] !== 0) {
    potentials.push(fourth);
  }
  console.log("PO TEN TIALS:", potentials);
  // calculate the volumes of every combo
  let highestVolume = 0;
  if (potentials.length == 1) {
    return potentials[0][1];
  }
  if (potentials.length == 2) {
    // this block to capture edge cases
    let distance = 1;
    let highestWall = 0;
    for (let i = 0; i < 2; i++) {
      if (potentials[i][1] > highestWall) {
        highestWall = potentials[i][1];
      }
    }
    return distance * highestWall;
  }
  for (let i = 0; i < potentials.length; i++) {
    let currentArray = potentials[i];
    let currentIndexPosition = currentArray[0];
    let currentHeight = currentArray[1];
    for (let j = i; j < potentials.length; j++) {
      let currentComparisonArray = potentials[j];
      let comparisonIndex = currentComparisonArray[0];
      let comparisonHeight = currentComparisonArray[1];

      if (currentIndexPosition > comparisonIndex) {
        // arr is left of comparison
        const distance = currentIndexPosition - comparisonIndex;
        const height =
          currentHeight > comparisonHeight ? comparisonHeight : currentHeight;
        const volume = distance * height;
        // console.log("000", volume, highestVolume);
        if (volume > highestVolume) {
          highestVolume = volume;
          // console.log("a:", highestVolume);
        }
      } else {
        const distance = comparisonIndex - currentIndexPosition;
        const height =
          currentHeight > comparisonHeight ? comparisonHeight : currentHeight;
        const volume = distance * height;
        // console.log("111", volume, highestVolume);
        if (volume > highestVolume) {
          // console.log(comparisonIndex, currentIndexPosition, height, volume);
          highestVolume = volume;
          // console.log("b:", highestVolume);
        }
      }
    }
  }
  //   console.log("volumes:", volumes);
  return highestVolume;
};

// ex1:

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

const inputThree = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(inputThree)); // 49
// console.log(
//   "input:",
//   inputThree,
//   "returned:",
//   maxArea(inputThree),
//   "expected:",
//   49,
//   "\n\n"
// );

// Example 3:

// Input: height = [4,3,2,1,4]
// Output: 16
const inputTwo = [4, 3, 2, 1, 4];
console.log(maxArea(inputTwo)); // 16
// console.log(
//   "input:",
//   inputTwo,
//   "returned:",
//   maxArea(inputTwo),
//   "expected:",
//   16,
//   "\n\n"
// );

// Example 4:

// Input: height = [1,2,1]
// Output: 2
const input3 = [1, 1];
// console.log(
//   "input:",
//   input3,
//   "returned:",
//   maxArea(input3),
//   "expected:",
//   1,
//   "\n\n"
// );
