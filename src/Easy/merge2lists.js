// https://leetcode.com/problems/merge-two-sorted-lists/

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// another smart way to solve the problem
//loop over the elements only when both are not null
// if any of them is null, then you can just set the next pointer to the next element 
//of the array that is not null.

var mergeTwoLists = function (l1, l2) {
    let l1Node = l1;
    let l2Node = l2;
    let currentPointer = null;
    let head = null;

    while (l1Node !== null || l2Node !== null) {
        let smallestElement = null;
        if (l1Node === null) {
            smallestElement = l2Node;
            l2Node = l2Node.next;
        } else if (l2Node === null) {
            smallestElement = l1Node;
            l1Node = l1Node.next
        } else if (l1Node !== null && l2Node !== null) {
            smallestElement = l1Node.val < l2Node.val ? l1Node : l2Node;
            if (smallestElement == l1Node) {
                l1Node = l1Node.next;
            } else {
                l2Node = l2Node.next;
            }
        }



        if (currentPointer) {
            currentPointer.next = smallestElement;
            currentPointer = currentPointer.next;
        } else {
            currentPointer = smallestElement;
            head = currentPointer;
        }
    }
    return head;

};

let list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);

let list2 = new ListNode(5);
list2.next = new ListNode(6);
list2.next.next = new ListNode(8);

let result = mergeTwoLists(list1, list2);
console.log(result);