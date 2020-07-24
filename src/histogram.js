var largestRectangleArea = function(heights) {
    if(heights.length === 0){
        return 0;
    }
    let positions = [0];
    let elements = [heights[0]];
    let maxSum = heights[0];
//     check whether the top element in the stack is the maximum, if not keep removing elements from the stack until we reach a point where we are able to insert the current element
//     while inserting the currentElement keep checking for maximum element.
    
    for(let i=1;i<heights.length;i++){
        let topElement = elements[elements.length-1];
        if(topElement < heights[i]){
            positions.push(i);
            elements.push(heights[i]);
        } else {
//             we need to insert at the correct position
            let prevPosition = i;
            while(elements.length > 0 && elements[elements.length-1] > heights[i]){
                let sum = (i - positions[elements.length-1]) * elements[elements.length-1];
                if(maxSum < sum){
                maxSum = sum
                }
                prevPosition = positions[positions.length-1];
            elements.pop();
            positions.pop();
            }
            positions.push(prevPosition);
            elements.push(heights[i]);
    }
           //add back the previous position because the element started there. 

        }

    //now we have reached the length of the array
    let currentLength = heights.length;
    
    while(elements.length > 0){
        let currentSum = elements[elements.length-1] * (currentLength - positions[positions.length-1]);
        if(maxSum < currentSum){
            maxSum = currentSum;
        }
        elements.pop();
        positions.pop()
    }
    return maxSum;  
};

let sum = largestRectangleArea([1]);
console.log(sum);