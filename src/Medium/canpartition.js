// https://leetcode.com/problems/partition-equal-subset-sum/
// The solution is not correct. It doesn't work as expected.

var canPartition = function (nums) {
    nums.sort((a, b) => { return a - b });
    let i = 0;
    let j = nums.length - 1;
    let leftSum = nums[0];
    let rightSum = nums[j];

    while (i < j) {
        if (leftSum === rightSum) {
            i++;
            j--;
            leftSum = 0;
            rightSum = 0;
        } else if (leftSum < rightSum) {
            i++;
            leftSum = leftSum + nums[i];
        } else if (rightSum < leftSum) {
            j--;
            rightSum = rightSum + nums[j];
        }
    }
    return leftSum === rightSum;
};

let result = canPartition([1, 3, 4, 4]);
console.log(result);
