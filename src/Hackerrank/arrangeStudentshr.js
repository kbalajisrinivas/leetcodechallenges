function arrangeStudents(a, b) {
    // Write your code here
    const yesStr = "YES";
    const noStr = "NO";
    a.sort((x, y) => { return parseInt(x) - parseInt(y) });
    b.sort((x, y) => { return parseInt(x) - parseInt(y) });
    let aPointer = 0;
    let bPointer = 0;
    let result = [];
    if (a.length === 0) {
        return yesStr;
    }
    
    while(aPointer < a.length && bPointer < b.length){
        if(a[aPointer] === b[bPointer]){
            aPointer++;
            bPointer++;
            continue;
        }
        if(a[aPointer] < b[bPointer]){
            isApointer = true;
            break;
        } else if(a[aPointer] > b[bPointer]){
            isApointer = false;
            break;
        }
    }
    aPointer = 0;
    bPointer = 0;
    if (isApointer) {
        result.push(a[0]);
        aPointer++;
    } else {
        result.push(b[0]);
        bPointer++;
    }
    while (aPointer < a.length && bPointer < b.length) {

        if (isApointer) {
            //check if b[bPointer] < a[APointer]
            if (b[bPointer] <= a[aPointer]) {
                result.push(b[bPointer]);
                bPointer++;
                isApointer = false;
            } else {
                return noStr;
            }
        } else {
            //check if a[aPointer] < b[bPointer]
            if (a[aPointer] <= b[bPointer]) {
                result.push(a[aPointer]);
                aPointer++;
                isApointer = true;
            } else {
                return noStr;
            }
        }
    }
    return yesStr;

}

let b = [1, 2, 8, 25, 25, 31, 35, 39, 51, 63, 69, 73, 85, 87, 94];
let g = [1, 5, 18, 25, 28, 32, 36, 50, 52, 69, 73, 74, 87, 90, 95];
let result = arrangeStudents(b, g);
console.log(result)

// let input = [{
//     a: [2, 14, 15, 30, 33, 39, 68, 77, 82, 97],
//     b: [2, 9, 15, 17, 30, 37, 59, 73, 79, 92]
// }, {
//     a: [17, 25, 42, 58, 62, 68, 78, 81, 84, 89, 99],
//     b: [16, 21, 41, 43, 59, 62, 77, 80, 81, 86, 94]
// }, {
//     a: [4, 20, 22, 32, 36, 36, 36, 66, 67, 71, 73, 78, 84, 88, 88, 91],
//     b: [5, 10, 13, 20, 21, 22, 40, 42, 47, 54, 57, 63, 63, 89, 90, 95]
// }, {
//     a: [13, 14, 20, 36, 38, 48, 55, 62, 70, 76, 78, 90, 93],
//     b: [14, 16, 27, 36, 43, 54, 56, 66, 71, 76, 86, 92, 94]
// }, {
//     a: [1, 3, 15, 20, 32, 34, 39, 42, 47, 47, 49, 51, 63, 94, 95, 96],
//     b: [3, 4, 11, 14, 17, 18, 19, 33, 33, 41, 60, 72, 80, 84, 89, 96]
// }, {
//     a: [25, 27, 29, 33, 44, 48, 54, 59, 67, 76, 80, 100],
//     b: [21, 26, 28, 30, 38, 44, 54, 57, 63, 70, 78, 90]
// }, {
//     a: [1, 2, 8, 25, 25, 31, 35, 39, 51, 63, 69, 73, 85, 87, 94],
//     b: [1, 5, 18, 25, 28, 32, 36, 50, 52, 69, 73, 74, 87, 90, 95]
// }, {
//     a: [10, 22, 28, 45, 52, 57, 65, 73, 77, 83, 89, 95],
//     b: [2, 12, 27, 29, 52, 55, 63, 70, 75, 82, 83, 91]
// }, {
//     a: [3, 9, 12, 13, 16, 25, 26, 26, 30, 38, 48, 61, 72, 88],
//     b: [6, 11, 12, 15, 21, 25, 26, 28, 31, 45, 61, 64, 80, 93]
// }, {
//     a: [4, 10, 25, 26, 30, 33, 33, 43, 49, 54, 61, 64, 67, 80, 81],
//     b: [7, 11, 21, 30, 36, 47, 54, 58, 59, 61, 66, 69, 70, 73, 77]
// }]

// for(let i=0;i<input.length;i++){
//     let result = arrangeStudents(input[i].a,input[i].b);
//     console.log(result);
// }