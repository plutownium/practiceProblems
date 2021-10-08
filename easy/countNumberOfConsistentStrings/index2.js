/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
	let output = [];
	for (let word of words) {
		let wordIsGood = true;
		for (let i = 0; i < word.length; i++) {
			if (!allowed.includes(word.substring(i, i + 1))) {
				wordIsGood = false;
			}
		}
		if (wordIsGood) {
			output.push(word);
		}
		wordIsGood = true;
	}
	return output.length;
};

// return only entries in 'words' that contain only chars in 'allowed'

// top 99.02% of runtimes for this exercise
