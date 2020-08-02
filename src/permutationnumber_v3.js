var subsets = function (nums) {

    let result = []
    for (let i = nums.length - 1; i >= 0; i--) {
        result = recursivelyAddNumberToSubset(result, nums[i]);
    }
    result.push
    return result;
};

function recursivelyAddNumberToSubset(subsets, number) {
    let result = [];
    result = [...subsets];
    for (let i = 0; i < subsets.length; i++) {
        let subset_copy = [...subsets[i]];
        subset_copy.unshift(number);
        result.push(subset_copy);
    }
    result.push([number]);
    return result;
}

let result = subsets([1]);
console.log(result);