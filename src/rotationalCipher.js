let input_string = "abcdefghijklmNOPQRSTUVWXYZ0123456789"

const rotational_cipher = 39;

let input_char_array = input_string.split("");

for(let i =0;i<input_char_array.length;i++){
	
	let current_character = input_char_array[i];
	let ascii_code = current_character.charCodeAt();
	//Check if ascii code is a number
	if(ascii_code >=48 && ascii_code <= 57){
	     current_rotation_cipher = rotational_cipher % 10;
	     if(ascii_code + current_rotation_cipher > 57){
	     	 let difference = 57 - ascii_code;
	     	 let y = current_rotation_cipher - difference;
	     	 input_char_array[i] = String.fromCharCode(47 + y);
	     } else {
	     	 input_char_array[i] = String.fromCharCode(ascii_code + current_rotation_cipher)
	     }

	} else if (ascii_code >= 65 && ascii_code <=90){
		     current_rotation_cipher = rotational_cipher % 26;
	     if(ascii_code + current_rotation_cipher > 90){
	     	 let difference = 90 - ascii_code;
	     	 let y = current_rotation_cipher - difference;
	     	 input_char_array[i] = String.fromCharCode(64 + y);
	     } else {
	     	 input_char_array[i] = String.fromCharCode(ascii_code + current_rotation_cipher)
	     }

	} else if (ascii_code >= 97 && ascii_code <=122){
		     current_rotation_cipher = rotational_cipher % 26;
	     if(ascii_code + current_rotation_cipher > 122){
	     	 let difference = 122 - ascii_code;
	     	 let y = current_rotation_cipher - difference;
	     	 input_char_array[i] = String.fromCharCode(97 + y);
	     } else {
	     	 input_char_array[i] = String.fromCharCode(ascii_code + current_rotation_cipher)
	     }
	}
}

console.log(input_char_array.join(""))