let intervals = [[1, 3], [5, 7], [8, 12]];
let newInterval = [8, 13];


let firstInterval = intervals[0];
let lastInterval = intervals[intervals.length - 1];
if (newInterval[0] <= firstInterval[0]) {
    intervals.unshift(newInterval)
} else if (newInterval[0] >= lastInterval[0]) {
    intervals.push(newInterval);
} else {
    //if the newinterval is less than the first interval

    for (let i = 1; i < intervals.length - 1; i++) {
        let prevInterval = intervals[i - 1];
        let nextInterval = intervals[i];
        if (newInterval[0] >= prevInterval[0] && newInterval[0] <= nextInterval[0]) {
            intervals.splice(i, 0, newInterval);
            break;
        }
    }
}

//then merge
let result = mergeIntervals(intervals, newInterval);
console.log(result);

function mergeIntervals(intervals, newInterval) {
    let merged_Interval = [];
    if (intervals.length <= 1) {
        return intervals;
    }
    intervals.sort((a, b) => { return a[0] - b[0] });

    merged_Interval.push(intervals[0]);
    for (let i = 1; i < intervals.length; i++) {

        let currentInterval = intervals[i];
        let lastInsertedInterval = merged_Interval[merged_Interval.length - 1];
        //non- overlapping intervals
        //previous endTime is less than currentStartingTime
        if (lastInsertedInterval[1] < currentInterval[0]) {
            merged_Interval.push(currentInterval);
        } else {
            //current interval's start time is less than last inserted interval
            let maxEndTime = Math.max(currentInterval[1], lastInsertedInterval[1]);
            lastInsertedInterval[1] = maxEndTime
        }
    }
    return merged_Interval;
}