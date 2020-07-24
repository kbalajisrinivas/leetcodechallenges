function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var rotateRight = function(head, k) {
    if(head === null){
        return head;
    }
    let length = 0;
    let lastnodepointer = null;
    let node = head;
    while(node !== null){
        node = node.next;
        length++;
    }
    console.log(length);
    
//     at this point i have the length of the linkedlist
    k = k%length;
    if(k==0){
        return head;
    }
    
    //find the kth element from the end of the linked list
    let fastPointer = head;
    let slowPointer = head;
    let counter = 0;
    let previousNode = null;
    
//     we will think about it. 
    while(fastPointer !== null){
        previousNode = fastPointer;
        if(counter > k){
            fastPointer = fastPointer.next;
            slowPointer = slowPointer.next;
        } else {
          fastPointer = fastPointer.next;   
        }
        counter++;
    }
    
    let temp = slowPointer.next;
    slowPointer.next = null;
    previousNode.next = head;
    
    return temp;
};


let list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(3);
list1.next.next.next = new ListNode(4);
list1.next.next.next.next = new ListNode(5);

let result = rotateRight(list1,1000);
console.log(result);