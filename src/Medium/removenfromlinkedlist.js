// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var removeNthFromEnd = function (head, n) {

    let dummy_head = new ListNode(0);
    dummy_head.next = head;
    let npointer = dummy_head.next;
    let counter = 1;
    let node = head;

    while (node !== null) {
        if (counter <= n + 1) {
            node = node.next;
        } else {
            node = node.next;
            npointer = npointer.next
        }
        counter = counter + 1;
    }
    npointer.next = npointer.next.next;
    return npointer.next;

};

let list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);
list1.next.next.next = new ListNode(5);
list1.next.next.next.next = new ListNode(6);
list1.next.next.next.next.next = new ListNode(8);

let result = removeNthFromEnd(list1, 1);