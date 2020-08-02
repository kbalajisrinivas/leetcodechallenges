// https://leetcode.com/problems/longest-increasing-subsequence/

var lengthOfLIS = function(nums) {
    let maxLisArray = new Array(nums.length).fill(1);
    let maxLength = 1;
    
    for(let i=1;i<nums.length;i++){
        for(let j=0;j<i;j++){
            if(nums[j] < nums[i]){
                maxLisArray[i] = Math.max(maxLisArray[i], maxLisArray[j]+1);
                if(maxLength < maxLisArray[i]){
                    maxLength = maxLisArray[i];
                }
            }
        }
    }
    return maxLength;  
};

let result = lengthOfLIS([]);
console.log(result);