/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let wrongies = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      wrongies++;
    }
  }
  let storage = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      storage.push(nums[i]);
    }
  }
  while (nums.length > 0) {
    nums.pop();
  }
  for (let i = 0; i < storage.length; i++) {
    nums.push(storage[i]);
  }
  return nums;
};

// console.log(removeElement([1, 4, 5, 3, 9, 4, 4, 1], 4));
console.log(removeElement([3, 2, 2, 3], 3));
// console.log(removeElement([1, 1, 1, 1, 2, 2, 1, 2, 3, 3, 1, 2, 1], 2));
// console.log(
//   removeElement([10, 10, 10, 9, 9, 8, 8, 222, 222, 101, 222, 10], 222)
// );
