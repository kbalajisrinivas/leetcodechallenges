// https://leetcode.com/problems/word-pattern/
let pattern = "abba";
let s = "dog cat cat dog";
let patternDict = {};
let strDict = {};
let strArray = s.split(" ");
if (pattern.length !== strArray.length) {
    return false;
}
for (let i = 0; i < pattern.length; i++) {
    const currentCharacter = pattern[i];
    if (!patternDict[currentCharacter]) {
        patternDict[currentCharacter] = strArray[i];
        if (strDict[strArray[i]]) {
            return false;
        }
        strDict[strArray[i]] = currentCharacter;
    } else {
        //the value already in patternDictionary is not same as the currentElement
        if (patternDict[currentCharacter] !== strArray[i]
            || strDict[strArray[i]] !== currentCharacter) {
            return false;
        }
    }
}
return true;