// https://leetcode.com/problems/reverse-linked-list/
/**
 * 
 * 1 -> 6 -> 5 -> 2 -> 3 -> 4
 * currentNode = 1;
 * previousNode = 1
 
 start the iteration. 
    tempNode = currentNode;    //tempnode to 1
    nextNode = currentNode.next; // nextnode to 6
    currentNode.next = previousNode; //1 points to null
    previousNode = tempNode  so that //previousnode
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


function reverseLinkedList(head) {

    // for reversing a linked list, you need to have the current pointer. 
    let node = head;
    let previous = null;

    while(node !== null){
        let temp = node;
        let x = node.next;
        node.next = previous;
        node = x;
        previous = temp;
    }
   return previous;
}

let list1 = new ListNode(1);
list1.next = new ListNode(2);
// list1.next.next = new ListNode(4);
// list1.next.next.next = new ListNode(5);
// list1.next.next.next.next = new ListNode(6);
// list1.next.next.next.next.next = new ListNode(7);

let result = reverseLinkedList(list1);
console.log(result);