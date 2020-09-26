
let xv ={ t: 4, y: 6 };
process(xv, 8);

function process({ x, y }, z) {
    console.log(x);
    console.log(y);
    console.log(z);
}