let input_array = [-10,-5,-6];

let maxSum = input_array[0];
let runningSum = input_array[0];

for (let i = 1; i < input_array.length; i++) {
    runningSum = runningSum + input_array[i];

    if(runningSum > maxSum){
        maxSum = runningSum;
    }
    if(input_array[i] > maxSum){
        maxSum = input_array[i];
        runningSum = input_array[i];
    }
    if(runningSum < 0){
        runningSum = 0;
    }
}
console.log(maxSum);