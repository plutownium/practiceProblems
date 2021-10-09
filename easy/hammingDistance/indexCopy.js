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
	let xBin = x.toString(2);
	let yBin = y.toString(2);
	console.log(xBin, yBin);
	let xLen = xBin.length;
	let yLen = yBin.length;

	let xIsLonger = xLen > yLen;
	const bump = Math.abs(xLen - yLen);
	// let lengthsAreEqual = xLen === yLen;

	let evalLength;
	if (xIsLonger) {
		evalLength = yLen;
	} else {
		evalLength = xLen;
	}

	let hamDist = 0;
	for (let i = evalLength; i > 0; i--) {
		// the longer bin receives bump on start of str to make them equal length.
		const bumped = i + bump; // bumpedIndex
		if (xIsLonger) {
			if (
				xBin.substring(bumped - 1, bumped) === yBin.substring(i - 1, i)
			) {
				hamDist++;
			}
		}
	}

	// get 1s from the part thats longer than the shorter # because those 1s are diff but the 0s arent
	if (xIsLonger) {
		for (let i = 0; i < xLen - bump; i++) {
			if (xBin.substring(i, i + 1) === "1") {
				hamDist++;
			}
		}
	} else {
		for (let i = 0; i < yLen - bump; i++) {
			if (yBin.substring(i, i + 1) === "1") {
				hamDist++;
			}
		}
	}

	return hamDist;
};

console.log(hammingDistance(1, 3));
console.log(hammingDistance(4, 3));
console.log(hammingDistance(1, 4)); // expect 2; 1 and 100; 001 and 100;
