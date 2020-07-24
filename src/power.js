
let result = power(2.1,3);
console.log(result);
function power(x, n) {
    if (n == 0) {
        return 1;
    }
    return x * power(x, n - 1);
}