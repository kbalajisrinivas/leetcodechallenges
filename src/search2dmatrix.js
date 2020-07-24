var searchMatrix = function(matrix, target) {
    if(matrix.length === 0){
        return false;
    }
    if(matrix.length === 1 && matrix[0].length === 0){
        return false;
    }
    
    let i = 0;
    let j = 0;
    while(i<matrix.length && j<matrix[i].length){
        if(target === matrix[i][j]){
            return true;
        }
        if(target < matrix[i][j]){
            if(i == 0){
                return false;
            }
            if(target < matrix[i-1][matrix[i-1].length-1]){
                //previous row
                return binarySearch(matrix, i-1, j-1, matrix[i-1].length-1, target);
            } else {
                //current row
                return binarySearch(matrix, i, 0, j, target);
            }
        }
        i++;
        j++;
    }
    let left =  binarySearch(matrix, i-1, j-1, matrix[i-1].length-1, target);
    let right = binarySearch(matrix, i, 0, j, target);
    return left || right;
};

function binarySearch(matrix, i, startPos, endPos, target){
    
    while(startPos <= endPos){
        let middleElement = startPos + Math.ceil((endPos - startPos)/2);
        if(matrix[i][middleElement] === target){
            return true;
        }
        if(target<matrix[i][middleElement]){
            endPos = middleElement-1;
        } else {
            startPos = middleElement+1;
        }
    }
    return false;
}

let result = searchMatrix([[1],[3]],3);
console.log(result);

