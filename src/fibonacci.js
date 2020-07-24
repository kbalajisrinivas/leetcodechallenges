let number = 8;
let counter = 0;
// let result = fibonacci(8);
// console.log(result);
let fibonacci_array = new Array(8)
fibonacci_array[0] = 0;
fibonacci_array[1] = 1;

for (let i = 2; i < 8; i++) {
    fibonacci_array[i] = fibonacci_array[i - 1] + fibonacci_array[i - 2];
}

// console.log(fibonacci_array[7]);

let stack = [];
stack.push(8);
stack.push(10);
console.log(stack);
// let t= stack.pop();
// console.log(t);
// console.log(stack)
let t = stack.shift();
console.log(t);
console.log(stack);




function fibonacci(n) {
    counter = counter + 1;
    console.log(counter);
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

