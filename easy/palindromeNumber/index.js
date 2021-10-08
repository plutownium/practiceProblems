/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
	if (x < 0) {
		return false;
	}
	let numToStr = x.toString();
	let lenOfStr = numToStr.length;
	let m;
	if (lenOfStr % 2 === 0) {
		// loop for even length #
		m = lenOfStr / 2;
	} else {
		// loop for odd length #
		m = lenOfStr / 2 - 0.5; // -0.5 because 0 index! m for midpoint
	}
	for (let i = 0; i < m; i++) {
		if (numToStr.charAt(i) !== numToStr.charAt(lenOfStr - 1 - i)) {
			return false;
		}
	}
	return true;
};

console.log(isPalindrome(12321));
console.log(isPalindrome(123151321));
console.log(isPalindrome(111232111));
console.log(isPalindrome(12340123));
