function reverseString(string){
    let reverse = "";
    for(i = string.length-1; i >= 0; i--){
        reverse = reverse + string[i];
    }
    return reverse;
}

let text = "hanif";
console.log(`${text}, reverse is ${reverseString(text)}`);