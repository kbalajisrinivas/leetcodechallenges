function ListNode(val, next){
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let a = new ListNode(4);
a.next = new ListNode(2);
a.next.next = new ListNode(3);
a.next.next.next = new ListNode(1);



var insertionSortList = function(head) {
    let currentNode = head;
    let counter = 0;
    
    while(currentNode !== null){
        insertElementAtPosition(head, currentNode, counter);
        counter++;
        currentNode = currentNode.next;
    }
    return head;
};

function insertElementAtPosition(head, currentNode, counter) {
    let node = head;
    let runningCounter = 0;
    let prev = null;
    let tempNode = currentNode.next;
    while(node !== null && runningCounter < counter){
        //find where to insert the currentNode. first point where current node is less than node
        if(currentNode.val < node.val){
            //swap. 
            if(prev === null){
                //first node
                let temp = currentNode.next;
                currentNode.next = node;
                node.next = temp;
                return currentNode;
            } else {
                //insertion point is somewhere.
                let temp = prev.next;
                prev.next = currentNode;
                currentNod.next = temp;
            }
            
        }
        runningCounter++;
        node = node.next;
    }
    node.next = tempNode;
}

let result = insertionSortList(a);
console.log(result);