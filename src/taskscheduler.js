/*
["A","A","A","B","B","B"]
n = 2

there should be 2 intervals between same A or B tasks 

A-> B -> idle -> A -> B -> idle -> A -> B

["A","C","B","C","C","C"] => n = 2

C -> A -> B -> C -> idle -> idle -> C -> idle -> idle -> C

n = 1

C -> A -> C -> B -> C -> idle -> C

A, B, C, C, B,A, A , n = 3

a -b-c-idle-a-b-c-idle-a
if not doing the above approach
a-b-c-idle-c-b-a-idle-idle--idle-a

order by frequency desc
a - 3
b-2 
c - a

a-> b->c

solution:
loop over the elements and store the count in the dictionary O(N)
max frequency element goes first
the time consuming part is identifying the next element that needs to come to the queue
if there are no items left in an iteration, we go to idle state and then start the processing again 
from the maximum element. 
in the above example, let's say A comes first, how does it know it should put B or C next 
can we use a linked list so that we always keep going next, next?


*/

// class Node {
//     constructor(value){
//         this.next = null;
//         this.value = value;
//     }
// }
function getNode(value) {
    return {
        next: null,
        value: value
    }
}
let input = ["A", "B"];
let n = 2;
let count_dictionary = {};
for (let i = 0; i < input.length; i++) {
    if (!count_dictionary[input[i]]) {
        count_dictionary[input[i]] = {
            id: input[i],
            count: 0
        }
    }
    count_dictionary[input[i]]["count"] = count_dictionary[input[i]]["count"] + 1;
}
let items_by_count = [];
for (let item in count_dictionary) {
    items_by_count.push(count_dictionary[item]);
}
let sorted_items_by_count = items_by_count.sort((a, b) => {
    return b.count - a.count;
});
console.log(sorted_items_by_count);

// create a linkedlist;
// each time you reach the interval, you need to start from the linkedlist
// keep removing items from the linkedlist whenever the count becomes zero.

let head = getNode(sorted_items_by_count[0]);
let node = head;
for (let i = 1; i < sorted_items_by_count.length; i++) {
    node.next = getNode(sorted_items_by_count[i]);
    node = node.next;
}

// at this point do we have all the elements in the linkedlist?

console.log(head);
let numberOfIntervals = 0;
let nCounter = 0;
let prev = null;
node = head;
while (head !== null) {
    nCounter = 0;
    while (nCounter <= n && node !== null) {
        // decrement the count by 1
        count_dictionary[node.value.id].count = count_dictionary[node.value.id].count - 1;
        if (count_dictionary[node.value.id].count === 0) {
            if (prev === null) {
                head = node.next;
            } else {
                prev.next = node.next;
            }
        } else {
            prev = node;
        }
        node = node.next;
        numberOfIntervals++;
        nCounter++;
    }
    if (nCounter <= n && head !== null) {
        numberOfIntervals = numberOfIntervals + n + 1 - nCounter;
    }
    node = head;
    prev = null;
}

console.log(numberOfIntervals);



