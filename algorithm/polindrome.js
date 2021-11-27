function checkPolindrome(str) {

    let strLength = str.length;

    for(i = 0; i < strLength / 2; i++) {
        if(str[i] !== str[strLength - 1 - i]) {
            return "It is not a polindrome";
        }
    }

    return "it is a polindrome";
}

let input = prompt("enter string");
console.log(checkPolindrome(input));