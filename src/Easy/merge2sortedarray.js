// https://leetcode.com/problems/merge-sorted-array/

var merge = function(nums1, m, nums2, n) {
    
    let i = 0;
    let j = 0;
    
    while(i<nums1.length-n && j<nums2.length){
        
        if(nums1[i] > nums2[j]){
            let temp = nums1[i];
            nums1[i] = nums2[j];
            nums2[j] = temp;
            j++;   
        } else {
            i++;
        }
    }
    
    let array2pointer = i+1;
    
    //need to move the remaining elements to the correct position
    if(i+1<nums1.length-n){
     i = i+1;
    let startingPosition = i + n;
        while(i<nums1.length-n){
            nums1[startingPosition] = nums1[i];
            i++;
            startingPosition++;
        }
    }
    
    j = 0;
    while(j < nums2.length){
        nums1[array2pointer] = nums2[j];
        array2pointer++;
        j++;
    }
    return nums1;
    
};

let result = merge([2,0],1,[1],1);
console.log(result);