class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}
let linkedList1 = new ListNode(1);
linkedList1.next = new ListNode(4);
linkedList1.next.next = new ListNode(5);

let linkedList2 = new ListNode(1);
linkedList2.next = new ListNode(3);
linkedList2.next.next = new ListNode(4);

let linkedList3 = new ListNode(2);
linkedList3.next = new ListNode(6);
// linkedList3.next.next = new ListNode(18);

let linkedList4 = new ListNode(20);
// linkedList4.next = new ListNode(25);
// linkedList4.next.next = new ListNode(26);

let lists = [linkedList1, linkedList2, linkedList3, linkedList4];
let result = mergeKLists(lists);
console.log(result);

function mergeKLists(lists) {

    let result_array = [];

    let input_array = [];
    let list_counter = 0;
    //     initial heap
    for (let i = 0; i < lists.length; i++) {
        let headNode = lists[i];
        input_array.push({
            value: headNode.val,
            listId: i
        });
        lists[i] = headNode.next;
    }

    //     each time a list becomes empty we need to increase the list_counter by 1

    while (list_counter < lists.length) {
        let heaped_array = heapify(input_array, 0, input_array.length - 1);
        let removedElement = input_array[0];
        result_array.push(removedElement.value);
        let head = lists[removedElement.listId];
        if (head === null) {
            list_counter++;
            input_array.shift();
        } else {
            input_array[0] = {
                value: head.val,
                listId: removedElement.listId
            };
            lists[removedElement.listId] = head.next;
        }
    }
    return result_array;
};


// we need to form a min-heap
function heapify(input_array, index, end_pos) {

    //     need to insert the element in an array
    let leftElement = 2 * index + 1;
    let rightElement = 2 * index + 2;
    let smallestElement = index;
    if (leftElement < end_pos && input_array[leftElement].value < input_array[smallestElement].value) {
        smallestElement = leftElement;
    }
    if (rightElement < end_pos && input_array[rightElement].value < input_array[smallestElement].value) {
        smallestElement = rightElement;
    }
    if (smallestElement !== index) {
        //         swap the elements
        let temp = input_array[smallestElement];
        input_array[smallestElement] = input_array[index];
        input_array[index] = temp;
        heapify(input_array, smallestElement, end_pos)
    }

    return input_array;
}