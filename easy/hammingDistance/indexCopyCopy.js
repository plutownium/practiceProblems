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

	const bump = Math.abs(xLen - yLen);

	let hamDist = 0;
	if (xLen > yLen) {
		let numsBeyondShorterBin = xLen - yLen;
		for (let i = 0; i < xLen; i++) {
			if (i < numsBeyondShorterBin) {
				if (xBin.substring(i, i + 1) === "1") {
					hamDist++;
				}
			} else {
				let shorterBinIndex = i - bump;
				if (shorterBinIndex === 0) {
					// console.log("found 0");
				}
				if (
					yBin.substring(shorterBinIndex, shorterBinIndex + 1) !==
					xBin.substring(i, i + 1)
				) {
					hamDist++;
				}
			}
		}
	} else if (xLen <= yLen) {
		let numsBeyondShorterBin = yLen - xLen;
		for (let i = 0; i < yLen; i++) {
			if (i < numsBeyondShorterBin) {
				if (yBin.substring(i, i + 1) === "1") {
					hamDist++;
				}
			} else {
				let shorterBinIndex = i - bump;
				if (shorterBinIndex === 0) {
					// console.log("found 0");
				}
				if (
					xBin.substring(shorterBinIndex, shorterBinIndex + 1) !==
					yBin.substring(i, i + 1)
				) {
					hamDist++;
				}
			}
		}
	}

	return hamDist;
};

console.log(hammingDistance(4, 3));
console.log(hammingDistance(4, 1));
console.log(hammingDistance(6, 2));
console.log(hammingDistance(11, 2));
console.log(hammingDistance(3, 4));
console.log(hammingDistance(1, 4));
console.log(hammingDistance(2, 6));
console.log(hammingDistance(2, 11));

// success
