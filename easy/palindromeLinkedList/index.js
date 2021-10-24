/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let length = head.length;
  if (length % 2 === 0) {
    length = length / 2;
  } else {
    length = (length - 1) / 2;
  }
  for (let i = 0; i <= length; i++) {
    if (head[i] === head[head.length - 1]) {
      console.log(head[i], head[head.length - 1]);
      continue;
    } else {
      console.log("reject:,", head[i], head[head.length - 1]);
      return false;
    }
  }
};

// Given the head of a singly linked list, return true if it is a palindrome.

// Example 1:

// Input: head = [1,2,2,1]
// Output: true
// Example 2:

// Input: head = [1,2]
// Output: false

// Constraints:

// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9
