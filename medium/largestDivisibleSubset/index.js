/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
	if (nums.length === 1) {
		return nums;
	}
	// console.log(nums);
	let max = Math.max(...nums);
	let sorted = nums.sort(function (a, b) {
		return a - b;
	});

	let sets = [];

	let i = 0;
	let x = 2;
	// woops, not looking for exponents, looking for timetables. 1,2,4,8||1,5,25,125||1,10,100,1000
	let makesSenseToTestFurtherNums = true;
	let firstPass = true;
	console.log(22, nums, i, x, sets);
	while (x <= max) {
		while (makesSenseToTestFurtherNums) {
			let currentSet = [];
			let startInt = sorted[i]; // e.g. 2
			currentSet.push(startInt);
			let next = startInt;
			let biggerNumAvail = true;
			let t = 0;
			console.log("index:", i, "startInt:", next);
			while (biggerNumAvail) {
				let target = next * x; // 4
				// console.log("target:", target);
				if (firstPass) {
					// block detects if there's just no point in running rest of loop because startInt is nonsenseical big
					// special stop condition for when sorted[i] * x > max;
					const breakTest = target * x;
					if (breakTest > max) {
						// console.log("breakTest hit");
						makesSenseToTestFurtherNums = false;
					}
					firstPass = false;
				}

				const found = nums.find((val) => val === target);
				// t = t + 1;
				console.log("f:", found);
				if (found) {
					// store squared in arr, repeat
					currentSet.push(found);
					next = found;
				} else {
					const breakTest = target >= max;
					if (breakTest) {
						// currentSet.push(next);
						sets.push(currentSet);
						firstPass = true;
						i = i + 1;
						biggerNumAvail = false;
						// console.log("HEY", i, firstPass, biggerNumAvail);
					} else {
						next = target;
					}
				}
			}
		}
		x = x + 1;
		i = 0;
	}

	// compare length of all sets and find longest one.
	let longestSet = 0;
	let longestSetIndex = null;
	sets.forEach((set, index) => {
		const len = set.length;
		if (len > longestSet) {
			longestSet = len;
			longestSetIndex = index;
		}
	});
	// console.log(sets);
	return sets[longestSetIndex];
};

// console.log(largestDivisibleSubset([1, 2, 4, 8]));
// console.log(largestDivisibleSubset([3, 4, 16, 8]));
// console.log(largestDivisibleSubset([1, 2]));
console.log(largestDivisibleSubset([4, 8, 10, 240])); // 4,8,240

// console.log(largestDivisibleSubset([1, 2, 3, 9, 27]));
// console.log(largestDivisibleSubset([1, 2, 4, 8, 16, 32, 64]));
// console.log(largestDivisibleSubset([1, 3, 4, 6, 19, 42, 592, 5923]));
// console.log(
// 	largestDivisibleSubset([
// 		1, 3, 4, 6, 19, 42, 40, 120, 360, 592, 36, 108, 324, 972,
// 	])
// );
// Given a set of distinct positive integers nums, return the largest subset answer such that
// every pair(answer[i], answer[j]) of elements in this subset satisfies:

// answer[i] % answer[j] == 0, or
// answer[j] % answer[i] == 0
// If there are multiple solutions, return any of them.

// Example 1:

// Input: nums = [1,2,3]
// Output: [1,2]
// Explanation: [1,3] is also accepted.
// Example 2:

// Input: nums = [1,2,4,8]
// Output: [1,2,4,8]

// for number i to modulus to 0 with a number j, i must be an integer multiple of j.
// i = 40, j = 20, 4, 10, 2,1
// i = 25, j = 5, 1,
// i = 320, j=160,40,80,
