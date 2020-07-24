function flattenDictionary(dict) {
    // your code goes here

    let keys = Object.keys(dict);

    for (let i = 0; i < keys.length; i++) {
        console.log(keys[i]);
        console.log(dict[keys[i]]);
        console.log("x");
        let currentKey = keys[i];
        console.log(dict[keys[i]].constructor == Object);
        if (dict[keys[i]].constructor == Object) {
            flattenKey(dict[currentKey], currentKey);
        } else {
            output_dictionary[currentKey] = dict[currentKey];
        }
    }
    return output_dictionary;
}


let output_dictionary = {}

function flattenKey(dict, parentkey) {
    console.log("parentkey");
    console.log(parentkey);
    let keys = Object.keys(dict);

    for (let i = 0; i < keys.length; i++) {
        let currentKey = keys[i]; //d
        if (dict[keys[i]].constructor == Object) {
            //recursively do this
            if (currentKey == "") {
                flattenKey(dict[currentKey], `${parentkey}`);
            } else {
                flattenKey(dict[currentKey], `${parentkey}.${currentKey}`);
            }

        } else {
            let primitivekeyname = `${parentkey}.${currentKey}`;
            output_dictionary[primitivekeyname] = dict[currentKey]
        };
    }
}

let result = flattenDictionary({ "Key1": "1", "Key2": { "a": "2", "b": "3", "c": { "d": "3", "e": "1" } } })
console.log(result)