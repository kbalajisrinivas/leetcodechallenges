/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
   
    let counter = 0;
    
    while(counter < nums.length){
        
        let indexPosition = nums[counter];  //3
        let valueAtIndexPosition = nums[indexPosition-1]; //4
        
        if(counter+1 !== nums[counter] && nums[counter] === valueAtIndexPosition){
            return nums[counter];
        }
        
   
        while(nums[counter] !== nums[nums[counter]-1]){
            let temp = nums[counter];
            nums[counter] = nums[temp-1];
            nums[temp-1] = temp;
            
        }
        console.log(nums);
        counter++;
    }
    
    return nums[nums.length-1];
};

let nums = [1,3,1,4,2];

let result = findDuplicate(nums);
console.log(result);