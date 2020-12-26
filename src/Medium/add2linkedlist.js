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
var addTwoNumbers = function(l1, l2) {
    
    let l1Length = 0;
    let l2Length = 0;
    
    while(l1 !== null){
        l1 = l1.next;
        l1Length++;      
    }
    
    while(l2 !== null){
        l2 = l2.next;
        l2Length++;
    }
    
    let l1StartingPoint = null;
    let l2StartingPoint = null;
    let maxList = Math.max(l1Length, l2Length);
    if(maxList === l1Length){
        let diff = maxList - l2Length;
        let counter = 0;
        while(counter <= diff){
            l1StartingPoint = l1StartingPoint.next;
            counter++;
        }
    } else {
        let diff = maxList - l1Length;
        let counter = 0;
        while(counter <= diff){
            l2StartingPoint = l2StartingPoint.next;
            counter++;
        }
    }
    
    let l1Start = l1StartingPoint ? l1StartingPoint : l1;
    let l2Start = l2StartingPoint ? l2StartingPoint : l2;
    
    
    
};

function addRecursively(list1, list2){
    if(list1 === null && list2 === null){
        return 0;
    }
    
}