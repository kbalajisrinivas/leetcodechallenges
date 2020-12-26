// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/submissions/

let input = [4, 5, 7, 8, 2, 4, 5];

let startPointer = 0;
let endPointer = input.length - 1;

while (startPointer <= endPointer) {
    let mid = startPointer + Math.floor((endPointer - startPointer) / 2);
    if (input[mid] < input[startPointer]) {
        endPointer = mid - 1;
    } else {
        startPointer = mid+1;
    }
}
console.log(input[startPointer]);
return input[startPointer];