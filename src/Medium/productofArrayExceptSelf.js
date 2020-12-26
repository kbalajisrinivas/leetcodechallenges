let input = [1, 2, 3, 4];

// https://leetcode.com/problems/product-of-array-except-self/

//answer: [120, 60, 40, 48]

// let ascendingArray = new Array(input.length).fill(0);
// let descendingArray = new Array(input.length).fill(0);
// let result = new Array(input.length).fill(0);

// let product = 1;
// for (let i = 0; i < input.length; i++) {
//     product = product * input[i];
//     ascendingArray[i] = product;
// }

// product = 1;
// for (let i = input.length - 1; i >= 0; i--) {
//     product = product * input[i];
//     descendingArray[i] = product;
// }



// console.log(ascendingArray);
// console.log(descendingArray);
// result[0] = descendingArray[0] / ascendingArray[0];
// result[result.length - 1] = ascendingArray[input.length - 1] / descendingArray[input.length - 1];

// for (let i = 1; i < input.length - 1; i++) {
//     result[i] = ascendingArray[i - 1] * descendingArray[i + 1];
// }
// console.log(result);


// another approach without using extra space
//first loop over the elements and update the array with product of numbers to the left
// 4,6,8

let result = (new Array(input.length)).fill(1);
let product = 1;
for(let i=1;i<input.length;i++){
    result[i] = product;
    product = product * input[i];
}

product = input[input.length-1];
for(let i=input.length-2;i>=0;i--){
    result[i] = result[i] * product;
    product = product*input[i];
}
console.log(result);
