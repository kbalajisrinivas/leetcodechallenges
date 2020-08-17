// https://leetcode.com/problems/generate-parentheses/

var generateParenthesis = function(n) {
    let result = [];
    recurseParanthesis("", 0, 0, n, result);
    return result;
};


function recurseParanthesis(str, open, close, max, result){
    if(str.length === max*2){
        result.push(str);
        return;
    }
    
    if(open < max){
        recurseParanthesis(str+"(", open+1, close, max, result);
    }
    
    if(close < open){
        recurseParanthesis(str+")", open, close+1, max, result);
    }
}

let result = generateParenthesis(3);
console.log(result);