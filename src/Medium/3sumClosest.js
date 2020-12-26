var threeSumClosest = function(nums, target) {
    
    //sort the array
    nums.sort((a,b)=>a-b);
    //-4 -1 1 2
//     go over the array.length -1. leftpointer, rightpointer.

    let minDistance = Number.MAX_SAFE_INTEGER;
    let closestSum = null;
    for(let i=0;i<nums.length;i++){
        let currentNumber = nums[i];
        let leftPointer = i+1;
        let rightPointer = nums.length-1;
//         now we need to find the 2 sum closest
        while(leftPointer < rightPointer){
            let sum = nums[leftPointer] + nums[rightPointer] + currentNumber;
//             diffe
            let x = Math.min(minDistance, Math.abs(target - sum));
            if(sum === target){
                return sum;
            }
            if(x !== minDistance){
                closestSum = sum;
            }
            minDistance = x;

            let sumOfTwoNumbers = nums[leftPointer] + nums[rightPointer];
            let targetSum = target - currentNumber;
            if(sumOfTwoNumbers > targetSum){
                //decrease from right
                rightPointer--;
            } else {
                leftPointer++;
            }
        } 
    }
    return closestSum;
};

let nums = [-1,2,-4,5,1,2,3,4,5,6,8,9], target = 144
let result = threeSumClosest(nums, target);
console.log(result);