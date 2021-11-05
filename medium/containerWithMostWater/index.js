/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // cup length is heightIndex2 - heightIndex1;
  console.log("\n\ninput", height);
  // todo: tallest, 2ndTallest, areaBetween
  let suspectWinner = 0;
  let suspect2ndPlace = 0;
  let suspect3rd = 0;
  let tallestIndexOne;
  let tallestIndexTwo;
  for (let i = 0; i < height.length; i++) {
    if (height[i] > suspectWinner) {
      suspectWinner = height[i];
      tallestIndexOne = [i, height[i]];
    } else if (height[i] > suspect2ndPlace) {
      suspect2ndPlace = height[i];
      tallestIndexTwo = [i, height[i]];
    } else if (height[i] > suspect3rd) {
      suspectThird = height[i];
      tallestIndexThree = [i, height[i]];
    }
  }
  console.log(
    tallestIndexOne,
    tallestIndexTwo,
    tallestIndexThree
    // suspectWinner,
    // suspect2ndPlace
  );
  //   const cupWallSize =
  // suspectWinner > suspect2ndPlace ? suspect2ndPlace : suspectWinner;

  let lengthOfCup = tallestIndexTwo[0] - tallestIndexOne[0];
  return lengthOfCup * tallestIndexOne[1];
};

// ex1:

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

console.log("returned:", maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), "expected:", 49);

// Example 3:

// Input: height = [4,3,2,1,4]
// Output: 16
console.log("returned:", maxArea([4, 3, 2, 1, 4]), "expected:", 16);

// Example 4:

// Input: height = [1,2,1]
// Output: 2

console.log("returned:", maxArea([4, 3, 2, 1, 4]), "expected:", 2);
