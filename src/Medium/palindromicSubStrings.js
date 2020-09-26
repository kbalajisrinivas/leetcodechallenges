var countSubstrings = function (s) {

    let palindromic_substrings = 0;
    for (let i = 0; i < s.length; i++) {
        let substrings = findPalindromicStringAtIndex(s, i);
        palindromic_substrings += substrings;
    }
    return palindromic_substrings;
};

function findPalindromicStringAtIndex(s, i) {

    let leftPointer = i;
    let rightPointer = i;
    let palindromicSubstrCount = 0;
    
    while (leftPointer >= 0 && rightPointer < s.length) {
        if (s.charAt(leftPointer) === s.charAt(rightPointer)) {
            palindromicSubstrCount++;
        } else {
            break;
        }
        leftPointer--;
        rightPointer++;
    }

    leftPointer = i;
    rightPointer = i + 1;
    while (leftPointer >= 0 && rightPointer < s.length) {
        if (s.charAt(leftPointer) === s.charAt(rightPointer)) {
            palindromicSubstrCount++;
        } else{
            break;
        }
        leftPointer--;
        rightPointer++;
    }

    return palindromicSubstrCount;
}

let result = countSubstrings("dnncbwoneinoplypwgbwktmvkoimcooyiwirgbxlcttgteqthcvyoueyftiwgwwxvxvg");
console.log(result);