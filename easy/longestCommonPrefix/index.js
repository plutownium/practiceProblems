/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	let shortestWord = strs.reduce((a, b) => (a.length <= b.length ? a : b));
	let output = "";

	// iterate over index
	for (let position = 0; position < shortestWord.length; position++) {
		let indexIsGood = true;
		let testChar = strs[0].substring(position, position + 1);
		// check every word for the given index
		for (let j = 0; j < strs.length; j++) {
			let currentIndexChar = strs[j].substring(position, position + 1);
			if (currentIndexChar !== testChar) {
				indexIsGood = false;
			}
		}
		if (indexIsGood) {
			output = output + testChar;
		} else {
			break;
		}
	}

	return output;
};

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// selfmade ex3:

// in: strs = ["premade", "prequel", "preamble"]
// out: pre

console.log(longestCommonPrefix(["floowa", "floawa", "flobbb", "floccc"]));
console.log(longestCommonPrefix(["gagaowa", "gagaawa", "gagabbb", "gagaccc"]));
console.log(
	longestCommonPrefix([
		"gagabcdeaaeeEeowa",
		"gagabcdeaaeeEeawa",
		"gagabcdeaaeeEebbb",
		"gagabcdeaaeeEeccc",
	])
);
