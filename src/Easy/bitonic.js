let arr = [4, 5, 7, 9, 10, -1, 2];

let left = 0;
let right = arr.length - 1;

while (left <= right) {
    if (left === right) {
        console.log(arr[left]);
        return;
    }
    let mid = Math.floor((left + right) / 2);
    let leftElement = arr[mid - 1];
    let rightElement = arr[mid + 1];
    if (leftElement > arr[mid]) {
        // element is on left
        right = mid - 1;
    } else if (rightElement > arr[mid]) {
        left = mid + 1;
    } else {
        console.log(arr[mid]);
        return arr[mid];
    }
}