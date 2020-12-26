let intervals = [[8, 10], [7, 6], [5, 8]];


let result = mergeIntervals(intervals);
console.log(result);

function mergeIntervals(intervals) {
    let merged_Interval = [];
    if (intervals.length <= 1) {
        return intervals;
    }
    intervals.sort((a, b) => { return a[0] - b[0] });
    merged_Interval.push(intervals[0]);
    for (let i = 1; i < intervals.length; i++) {

        let currentInterval = intervals[i];
        let lastInsertedInterval = merged_Interval[merged_Interval.length-1];
        //non- overlapping intervals
        //previous endTime is less than currentStartingTime
        if(lastInsertedInterval[1] < currentInterval[0]){
            merged_Interval.push(currentInterval);
        } else {
            //current interval's start time is less than last inserted interval
            let maxEndTime = Math.max(currentInterval[1], lastInsertedInterval[1]);
            lastInsertedInterval[1] = maxEndTime
        }
    }
    return merged_Interval;
}