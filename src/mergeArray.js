let A = [1,3,5,'_','_','_'];
let B = [2,4,6]

//1,2,3,4,5,6

let firstEmptySpace = A.length - B.length

A.unshift(...B, firstEmptySpace, B.length);



A = [1,3,5,2,4,6]
let i = 0;
let j = firstEmptySpace;

  while(i < A.length && j < A.length && i < j){
  
      if(A[i] < A[j]){
        i++;
      } else {
      
        let temp = A[i];
        A[i]= A[j];
        A[j] = temp;
        i++;
      }
  
  
  }