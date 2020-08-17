
// https://leetcode.com/problems/linked-list-cycle/

//There are 2 solutions to this. one is to use a visited flag
//and another one is to use a slow pointer and a fast pointer. 
// slow and fast pointer is little tricky. 

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
let node1 = new ListNode(1);
let list1 = node1;
list1.next = new ListNode(2);
// let node3 = new ListNode(3);
list1.next.next = new ListNode(3);
list1.next.next.next = new ListNode(4);
list1.next.next.next.next = new ListNode(5);
list1.next.next.next.next.next = new ListNode(6);
// list1.next.next.next.next.next.next = new ListNode(7);
// list1.next.next.next.next.next.next.next = new ListNode(8);
list1.next.next.next.next.next.next = node1;


function detectLoop(sll){
    var slowPointer = sll, 
        fastPointer = sll;
 
    while(slowPointer && fastPointer && fastPointer.next){
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;
 
      if(slowPointer == fastPointer){
         return true;
      }
    }
    return false;
 }

 let result = detectLoop(list1);
 console.log(result);