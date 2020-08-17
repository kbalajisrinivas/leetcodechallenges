// https://leetcode.com/problems/jump-game/
// https://leetcode.com/problems/jump-game-ii/
// both the code are almost same. just few modifications. 
// NOTE that there are more optimal solutions to these problems


var canJump = function (nums) {
    let temp = new Array(nums.length);
    let minimum_number_steps = new Array(nums.length).fill(Number.MAX_SAFE_INTEGER);

    //initially populate the array
    let jump = nums[0];
    for (let i = 1; i <= jump; i++) {
        temp[i] = 1;
        minimum_number_steps[i] = 1;
        if (i === nums.length - 1) {
            return true;
        }
    }

    for (let i = 1; i < nums.length - 1; i++) {
        //         if temp[i] is 1 implies it can be reached from some other position.
        let current_jump = nums[i];
        if (temp[i] === 1) {
            let current_minimum = minimum_number_steps[i];
            for (let j = i + 1; j <= current_jump + i; j++) {
                temp[j] = 1;
                minimum_number_steps[j] = Math.min(minimum_number_steps[j], current_minimum + 1);
                if (j === nums.length - 1) {
                    break;
                }
            }
        }
    }

    return minimum_number_steps[nums.length - 1];
};


//more optimized solution (copied from leetcode)
var canJump1 = function (nums) {
    var res = Array(nums.length).fill(0);
    var max_jump = nums[0];
    for (var i = 1; i < nums.length - 1; ++i) {
        if (max_jump >= i) {
            max_jump = Math.max(max_jump, i + nums[i])
        }
    }

    return max_jump >= nums.length - 1;
};

let result = canJump([2, 3, 1, 2, 4, 5]);
console.log(result);