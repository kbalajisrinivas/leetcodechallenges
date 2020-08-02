// https://leetcode.com/problems/add-two-numbers/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var addTwoNumbers = function (l1, l2) {
    let l1Node = l1;
    let l2Node = l2;
    let currentNodePointer = null;
    let carryover = 0;
    let head = null;

    while (l1Node !== null || l2Node !== null) {
        let l1Value = l1Node ? l1Node.val : 0;
        let l2Value = l2Node ? l2Node.val : 0;
        let sum = l2Value + l1Value + carryover;
        if (sum >= 10) {
            carryover = Math.floor(sum / 10);
            sum = sum % 10;
        } else {
            carryover = 0;
        }

        if (currentNodePointer) {
            currentNodePointer.next = new ListNode(sum);
            currentNodePointer = currentNodePointer.next;
        } else {
            currentNodePointer = new ListNode(sum);
            head = currentNodePointer;
        }
        
        if (l1Node) {
            l1Node = l1Node.next;
        }
        if (l2Node) {
            l2Node = l2Node.next;
        }
    }
    if(carryover > 0){
        currentNodePointer.next = new ListNode(carryover);
    }
    return head;
};

// (2 -> 4 -> 3) + (5 -> 6 -> 4)

let list1 = new ListNode(5);
// list1.next = new ListNode(4);
// list1.next.next = new ListNode(3);

let list2 = new ListNode(5);
// list2.next = new ListNode(6);
// list2.next.next = new ListNode(4);

let result = addTwoNumbers(list1, list2);
console.log(result);