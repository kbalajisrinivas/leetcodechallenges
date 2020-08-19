// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

var removeDuplicates = function (nums) {
    let counter = 1;
    let duplicatePointer = 0;
    let prev = nums[0]
    while (counter <= nums.length - 1 && nums[counter - 1] <= nums[counter]) {

        if (nums[counter] !== prev) {
            let elementToBeSwapped = nums[counter];
            prev = elementToBeSwapped;
            nums[counter] = nums[duplicatePointer + 1];
            nums[duplicatePointer + 1] = elementToBeSwapped;
            duplicatePointer++
        } else {
            prev = nums[counter];
        }

        counter++;
    }
    return duplicatePointer + 1;
};

let result = removeDuplicates([0,0]);
console.log(result);

// copied solution below. very clever solution. not sure how people think like this.
// var removeDuplicates = function(nums) {
//     let i = 0
//     for (let j = 1; j < nums.length; j++) {
//         if (nums[i] < nums[j]) {
//             nums[i + 1] = nums[j]
//             i++
//         }
//     }
//     return i + 1
// };