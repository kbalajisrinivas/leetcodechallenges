function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/****
 * 
 * This is not a proper solution. 
 */

var oddEvenList = function (head) {

    let evenHead = null;
    let evenNode = null;
    let node = head;
    let prevNode;

    while (node !== null) {
        if (!evenHead) {
            evenNode = node.next;
            evenHead = evenNode;
        } else {
            evenNode.next = node.next;
            evenNode = evenNode.next;
        }
        prevNode = node;
        if (node.next !== null) {
            node.next = node.next.next;
            node = node.next;
        } else {
            node = null;
        }
    }
    prevNode.next = evenHead;
    return head;
};


let list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);
// list1.next.next.next = new ListNode(8);
// list1.next.next.next.next = new ListNode(20);
// list1.next.next.next.next.next = new ListNode(22);
// list1.next.next.next.next.next.next = new ListNode(24);


let result = oddEvenList(list1);
console.log(result);