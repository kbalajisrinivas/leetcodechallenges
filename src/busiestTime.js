function findBusiestPeriod(data) {
    let maximumVisitors = 0;
    let maximumTimeStamp;
    let running_visitor_count = 0;

    for (let i = 1; i < data.length; i++) {
        let current_timestamp_details = data[i];
        if (current_timestamp_details[0] !== data[i - 1][0]) {
            if (running_visitor_count > maximumVisitors) {
                maximumVisitors = running_visitor_count;
                maximumTimeStamp = data[i - 1][0];
            }
        }

        if (current_timestamp_details[2] === 1) {
            //increment here
            running_visitor_count = running_visitor_count + current_timestamp_details[1];
            //do the comparison only when the currenttimestamp is different than the previous timestamp


        } else {
            //decrement
            running_visitor_count = running_visitor_count - current_timestamp_details[1];
        }
    }

    //last element can increment or decrement, we need to track that;
    if (running_visitor_count > maximumVisitors) {
        maxTimeStamp = data[data.length - 1][0]
    }


    return maximumTimeStamp;
}


data = [[1487799425, 14, 1], 
[1487799425, 4, 1], 
[1487799425, 2, 1],
 [1487800378, 10, 1],
  [1487801478, 18, 1], 
  [1487901013, 1, 1], 
  [1487901211, 7, 1], 
  [1487901211, 7, 1]]

let result = findBusiestPeriod(data);
console.log(result);

