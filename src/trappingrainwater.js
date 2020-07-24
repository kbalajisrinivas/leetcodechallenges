
let input_array = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

let rainwater_counter = 0;
let current_water_counter = 0;
let startValue = -1;
let startIndex = 0;

let endValue = -1;
let endIndex = 0;

for (let i = 0; i < input_array.length - 1; i++) {

    if (input_array[i + 1] < input_array[i]) {
        if (startValue == -1) {
            // There is no starting point. we found our first starting point
            startValue = input_array[i];
            startIndex = i; // used for calculating rain water
        } else if (endValue !== -1) {
            //there is some start value and endValue, we found a decreasing sequence again.
            //calculate the rainwater area. 
            rainwater_counter = rainwater_counter + current_water_counter;
            current_water_counter = 0;
            //reset startValue and endValue;
            startValue = input_array[i];
            startIndex = i;
            endValue = -1;
        }
        current_water_counter = current_water_counter + (input_array[i] - input_array[i + 1]);
    }

    if (input_array[i + 1] > input_array[i]) {
        // only if there is a startPosition, we care about the increasing sequence
        if (startValue !== -1) {
            if(input_array[i+1] < startValue){
                // first increasing number
                current_water_counter = current_water_counter + (input_array[i+1] - input_array[i]);
                endValue = input_array[i+1];
            } else {
                // second increasing number, we need to check if it is 
                 if(endValue < startValue) {
                    current_water_counter = current_water_counter + (startValue - input_array[i]);
                    endValue = input_array[i+1];
                 }
            }
        }
    }
}