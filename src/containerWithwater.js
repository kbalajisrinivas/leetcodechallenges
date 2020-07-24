let input_array = [1, 8, 6, 2, 5, 4, 8, 3, 7];

/* NOT A SOLUTION*/
let startPos = 0;
let endPos = 1;
let maxArea = Math.min(input_array[startPos], input_array[endPos]);

for (let i = 2; i < input_array.length; i++) {
    let minElement = Math.min(input_array[startPos], input_array[endPos]);
    if (minElement === input_array[startPos] && input_array[startPos] !== input_array[endPos]) {
        startPos++;
        endPos = i;
    } else {
        endPos = i;
    }

    let area = (endPos - startPos) * Math.min(input_array[startPos], input_array[endPos]);
    if(maxArea < area){
        maxArea = area;
    }
}