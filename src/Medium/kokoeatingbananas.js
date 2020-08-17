// https://leetcode.com/problems/koko-eating-bananas/

var minEatingSpeed = function (piles, H) {

    piles.sort((a, b) => { return a - b });
    let min = 1;
    let max = piles[piles.length - 1];
    let temp = 0;
    while (min < max) {
        let mid = min + Math.floor((max - min) / 2);
        let hours = computeHours(piles, mid);
        if (hours <= H) {
            //we should eat less bananas
            temp = mid;
            max = mid;
        } else {
            //we should eat more bananas
            temp = mid;
            min = mid + 1;
        }
    }
    return min;
};


function computeHours(piles, count) {
    let hours = 0;
    for (let i = 0; i < piles.length; i++) {
        if (piles[i] < count) {
            hours++;
        } else {
            hours = hours + Math.ceil(piles[i] / count);
        }
    }
    return hours;
}

let result = minEatingSpeed([30], 29);
console.log(result);


// function binarySearch(input, target) {
//     let min = 0;
//     let max = input.length - 1;

//     while (min <= max) {
//         let mid = (min) + Math.ceil((max - min) / 2);
//         if (input[mid] === target) {
//             return true;
//         }
//         if (input[mid] < target) {
//             min = mid + 1;
//         } else {
//             max = mid - 1;
//         }
//     }
//     return false;
// }

// result = binarySearch([1,2,3,5],3);
// result = binarySearch([1,2,3,4,5,6],1)
// result = binarySearch([1,2,3,4,5,6],6)