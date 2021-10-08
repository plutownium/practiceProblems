/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
	let q = [];
	// select allowed char first
	let rejected = [];
	for (let i = 0; i < allowed.length; i++) {
		let allowedChar = allowed.substring(i, i + 1);
		for (let j = 0; j < words.length; j++) {
			// test all entries in 'words'
			let currentWord = words[j];
			if (allowedChar !== currentWord.substring(i, i + 1)) {
				// inconsistent, reject currentWord, mark its index as a badly
				rejected.push(j);
			}
		}
	}
	console.log(rejected);

	for (let a = 0; a < words.length; a++) {
		if (rejected.includes(a)) {
			continue;
		} else {
			q.push(words[a]);
		}
	}

	return q;
};

// return only entries in 'words' that contain only chars in 'allowed'

console.log(countConsistentStrings("cd", ["acd", "cdcdcd", "ccccc", "aaade"]));
console.log(countConsistentStrings("abc", ["abc", "aabcc", "bca", "aaaa"]));
console.log(countConsistentStrings("dfk", ["dddfk", "abcd", "dk"]));
