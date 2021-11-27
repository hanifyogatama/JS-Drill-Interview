function polindormeChecker(str) {
  let lengthStr = str.length;
  for (i = 0; i < lengthStr / 2; i++) {
    if (str[i] !== str[lengthStr - 1 - i]) {
      return "it is not a polindrome";
    }
  }

  return "it is a polindrome";
}

let input = prompt("enter the string");
console.log(polindormeChecker(input));
