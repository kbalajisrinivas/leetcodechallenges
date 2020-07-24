var longestCommonSubsequence = function (text1, text2) {
    //text1 rows
    let mappingArray = new Array(text1.length);
    for (let i = 0; i < mappingArray.length; i++) {
        mappingArray[i] = new Array(text2.length).fill(0);
    }
    let maxLength = 0;

    //now we have a matrix
    for (let i = 0; i < text1.length; i++) {
        for (let j = 0; j < text2.length; j++) {
            let leftElement = 0, topElement = 0, topLeftElement = 0;
            if (j > 0) {
                leftElement = mappingArray[i][j - 1];
            }
            if (i > 0) {
                topElement = mappingArray[i - 1][j];
            }
            if (i > 0 && j > 0) {
                topLeftElement = mappingArray[i - 1][j - 1];
            }

            if (text1[i] === text2[j]) {
                mappingArray[i][j] = topLeftElement + 1
            } else {
                mappingArray[i][j] = Math.max(leftElement, topElement)
            }
            if (maxLength < mappingArray[i][j]) {
                maxLength = mappingArray[i][j];
            }
        }
    }
    return maxLength;

};




let result = longestCommonSubsequence("abcd", "ace");
console.log(result);