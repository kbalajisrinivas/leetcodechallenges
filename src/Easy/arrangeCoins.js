// https://leetcode.com/problems/arranging-coins/

var arrangeCoins = function(n) {
    let result = 0;
    let counter = 0;
    if(n === 0 || n == 1){
        return n;
    }
    while(result <= n){
        result = result+counter;
        counter++;
    }
    return counter - 2;
}
let result = arrangeCoins(1303455736);
console.log(result);
