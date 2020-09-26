// https://leetcode.com/problems/3sum/
var threeSum = function(nums) {
    
    nums.sort((a,b)=>a-b);
    let result = [];
    
    for(let i=0;i<nums.length;i++){
        if(i > 0 && nums[i] === nums[i-1]){
//             since numbers are same, don't find duplicates
            continue;
        } 
        let targetSum = nums[i]*-1
        let numberResult = find2Sum(i+1, nums.length-1, nums, targetSum);
        result.push(...numberResult);
    }
    return result;
};


function find2Sum(leftIndex, rightIndex, nums, sum){
    let combinations = [];
    let prev=null;
    while(leftIndex < rightIndex){
        let sum_2_numbers = nums[leftIndex] + nums[rightIndex];
        if(sum_2_numbers === sum){
            if(nums[leftIndex] !== prev){
            combinations.push([sum*-1, nums[leftIndex], nums[rightIndex]])
            prev = nums[leftIndex];
            }
          leftIndex++;
        } else if(sum_2_numbers < sum){
            leftIndex++;
        } else {
            rightIndex--;
        }
        
    }
    return combinations;
}

let result = threeSum([-1,0,1]);
// console.log(result);
result = threeSum([-1,0,0,1,1]);
// console.log(result);
result = threeSum([]);
console.log(result);