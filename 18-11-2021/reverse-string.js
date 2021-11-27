function reverseString(text) {
  let newString = "";
  for (i = text.length - 1; i >= 0; i--) {
    newString = newString + text[i];
  }

  return newString;
}

let inputString = prompt("enter string");
console.log(`${inputString} = ${reverseString(inputString)}`);
