function sherlockAndAnagrams(s) {
    let unique_string_dict = {};
    let anagramCount = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            let sub_str = s.substring(i, j).split("").sort().join("");
            if (unique_string_dict[sub_str]) {
                unique_string_dict[sub_str] = unique_string_dict[sub_str] + 1;
            } else {
                unique_string_dict[sub_str] = 1;
            }
        }
    }
    let keys = Object.keys(unique_string_dict);
    for (let i = 0; i < keys.length; i++) {
        if (unique_string_dict[keys[i]] > 1) {
            let count = unique_string_dict[keys[i]];
            anagramCount = anagramCount + ((count * (count - 1)) / 2);
        }
    }
    return anagramCount;

}

let result = sherlockAndAnagrams("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
console.log(result);