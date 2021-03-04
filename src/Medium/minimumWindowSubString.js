// from Pramp
function getShortestUniqueSubstring(arr, str) {
    // your code goes here

    let minStringLength = Number.MAX_SAFE_INTEGER;
    let minString = "";

    let startPointer = 0;
    let endPointer = 0;

    while (startPointer < str.length && endPointer < str.length) {
        let trackingSet = new Set(arr);
        let isValid = isValidString(startPointer, endPointer, str, trackingSet);
        if (!isValid) {
            endPointer++;
        } else {
            let minStr = str.substring(startPointer, endPointer + 1);
            let minLength = Math.min(minStringLength, minStr.length);
            if (minLength !== minStringLength) {
                minStringLength = minLength;
                minString = minStr;
            }
            startPointer++;
        }
    }
    return minString;

}


function isValidString(start, end, str, trackingSet) {
    let isValidString = true;
    for (let i = start; i <= end; i++) {
        const currentCharacter = str[i];
        if (trackingSet.has(currentCharacter)) {
            trackingSet.delete(currentCharacter);
        }
    }
    return trackingSet.size === 0;
}


let result = getShortestUniqueSubstring(['A', 'B', 'C'], "ADOBECODEBANCDDD");
console.log(result);