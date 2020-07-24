function commonChild(s1, s2) {
    let dp_array = [];
    for (let i = 0; i < s1.length; i++) {
        let sub_array = (new Array(s1.length)).fill(0);
        dp_array.push(sub_array);
    }
    if (s1[0] === s2[0]) {
        dp_array[0][0] = 1;
    }

    // populate first row
    for (let j = 1; j < s2.length; j++) {
        if (s1[0] === s2[j]) {
            dp_array[0][j] = 1;
        } else {
            dp_array[0][j] = dp_array[0][j - 1];
        }
    }

    //populate first column
    for (let i = 1; i < s1.length; i++) {
        if (s1[i] === s2[0]) {
            dp_array[i][0] = 1;
        } else {
            dp_array[i][0] = dp_array[i - 1][0];
        }
    }

    for (let i = 1; i < s1.length; i++) {
        for (let j = 1; j < s2.length; j++) {
            if (s1[i] === s2[j]) {
                dp_array[i][j] = dp_array[i - 1][j - 1] + 1;
            } else {
                {
                    dp_array[i][j] = Math.max(dp_array[i - 1][j], dp_array[i][j - 1]);
                }
            }
        }
    }
    return dp_array[s1.length - 1][s2.length - 1];
}

let result = commonChild("SHINCHAN", "NOHARAAA");
console.log(result);