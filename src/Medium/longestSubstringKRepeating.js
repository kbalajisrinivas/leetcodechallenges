var longestSubstring = function (s, k) {

    if (s === "") {
        return 0; s
    }

    const frequencyMap = {};
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const currentCharacter = s[i];
        if (frequencyMap[currentCharacter] === undefined) {
            frequencyMap[currentCharacter] = 0;
        }
        frequencyMap[currentCharacter] = frequencyMap[currentCharacter] + 1
    }

    let isValid = true;
    for (const [key, value] of Object.entries(frequencyMap)) {
        if (value < k) {
            isValid = false;
            break;
        }
    }
    if (isValid) {
        return s.length;
    }

    //loop over a string until you come to a point where the frequencymap of that character is less than k. 
    // in that case, loop over the string again and check the length
    let start = 0;
    for (let i = 0; i < s.length; i++) {
        const characterOccurrence = frequencyMap[s[i]];
        if (characterOccurrence < k) {
            const subString = s.substring(start, i);
            let strLength = longestSubstring(subString, k);
            result = Math.max(strLength, result);
            start = i + 1;
        }
        if (i === s.length - 1) {
            const subString = s.substring(start, i+1);
            let strLength = longestSubstring(subString, k);
            result = Math.max(strLength, result);
        }
    }

    return result;
};

let s = "abcdabcd", k = 3;
let result = longestSubstring(s, k);
console.log(result);