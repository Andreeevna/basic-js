const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
calculateDepth(arr) {
  let maxSum = 1;
  for (let i = 0; i<arr.length; i++) {
    let sum = 1;
    if(Array.isArray(arr[i])) {
      sum += this.calculateDepth(arr[i]);
      if(sum > maxSum) {
        maxSum = sum;
      }
    }
  }
  return maxSum;
}
};