/*
2 stacks (0,1)
stack_current_pointers = [0,0];
stack_initial_pointers = [0,0];

array = []
 

stack.push(0,5);
push(){
    stack_current_pointer[stack_number] = array.length - 1
    if(!stack_initial_pointer[stack_number]){
        stack_initial_pointer[stack_number] = array.length -1;
    }


}

pop() {


}


*/

const number_of_stacks = 2;
const total_number_of_elements = 10;
let stack_top_pointers = (new Array(number_of_stacks)).fill(null);
let pointer_iterator = (new Array(number_of_stacks)).fill(null);
let stack_next_pointers = (new Array(total_number_of_elements)).fill(0);
let input_array = [];

push(0, 2);
push(1, 2);
push(1, 3);
push(0, 4);
push(0, 10);
push(1, 8);
console.log(input_array);
let result = pop(1);
console.log(result);
result = pop(0);
console.log(result);
result = pop(1);
console.log(result);
result = pop(1);
console.log(result);
result = pop(0);
console.log(result);
result = pop(1);
console.log(result);
result = pop(1);
console.log(result);
result = pop(1);
console.log(result);
result = pop(1);
console.log(result);
result = pop(1);
console.log(result);




function push(stack_number, element) {
    // if (stack_top_pointers[stack_number] == null) {
    //     stack_top_pointers[stack_number] = input_array.length;
    // }
    // need to set the value in stack_next_pointer
    // we will keep track of the point iterator
    let current_iterator = stack_top_pointers[stack_number];
    // only if there are elements in the point_iterator, we will use them, 
    if (current_iterator !== null) {
        stack_next_pointers[input_array.length] = stack_top_pointers[stack_number]; //(current_element)
    }
    stack_top_pointers[stack_number] = input_array.length;
    // pointer_iterator[stack_number] = input_array.length;
    input_array.push(element);
}

function pop(stack_number) {
    // once you remove the element, we need to update the top_pointer
    let current_pointer = stack_top_pointers[stack_number];
    if(!current_pointer){
        return "Stack Overflow";
    }
    let element = input_array[current_pointer];

    let next_pointer = stack_next_pointers[current_pointer];
    stack_top_pointers[stack_number] = next_pointer;
    return element;
}

