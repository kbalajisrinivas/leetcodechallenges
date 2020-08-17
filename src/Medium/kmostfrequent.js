
  // https://leetcode.com/problems/top-k-frequent-elements/
//console.log('Practice makes Perfect!');  

// Given a non-empty array of integers, return the k most frequent elements.
// Input: nums = [1,1,1,2,3,3,4,4,4], k = 2
// Output: [1,2]
/*


2,3,[1,4]  

1 2 3
 
dict = {

"1": 3,
"3": 2,
"2": 1
}

array of k (k most frequent element)

[3,2]

O(nlogn) -- using heaps, but am not familiar with that. 



*/


let result = kmostFrequent([1,1,1,2,3,3,4,4,4],2)
console.log(result);


function kmostFrequent(input_array, kTopElements){
  
//validate the input_array to make sure that it is greater than or equal to ktopelements
  
  count_dictionary = {};
  let result_array = [];
  
  for(let i=0;i<input_array.length;i++){
    let current_element = input_array[i];
    
    if(!count_dictionary[current_element]){
      count_dictionary[current_element] = 0;
    }
    
    count_dictionary[current_element]++;
  }
  
  let frequency_array = (new Array(input_array.length));
  console.log(frequency_array);
  
  let keys = Object.keys(count_dictionary);
  
  for(let i=0;i<keys.length;i++){
    let frequency = count_dictionary[keys[i]];
    if(!frequency_array[frequency]){
        frequency_array[frequency] = [];
    }
    frequency_array[frequency].push(keys[i]);
  }
  console.log(frequency_array);
  
  for(let i=frequency_array.length;i>=0;i--){
     if(result_array.length <= kTopElements){
       console.log(frequency_array[i]);
        result_array.push(...frequency_array[i]);
       
     }
  }
  
  if(result_array.length > kTopElements){
    result_array.splice(0, kTopElements);
     
  }
  return result_array;
  
}