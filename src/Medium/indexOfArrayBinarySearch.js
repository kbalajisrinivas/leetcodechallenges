let nums = [-3, -3, -2, -1, 0, 10, 12, 13, 14, 15, 16, 17, 18, 20, 22, 24];
let target = 3;
let left = 0;
let right = nums.length - 1;
let lowerBound = -1;
let upperBound = -1;

//find lowerbound
while (left <= right) {
    let midPoint = left + Math.floor((right - left) / 2);
    let midElement = nums[midPoint];
    if (nums[midPoint] < target) {
        left = midPoint + 1;
    } else if (nums[midPoint] > target) {
        right = midPoint - 1;
    } else if (nums[midPoint] === target) {
        if (midPoint === 0) {
            lowerBound = 0;
            break;
        } else {
            if (nums[midPoint - 1] < target) {
                lowerBound = midPoint;
                break;
            } else {
                right = midPoint - 1;
            }
        }
    }
}

left = 0;
right = nums.length - 1;


while (left <= right) {
    let midPoint = left + Math.floor((right - left) / 2);
    let midElement = nums[midPoint];
    if (nums[midPoint] < target) {
        left = midPoint + 1;
    } else if (nums[midPoint] > target) {
        right = midPoint - 1;
    } else if (nums[midPoint] === target) {
        if (midPoint === nums.length - 1) {
            upperBound = nums.length - 1;
            break;
        } else {
            if (nums[midPoint + 1] > target) {
                upperBound = midPoint;
                break;
            } else {
                left = midPoint + 1;
            }
        }
    }
}
console.log(lowerBound);
console.log(upperBound);