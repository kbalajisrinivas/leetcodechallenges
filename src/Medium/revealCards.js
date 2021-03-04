// copied from Leetcode

var deckRevealedIncreasing = function(deck) {
    let order = [...deck].sort((a, b) => a - b);  // difference
 let res = [];
 while (true) {
     if (order.length == 0) break;
     
     let reveal = order[order.length - 1];  // difference
     console.log(reveal);
     order.pop();   // difference
     if (res.length != 0) {
         let lastElement = res.pop();
         res.unshift(lastElement);
     }
     console.log(res);
     console.log("====");
     res.unshift(reveal);
 }
 return res;
};

let input = [17,13,11,2,3,5,7];
let result = deckRevealedIncreasing(input);
console.log(result);