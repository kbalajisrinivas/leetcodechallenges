var removeKdigits = function (nums, k) {

    let i = 1;
    let stack = [nums[0]];
    let removeCounter = 0;
    while (i < nums.length) {

        if (nums[i] <= stack[stack.length - 1] && removeCounter < k) {
            stack.pop();
            stack.push(nums[i]);
            removeCounter++;
        } else {
            stack.push(nums[i]);
        }
        i++;
    }
    console.log(removeCounter);
    console.log(k);
    console.log("====");
    if (removeCounter < k) {
        let removal = k - removeCounter;
        console.log(removal);
        console.log(stack.length);
        stack = stack.slice(0, stack.length - removal);
    }
    console.log("abcd");
    console.log(stack);
    console.log(i);
    if (stack.length > 1) {
        return parseInt(stack.join(""), 10).toString();
    } else {
        return "";
    }


};

let result = removeKdigits("10", 2);
console.log(result);