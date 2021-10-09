// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, return the Hamming distance between them.

// Example 1:

// Input: x = 1, y = 4
// Output: 2
// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑
// The above arrows point to positions where the corresponding bits are different.
// Example 2:

// Input: x = 3, y = 1
// Output: 1

// Constraints:

// 0 <= x, y <= 231 - 1

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
	let xBinRaw = x.toString(2);
	let yBinRaw = y.toString(2);

	function makeEqualLength(x, y) {
		const xLen = x.length;
		const yLen = y.length;
		if (xLen > yLen) {
			let newY = y;
			for (let i = 0; i < xLen - yLen; i++) {
				newY = parseInt("0" + y.toString(), 2);
			}
			return [x, newY];
		} else {
			let newX = x;
			for (let i = 0; i < yLen - xLen; i++) {
				newX = parseInt("0" + x.toString(), 2);
			}
			return [newX, y];
		}
    }
    
    let xBin;
    let yBin;
    if (xBinRaw.length !== yBinRaw.length) {
        [xBin, yBin] = makeEqualLength(xBinRaw, yBinRaw);
    } else {
        xBin = xBinRaw;
        yBin = yBinRaw;
    }
};

console.log(hammingDistance(1, 3));
console.log(hammingDistance(4, 3));
