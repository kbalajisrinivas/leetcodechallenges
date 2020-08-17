// https://leetcode.com/problems/3sum/
/* NOT SURE ABOUT THE SOLUTION. IT MIGHT NOT BE CORRECT*/
function threesum(nums) {
    
    let sum_array = {};
    let result_set = [];
    let vistedSet = new Set();
    for(let i=0;i<nums.length;i++){
//         for each iteration, we need to find whether there is a pair of numbers that sums up to negative of that number
        sum_array = {};
        if(visitedSet.has(nums[i])){
            continue;
        }
        for(let j=i+1;j<nums.length;j++){
            let currentNumber = nums[i]+nums[j];
//             negate that number
            let matchingNumber = currentNumber*-1;
            if(!sum_array[matchingNumber]){
//                 0 means not used
                sum_array[matchingNumber] = 0;
            }
//             we found the exact pair
            if(sum_array.hasOwnProperty([nums[j]]) && sum_array[nums[j]] === 0){
                sum_array[nums[j]] = 1;
                sum_array[matchingNumber] = 1;
                result_set.push([nums[i],nums[j],0 - (nums[i]+nums[j])]);
                
            }
        }
    }
    return result_set;
}

let result = threesum([-1,0,1,2,-1,-4]);
console.log(result);