var findMedianSortedArrays = function (nums1, nums2) {
    let numberOfElements = nums1.length + nums2.length;
    let isOdd = numberOfElements % 2 == 1;
    let i = 0;
    let j = 0;
    let counter = null;
    let prev = null;
    let median = null

    while (i < nums1.length && j < nums2.length && median === null) {
        let element = null;
        if (nums1[i] < nums2[j]) {
            element = nums1[i];
            i++;
        } else {
            element = nums2[j];
            j++;
        }

        counter++;
        if (isOdd) {
            let midElementCount = Math.ceil(numberOfElements / 2);
            if (counter === midElementCount) {
                median = element;
            }
        } else {
            let midElementCount = (numberOfElements / 2) + 1;
            if (counter === midElementCount) {
                median = (prev + element) / 2;
            }
        }
        prev = element;
    }

    if (median) {
        return median;
    }

    while (i < nums1.length) {
        
        counter++;
        if (isOdd) {
            let midElementCount = Math.ceil(numberOfElements / 2);
            if (counter === midElementCount) {
                return nums1[i];
            }
        } else {
            let midElementCount = (numberOfElements / 2) + 1;
            if (counter === midElementCount) {
                return (prev + nums1[i]) / 2;
            }
        }
        prev = nums1[i];
        i++;
    }

    while (j < nums2.length) {
        counter++;
        if (isOdd) {
            let midElementCount = Math.ceil(numberOfElements / 2);
            if (counter === midElementCount) {
                return nums2[j];
            }
        } else {
            let midElementCount = (numberOfElements / 2) + 1;
            if (counter === midElementCount) {
                return (prev + nums2[j]) / 2;
            }
        }
  
        prev = nums2[j];
        j++;
    }
};

let result = findMedianSortedArrays(
    [],
    []
)
console.log(result);