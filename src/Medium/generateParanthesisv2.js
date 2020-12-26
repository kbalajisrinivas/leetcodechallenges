var generateParenthesis = function (n) {
    let result = [];
    function addParanthesis(left, right, paranthesisType, str) {
        if (left === right && left === n && paranthesisType === "right") {
            str = str + ")";
            result.push(str);
            return;
        }

        if (left > n) {
            return;
        }

        if (right > left) {
            return;
        }
        if (paranthesisType === "left") {
            str = str + "(";
        } else {
            str = str + ")";
        }

        addParanthesis(left + 1, right, "left", str);
        addParanthesis(left, right + 1, "right", str);
    }

    addParanthesis(1, 0, "left", "");
    return result;
};

let result = generateParenthesis(3);
console.log(result);