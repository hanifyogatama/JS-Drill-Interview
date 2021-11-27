function reverseString(text) {
    let strText = "";

    for(i = text.length - 1; i >= 0; i--) {
        strText = strText + text[i];
    }
    return strText;
}

let inputString = prompt("enter text");
console.log(`${inputString} = ${reverseString(inputString)}`);

