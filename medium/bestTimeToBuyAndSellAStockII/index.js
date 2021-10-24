/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;

  let buyPoint = 0;
  let sellPoint = 0;
  let lowestPrice = Infinity;
  let highestPrice = -Infinity;
  let lMins = [];
  let lMaxs = [];

  let boughtAt = 0;

  for (let i = 0; i < prices.length; i++) {
    // if at lmax, sell.
    // if at lmin, buy.
    //
    if (prices[i] < lowestPrice) {
      lowestPrice = prices[i];
      if (ascending) {
        // buyPoint = i;
        lMaxs.push(i);
      }
      ascending = false;
    } else if (prices[i] > highestPrice) {
      highestPrice = prices[i];
      if (!ascending) {
        lMins.push(i);
        //   sellPoint = i;
      }
      ascending = true;
    }
    if (buyPoint > sellPoint) {
      boughtAt;
    }
  }
};

console.log([7, 1, 5, 3, 6, 4]); // 7
console.log([1, 2, 3, 4, 5]); //4
console.log([5, 4, 3, 2]); //0

// is essentially about locating lmin, lmax, lmin, lmax, repeat.
// if there is a lmax btwn two low #s, they are two lmins.
