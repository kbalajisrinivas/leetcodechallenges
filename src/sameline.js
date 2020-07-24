let coordinates = [[1,1],[1,2],[1,3],[1,4],[4,6]]

if(coordinates.length <= 2){
    return true;
}
let slope = null;
let isMatchingSlope = true;
for(let i=0;i<coordinates.length-1;i++){
    let currentX = coordinates[i][0];
    let currentY = coordinates[i][1];

    let nextX = coordinates[i+1][0];
    let nextY = coordinates[i+1][1];
    currentSlope = ((nextY-currentY)/(nextX-currentX));
    if(slope === null){
        slope = currentSlope;
    }
    if(currentSlope!==slope){
        isMatchingSlope = false;
        return;
    }
}
// return isMatchingSlope
console.log(isMatchingSlope);