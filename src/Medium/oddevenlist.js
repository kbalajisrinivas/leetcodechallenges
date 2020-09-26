// https://leetcode.com/problems/odd-even-linked-list/

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/****
 * 
 * This is not a proper solution. 
 */

// var oddEvenList = function (head) {

//     let evenHead = null;
//     let evenNode = null;
//     let node = head;
//     let prevNode;

//     while (node !== null) {
//         if (!evenHead) {
//             evenNode = node.next;
//             evenHead = evenNode;
//         } else {
//             evenNode.next = node.next;
//             evenNode = evenNode.next;
//         }
//         prevNode = node;
//         if (node.next !== null) {
//             node.next = node.next.next;
//             node = node.next;
//         } else {
//             node = null;
//         }
//     }
//     prevNode.next = evenHead;
//     return head;
// };


let list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(3);
list1.next.next.next = new ListNode(4);
list1.next.next.next.next = new ListNode(5);
list1.next.next.next.next.next = new ListNode(22);
// list1.next.next.next.next.next.next = new ListNode(24);



var oddEvenList = function(head) {
    
    let oddNode = head;
    let nodeHead_2 = head.next;
    let prev;
    let evenNode;
    
    while(oddNode !== null){
        if(!evenNode){
            evenNode = oddNode.next;
        } else {
            evenNode.next = oddNode.next;
            evenNode = evenNode.next;
        }
        
        if(oddNode.next !== null){
        oddNode.next = oddNode.next.next
        }
        prev = oddNode;
        oddNode = oddNode.next;
    }
  
    prev.next = nodeHead_2;
    return head;
};
let result = oddEvenList(list1);
console.log(result);