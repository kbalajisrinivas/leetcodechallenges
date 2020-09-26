/*
[1,2,3,4]
brute force: first look for maximum combination with 1 
then look for maximum combination with 2.
print all the combinations. 
1,2,3, 4 

1,2,3,4
1,3,2,4
1,3,4,2

1,2,4,3
1,4,2,3
1,4,3,2

1,2 4,3



*/


let inputArray = [1, 2, 3, 4];

let result = recursivelyFindInput(inputArray);
let maxTime = null;
for (let i = 0; i < result.length; i++) {
    maxTime = checkValidTime(result[i], maxTime);
}
if (maxTime === null) {
    return "";
} else {
    let hour = maxTime.slice(0, 2).join("");
    let seconds = maxTime.slice(2, 4).join("");
    return `${hour}:${seconds}`;
}


function checkValidTime(input, max) {

    let hour = parseInt(input.slice(0, 2).join(""));
    let seconds = parseInt(input.slice(2, 4).join(""));
    if ((hour < 24 && seconds <= 59) || (hour === 24 && seconds === 0)) {
        if (maxTime === null) {
            return input;
        } else {
            let maxHour = parseInt(max.slice(0, 2).join(""));
            let maxSecond = parseInt(max.slice(2, 4).join(""));
            if (hour > maxHour) {
                return input;
            } else if (hour < maxHour) {
                return max;
            } else {
                if (seconds > maxSecond) {
                    return input;
                } else {
                    return max;
                }
            }
        }
    }
    return max;
}

function recursivelyFindInput(arr) {
    let trackerArray = [[arr[arr.length - 1]]];
    let i = arr.length - 2;
    while (i >= 0) {
        let currentNumber = arr[i];
        trackerArray = insertNumberInAllPositions(trackerArray, currentNumber);
        i--;
    }
    return trackerArray;
}

function insertNumberInAllPositions(arr, num) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j <= arr[i].length; j++) {
            let x = [...arr[i]];
            x.splice(j, 0, num);
            result.push(x);
        }
    }
    return result;
}