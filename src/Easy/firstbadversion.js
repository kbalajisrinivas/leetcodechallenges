// https://leetcode.com/problems/first-bad-version/

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let i = 1;
        let j = n;
        while(i < j){
            let middleElement = i + Math.floor((j-i)/2);
            let isBad = isBadVersion(middleElement);
            if(isBad){
                j = middleElement;
            } else {
                i = middleElement+1;
            }
        }
        return i;
    };
};
function isBadVersion(i){
    if(i>3){
        return true
    }
    return false;
}

let soln = solution(isBadVersion);
let x = soln(5);
console.log(x);