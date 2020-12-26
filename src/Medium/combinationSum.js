var combinationSum = function (candidates, target) {
    let result = [];
    let localResult = [];
    function getResult(i, sum, path) {
        if (sum > target) {
            return;
        }
        if (sum === target) {
            localResult.push(path);
            return;
        }
        for (let j = i; j < candidates.length; j++) {
            let currentCandidate = candidates[j];
            let temp = [...path];
            let localSum = sum + currentCandidate;
            temp.push(currentCandidate);
            getResult(j, localSum, temp);
        }
    }

    getResult(0, 0, []);
    result.push(...localResult);

    return result;
};

let candidates = [1], target = 2;
let result = combinationSum(candidates, target);
console.log(result);