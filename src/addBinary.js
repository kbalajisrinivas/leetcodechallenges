let a = "1010";
let b = "1011";

if (a.length !== b.length) {
    if (a.length > b.length) {
        // modify b's string
        let diff = a.length - b.length;
        for (let i = 0; i < diff; i++) {
            b = "0" + b;
        }
    } else {
        // modify a's string
        let diff = b.length - a.length;
        for (let i = 0; i < diff; i++) {
            a = "0" + a;
        }
    }
}

function add2Numbers(x, y) {
    if(x.length > 1 && x[0] === "0"){
        x = x[1];
    }
    if(y.length > 1 && y[0] === "0"){
        y = y[1];
    }
    if (x == "0" && y == "0") {
        return "00";
    } else if (x == "1" && y == "1") {
        return "10"
    } else if ((x == "0" && y == "1") || (x == "1" && y == "0")) {
        return "01";
    } else if (x == "10" && y == "0") {
        return "10";
    } else if (x == "10" && y == "1") {
        return "11";
    }
}

let result = "";
let carryOver = "0";
for (let i = a.length - 1; i >= 0; i--) {
    let left = add2Numbers(carryOver, a[i]);
    let right = add2Numbers(left, b[i]);
    result = right[1] + result;
    carryOver = right[0]
}
if (carryOver !== "0") {
    result = carryOver + result;
}
console.log(result);