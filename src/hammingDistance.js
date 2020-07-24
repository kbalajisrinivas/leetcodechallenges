let x = 100000000024;
let y = 800000012001;
let binary = (x ^ y).toString(2);
let count1 = 0;
for(let i=0;i<binary.length;i++){
    if(binary[i]==="1"){
        count1++;
    }
}
console.log(count1);