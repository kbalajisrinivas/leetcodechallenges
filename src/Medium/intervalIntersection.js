let a = [[1, 3], [4, 7], [9, 12]];
let b = [[3, 8], [9, 15]];

let result = intervalIntersection(a,b);
console.log(result);

function intervalIntersection(a, b){
    let merged_interval = [];
    if(a.length === 0 || b.length === 0){
        merged_interval.push(...a);
        merged_interval.push(...b);
    }

    let aCounter = 0;
    let bCounter = 0;

    while(aCounter < a.length && bCounter < b.length){
        const maxStartTime =  Math.max(a[aCounter][0], b[bCounter][0]);
        const minEndTime = Math.min(a[aCounter][1], b[bCounter][1]);
        if(maxStartTime > minEndTime){
            // no overlapping intervals
        } else {
            merged_interval.push([maxStartTime, minEndTime]);
        }

        const aEndTime = a[aCounter][1];
        const bEndTime = b[bCounter][1];
        if(aEndTime < bEndTime){
            aCounter++;
        } else {
            bCounter++;
        }
    }
    return merged_interval;
}