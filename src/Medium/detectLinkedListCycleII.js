function Node(val, next) {
    this.val = val;
    this.next = next;
}

let l1 = new Node(1, null);

l1.next = new Node(2);
l1.next.next = l1;
// let l3 = l1.next.next = new Node(3);

// l1.next.next.next = new Node(4);
// l1.next.next.next.next = new Node(6);
// l1.next.next.next.next.next = new Node(5);
// l1.next.next.next.next.next.next = new Node(10);
// l1.next.next.next.next.next.next.next = new Node(11);

// l1.next.next.next.next.next.next.next.next = l3;

function isCycleExists(head) {

    let slowPointer = head;
    let fastPointer = head;
    let slowCounter = 0;
    let fastCounter = 0;
    while (fastPointer !== null && fastPointer.next !== null) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
        slowCounter = slowCounter + 1;
        fastCounter = fastCounter + 2;
        if (slowPointer === fastPointer) {
            break;
        }
    }

    slowPointer = head;
    let startingNode = null;
    while (true) {

        if (slowPointer === fastPointer) {
            startingNode = slowPointer;
            break;
            // return slowPointer.val;
        }
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next;
    }

    // cycle length
    let initialPointer = startingNode.next;
    let counter = 0;
    while(initialPointer !== startingNode){
        counter++;
        initialPointer = initialPointer.next;
    }


    return false;
}

let isCycle = isCycleExists(l1);
console.log(isCycleExists);