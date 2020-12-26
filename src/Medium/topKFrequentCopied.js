// Copied from https://leetcode.com/problems/top-k-frequent-elements/discuss/948236/O(N)-JavaScript-Solution

var topKFrequent = function (nums, k) {
    const n = nums.length;
    const map = new Map();
    const res = [];
    for (let i = 0; i < n; i += 1) {
        if (map.has(nums[i])) {
            const [count, index] = map.get(nums[i]);
            map.set(nums[i], [count + 1, index]);
            res[index][0] += 1;
        } else {
            map.set(nums[i], [1, res.length]);
            res.push([1, nums[i]]);
        }
    }
    res.sort(function (a, b) {
        return b[0] - a[0];
    })
    return res.slice(0, k).map(function (item) { return item[1]; });
};

let result = topKFrequent([1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2,], 1);
console.log(result);