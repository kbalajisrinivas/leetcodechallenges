
// let a = 1;
// let b = 2;
// let c = 3;
// let t = { "a": 1, "b": 2, "c": 3, "d": 4 };
// console.log(t);
// abcd(a, b, c);

let a = {
    bfunc: function(test){
        let result = this.calledFromFunc();
    },
    cFunc: (test1)=>{
        let result = this.calledFromFunc();
    },
}
//let x1 = a.bfunc();
let x2 = a.cFunc();

function calledFromFunc(){
    console.log("called from function");
}